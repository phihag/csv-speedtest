benchmark: data deps
	time ./test.py
	time ./test_parse_read.js
	time ./test_parse_stream.js

data: data.csv

deps:
	@test -e node_modules || npm install

data.csv: gendata.py
	./gendata.py

clean:
	rm -rf data.csv node_modules

.PHONY: benchmark clean data deps