$(document).ready(function(){

    // elemek összegyűjtése
    let $button = $('button.btn-primary');

    let $email = $('input[type="email"]');

    let $password = $('input[type="password"]');

    let $alertSuccess = $('div.alert-success');
    let $alertDanger = $('div.alert-danger');



    const email = 'user@domain.hu';

    const password = '123456';


    // click eseményre reagálás

    $button.click(function(){

    // eldönteni hogy bejelentkezhet-e

    if($email.val() === email && $password.val() === password) {
        $alertSuccess.show();
        $alertDanger.hide();
    } else {
        $alertSuccess.hide();
        $alertDanger.show();
    }

    });

});