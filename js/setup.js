'use strict';
(function () {
  var WIZARDS_COUNT = 4;
  var userDialog = document.querySelector(`.setup`);
  var setupWizard = document.querySelector('.setup-wizard');
  var similarListElement = userDialog.querySelector(`.setup-similar-list`);
  var similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  var form = userDialog.querySelector('.setup-wizard-form');
  var submitHandler = function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  };
  form.addEventListener('submit', submitHandler);

  (function () {
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
    window.colorize(coatWizard, COAT_COLOR, 'coat');
    window.colorize(eyesWizard, EYES_COLOR, 'eyes');
    window.colorize(fireBallWizard, FIREBALL_COLOR, 'fireball');
  })();
})();
