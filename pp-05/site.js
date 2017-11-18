(function($) {
  var doorbell = new Audio('media/doorbell.mp3');

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
