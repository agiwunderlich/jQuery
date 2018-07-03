$(document).ready(function(){

    // gyűjtsük össze az elemeket
    let $progressBar = $('.progress-bar');

    let $input = $('input[type="number"]');

    $input.change(function(){

        
        // kérjük le a %-ot
        let percent = $input.val();
        
        // ellenőrzésképp kiíratjuk
        // console.log(percent);
        
        // állítsuk be a progress bart
        $progressBar.text(percent + '%');
        $progressBar.css('width', percent + '%');
        $progressBar.attr('aria-valuenow', percent);

    });
});