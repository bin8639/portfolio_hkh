(function($){
    //메인 페이지 연결
    $('#secBox').load('main.html')

    //로그인 페이지 연결
    $('.login > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 탑메뉴 클릭시 대표 메뉴 바로 연결
    $('.depth1 > li:nth-child(1) > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('secContainer').remove()
        $('#secBox').load(url)
    })

    $('.depth1 > li:nth-child(2) > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('secContainer').remove()
        $('#secBox').load(url)
    })

    $('.depth1 > li:nth-child(3) > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('secContainer').remove()
        $('#secBox').load(url)
    })

    // 서브페이지1-1 연결
    $('.com_info > li:nth-child(1) > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })
    
    // 서브페이지1-2 연결
    $('.com_info > li:nth-child(2) > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 서브페이지2 연결
    $('.buss_info > li > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 서브페이지3 연결
    $('.prod_info > li:nth-child(1) > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 탑메뉴 호버시 슬라이드 효과
    $('.nav').hover(
        function(){
            $(this).find('.depth2').stop().slideDown(500)
            $(this).find('.decoBox').stop().slideDown(400)
        },
        function(){
            $(this).find('.depth2').stop().slideUp(400)
            $(this).find('.decoBox').stop().slideDown(500)
        }
    )

})(jQuery)