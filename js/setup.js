'use strict';
var userDialog = document.querySelector(`.setup`);
var form = userDialog.querySelector('.setup-wizard-form');
var coatColor = 'rgb(101, 137, 164)';
var eyesColor = 'black';
var wizards = [];

var getRank = function (wizard) {
  var rank = 0;

  if (wizard.colorCoat === coatColor) {
    rank += 2;
  }
  if (wizard.colorEyes === eyesColor) {
    rank += 1;
  }

  return rank;
};

var namesComparator = function (left, right) {
  if (left > right) {
    return 1;
  } else if (left < right) {
    return -1;
  } else {
    return 0;
  }
};


window.updateWizards = function () {
  window.render(wizards.sort(function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }
    return rankDiff;
  }));
};

var successHandler = function (data) {
  wizards = data;
  window.updateWizards(wizards);
};

var errorHandler = function (errorMessage) {
  window.util.getErrorMassage(errorMessage);
};

var submitHandler = function (evt) {
  window.backend.save(new FormData(form), function () {
    userDialog.classList.add('hidden');
  }, errorHandler);
  evt.preventDefault();
};

var colorize = function (element, input, colors) {
  element.addEventListener('click', function () {
    var newColor = window.util.getRandomColor(colors);
    if (element.tagName.toLowerCase() === 'div') {
      element.style.backgroundColor = newColor;
    }
    element.style.fill = newColor;
    switch (input) {
      case 'coat':
        coatColor = newColor;
        break;
      case 'eyes':
        eyesColor = newColor;
        break;
    }

    window.util.getInputValue(newColor, input);
    window.updateWizards();
  });
};

window.debounce(colorize(window.constans.coatWizard, 'coat', window.constans.COAT_COLOR));
window.debounce(colorize(window.constans.eyesWizard, 'eyes', window.constans.EYES_COLOR));
window.debounce(colorize(window.constans.fireBallWizard, 'fireball', window.constans.FIREBALL_COLOR));

window.backend.load(successHandler, errorHandler);
form.addEventListener('submit', submitHandler);
