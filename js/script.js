(function ($) {
  "use strict";
  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-to-top");
      if (windowpos >= 250) {
        siteHeader.addClass("fixed-header");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.fadeOut(300);
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header .navigation li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
    );

    //Dropdown Button
    $(".main-header .navigation li.dropdown .dropdown-btn").on(
      "click",
      function () {
        $(this).prev("ul").slideToggle(500);
      }
    );

    //Disable dropdown parent link
    $(".navigation li.dropdown > a").on("click", function (e) {
      e.preventDefault();
    });
  }

  if ($(".project-tab").length) {
    $(".project-tab .product-tab-btns .p-tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).hasClass("actve-tab")) {
        return false;
      } else {
        $(".project-tab .product-tab-btns .p-tab-btn").removeClass(
          "active-btn"
        );
        $(this).addClass("active-btn");
        $(".project-tab .p-tabs-content .p-tab").removeClass("active-tab");
        $(target).addClass("active-tab");
      }
    });
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }
  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /* When document is Scrollig, do */
  $(window).on("scroll", function () {
    headerStyle();
  });

  /*When document is loaded, do */
  $(window).on("load", function () {
    handlePreloader();
  });
})(window.jQuery);

/* ================ Revolution Slider. ================ */
if ($(".tp-banner").length > 0) {
  $(".tp-banner").show().revolution({
    delay: 6000,
    startheight: 640,
    startwidth: 1170,
    hideThumbs: 1000,
    navigationType: "none",
    touchenabled: "on",
    onHoverStop: "on",
    navOffsetHorizontal: 0,
    navOffsetVertical: 0,
    dottedOverlay: "none",
    fullWidth: "on",
  });
}
if ($(".tp-banner-full").length > 0) {
  $(".tp-banner-full").show().revolution({
    delay: 6000,
    hideThumbs: 1000,
    navigationType: "none",
    touchenabled: "on",
    onHoverStop: "on",
    navOffsetHorizontal: 0,
    navOffsetVertical: 0,
    dottedOverlay: "none",
    fullScreen: "on",
  });
}

//faqs Box
if ($(".faqs-box").length) {
  $(".faqs-box").on("click", ".faqs-btn", function () {
    var target = $(this).parents(".faqs");

    if ($(this).hasClass("active") !== true) {
      $(".faqs .faqs-btn").removeClass("active");
    }

    if ($(this).next(".faqs-content").is(":visible")) {
      //$(this).removeClass('active');
      return false;
      //$(this).next('.accord-content').slideUp(300);
    } else {
      $(this).addClass("active");
      $(".faqs").removeClass("active-block");
      $(".faqs .faqs-content").slideUp(300);
      target.addClass("active-block");
      $(this).next(".faqs-content").slideDown(300);
    }
  });
}
