'use strict';
var WIZARDS_COUNT = 4;
var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
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

var removeHidden = function () {
  userDialog.classList.remove(`hidden`);
};

var getRandomNumber = function (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};

var getRandomItem = function (array) {
  return array[getRandomNumber(0, array.length - 1)];
};

var generateObj = function () {
  var obj = {
    name: getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_LAST_NAMES),
    coatColor: getRandomItem(COAT_COLOR),
    eyesColor: getRandomItem(EYES_COLOR),
  };
  return obj;
};

var generateWizardList = function () {
  var arr = [];
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    var obj = generateObj();
    arr.push(obj);
  }
  return arr;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizardList = function (wizardList) {
  var fragment = document.createDocumentFragment();
  for (var wizard of wizardList) {
    fragment.appendChild(renderWizard(wizard));
  }
  return fragment;
};

var showWizardList = function () {
  var wizardList = generateWizardList();
  similarListElement.appendChild(renderWizardList(wizardList));
  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
};

var userDialog = document.querySelector(`.setup`);
var similarListElement = userDialog.querySelector(`.setup-similar-list`);
var similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

showWizardList();
//  Открытие/закрытие окна настройки персонажа  //
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var username = document.querySelector('input[name=username]');

var onPopupEscPress = function (evt) {
  if (username === document.activeElement) {
    evt.stopPropagation();
  } else {
    if (evt.key === 'Escape') {
      closePopup();
    }
  }
};

var openPopup = function () {
  removeHidden();
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', openPopup);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', closePopup);

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});
//  Изменение цвета мантии персонажа по нажатию.  //
var setupWizard = document.querySelector('.setup-wizard');
var coatWizard = setupWizard.querySelector('.wizard-coat');
var eyesWizard = setupWizard.querySelector('.wizard-eyes');
var fireBallWizard = document.querySelector('.setup-fireball-wrap');

var onChangeColor = function (colors, element, i) {
  var color = getRandomItem(colors);
  if (element.tagName === 'DIV') {
    element.style.backgroundColor = color;
  } else {
    element.style.fill = color;
  }
  document.querySelector(`input[name=${i}-color]`).value = color;
};

coatWizard.addEventListener('click', function () {
  onChangeColor(COAT_COLOR, coatWizard, 'coat');
});

eyesWizard.addEventListener('click', function () {
  onChangeColor(EYES_COLOR, eyesWizard, 'eyes');
});

fireBallWizard.addEventListener('click', function () {
  onChangeColor(FIREBALL_COLOR, fireBallWizard, 'fireball');
});
