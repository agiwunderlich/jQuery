$(document).ready(function () {
    
    // konstansok
    const validClass = 'is-valid';
    const invalidClass = 'is-invalid';

    // elemek összegyűjtése
    let $button = $('button');
    let $checkbox = $('input[type="checkbox"]');
    let $username = $('input#username');
    let $password = $('input#password');
    let $passwordAgain = $('input#passwordAgain');
    let $invalidFieldList = $('div.alert-danger ul');
    let $alert = $('div.alert-danger');
    let $successText = $('div#successText');
    let $form = $('form');


    
    // gombnyomásra reagálás
    $button.click(function (event) {
        // alapértelmezett működés megakasztása
        event.preventDefault();

        // nem megfelelő mezők
        let invalidFields = [];
        $invalidFieldList.html('');
        
        // mezők ellenőrzése
        // felhasználónév
        let username = $username.val();
        if(username.length == 0){
            // hibás kitöltés
            invalidFields.push('Felhasználónév');
            $username.removeClass(validClass);
            $username.addClass(invalidClass);

        } else {
            // helyes kitöltés
            $username.addClass(validClass);
            $username.removeClass(invalidClass);
        }

        // jelszó
        let password = $password.val();
        if(password.length <= 5){
            // hibás kitöltés
            invalidFields.push('Jelszó');
            $password.addClass(invalidClass);
            $password.removeClass(validClass);

        } else {
            // helyes kitöltés
            $password.removeClass(invalidClass);
            $password.addClass(validClass);

        }

        // jelszó megerősítése
        let passwordAgain = $passwordAgain.val();
        if(password != passwordAgain || passwordAgain.length <= 5){
            // hibás kitöltés
            invalidFields.push('Jelszó megerősítés');
            $passwordAgain.addClass(invalidClass);
            $passwordAgain.removeClass(validClass);
        } else {
            // helyes kitöltés
            $passwordAgain.addClass(validClass);
            $passwordAgain.removeClass(invalidClass);
        }


        // ÁSZF
        let isChecked = $checkbox.prop('checked');
        if(!isChecked){
            // hibás kitöltés
            invalidFields.push('ÁSZF');
            $checkbox.removeClass(validClass);
            $checkbox.addClass(invalidClass);

        } else {
            // helyes kitöltés
            $checkbox.removeClass(invalidClass);
            $checkbox.addClass(validClass);
        }

        // sikeres-sikertelen elágazás
        if(invalidFields.length == 0){
            // sikeres kitöltésre reagálás
            $successText.show();
            $form.hide();
            $alert.hide();

            
        } else {
            // sikertelen kitöltésre reagálás
            $alert.show();
            
            // hibák kiírása
            
            $.each(invalidFields, function(index, field){
    
                $invalidFieldList.append('<li>' + field + '</li>');
                
            });
        }
        
    });
});