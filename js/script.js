// Created by: Grace S
// Created on: Mar 2022
// This file contains the JS functions for index.html

function doMathClicked () {
  // this function does basic math
  document.getElementById('add-math').innerHTML = '7 + 4 = ' + (7 + 4)
  document.getElementById('subtract-math').innerHTML = '21 - 85 =  ' + (21 - 85)
  document.getElementById('multiply-math').innerHTML = '3 + 49 * 6 = ' + (3 + 49 * 6)
  document.getElementById('divide-math').innerHTML = '(81 / 9) + 3 = ' + ((4 / 2) + 3)
  document.getElementById('exponent-math').innerHTML = '8 + 9 ** 3 = ' + (8 + 9 ** 3)
	document.getElementById('square-root-math').innerHTML = '√(64) = ' + Math.sqrt(64)
}
