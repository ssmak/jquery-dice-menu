'use strict';
'use restrict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var util = {
  /*
   * Promise for load script from external source
   */
  loadScript: function loadScript(source) {
    var expectedObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return new Promise(function (resolve, reject) {
      //check if object already existed
      if (expectedObject != null && expectedObject != 'undefined') {
        //object already existed -> resolve
        resolve();
      } else {
        //object not found -> load script from external source
        var scriptTag = document.createElement('script');
        scriptTag.src = source;
        scriptTag.onload = function () {
          resolve();
        };
        document.getElementsByTagName('body')[0].appendChild(scriptTag);
      }
    });
  }
};

// bootstrap
(function (completedCallback) {
  // use babel-polyfill to patch the brwoser which not support html5 or es6
  util.loadScript('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js').then(function () {
    // babel-polyfill loaded -> try to load jQuery
    return util.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', typeof jQuery === 'undefined' ? 'undefined' : _typeof(jQuery));
  }).then(function () {
    // jQuery loaded -> try to load jQuery.easing
    return util.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js', _typeof(jQuery.easing.def));
  }).then(function () {
    // jQuery.easing loaded -> all dependencies
    completedCallback();
  }).catch(function (err) {
    console.error(err);
  });
})(function () {
  // all dependencies loaded
  /*
   * Register menu event - menu open/close
   */
  $('.jq-dice-menu > li:first-child').click(function (object) {
    // click the menu switch -> expand the menu
    var state = $(object.currentTarget).attr('state');
    if (state === 'close') {
      // close -> open
      $(object.currentTarget).attr('state', 'open');
      $('.jq-dice-menu > li:nth-child(n + 2)').css('display', 'flex');
    } else {
      // open -> close
      $(object.currentTarget).attr('state', 'close');
      $('.jq-dice-menu > li:nth-child(n + 2)').css('display', 'none');
    }
  });

  /*
   * Menu item click event
   */
  $('.jq-dice-menu > li:nth-child(n + 2)').click(function (object) {
    var link = $(object.currentTarget).children('span').attr('href');
    var target = $(object.currentTarget).children('span').attr('target');

    // action depends on link
    // anchor
    if (/^#/.test(link)) {
      $('html').stop().animate({
        scrollTop: $(link).offset().top
      }, 1000);
      return;
    }

    // hyperlink
    if (/^http/.test(link)) {
      //check target
      if (typeof target === 'string') {
        // target is set
        if (target === '_blank') {
          // open in new window
          window.open(link);
        } else {
          // open in current page
          self.location.href = link;
        }
      } else {
        // no target set -> open in current page
        self.location.href = link;
      }

      return;
    }
  });
});
//# sourceMappingURL=jq.dice-menu.js.map