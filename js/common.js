(function($){
    
    $('#secBox').load('main.html')

    $('.login > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    $('.nav > depth1 > li').on('click', function (e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#subpage1_1').load(url)
    })


})(jQuery)