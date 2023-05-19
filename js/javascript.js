//swiper
$(function(){
    var swiper = new Swiper('.swiper', {
        loop: true, //循環
        autoHeight: true, //自動高
        autoplay: {  //自動播放
            delay: 3500, //延遲
            disableOnInteraction: false, //
            pauseOnMouseEnter: true, //滑鼠滑入時停止
        },
        slidesPerView: 1, //顯示個數
        pagination: { //dot
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper_gameRowList = new Swiper('.swiper_gameRowList', {
        loop: true,
        autoHeight: true, //自動高
        slidesPerView: 3, //顯示個數
        spaceBetween: 30,
        centeredSlides: true,
        navigation: { //arrow
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper_vip = new Swiper('.swiper_vip', {
        loop: false, //循環
        autoHeight: true, //自動高
        slidesPerView: 3, //顯示個數
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });

    var swiper_bank = new Swiper('.swiper_bank', {
        loop: false, //循環
        autoHeight: true, //自動高
        slidesPerView: 3, //顯示個數
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });

    var swiper_deposit = new Swiper('.swiper_deposit', {
        loop: false, //循環
        autoHeight: true, //自動高
        slidesPerView: 5, //顯示個數
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
})

//home
$(function(){
    var arr = [];
    var v = 0;

    $(".home .newsBox li").each(function(){
        arr[v] = $(this).text();

        v ++;
    })

    var c = $(window).innerWidth() / 25 * 2;

    $(".home .newsBox li").each(function(){
        var n = $(this).prop("scrollHeight");

        if(n > c)
        {
            var text = $(this).text().substring(0,36);

            $(this).text(text + "...");
        }
    })

    $(document).on("click",".home .newsBox li.hidden",function(){
        var i = $(this).index();

        $(this).text(arr[i]);

        $(this)
        .removeClass("hidden")
        .addClass("active");
    })

    $(document).on("click",".home .newsBox li.active",function(){
        var text = $(this).text().substring(0,36);

        $(this).text(text + "...");

        $(this)
        .removeClass("active")
        .addClass("hidden");
    })
})

//mail
$(function(){
    $(".mailWrap .tab_List li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".mailWrap .changeBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".mailWrap .changeBox .type li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(this)
        .closest(".changeBox")
        .find(".contentBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    
})

//historyWrap / promotionWrap / fourGenerationWrap
$(function(){
    $(".innerPage .tab_List li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".historyWrap .changeBox:eq("+ n +"), .promotionWrap .changeBox:eq("+ n +"), .fourGenerationWrap .changeBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".promotionWrap .changeBox .btnWrap .btn").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
})

//wallet + transfer + withdraw 遊戲平台收縮
$(function(){
    $(document).on("click", ".platformBlock .state", function(){
        $(this)
        .find("p")
        .text("閉じる")
        .closest(".platformBlock")
        .addClass("active");
    });

    $(document).on("click", ".platformBlock.active .state", function(){
        $(this)
        .find("p")
        .text("開く")
        .closest(".platformBlock")
        .removeClass("active");
    })
})

//deposit 分頁切換
$(function(){
    $(".depositWrap .swiper-slide button").click(function(){
        $(this)
        .addClass("active")
        .closest(".swiper-slide")
        .siblings()
        .find("button")
        .removeClass("active");

        var n = $(this).closest(".swiper-slide").index();

        $(".depositWrap ul.bg_wood.long li:eq("+ n +")")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".depositWrap .changeBlock:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//filter
$(function(){
    $(".filter .close_ic, .filter .closeBtn").click(function(){
        $(".filter, .filter>div")
        .removeClass("display");

        $("header .listBtn")
        .addClass("display");

        $(".jumpWindow.big.passwordWindow")
        .removeClass("big")
        .addClass("small");
        $(".jumpWindow.passwordWindow ol, .jumpWindow.passwordWindow .check")
        .removeClass("display")
    })

    $("header .listBtn,.home .loginBox .login").click(function(){
        $(".filter, .sideWindow")
        .addClass("display");

        $("header .listBtn")
        .removeClass("display");
    })

    $(".jumpWindow.news .typeList button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        var n = $(this).index();

        $(".jumpWindow.news ul ol:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".loginBox .forget").click(function(){
        $(".filter, .filter>div")
        .removeClass("display");

        $(".filter, .jumpWindow.passwordWindow")
        .addClass("display");
    })

    $(".jumpWindow.small.passwordWindow button").click(function(){
        $(".jumpWindow.small.passwordWindow")
        .removeClass("small")
        .addClass("big");

        $(".jumpWindow.passwordWindow ol, .jumpWindow.passwordWindow .check")
        .addClass("display")
    })

    $(".innerPage .dataBox .open").click(function(){
        $(".filter, .filter>div")
        .removeClass("display");

        $(".filter, .jumpWindow.friendWindow")
        .addClass("display");
    })

    $(".innerPage .phoneChange").click(function(){
        $(".filter, .filter>div")
        .removeClass("display");

        $(".filter, .jumpWindow.phoneWindow")
        .addClass("display");
    })

    $(document).on("click",".unLogin",function(){
        $(".filter, .filter>div")
        .removeClass("display");

        $(".filter, .jumpWindow.normalWindow")
        .addClass("display");
    })

    $(".affiliatePage button.check").click(function(){
        $(".filter, .filter>div")
        .removeClass("display");

        $(".filter, .jumpWindow.agentApplyWindow")
        .addClass("display");
    })

})

$(function(){
    $(".swiper_gameRowList .swiper-button-prev, .swiper_gameRowList .swiper-button-next").click(function(){
        if($(".swiper-slide-active .gameRow").hasClass("sport"))
        {
            $(".gameWrap .sportBox")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(".swiper-slide-active .gameRow").hasClass("live"))
        {
            $(".gameWrap .liveBox")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(".swiper-slide-active .gameRow").hasClass("slot"))
        {
            $(".gameWrap .slotBox")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(".swiper-slide-active .gameRow").hasClass("fish"))
        {
            $(".gameWrap .fishBox")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(".swiper-slide-active .gameRow").hasClass("board"))
        {
            $(".gameWrap .boardBox")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
})

$(function(){
    $(".registerWrap .checkBox label").change(function(){
        $(this)
        .toggleClass("active");
    })
})