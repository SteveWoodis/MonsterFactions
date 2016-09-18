$('.col-lg-3').mouseover(function () {
  $(this).stop().animate({"width": "640px", "height": "600px", "left": "-25px"}, 200, 'easeInQuint');
}).mouseout(function () {
  $(this).stop().animate({"width": "320px", "height": "300px", "left": "0px"}, 200, 'easeInQuint');
});