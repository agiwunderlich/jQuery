$(function(){

    // elemek összegyűjtése
    let $menuItems = $('ul');
    let $menuItemsAndMenuButton = $('ul, button');
    let menuOpened = false;

    // gombnyomás kezelése
    $menuItemsAndMenuButton.click(function(){
        
       

        if(menuOpened){
            $menuItems.slideUp();
            menuOpened = false;
            
        } else {
            $menuItems.slideDown();
            menuOpened = true;
        }
    });
});