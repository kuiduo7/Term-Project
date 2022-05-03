$(function () {
    let allLis = $("#F-nav li");

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
    el: '#F_trainers',
    data: {
        see : false,
        video : ''
    },
    methods: {
        show_video(type){
            this.see = true;
            if(type == 1){
                this.$refs.videoPlay.src = '/images/video1.mp4';
            }
            else if(type == 2){
                this.$refs.videoPlay.src = '/images/video2.mp4';
            }else{
                this.$refs.videoPlay.src = '/images/video3.mp4';
            }
        },
        cancel() {
            this.see = false;
            this.video = '';
        },
    }
})

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

var app = new Vue({
    el: '#F_footer',
    data: {
        
    },
    methods: {
        to_facebook(){
            window.location.href='';
        },
        to_instagram(){
            window.location.href='https://www.instagram.com/yi_h75/';
        },
        to_linkedin(){
            window.location.href='https://www.linkedin.com/in/yi-hou-882032223/';
        },
        to_github(){
            window.location.href='https://github.com/kuiduo7/Term-Project';
        },
        changeActive($event){
            $event.currentTarget.className="normal active";
          },
        removeActive($event){
            $event.currentTarget.className="normal";
        }
    }
})