build:
	mkdir build
	zip build/archive.zip manifest.json *.js

clean:
	rm -rf build

.PHONY:
	build
