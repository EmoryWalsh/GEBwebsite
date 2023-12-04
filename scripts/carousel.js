$("#dot1").click(function() {
    $('#slide1').removeClass('accessible-hidden');
    $('#slide2').addClass('accessible-hidden');
    $('#slide3').addClass('accessible-hidden');
    $('#slide1').addClass('on');
    $('#slide2').removeClass('on');
    $('#slide3').removeClass('on');
    $('#dot1').addClass('active');
    $('#dot2').removeClass('active');
    $('#dot3').removeClass('active');
});

$("#dot2").click(function() {
    $('#slide1').addClass('accessible-hidden');
    $('#slide2').removeClass('accessible-hidden');
    $('#slide3').addClass('accessible-hidden');
    $('#slide1').removeClass('on');
    $('#slide2').addClass('on');
    $('#slide3').removeClass('on');
    $('#dot1').removeClass('active');
    $('#dot2').addClass('active');
    $('#dot3').removeClass('active');
});

$("#dot3").click(function() {
    $('#slide1').addClass('accessible-hidden');
    $('#slide2').addClass('accessible-hidden');
    $('#slide3').removeClass('accessible-hidden');
    $('#slide1').removeClass('on');
    $('#slide2').removeClass('on');
    $('#slide3').addClass('on');
    $('#dot1').removeClass('active');
    $('#dot2').removeClass('active');
    $('#dot3').addClass('active');
});

$("#nextbutton").click(function() {
    if ($('#slide1').hasClass("on")) {
        $("#slide1").addClass("accessible-hidden");
        $("#slide1").removeClass("on");
        $("#slide2").removeClass("accessible-hidden");
        $("#slide2").addClass("on");
        $("#slide3").addClass("accessible-hidden");
        $('#dot1').removeClass('active');
        $('#dot2').addClass('active');
        $('#dot3').removeClass('active');

    } else if ($('#slide2').hasClass("on")) {
        $("#slide2").addClass("accessible-hidden");
        $("#slide2").removeClass("on");
        $("#slide3").removeClass("accessible-hidden");
        $("#slide3").addClass("on");
        $("#slide1").addClass("accessible-hidden");
        $('#dot1').removeClass('active');
        $('#dot3').addClass('active');
        $('#dot2').removeClass('active');

    } else if ($('#slide3').hasClass("on")) {
        $("#slide3").addClass("accessible-hidden");
        $("#slide3").removeClass("on");
        $("#slide1").removeClass("accessible-hidden");
        $("#slide1").addClass("on");
        $("#slide2").addClass("accessible-hidden");
        $('#dot2').removeClass('active');
        $('#dot1').addClass('active');
        $('#dot3').removeClass('active');
}});

$("#prevbutton").click(function() {
    if ($('#slide1').hasClass("on")) {
        $("#slide1").addClass("accessible-hidden");
        $("#slide1").removeClass("on");
        $("#slide3").removeClass("accessible-hidden");
        $("#slide3").addClass("on");
        $("#slide2").addClass("accessible-hidden");
        $("#slide2").removeClass("on");
        $('#dot1').removeClass('active');
        $('#dot3').addClass('active');
        $('#dot2').removeClass('active');

    } else if ($('#slide2').hasClass("on")) {
        $("#slide2").addClass("accessible-hidden");
        $("#slide2").removeClass("on");
        $("#slide1").removeClass("accessible-hidden");
        $("#slide1").addClass("on");
        $("#slide3").addClass("accessible-hidden");
        $("#slide3").removeClass("on");
        $('#dot3').removeClass('active');
        $('#dot1').addClass('active');
        $('#dot2').removeClass('active');

    } else if ($('#slide3').hasClass("on")) {
        $("#slide3").addClass("accessible-hidden");
        $("#slide3").removeClass("on");
        $("#slide2").removeClass("accessible-hidden");
        $("#slide2").addClass("on");
        $("#slide1").addClass("accessible-hidden");
        $("#slide1").removeClass("on");
        $('#dot1').removeClass('active');
        $('#dot2').addClass('active');
        $('#dot3').removeClass('active');
}});
