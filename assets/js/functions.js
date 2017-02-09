<<<<<<< HEAD
=======
$(function(){
  landingLinkClick();
  arrowContainerClick();
  carouselScroll();
});

//landing functions

function landingLinkClick(){
  $('header.home nav li').on('click',function(){
    var $this = $(this),
        section = $('section.'+$this.attr('id'));
        console.log(section.offset().top);
    section.removeClass('min');
    animateScroll(section);
    toggleArrow(section);
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

//carousel functions

function carouselScroll(){
  
}

//general functions

function animateScroll(element){
  $('html, body').animate({
     scrollTop: element.offset().top
  }, 500);
}
>>>>>>> parent of 5281d7f... Revert "Worked on builder project showcase"
