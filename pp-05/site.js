(function($) {
  var doorbell = new Audio('media/doorbell.mp3');

  // Register some event listeners on the doorbell
  // Add a status to the DOM when playback begins:
  doorbell.addEventListener('play', function() {
    $('#doorbell').after('<p id="status">((( Doorbell Rings )))</p>');
  });
  // Remove the status from the DOM when playback has ended:
  doorbell.addEventListener('ended', function() {
    $('#status').remove();
  });

  function ringDoorbell() {
    doorbell.play();
  }

  $('figure').remove(); // remove the HTML
  $('body').append('<button id="doorbell">Ring the Doorbell</button>'); // cheat a bit and use button
  $('#doorbell').on('click', ringDoorbell);
  $(document).keypress(function(e) {
    if(e.key === 'd') {
      ringDoorbell();
    }
  });
})(jQuery);
