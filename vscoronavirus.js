;(function () {
  'use strict';

  function ready(callback) {
    document.addEventListener("DOMContentLoaded", callback);
    if (document.readyState === "interactive" || document.readyState === "complete") {
      callback();
    }
  }

  function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  }

  function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
  }

  ready(function () {
    if (getCookie('vscoronavirus')) {
      return;
    }
    var content = '<div class="vscoronavirus-content"><h2>Coronavirus: do not leave your home</h2><p>Everyone must stay at home to help stop the spread of coronavirus, <a href="uk.vscoronavirus.com">check here for some helpful apps</a>.</p><span id="vscoronavirus-close">Dismiss</span></div>',
      container = document.getElementById("vscoronavirus-banner");
    if (!container) {
      container = document.createElement('div');
      container.setAttribute('id', 'vscoronavirus-banner');
      container.setAttribute('class', 'vscoronavirus-banner');
      document.getElementsByName('body')[0].appendChild(container);
    }
    container.insertAdjacentHTML('beforeend', content);
    document.addEventListener('click', function (event) {
      if (!event.target.matches('#vscoronavirus-close')) return;
      setCookie('vscoronavirus', true, 30);
      container.remove();
    }, false);
  });
})();