'use strict';

$(function () {
    $(".gnb > li ").click(function () {
      $(this).stop().children("ul").slideToggle(200);
      $(this).children("ul>li").siblings("li").hide();
    });
   
    let con1top1 = $(".con1_box").offset().top;
    // let txttop1 = $(".txtbox").offset().top;
    let xc90txttop = $(".xc90_txtbox").offset().top;
    let xc90imgtop = $(".xc90_imgbox").offset().top;
    let modeltop = $(".model_menu").offset().top;
    let ecotop = $(".eco_list li").offset().top;
    
      $(".imgbox").addClass("on");
      $(".txtbox").addClass("on");
    
    $(window).scroll(function () {
      let top = $(this).scrollTop();

      if (con1top1 >= top -300) {
        $(".imgbox").addClass("on");
      } else {
        $(".imgbox").removeClass("on");
      }
      if (con1top1>= top -300) {
        $(".txtbox").addClass("on");
      } else {
        $(".txtbox").removeClass("on");
      }

      if (xc90txttop <= top + 600) {
        $(".xc90_txtbox").addClass("on");
      } else {
        $(".xc90_txtbox").removeClass("on");
      }

      if (xc90imgtop <= top + 600) {
        $(".xc90_imgbox").addClass("on");
      } else {
        $(".xc90_imgbox").removeClass("on");
      }

      if (modeltop <= top + 300) {
        $(".model_menu").addClass("on");
      } else {
        $(".model_menu").removeClass("on");
      }
      if (ecotop <= top +530) {
        $(".eco_list li").css("opacity", "1");
      } else {
        $(".eco_list li").css("opacity", "");
      }
    });
    $(".toggle").click(function () {
      $(".gnb").slideDown(200)
      $(".gnb > li").click(function () {
        $("sub_menu").slideToggle(200);
      })
      $("html").css("overflow", "hidden")
      $("body").css("overflow", "hidden")
    
    })
    $(".gnb > li:eq(6)").click(function () {
      $(".gnb").slideUp(200)
      
      $("html").css("overflow", "")
      $("body").css("overflow", "")
    
    })
  });