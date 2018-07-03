$(document).ready(function(){

    let  $image = $('.wrapper-image img');

    
    $image.click(function(){
        
        let $actualImage = $(this);

        
        if(!$actualImage.hasClass('scale-half')){
            return;
        }
        
        let $previousImage = $('.wrapper-image img:not(.scale-half)');


        $previousImage.addClass('scale-half');
        $actualImage.removeClass('scale-half');

    });
});