.PHONY: setup run build run-locally

setup:
	yarn || npm install
	make run

run:
	make build
	node server.js

build:
	yarn build

run-locally:
	NODE_ENV=development node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --content-base ./
