BROWSERIFY=node_modules/.bin/browserify
UGLIFY=node_modules/.bin/uglifyjs

all: public/app.js

server:
	supervisor index.js

images:
	phantomjs tools/screenshot.js
	./tools/resize.sh

ifneq ($(NODE_ENV),development)

public/app.js: assets/js/index.js
	$(BROWSERIFY) assets/js/index.js | $(UGLIFY) > public/app.js

else

public/app.js: assets/js/index.js
	$(BROWSERIFY) assets/js/index.js > public/app.js

endif

clean:
	rm -rf public/app.js

.PHONY: server images clean
