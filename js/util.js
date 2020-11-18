'use strict';

window.util = {
  isEscEvent: function (evt, action, element) {
    if (element === document.activeElement) {
      evt.stopPropagation();
    } else {
      if (evt.key === 'Escape') {
        action();
      }
    }
  },
  isEnterEvent: function (evt, action) {
    if (evt.key === 'Enter') {
      action();
    }
  },

  getRandomColor: function (colors) {
    return colors[Math.floor(colors.length * Math.random())];
  },

  getInputValue: function (color, input) {
    document.querySelector(`input[name=${input}-color]`).value = color;
  },

  getErrorMassage: function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }
};
