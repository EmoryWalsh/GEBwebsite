$("#dropbutton-1").click(function() {
    if ($('.accordion-info-breed').hasClass("accessible-hidden")) {
      $(".accordion-info-breed").removeClass("accessible-hidden");
    } else {
      $(".accordion-info-breed").addClass("accessible-hidden");
    }
  });

$("#dropbutton-2").click(function() {
  if ($('.accordion-info-social').hasClass("accessible-hidden")) {
    $(".accordion-info-social").removeClass("accessible-hidden");
  } else {
    $(".accordion-info-social").addClass("accessible-hidden");
  }
});

$("#dropbutton-3").click(function() {
  if ($('.accordion-info-path').hasClass("accessible-hidden")) {
    $(".accordion-info-path").removeClass("accessible-hidden");
  } else {
    $(".accordion-info-path").addClass("accessible-hidden");
  }
});
