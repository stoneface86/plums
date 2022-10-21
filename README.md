# plums

sass library used for Trackerboy website and project pages. Compatible with
dart sass ONLY.

## Folder layout
 
 - `demo` - demo webpage source
 - `src` - library source code

## Usage

Add the contents of `src` to your sass partials directory or pass it as an include
path to the sass compiler.

Then use via:
```scss
@use 'plums';
```

### Fonts

The default font variables will try to use 'Rubik' if available and 'Fira Code'
for `code` and `pre` tags. Ensure that these fonts are available either via
self hosting or via google fonts for best results.

## Demo

To run the demo, use `npm start` for a live server, or `npm build` to build the
demo site. The `_site` folder contains the built site.
