STYL=$(wildcard assets/css/*.styl)
BROWSERIFY=node_modules/.bin/browserify
UGLIFY=node_modules/.bin/uglifyjs

all: public/app.js public/app.css

server:
	supervisor index.js

images:
	phantomjs tools/screenshot.js
	./tools/resize.sh

ifneq ($(NODE_ENV),development)

public/app.js: assets/js/index.js
	$(BROWSERIFY) assets/js/index.js | $(UGLIFY) > public/app.js

public/app.css: $(STYL)
	node_modules/.bin/stylus --compress --resolve-url --inline --include node_modules/nib/lib < assets/css/style.styl > public/app.css

else

public/app.js: assets/js/index.js
	$(BROWSERIFY) assets/js/index.js > public/app.js

public/app.css: $(STYL)
	node_modules/.bin/stylus --resolve-url --inline --include node_modules/nib/lib < assets/css/style.styl > public/app.css

endif

node_modules: package.json
	@npm install

clean:
	rm -rf public/app.js public/app.css

.PHONY: server images clean
