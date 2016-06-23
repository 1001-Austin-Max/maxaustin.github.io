$(function(){
  landingLinkClick();
  arrowContainerClick();
});

function landingLinkClick(){
  $('header.home nav li').on('click',function(){
    var $this = $(this),
        section = $('section.'+$this.text());
    section.removeClass('min',function(){
      animateScroll(section);
      toggleArrow(section);
    });
  });
}

//arrow functions

function arrowContainerClick(){
  $('.arrow-container').on('click', function(){
    var $this = $(this);
    var $parent = $this.parent();
    $parent.toggleClass('min');
    toggleArrow($parent);
  });
}

function toggleArrow(sect){
    if(sect.hasClass('min')){
      sect.children('.arrow-container').children('i').html('keyboard_arrow_down');
    } else {
      sect.children('.arrow-container').children('i').html('keyboard_arrow_up');
      animateScroll(sect);
    }
}

//general functions

function animateScroll(element){
  $('html, body').animate({
     scrollTop: element.offset().top
  }, 500);
}
