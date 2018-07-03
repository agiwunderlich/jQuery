$(function(){
    // konstansok
    const itemCount = 56;

    // elemek összegyűjtése
    let $templateCollection = $('#templateCollection');
    let $contentWrapper = $('#content-wrapper');

    // változók
    let templates = $templateCollection.children();
    

    // $.each($templateCollection.children(),function(index, template){
    //     let currentItem = $(template);
    //     console.log(currentItem);
    // });

    // tartalom generálása
    for(let index = 0; index < itemCount;index++){

        // template index generálás
        // random
        let templateIndex = Math.random();

        // *4
        templateIndex *= 4;

        // -0,5
        templateIndex -= 0.5;

        // kerekítés
        templateIndex = Math.round(templateIndex, 0);

        // templateHTML
        let templateHTML = $(templates[templateIndex]).html();

        $contentWrapper.append(templateHTML);

    }

    // masonry
    $contentWrapper.imagesLoaded(function(){
        $contentWrapper.masonry({
            itemSelector: '.content-item',
            gutter: 15
        });
    });
});