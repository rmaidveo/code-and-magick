'use strict';
var setupWizard = document.querySelector('.setup-wizard');
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var coatWizard = setupWizard.querySelector('.wizard-coat');
var eyesWizard = setupWizard.querySelector('.wizard-eyes');
var fireBallWizard = document.querySelector('.setup-fireball-wrap');
window.constans = {
  COAT_COLOR,
  EYES_COLOR,
  FIREBALL_COLOR,
  coatWizard,
  eyesWizard,
  fireBallWizard,
};
