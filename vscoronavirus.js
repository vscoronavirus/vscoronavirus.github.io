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
    var content = '<div class="vscoronavirus-content"><h2>Join the fight against Coronavirus (COVID-19) and save lives.</h2><p>Support the NHS by visiting <a href="https://uk.vscoronavirus.com" target="_blank">UK vs Coronavirus</a> and checking out some helpful apps.</p><span id="vscoronavirus-close">Dismiss</span></div>',
      container = document.getElementById("vscoronavirus-banner");
    if (getCookie('vscoronavirus')) {
      if (container) {
        container.remove();
      }
      return;
    }
    if (!container) {
      container = document.createElement('div');
      container.setAttribute('id', 'vscoronavirus-banner');
      container.setAttribute('class', 'vscoronavirus-banner');
      document.getElementsByTagName('body')[0].appendChild(container);
    }
    container.insertAdjacentHTML('beforeend', content);
    document.addEventListener('click', function (event) {
        if (!event.target.matches('#vscoronavirus-content a')) {
          event.preventDefault();
          event.target.getAttribute('href');
          if (window.ga && ga.loaded) {
            ga('send', 'event', 'vscoronavirusAppLink', 'click', url, {
              'hitCallback': function () {
                document.location = url;
              }
            });
          } else {
            document.location = url;
          }
        }
        if (!event.target.matches('#vscoronavirus-close')) {
          return;
        }
        setCookie('vscoronavirus', true, 1);
        container.remove();
      }
      ,
      false
    );
  });
})();