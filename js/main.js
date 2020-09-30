(function($) {
  "use strict";

  $(window).on("load", function() {
    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                  Pre-loader
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    setTimeout(function() {
      $(".loader").addClass("completein", 100);
      setTimeout(function() {
        $(".preloader").addClass("complete");
      }, 100);
    }, 10);
  });

  jQuery(document).ready(function($) {
    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                Tooltip
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    $('[data-toggle="tooltip"]').tooltip();

    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 80, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out" // default easing for AOS animations
    });
    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                  Mega Menu
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    function checkWidth() {
      var windowsize = $(window).width();
      if (windowsize < 992) {
        $(".hid").removeClass("collapse");
        $(".hid").addClass("collapse");
      }
      if (windowsize > 991) {
        $(".hid").addClass("collapse");
        $(".hid").removeClass("collapse");
      }
    }

    checkWidth();
    $(window).resize(checkWidth);

    // select dropdown out side click
  });

  jQuery(window).on("load", function() {});
})(jQuery);
