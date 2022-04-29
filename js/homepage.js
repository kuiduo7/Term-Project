$(function(){
    let allLis = $("#F-nav li");
    console.log(allLis);
    
    $(allLis[1]).on("click", function () {
        $("html,body").animate({ scrollTop: $("#F_about").offset().top }, 1000);
    });
    $(allLis[2]).on("click", function () {
        $("html,body").animate({ scrollTop: $("#F_app").offset().top }, 1000);
    });
    $(allLis[3]).on("click", function () {
        $("html,body").animate({ scrollTop: $("#F_trainers").offset().top }, 1000);
    });
    $(allLis[4]).on("click", function () {
        $("html,body").animate({ scrollTop: $("#F_contact").offset().top }, 1000);
    });


     $(window).trigger("resize");
});

