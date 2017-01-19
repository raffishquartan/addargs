/**
 * See README.md for license and other information
 */

/**
 * Takes a function and returns another function which takes an additional first (0'th) argument
 *
 * NB: Does not preserve `this` context.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper for `fn` that takes an extra first (0'th) parameter place, which calls `fn` without it
 */
function addFirstArg(fn) {
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
function addSecondArg(fn) {
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
function addThirdArg(fn) {
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
function addFourthArg(fn) {
  return (first, second, third, fourth, ...rest) => fn(first, second, third, ...rest);
}

/**
 * Takes a function and returns another function which takes an additional fifth (4'th) argument
 *
 * NB: Does not preserve `this` context.
 *
 * @param {function} fn The function to be wrapped
 * @returns {function} A wrapper for `fn` that takes an extra fifth (4'th) parameter place, which calls `fn` without it
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
