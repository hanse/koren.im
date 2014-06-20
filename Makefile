server:
	supervisor index.js

images:
	phantomjs tools/screenshot.js
	./tools/resize.sh

.PHONY: server images
