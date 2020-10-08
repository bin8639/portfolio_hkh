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
  $(".depth1 > li > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#secContainer").remove();
    $("#secBox").load(url);
  });


  // 회사소개 페이지 연결
  $(".com_info > li > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#secContainer").remove();
    $("#secBox").load(url);
  });

  // 사업소개 연결
  $(".buss_info > li > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#secContainer").remove();
    $("#secBox").load(url);
  });

  // 제품소개1 연결
  $(".prod_info > li > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#secContainer").remove();
    $("#secBox").load(url);
  });

  // 온라인문의 연결
  $(".qna_info > li > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#secContainer").remove();
    $("#secBox").load(url);
  });



  // 고객센터 연결
  $(".cs_info > li > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#secContainer").remove();
    $("#secBox").load(url);
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
       $(".nav").css({
         position: "absolute",
         top: "0px",
         display: "block",
       });
       $(".depth2").css({ height: "120px" });
       $(".open_nav, .close_nav, .depth2").hide();
       $('html').addClass('pc').removeClass('mobile')
     } else if (winWidth <= deviceSize && !$('html').hasClass('mobile')) {
       $(".open_nav").show();
       $(".close_nav, .depth2, .nav").hide();
       $(".nav").css({
         position: "absolute",
         top: "100%",
         display: "none",
       });
       $(".depth2").css({ height: "auto" });
       $('html').addClass('mobile').removeClass('pc')
     }
   }


   $(window).on('resize', function () {
    init()
  })

   // 모바일 네비박스
   $(".nav .depth1 > li").on('click', function (e) {
     e.preventDefault()
    if ($('html').hasClass('mobile')) {
      $(this).toggleClass('on')
      $(this).find('.depth2').stop().slideToggle(400)
      $(this).siblings().each(function () {
        if ($(this).css('display') === 'block') {
          $(this).find('.depth2').stop().slideUp(400)
          $(this).removeClass('on')
        }
      })
    }
  })

  // pc 네비박스
  $('.nav .depth1').hover(
    function () {
      if ($('html').hasClass('pc')) {
        $(this).find('.depth2').stop().slideDown(400)
        $('.decoBox').stop().slideDown(400)
      }
    },
    function () {
      if ($('html').hasClass('pc')) {
        $(this).find('.depth2').stop().slideUp(400)
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
