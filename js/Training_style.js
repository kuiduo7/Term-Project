$(function(){
    $(window).on("resize" , function(){
        // get window length
        let clientW = $(window).width();

        console.log(clientW);

        // set the size of window
        let isShowBigImg = clientW >= 640;

        // get all item
        let $allItems = $("#F_carousel .item");
        console.log($allItems);

        $allItems.each(function(index,item){
            let src = isShowBigImg ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl = 'url("'+ src +'")';

            $(item).css({
                backgroundImage : imgUrl
            });

            if(!isShowBigImg){
                let $img = "<img src=' " + src + " '>";
                $(item).empty().append($img);
            }else{
                $(item).empty();
            }
        })

        
    });
     $(window).trigger("resize");
});

$('.carousel').carousel({
    interval: 2000,
  })