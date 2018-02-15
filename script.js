$(function() {

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 350)
      $(".name").hide();
    else
      $(".name").show();
    if (scroll > 233)
      $(".headerlink").hide();
    else
      $(".headerlink").show();
  });

  $(".name").animate({
    opacity: 1,
  }, 1500);

  $(".headerlink").animate({
    opacity: 1,
  }, 1500);

  $(".col-md-4").on({
    mouseenter: function() {
      $(this).find(".logo").animate({
        height: "+=10px"
      }, "fast");
      $(this).find(".worktitle").css("color", "#339baf");
    },
    mouseleave: function() {
      $(this).find(".logo").animate({
        height: "-=10px"
      }, "fast");
      $(this).find(".worktitle").css("color", "#2d3b46");
    }
  });

});
