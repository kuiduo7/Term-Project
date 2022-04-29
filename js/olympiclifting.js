let this_;
var app = new Vue({
    el: '#app',
    data: {
        title1 : '',
        title2 : '',
        description : '',
        imagetop : '',
        introduction : '',
        imageright: ''
    },
    created: function() {
        this_ = this;
        this_.get_data();
    },
    methods: {
        get_data(){
            $.ajax({
                url: "/data/olympiclifting.json",
                type: "GET",
                dataType:'json',
                success: function(rs) {
                    if (rs.code == "0") {
                        this_.title1 = rs.data.title1;
                        this_.title2 = rs.data.title2;
                        this_.description = rs.data.description;
                        this_.imagetop = rs.data.imagetop;
                        this_.imageright = rs.data.imageright;
                        this_.introduction = rs.data.introduction;
                    }
                }
            })
        }
    }
})