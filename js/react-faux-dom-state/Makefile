default: bootstrap build

bootstrap:
	npm install

build:
	./node_modules/.bin/browserify ./main.js | ./node_modules/.bin/uglifyjs -c -m > main.min.js
