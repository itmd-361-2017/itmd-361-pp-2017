function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

(function($) {
  $('figure').remove(); // remove the HTML
  $('body').append('<button id="doorbell">Ring the Doorbell</button>'); // cheat a bit and use button
})(jQuery);
