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
   * Get setting from user and override the default style
   */
  var userLayout = $('.jq-dice-menu').attr('layout');
  var userSnapto = $('.jq-dice-menu').attr('snap-to');
  var userDistance = $('.jq-dice-menu').attr('distance');
  var userShowHints = $('.jq-dice-menu').attr('show-hints');
  var userHintsOrder = $('.jq-dice-menu').attr('hints-order');

  // layout
  if (!(typeof userLayout != 'undefined' && /^row|column$/.test(userLayout))) {
    // not set -> use default
    userLayout = 'column';
  }
  // snap-to
  if (!(typeof userSnapto != 'undefined' && /^top|right|bottom|left$/.test(userSnapto))) {
    // not set -> use default
    userSnapto = 'right';
  }

  // distance
  if (!(typeof userDistance != 'undefined' && /^\d+(%|px)$/.test(userDistance))) {
    // not set -> use default
    userDistance = '45%';
  }

  // show-hints
  if (!(typeof userShowHints != 'undefined' && /^true|false$/.test(userShowHints))) {
    // not set -> use default
    userShowHints = 'true';
  }

  // hints-order
  if (!(typeof userHintsOrder != 'undefined' && /^header|footer$/.test(userHintsOrder))) {
    // not set -> use default
    userHintsOrder = 1;
  }

  /*
   * Assign class based on setting
   */
  console.warn(userLayout + ' ' + userSnapto);
  $('.jq-dice-menu').addClass(userLayout + ' ' + userSnapto);
  // if(userSnapto === 'right') {
  //   if(userLayout === 'column') {
  //     console.warn('right-column');
  //     $('.jq-dice-menu').addClass('column right');
  //   }
  // }
  // if(userSnapto === 'left') {
  //   if(userLayout === 'column') {
  //     console.warn('left-column');
  //     $('.jq-dice-menu').addClass('column left');
  //   }
  // }
  // if(userSnapto === 'top') {
  //   if(userLayout === 'row') {
  //     console.warn('top-row');
  //     $('.jq-dice-menu').addClass('row top');
  //   }
  // }
  // if(userSnapto === 'bottom') {
  //   if(userLayout === 'row') {
  //     console.warn('bottom-row');
  //     $('.jq-dice-menu').addClass('row bottom');
  //   }
  // }

  /*
   * Register menu event - menu open/close
   */
  $('.jq-items > li:first-child').click(function (object) {
    // click the menu switch -> expand the menu
    var state = $(object.currentTarget).attr('state');
    if (state === 'close') {
      // close -> open
      $(object.currentTarget).attr('state', 'open');
      $('.jq-items > li:nth-child(n + 2)').css('display', 'flex');
    } else {
      // open -> close
      $(object.currentTarget).attr('state', 'close');
      $('.jq-items > li:nth-child(n + 2)').css('display', 'none');
    }
  });

  /*
   * Menu item click event
   */
  $('.jq-items > li:nth-child(n + 2)').click(function (object) {
    var link = $(object.currentTarget).children('span').attr('href');
    var target = $(object.currentTarget).children('span').attr('target');

    // action depends on link
    // page anchor
    if (/^#/.test(link)) {
      $('html').stop().animate({
        scrollTop: $(link).offset().top
      }, 1000);
      return;
    }

    // hyperlink as url
    if (/^http|tel|mailto/.test(link)) {
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
  }).mouseover(function (object) {
    var hint = $(object.currentTarget).children('span').attr('hint');
    if (typeof hint != 'undefined') {
      $('.jq-hints > span').html(hint);
    }
  }).mouseout(function (object) {
    $('.jq-hints > span').html('&nbsp;');
  });
});
//# sourceMappingURL=jq.dice-menu.js.map