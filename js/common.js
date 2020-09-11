(function($){
    
    $('#secBox').load('main.html')

    $('.login > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

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