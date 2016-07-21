TIME := @time -f '%C: %e'

benchmark: data deps
	${TIME} ./test.py
	${TIME} ./test_baby_read.js
	${TIME} ./test_csvtojson_file.js
	${TIME} ./test_csv-string_read.js
	${TIME} ./test_papa_read.js
	${TIME} ./test_parse_read.js
	${TIME} ./test_parse_stream.js
	${TIME} ./test_parser_stream.js
	${TIME} ./test_fast-csv_stream.js
	${TIME} ./test_fast-csv_file.js
	${TIME} ./test_knrz-csv_string.js
	${TIME} ./test_fs_read.js

data: data.csv

deps:
	@test -e node_modules || npm install

data.csv: gendata.py
	./gendata.py

clean:
	rm -rf data.csv node_modules

.PHONY: benchmark clean data deps