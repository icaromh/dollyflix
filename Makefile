.PHONY: setup run build

setup:
	yarn || npm install
	make run

build:
	yarn build

run:
	yarn start:local
