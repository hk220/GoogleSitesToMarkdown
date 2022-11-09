build:
	mkdir build
	zip build/archive.zip manifest.json *.js icons/*

clean:
	rm -rf build

.PHONY:
	build
