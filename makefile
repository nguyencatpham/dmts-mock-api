generate:
	export VU=100 && node index
jsonserver:
	json-server mock-data.json --port 4000
