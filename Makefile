.PHONY: setup run build run-locally

setup:
	yarn || npm install
	make run

build:
	yarn build

run-locally:
	yarn start:local
