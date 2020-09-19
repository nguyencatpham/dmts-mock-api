generate:
	export VU=100 && node index
jsonserver:
	json-server --watch mock-data.json --host 45.117.169.119 --port 8080
