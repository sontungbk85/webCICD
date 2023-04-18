// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());


// Place any jQuery/helper plugins in here.
$(document).ready(function () {
// download sticky
  $('#download-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.download').toggleClass('active');
  });
});


// --------------------------
// magnific popup
// --------------------------

// mfp default
(function ($) {
  $.fn.pluginMagnificPopup = function (opts) {
    var defaults = {
      mainClass: 'mfp-img-mobile',
      closeBtnInside: false
    };
    var options = $.extend({}, defaults, opts);

    $(this).magnificPopup(options);
    return this;
  };
}(jQuery));

// mfp gallery
(function ($) {
  $.fn.pluginMagnificPopupGallery = function (opts) {
    var defaults = {
        mainClass: 'mfp-img-mobile',
        closeBtnInside: false,
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled: true
        }
      },
      options = $.extend({}, defaults, opts);

    $(this).magnificPopup(options);
    return this;
  }
}(jQuery));

// mfp effect
(function ($) {
  $.fn.pluginMagnificPopupEffect = function (opts) {
    var defaults = {
        mainClass: 'mfp-img-mobile mfp-zoom-in',
        closeBtnInside: false,
        removalDelay: 500,
        callbacks: {
          beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
          }
        }
      },
      options = $.extend({}, defaults, opts);

    $(this).magnificPopup(options);
    return this;
  }
}(jQuery));

// execute
$(document).ready(function () {
  $('[data-plugin="mfp"]').each(function () {
    $(this).pluginMagnificPopup($(this).data('options'));
  });

  $('[data-plugin="mfp-gallery"]').each(function () {
    $(this).pluginMagnificPopupGallery($(this).data('options'));
  });

  $('[data-plugin="mfp-effect"]').each(function () {
    $(this).pluginMagnificPopupEffect($(this).data('options'));
  });

  // mfp-dismiss
  $(document).on('click', '.mfp-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


// --------------------------
// swiper
// --------------------------

(function ($) {
  $.fn.pluginSwiper = function (opts) {
    var defaults = {
      navigation: {
        nextEl: $(this)[0].querySelector('.swiper-button-next'),
        prevEl: $(this)[0].querySelector('.swiper-button-prev')
      },
      pagination: {
        el: $(this)[0].querySelector('.swiper-pagination'),
        clickable: true
      }
    };
    var options = $.extend({}, defaults, opts);

    new Swiper($(this)[0], options);
    return this;
  }
}(jQuery));

// execute
$(document).ready(function () {
  $('[data-plugin="swiper"]').each(function () {
    $(this).pluginSwiper($(this).data('options'));
  });
});
