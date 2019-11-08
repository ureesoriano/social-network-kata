.PHONY: init build shell test test-watch

docker-run := docker run \
	--rm -ti \
	-v $(shell pwd):/code \
	kata-js:latest

init: build ## <name> <dir>
ifndef name
	$(error 'name' is required)
endif
ifndef dir
	$(error 'dir' is required)
endif
	mkdir -p $(dir)
	cp ./Makefile $(dir)
	cp ./Dockerfile $(dir)
	cp ./package.json $(dir)
	cp ./test.js $(dir)
	cp ./index.js $(dir)/$(name).js
	sed -i 's/XXX/$(name)/g' $(dir)/package.json $(dir)/test.js $(dir)/$(name).js
	cd $(dir) && 	docker run --rm -ti -v $(dir):/code kata-js:latest npm i

build:
	docker build \
		-t kata-js:latest \
		.

shell: build
	$(docker-run) sh

test: build
	$(docker-run) npm run test

test-watch: build
	$(docker-run) npm run test -- --watch
