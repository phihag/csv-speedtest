#!/usr/bin/env python3

import csv
import string
import random


rng = random.Random()
rng.seed(0)

with open('data.csv', 'w') as f:
	writer = csv.writer(f)
	for _ in range(100000):
		writer.writerow([
			''.join(rng.choice(string.ascii_lowercase) for _ in range(10))
		for _ in range(10)])
		

