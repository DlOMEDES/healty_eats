$(document).ready(function() {
  $('.mobile_nav_btn').on('click', function() {
    $('.mobile_nav_btn .mobile_nav_line:nth-of-type(1)').toggleClass('mobile_line_top');
    $('.mobile_nav_btn .mobile_nav_line:nth-of-type(2)').toggleClass('mobile_line_middle');
    $('.mobile_nav_btn .mobile_nav_line:nth-of-type(3)').toggleClass('mobile_line_bottom');
    $('.nav_menu').toggleClass('nav_menu_open');
    // $("body").css({"overflow":"hidden",'position':'fixed'}); //no scroll after clicking menu
    return false;
  });
});
