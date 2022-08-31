$(function(){	
    $(window).scroll(function(){
    
    //セクション２から３の間はこれ
    if ($(window).scrollTop() < $('#profile').offset().top){
        $("header").css("background", "rgb(184, 235, 232)");
    }
    //セクション２から３の間はこれ
    else if ($(window).scrollTop() > $('#profile').offset().top && $(window).scrollTop() < $('#skill').offset().top){
        $("header").css("background", "rgb(235, 184, 227)");
    }
    //セクション3から4の間はこれ
    else if ($(window).scrollTop() > $('#skill').offset().top && $(window).scrollTop() < $('#work').offset().top){
        $("header").css("background", "#fff");
    }
    else if ($(window).scrollTop() > $('#work').offset().top && $(window).scrollTop() < $('#contact').offset().top){
        $("header").css("background", "rgb(120, 122, 122)");
    }
    //セクション３より進んだらこれ
    else if($(window).scrollTop() > $('#contact').offset().top){
      $("header").css("background", "rgb(231, 227, 188)");
    }
       }
    );
 }); 

//  参考：https://ideaideal.jp/how-to-change-the-nav-color-according-to-scrolling/4