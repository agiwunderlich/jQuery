$(document).ready(function () {

    // html elemek összegyűjtése
    let $button = $('button#random-color');

    console.log($button);

    $button.click(function(){

        
        // színek kikeverése
        const max = 255; // olyan dolgot definial amit nem tudsz modositani

        let red = Math.round(Math.random() * max);
        let green = Math.round(Math.random() * max);
        let blue = Math.round(Math.random() * max);
        
        // szín beállítása
        $button.css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
        
        // background-color: rgb(255,255,255); 

        // font szín beállítása
        let avg = (red + green + blue) / 3;
        console.log('avg:', avg/255);

        if(avg/255>0.5){
            // gyengébb szín - közelebb van a fehérhez
            $button.css('color','black');
        } else {
            // erősebb szín - közelebb van a feketéhez
            $button.css('color','white');
        }
    })
});