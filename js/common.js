(function($){
    
    $('#secBox').load('main.html')

    $('.login > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })


})(jQuery)