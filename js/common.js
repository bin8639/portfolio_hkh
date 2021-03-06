(function ($) {
  // 페이지 로딩 창
  $(window).load(function () {
    $(".loading").delay(1000).fadeOut(1000);
  });

  // 메인 페이지 연결
  $("#secBox").load("main.html");

  // 로그인 페이지 연결
  $(".login > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#secContainer").remove();
    $("#secBox").load(url);
  });

  // 탑메뉴 클릭시 대표 메뉴 연결
  // $(".depth1 >li > a").on("click", function (e) {
  //   e.preventDefault();
  //   if ($('html').hasClass('pc')) {
  //     var url = $(this).attr("href");
  //     $("#secContainer").remove();
  //     $("#secBox").load(url);
  //   }
  // });
  
  $(".depth2 >li > a").on("click", function (e) {
    e.preventDefault();
      var url = $(this).attr("href");
      $("#secContainer").remove();
      $("#secBox").load(url);
      if ($('html').hasClass('mobile')) {
        $(".open_nav").show();
        $(".close_nav, .depth2, .nav").hide();
      }
  });




  // footer 링크연결
  $(".information > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#secContainer").remove();
    $("#secBox").load(url);
  });

   // 리사이즈
  var deviceSize = 894
  
  function scrollOX(status) {
    $('html').css({
      overflowY: status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
  }

  var swh = scrollOX('hidden')
  var sws = scrollOX('scroll')
  var swd = swh - sws

  if(swd>0) {
    deviceSize = deviceSize - swd
  }

   init()
   var winWidth
   function init() {
     winWidth = $(window).innerWidth();
     if (winWidth > deviceSize && !$('html').hasClass('pc')) {
       $('.nav').show()
       $(".depth2").css({ height: "120px" });
       $(".open_nav, .close_nav, .depth2").hide();
       $('html').addClass('pc').removeClass('mobile')
     } else if (winWidth <= deviceSize && !$('html').hasClass('mobile')) {
       $('html').addClass('mobile').removeClass('pc')
       $(".open_nav").show();
       $(".close_nav, .depth2, .nav").hide();
       $(".depth2").css({ height: "auto" });
     }
   }


   $(window).on('resize', function () {
    init()
  })

   // 모바일 네비박스
   $(".depth1 > li > a").on("click", function (e) {
    e.preventDefault();
    if ($("html").hasClass("mobile")) {
      if ($(this).next().is(".depth2")) {
        $(this).parent().toggleClass("on");
        $(this).parent().find(".depth2").stop().slideToggle(400);
        $(this)
          .parent()
          .siblings()
          .each(function () {
            if ($(this).find(".depth2").css("display") === "block") {
              $(this).find(".depth2").slideUp(400);
              $(this).removeClass("on");
            }
          });
      } else if (!$(this).next().is(".depth2")) {
        var url = $(this).attr("href");
        $("#secContainer").remove();
        $("#secBox").load(url);
        $(".open_nav").show();
        $(".logoNav .nav, .close_nav").hide();
        $(".depth1 > li").removeClass("on");
      }
    } else if ($("html").hasClass("pc")) {
      var url = $(this).attr("href");
      $("#secContainer").remove();
      $("#secBox").load(url);
    }
  });


  // pc 네비박스
  $('.nav .depth1 > li').hover(
    function () {
      if ($('html').hasClass('pc')) {
        $('.depth2').stop().slideDown(400)
        $('.decoBox').stop().slideDown(400)
      }
    },
    function () {
      if ($('html').hasClass('pc')) {
        $('.depth2').stop().slideUp(400)
        $('.decoBox').stop().slideUp(400)
      }
    }
  )

  // 햄버거버튼 클릭시 네비박스 나타나기
  $(".logoNav .open_nav").on("click", function () {
    $(this).next().stop().slideDown(400);
    $(this).hide();
    $(this).nextAll(".close_nav").css({
      display: "block",
    });
  });

  // 닫기버튼 클릭시 네비박스 사라지기
  $(".logoNav .close_nav").on("click", function () {
    $(this).prev().stop().slideUp(400);
    $(this).hide();
    $(this).prevAll(".open_nav").css({
      display: "block",
    });
    $(".depth2").hide();
  });



  var sct = 0;
  var winHeight = $(window).height();

  // gotop버튼 생기기
  $(window).scroll(function () {
    sct = $(this).scrollTop();
    if (sct >= winHeight / 2) {
      $(".goTop").addClass("on");
    } else {
      $(".goTop").removeClass("on");
    }

    // section_box1 mid_nav 아이콘 부분 애니메이션
    var midNavNear = $(".section_box1").offset().top - $(this).height();
    if (sct >= midNavNear) {
      $(".section_box1").addClass("on");
    }
    // section_box2 product 부분
    var pdtNear = $(".section_box2").offset().top - $(this).height() / 2;
    if (sct >= pdtNear) {
      $(".section_box2").addClass("on");
    }
    // section_box3 info 부분
    var infoNear = $(".section_box3").offset().top - $(this).height() / 2;
    if (sct >= infoNear) {
      $(".section_box3").addClass("on");
    }
    // section_box4 gallery 부분
    var gallNear = $(".section_box4").offset().top - $(this).height() / 2;
    if (sct >= gallNear) {
      $(".section_box4").addClass("on");
    } 
  });

  // goTop버튼 누르면 오르기
  $(".goTop").on("click", function () {
    $("body, html").stop().animate(
      {
        scrollTop: 0,
      },
      800,
      "linear"
    );
  });
})(jQuery);
