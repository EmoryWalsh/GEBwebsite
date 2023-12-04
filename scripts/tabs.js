$("#past-button").click(function() {
  $('#past-content').removeClass('hidden');
  $('#schedule-content').addClass('hidden');
  $('#upcoming-content').addClass('hidden');
  $('#past-button').removeClass('red');
  $('#past-button').addClass('white');
  $('#upcoming-button').removeClass('white');
  $('#upcoming-button').addClass('red');
  $('#schedule-button').removeClass('white');
  $('#schedule-button').addClass('red');
});

$("#schedule-button").click(function() {
  $('#schedule-content').removeClass('hidden');
  $('#past-content').addClass('hidden');
  $('#upcoming-content').addClass('hidden');
  $('#past-button').removeClass('white');
  $('#past-button').addClass('red');
  $('#upcoming-button').removeClass('white');
  $('#upcoming-button').addClass('red');
  $('#schedule-button').removeClass('red');
  $('#schedule-button').addClass('white');
});

$("#upcoming-button").click(function() {
  $('#upcoming-content').removeClass('hidden');
  $('#schedule-content').addClass('hidden');
  $('#past-content').addClass('hidden');
  $('#past-button').removeClass('white');
  $('#past-button').addClass('red');
  $('#upcoming-button').removeClass('red');
  $('#upcoming-button').addClass('white');
  $('#schedule-button').removeClass('white');
  $('#schedule-button').addClass('red');
});
