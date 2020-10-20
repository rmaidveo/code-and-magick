'use strict';
(function () {

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
    }
  };
})();
