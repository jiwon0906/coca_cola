start()
var imgs = 2;
var now = 0;
start();
function start(){
    $("#slide .slide_img img").eq(0).siblings().css({"opacity":'0'});
setInterval(function(){slide();},3000);
}

function slide(){
    now=now==imgs?0:now+=1;
    $("#slide .slide_img  img").eq(now-1).css({"opacity":"0"});
    $("#slide .slide_img  img").eq(now).css({"opacity":"1"});
}

$(function(){
    $(".sns a").scroll(function(){
        $('body,html').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});