/*JQUERY - SETUP*/

/*SOFT-SCROOL*/
$("nav a").click(function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;
  $("html, body").animate(
    {
      scrollTop: targetOffset,
    },
    700
  );
});

/*CAROUSEL*/
$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
