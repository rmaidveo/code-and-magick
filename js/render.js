'use strict';
(function () {
  var WIZARDS_COUNT = 4;
  var userDialog = document.querySelector(`.setup`);
  var similarListElement = userDialog.querySelector(`.setup-similar-list`);
  var similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  window.render = function (wizards) {
    var fragment = document.createDocumentFragment();
    similarListElement.innerHTML = '';
    for (var i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
