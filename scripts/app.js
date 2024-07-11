$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, // Number of items to display
    nav: true, // Enable navigation buttons
    navText: ["<", ">"], // Customize navigation text if needed
    dots: true, // Enable pagination dot
    responsive: {
      0: {
        items: 1, // Number of items to display on small screens
      },
      600: {
        items: 3, // Number of items to display on medium screens
      },
      1000: {
        items: 4, // Number of items to display on large screens
      },
    },
  });

  $(function () {
    $(".tooltip").tooltip();
  });

  const showPopup = document.getElementById("watch-video");
  const popupContainer = document.getElementById("popup-container");
  const closePopup = document.getElementById("close-btn");

  console.log(showPopup);
  console.log(popupContainer);
  console.log(closePopup);

  showPopup.onclick = () => {
    popupContainer.classList.add("active");
  };

  closePopup.onclick = () => {
    popupContainer.classList.remove("active");
  };
});
