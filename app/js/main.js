//setting head image container size

$(document).ready(function() {
    var imageHeight = $(".head-image-no-ps").height()
    $("#arisu-photo").css('height',imageHeight);

});
$(window).resize(function() {
    var imageHeight = $(".head-image-no-ps").height()
    $("#arisu-photo").css('height',imageHeight);
});


$('#menu li a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
}); 


$('.coding-panel-plus').on( "click", function() {
    $(this).parent().removeClass('coding-panel-up');
  $(this).parent().addClass('coding-panel-down');
});



$('.coding-panel-minus').on( "click", function() {
    $(this).parent().removeClass('coding-panel-down');
  $(this).parent().addClass('coding-panel-up');
});

