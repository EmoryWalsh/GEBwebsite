$(document).ready(function() {
  if ($(document).width() < 900) {
    $("#hamburger").removeClass("hidden");
    $("#navbar").addClass("hidden");
  }  else {
    $("#hamburger").addClass("hidden");
    $("#navbar").removeClass("hidden");
  }
});

$(window).resize(function() {
  if ($(document).width() < 900) {
    $("#hamburger").removeClass("hidden");
    $("#navbar").addClass("hidden");
  }  else {
    $("#hamburger").addClass("hidden");
    $("#navbar").removeClass("hidden");
  }
});

$("#hamburger").click(function() {
  if ($('#navmenu').hasClass("hidden")) {
    $("#navmenu").removeClass("hidden");
  } else {
    $("#navmenu").addClass("hidden");
  }
});
