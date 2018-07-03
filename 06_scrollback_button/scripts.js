$(function () {
    // elemek behúzása
    let $window = $(window);
    let $htmlBody = $('html, body');
    let $scrollToTop = $('#scroll-to-top');

    // konstansok
    const triggerDistance = 200;

    // betöltésnél távolságfigyelés
    // aktuális távolság
    let actualDistance = $htmlBody.scrollTop();
    // megjelenítés
    if (actualDistance >= triggerDistance) {
        $scrollToTop.show();

    // elrejtés
    } else {
        $scrollToTop.hide();
    }


    // scrollra reagálás
    $window.scroll(function () {


        // aktuális távolság
        let actualDistance = $htmlBody.scrollTop();

        // megjelenítés
        if (actualDistance >= triggerDistance) {
            $scrollToTop.show();

        // elrejtés
        } else {
            $scrollToTop.hide();
        }

    });

    // gombnyomásra reagálás
    $scrollToTop.click(function(){
        $htmlBody.animate({ scrollTop: 0}, 500);
    });


});