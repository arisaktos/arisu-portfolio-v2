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



