#!/usr/bin/env python3
import csv

with open('data.csv', encoding='utf-8') as f:
	lines = list(csv.reader(f))
	print('%d lines' % len(lines))

