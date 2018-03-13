var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  // do something with the scroll position
  var header_bg = document.getElementByID('header-links-bg');
  header_bg.style.backgroundColor = "rgba(0,0,0, " + scroll_pos/100 +")"
}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
     
    ticking = true;

  }
  
});