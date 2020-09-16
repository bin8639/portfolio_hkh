(function ($) {
    // 페이지 로딩 창
    $(window).load(function(){
        $('.loading').delay(1000).fadeOut(1000)
    })

    // 메인 페이지 연결
    $('#secBox').load('main.html')

    // 로그인 페이지 연결
    $('.login > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 탑메뉴 클릭시 대표 메뉴 연결
    $('.depth1 > li:nth-child(1) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    $('.depth1 > li:nth-child(2) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    $('.depth1 > li:nth-child(3) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    $('.depth1 > li:nth-child(4) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })
    
    $('.depth1 > li:nth-child(5) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 인사말 페이지 연결
    $('.com_info > li:nth-child(1) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 찾아오시는 길 연결
    $('.com_info > li:nth-child(2) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 사업분야 연결
    $('.buss_info > li > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 제품소개1 연결
    $('.prod_info > li:nth-child(1) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // Q&A 연결
    $('.qna_info > li:nth-child(1) > a').on('click', function (e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 공지사항 연결
    $('.cs_info > li:nth-child(1) > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 탑메뉴 호버시 슬라이드 효과
    $('.nav').hover(
        function () {
            $(this).find('.depth2').stop().slideDown(400)
            $(this).next('.decoBox').stop().slideDown(400)
        },
        function () {
            $(this).find('.depth2').stop().slideUp(400)
            $(this).next('.decoBox').stop().slideUp(400)
        }
    )

    var sct = 0;
    var winHeight = $(window).height();
    
    // gotop버튼 생기기
    $(window).scroll(function(){
        sct = $(this).scrollTop();
        if ( sct >= winHeight/2 ) {
            $('.goTop').addClass('on');
        } else {
            $('.goTop').removeClass('on');
        }
    });

    // goTop버튼 누르면 오르기
    $('.goTop').on('click', function(){
        $('body, html').stop().animate({
            scrollTop: 0
        }, 800 ,'linear');
    });


})(jQuery)