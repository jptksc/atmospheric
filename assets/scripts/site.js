
/* Background: Play the background video when it's ready.
---------------------------------------------------------------------------------------------------- */

var vid = $("#video video");

$(document).ready(function() {
  vid.on("canplay", function() {
    vid[0].play();
    vid.fadeIn(2000);
  });
});

/* Services: Open and close the services panel.
---------------------------------------------------------------------------------------------------- */

// Open panels via the ".open" class.

$(document).on('click', '.open', function() {
  var panel = $(this).attr('href');

  // Open the panel.
  $(panel).removeClass('inactive closing').addClass('active opening');

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
  }, 500);
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