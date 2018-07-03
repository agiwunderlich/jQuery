$(function () {

    // elemek összegyűjtése
    let $contentWrapper = $('#content-wrapper');
    let $buttons = $('button');

    // változók
    let templateArticle = {
        title: 'Mai hírek',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, veniam corporis delectus voluptate eligendi explicabo voluptates dicta quis cumque voluptatum placeat nam doloremque commodi pariatur odit id soluta et est.'
    };

    let articleCollection = [];
    let pageSize = 5;

    // cikk generálás
    for (let index = 0; index < 15; index++) {

        articleCollection.push(templateArticle);
    }

    // gombnyomásra reagálás
    $buttons.click(function () {
        let $currentButton = $(this);
        let pageIndex = $currentButton.text();
        RenderPage(pageIndex);

    });

    RenderPage(1);


    ////////////////////////////////////////////////

    function RenderPage(pageIndex) {

        $contentWrapper.html('');

        for (
            let index = (pageIndex - 1) * pageSize; index < pageIndex * pageSize; index++
        ) {

            RenderArticle(index);
        }
    }

    function RenderArticle(index) {
        let article = articleCollection[index];
        let html = '<div><strong>' + article.title + '(' + (index + 1) + ')</strong><p>' + article.body + '</p></div>';
        $contentWrapper.append(html);
    }



});