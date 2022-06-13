let offset = 0;
const sliderLine = document.querySelector('.team_slider_line');

document.querySelector('.slider_button_right').addEventListener('click', function() {
    offset = offset + 318;
    if (offset > 636) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider_button_left').addEventListener('click', function() {
    offset = offset - 318;
    if (offset < 0) {
        offset = 636;
    }
    sliderLine.style.left = -offset + 'px';
});
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});
if ($(window).width() < 750) {
    let offset = 0;
    const sliderLine = document.querySelector('.team_slider_line');

    document.querySelector('.slider_button_right').addEventListener('click', function() {
        offset = offset + 318;
        if (offset > 1590) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });

    document.querySelector('.slider_button_left').addEventListener('click', function() {
        offset = offset - 318;
        if (offset < 0) {
            offset = 1590;
        }
        sliderLine.style.left = -offset + 'px';
    });
}
$('.burger_button').click(function() {
    $('.burger_menu').removeClass('burger_menu_hide');
    $('.burger_menu').addClass('burger_menu_show');
});

$('.burger_menu_close').click(function() {
    $('.burger_menu').removeClass('burger_menu_show');
    $('.burger_menu').addClass('burger_menu_hide');
})
$('.burger_menu_links a').click(function() {
    $('.burger_menu').removeClass('burger_menu_show');
    $('.burger_menu').addClass('burger_menu_hide');
})