$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    })
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('#services', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

});