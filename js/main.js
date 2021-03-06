(function ($) {
    // 메인 슬라이드
    $('.slide-inner').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 4000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        cssEase: 'ease',
        draggable: true,
        fade: false,
        arrows: true,
        prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [{
            breakpoint: 895,
            settings: {
                arrows: false,
                fade: true,
            }
        }]
    })

    //메인 페이지 중앙 아이콘 클릭으로 메뉴연결
    $('.mid_nav > li:nth-child(1) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    $('.mid_nav > li:nth-child(2) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    $('.mid_nav > li:nth-child(3) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    $('.mid_nav > li:nth-child(4) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    //Product 버튼 클릭 연결
    $('.product > .text > button > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 메인 메뉴 찾아 오시는 길 버튼 클릭 연결
    $('.info_nav > li:nth-child(1) > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 메인 자주하는 질문 버튼 클릭 연결
    $('.info_nav > li:nth-child(2) > a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // mid_nav hover 이벤트
    $('.mid_nav > li > a > img').mouseover(function () {
        $(this).css({
            transform: 'translateY(-14px)',
            transition: 'all 0.5s'
        }).mouseleave(function(){
            $(this).css({
                transform: 'translateY(0px)'
            })
        })
    })


})(jQuery)