

$(document).ready(function() {
    //alert("jquery is here");
    $(".drop-home").hover(function() {
        $(".drop-home").css({
            visibility: "visible",
        });
        // $(".drop-home").slideDown("slow");
    });
    $(".drop-home").mouseleave(function() {
        $(".drop-home").css({
            visibility: "hidden",
        });
        $(".drop-home").slideUp("slow");
    });
    
    $("#home-btn").hover(function() {
        $(".drop-home").css({
            visibility: "visible",
        });
        $(".drop-home").slideDown("slow");
    });
    $("#home-btn").mouseleave(function() {
        $(".drop-home").css({
            visibility: "hidden",
        });
       // $(".drop-home").slideUp("slow");
    });
    
});


$(document).ready(function() {
    //alert("jquery is here");
    $(".shop-all").hover(function() {
        $(".shop-all").css({
            visibility: "visible",
        });
        // $(".shop-all").slideDown("slow");
    });
    $(".shop-all").mouseleave(function() {
        $(".shop-all").css({
            visibility: "hidden",
        });
        $(".shop-all").slideUp("slow");
    });
    
    $("#shop-btn").hover(function() {
        $(".shop-all").css({
            visibility: "visible",
        });
        $(".shop-all").slideDown("slow");
    });
    $("#shop-btn").mouseleave(function() {
        $(".shop-all").css({
            visibility: "hidden",
        });
       // $(".shop-all").slideUp("slow");
    });
    
});


$(document).ready(function() {
    //alert("jquery is here");
    $(".pag-all").hover(function() {
        $(".pag-all").css({
            visibility: "visible",
        });
        // $(".pag-all").slideDown("slow");
    });
    $(".pag-all").mouseleave(function() {
        $(".pag-all").css({
            visibility: "hidden",
        });
        $(".pag-all").slideUp("slow");
    });
    
    $("#pag-btn").hover(function() {
        $(".pag-all").css({
            visibility: "visible",
        });
        $(".pag-all").slideDown("slow");
    });
    $("#pag-btn").mouseleave(function() {
        $(".pag-all").css({
            visibility: "hidden",
        });
       // $(".pag-all").slideUp("slow");
    });
});