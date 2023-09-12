console.log("sara");
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    center: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
