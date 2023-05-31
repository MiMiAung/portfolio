



$(window).on('load', function() {
    // initialize isotope
    var $grid = $(".grid").isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
  
    // filter items on button click
    $('.filters-button-group').on('click', 'button', function() {
  
      var filterValue = $(this).attr('data-filter');
      
  
      $grid.isotope({
        filter: filterValue
      });
  
      //active buttonß
      $('.filters-button-group').find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  /* =====================================
  Progress Bars
======================================*/


$(function() {

  $(".progress-elements").waypoint(function(direction) {
    // alert("you reached to me");
    $(".progress-bar").each(function() {
      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%",
      }, 1500);
    })
    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });

})
  

// $(document).ready(function(){
//     $(".progress-bar").each(function() {
//                  $(this).animate({
//                    width: $(this).attr("aria-valuenow") + "%",
//                 }, 1500);
//               })
// });

// education

$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

//smooth scrolling
$(function() {
  $("a.smooth-scroll").click(function(event) {
    
    event.preventDefault();
    //get section id like #about, #services etc...
    var section_id = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 2
    }, 1250, "easeInOutExpo");
  });

  
});


// home animation on page load
$(window).on("load", function() {
    
    $("#home-name").addClass("animate__animated animate__fadeInLeft");
    $("#home-who").addClass("animate__animated animate__zoomIn");
    $("#home-about").addClass("animate__animated animate__zoomIn");
   
    
  });

  /*Animation
  ======================================*/
  // animate on scroll
  $(function() {
    new WOW().init();
  });
  