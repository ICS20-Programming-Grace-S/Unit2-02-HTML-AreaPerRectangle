// Created by: Grace S
// Created on: Mar 2022
// This file contains the JS functions for index.html

function AreaClicked() {
  // calculates the area for the rectangle
  document.getElementById('calc-area').innerHTML = 'The area is ' + (12 * 5) + 'cm²'
}

function PerimeterClicked() {
  // calculates the perimeter for the rectangle
  document.getElementById('calc-per').innerHTML = 'The Perimeter is ' + (2*12 + 2*5) + 'cm'
}
