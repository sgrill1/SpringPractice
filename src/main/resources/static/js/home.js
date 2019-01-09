$(".caption").hide();

$(".image-link").hover(
    function() {
        $(".image").fadeTo(10,0.3);
    },function(){
        $(".image").fadeTo(10,1);
    });


$(".image-link").hover(
    function() {
        $(this).find(".caption")
               .fadeIn(10);
    },function(){
        $(this).find(".caption")
               .fadeOut(10);
    });



