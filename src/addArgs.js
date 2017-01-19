/**
 * Callbacks for an external API may specify additional parameters which are not needed. To make the callback's
 * implementation clearer and cleaner it is best to omit such parameters from the callback.
 *
 * This package contains higher-order functions which allow creation of a callback that has the expected function
 * signature, but which only specifies the parameters it actually uses. For example, the `connect` function in
 * `react-redux` takes a callback `mapStateToProps` with the signature
 * (docs)[https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options]:
 *
 * ````
 * mapStateToProps(state, [ownProps]): stateProps
 * ````
 *
 * If a callback implementation only uses `ownProps` such a callback can be, e.g., defined as follows:
 *
 * ````
 * const mapStateToProps = addFirstArg((ownProps) => {
 *   return {
 *     someProp: ownProps.someProp,
 *   };
 *  });
 * ````
 *
 * h/t Bergi for inspiring this package (http://stackoverflow.com/a/41625616/1149568)
 *
 * Created by christo on 20170118.
 *
 * Copyright (C) 2017 Bristlecone Enterprises Ltd
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Takes a function and returns another function which takes an additional first (0'th) argument
 *
 * NB: Does not preserve `this` context.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper for `fn` that takes an extra first (0'th) parameter place, which calls `fn` without it
 */
export function addFirstArg(fn) {
  return (first, ...rest) => fn(...rest);
}

/**
 * Takes a function and returns another function which takes an additional second (1'th) argument
 *
 * NB: Does not preserve `this` context.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper for `fn` that takes an extra second (1'th) parameter place, which calls `fn` without it
 */
export function addSecondArg(fn) {
  return (first, second, ...rest) => fn(first, ...rest);
}

/**
 * Takes a function and returns another function which takes an additional third (2'th) argument
 *
 * NB: Does not preserve `this` context.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper for `fn` that takes an extra third (2'th) parameter place, which calls `fn` without it
 */
export function addThirdArg(fn) {
  return (first, second, third, ...rest) => fn(first, second, ...rest);
}

/**
 * Takes a function and returns another function which takes an additional fourth (3'th) argument
 *
 * NB: Does not preserve `this` context.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper for `fn` that takes an extra fourth (3'th) parameter place, which calls `fn` without it
 */
export function addFourthArg(fn) {
  return (first, second, third, ...rest) => fn(first, second, third, ...rest);
}

/**
 * Takes a function and returns another function which takes an additional fifth (4'th) argument
 *
 * NB: Does not preserve `this` context.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper for `fn` that takes an extra fifth (4'th) parameter place, which calls `fn` without it
 */
export function addFifthArg(fn) {
  return (first, second, third, fourth, fifth, ...rest) => fn(first, second, third, fourth, ...rest);
}
