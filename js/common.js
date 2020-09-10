(function($){
    
    $('#secBox').load('.main.html')

    $('.topmenu > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    $('.logoNav > h1 > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })
})(jQuery)