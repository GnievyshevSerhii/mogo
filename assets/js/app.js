// Шапка при скроле остаётся на месте
$(function() {

    var header = $("#header"),
        // Функция для скрола по высоте
        // В переменной - introH, сохранили высоту #intro - блока 
        introH = $("#intro").innerHeight(),
        // Сколько мы  проскролили
        scrollOffset = $(window).scrollTop();

        // Fixed Header 
    // Когда зашли на страницу прогрузился js выполниться фенкция checkScroll и отправляеться в функцию scrollOffset
    checkScroll(scrollOffset);
    
    // Скролим страницу
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

        // Изначяльно было так:
        // // При скролле страници обновляем это значение 
        // scrollOffset = $(this).scrollTop();

        // // При сроле на высоту блока шапка будет фиксироваться
        // // Если scrollOffset >= introH то header получяет класс fixed 
        // if ( scrollOffset >= introH ) {
        //     header.addClass("fixed");
        //     // Иначе мы уберём (removClass) у header класс fixed если блок попал в видимость
        // } else {
        //     header.removeClass("fixed");
        // }

    });

    // Функция для проверки чтобы при перезагрузки страницы навигация появлялась
    function checkScroll(scrollOffset) {
        if ( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click", function(event) {
    // Отменяем стандартное поведение ссылки
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        // Убираем и добавляем класс ектив для ссылки в меню на которое нажали чтобы была подсветка
        $("#nav a").removeClass("active");
        $this.addClass("active");

        // Плавно скролим к странице на которую ведёт ссылка
        $("html, body").animate({
            scrollTop: blockOffset

            
            // Указали параметр скролла в секундах 500
        }, 500);

        // Домашка
        // Утираем меню при скроле к блоку и убераем хрестик 
        $("#nav, #nav_toggle").removeClass("active");
    });

    // Menu nav toggle
    // Бургер меню следим за кликом на меню
    $("#nav_toggle").on("click", function(event) {
        // Убираем стандартное поведение кнопки чтобы небыло скачька вверх страници
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

    // Wedo, Collapse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('collapse');

        $this.toggleClass("active");
        
    });


    // Slider

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


// Завершил на времени видео 24:15 и на странице css - 1532

});