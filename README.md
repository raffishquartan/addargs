# addargs

Add dummy, ignored arguments to a function so that an external API accepts it as a callback

## Overview

Callbacks for an external API may specify additional parameters which 
are not needed. Although these can be specified in the function this 
makes its implementation less clear and risks their unexpected use. 
`addargs` functions allows such parameters to be omitted.

For example, the `connect` function in `react-redux` takes a callback 
`mapStateToProps` with the signature ([docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)):

````
mapStateToProps(state, [ownProps]): stateProps
````

If an implementation of this method only uses `ownProps` then this can 
be enforced as follows:

````
const mapStateToProps = addFirstArg((ownProps) => {
  return {
    someProp: ownProps.someProp,
  };
});
````

## Contributing

In lieu of a formal styleguide, take care to maintain the existing 
coding style. Add unit tests for any new or changed functionality. 
Lint your code. 

## Changelog

v0.0.1 - initial version
v0.0.2 - package.json bug fix

## Credits

h/t [Bergi](http://stackoverflow.com/a/41625616/1149568) for inspiration

## License

Copyright (C) 2017 raffishquartan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
