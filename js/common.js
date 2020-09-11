(function($){
    
    $('#secBox').load('main.html')

    $('.login > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    $('#secBox').load('subpage1_1.html')

    $('.nav > depth1 > li').on('click', function (e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })


})(jQuery)