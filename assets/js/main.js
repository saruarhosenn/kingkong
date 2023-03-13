(function ($) {
  "use strict";
  $(".menu-btn-wrap").click(function () {
    $(".nav-container").toggleClass("open-nav-container");
  });

  /* ===== Counter Up JS ===== */
  $(".counter").counterUp({
    delay: 10,
    time: 1500,
  });

  /* ===== Wow JS ===== */
  new WOW().init();
})(jQuery);
