'use strict';
(function () {

  document.addEventListener('mouseover', function (evt) {
    if (evt.target.classList.contains('catalog--opened')) {
      evt.target.parentNode.querySelector('a').classList.add('catalog__link_js');
    } else if (evt.target.parentNode.parentNode.classList.contains('catalog--opened')) {
      if (evt.target.parentNode.parentNode.parentNode.querySelector('a').classList.contains('catalog__link_js')) {
        return;
      }
      evt.target.parentNode.parentNode.parentNode.querySelector('a').classList.add('catalog__link_js');
    } else {
      var links = document.querySelectorAll('.catalog:not(.catalog--opened)>li>a');
      links.forEach(function (it) {
        it.classList.remove('catalog__link_js');
      });
    }
  });
})();
