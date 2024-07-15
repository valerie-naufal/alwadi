$(document).ready(function () {
  $(".owl-one").owlCarousel({
    items: 1,
    nav: true,
    navText: ["<", ">"],
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".owl-two").owlCarousel({
    items: 1,
    nav: true,
    navText: ["<", ">"],
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-three").owlCarousel({
    items: 1,
    nav: true,
    navText: ["<", ">"],
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".tooltip").tooltip();
});
