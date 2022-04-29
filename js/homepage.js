$(function () {
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

var app = new Vue({
    el: '#F_training_style',
    data: {

    },
    methods: {
        jump_to_olympic_lifting() {
            window.location.href = "/html/olympic_lifting.html";
        },
        jump_to_body_building() {
            window.location.href = "/html/body_building.html";
        },
        jump_to_power_Lifting() {
            window.location.href = "/html/power_Lifting.html";
        },
        jump_to_pilates() {
            window.location.href = "/html/pilates.html";
        },
        jump_to_yoga_training() {
            window.location.href = "/html/yoga_training.html";
        },
        jump_to_functional_fitness() {
            window.location.href = "/html/functional_fitness.html";
        }
    }
})

var app = new Vue({
    el: '#F_contact',
    data: {
        nameMsg: '',
        emailMsg: '',
        titleMsg: '',
        mainMsg: ''
    },
    methods: {
        sendEmail() {
            $.ajax({
                headers: {
                    'Accept': 'application/json'
                },
                url: "https://formspree.io/f/mgedazlr",
                method: "POST",
                dataType: "json",
                data: {
                  email: this.nameMsg,
                  email: this.emailMsg,
                  title: this.titleMsg,
                  message: this.mainMsg
                },
                success: function(rs) {
                   alert("Email sent successfully!");
                   this.nameMsg = '';
                   this.emailMsg = '';
                   this.titleMsg = '';
                   this.mainMsg = '';

                },
                error: function() {
                    alert("Something is wrong! ");      
                }
              });
        }
    }
})

