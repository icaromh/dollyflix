.PHONY: setup run build run-locally

setup:
	yarn || npm install
	make run

run:
	make build
	node server.js

build:
	npm run build

run-locally:
	node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js
