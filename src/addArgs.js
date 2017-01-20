/**
 * See README.md for license and other information
 */

/**
 * Returns a wrapper function which calls `fn` and whose signature is the same but for an extra, dummy argument in the
 * first place. This extra argument is not passed to the wrapped function. NB: Does not preserve `this` context for the
 * wrapped function.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper function for `fn` with an extra dummy parameter in the first (`arguments[0]`) place
 */
function addFirstArg(fn) {
  return (first, ...rest) => fn(...rest);
}

/**
 * Returns a wrapper function which calls `fn` and whose signature is the same but for an extra, dummy argument in the
 * second place. This extra argument is not passed to the wrapped function. NB: Does not preserve `this` context for the
 * wrapped function.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper function for `fn` with an extra dummy parameter in the second (`arguments[1]`) place
 */
function addSecondArg(fn) {
  return (first, second, ...rest) => fn(first, ...rest);
}

/**
 * Returns a wrapper function which calls `fn` and whose signature is the same but for an extra, dummy argument in the
 * third place. This extra argument is not passed to the wrapped function. NB: Does not preserve `this` context for the
 * wrapped function.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper function for `fn` with an extra dummy parameter in the third (`arguments[2]`) place
 */
function addThirdArg(fn) {
  return (first, second, third, ...rest) => fn(first, second, ...rest);
}

/**
 * Returns a wrapper function which calls `fn` and whose signature is the same but with an extra, dummy argument in the
 * fourth place. This extra argument is not passed to the wrapped function. NB: Does not preserve `this` context for the
 * wrapped function.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper function for `fn` with an extra dummy parameter in the fourth (`arguments[3]`) place
 */
function addFourthArg(fn) {
  return (first, second, third, fourth, ...rest) => fn(first, second, third, ...rest);
}

/**
 * Returns a wrapper function which calls `fn` and whose signature is the same but with an extra, dummy argument in the
 * fifth place. This extra argument is not passed to the wrapped function. NB: Does not preserve `this` context for the
 * wrapped function.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper function for `fn` with an extra dummy parameter in the fifth (`arguments[4]`) place
 */
function addFifthArg(fn) {
  return (first, second, third, fourth, fifth, ...rest) => fn(first, second, third, fourth, ...rest);
}

module.exports = {
  addFirstArg,
  addSecondArg,
  addThirdArg,
  addFourthArg,
  addFifthArg,
};
