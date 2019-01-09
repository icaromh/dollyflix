.PHONY: setup run build coverage test

setup:
	yarn || npm install
	make run

build:
	yarn build

run:
	yarn start:local

test:
	yarn test

coverage:
	yarn test --coverage

deploy-prod: build
	yarn deploy
