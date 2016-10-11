
/* Background: Play the background video when it's ready.
---------------------------------------------------------------------------------------------------- */

var vid = $("#video video");

$(document).ready(function() {
  vid.on("canplay", function() {
    vid[0].play();
    vid.fadeIn(2000);
  });
});

/* Panels: Used for login forms, videos, etc.
---------------------------------------------------------------------------------------------------- */

// Open panels via the ".open" class.

$(document).on('click', '.open', function() {
  var panel = $(this).attr('href');

  // Open the panel.
  $(panel).removeClass('inactive closing').addClass('active opening');

  // Close any other active panel.
  if ($('#panels .active')[0]) {
    $('#panels .active').not(panel).removeClass('active opening').addClass('inactive closing');
  }

  return false;
});

// A function for closing panels.

function panel_close() {
  var panel = '.active';

  // Close the panel.
  $(panel).removeClass('opening').addClass('closing');

  setTimeout(function(){

    // Make the panel inactive.
    $(panel).removeClass('active').addClass('inactive');

    // Empty the video if there is one.
    $('#video .video').empty();
  }, 250);
}

// Close panels via the ".close" class.

$(document).on('click', '.close', function() {
  panel_close();

  return false;
});

// Close panels via the "esc" key.

$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
    panel_close();

    return false;
  }
});