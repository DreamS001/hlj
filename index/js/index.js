/**
 * Created by Administrator on 2017/9/24 0024.
 */

    //竖立导航
    $(window).load(function(){
        $('.S-nav>ul>li').mouseenter(function(){
            //$(this).children('.kb').stop().slideDown(1000);
            $(this).addClass('bg').siblings('li').removeClass('bg')
            $(this).children('.kb').show();
        });
        $('.S-nav>ul>li').mouseleave(function(){
            //$(this).children('.kb').stop().slideUp(1000);
            $(this).removeClass('bg')
            $(this).children('.kb').hide();
        });
    });


    //轮播图


    $(window).load(function(){
        var lb=document.getElementById('lbt');
        var ul=document.getElementById('ul');
        var ulLiArr=ul.getElementsByTagName('li');
        var ol=document.getElementById('ol');
        var arr=document.getElementById('arr');
        var left=document.getElementById('left')
        var right=document.getElementById('right')
        var imgWidth=lb.offsetWidth;

        //1.根据ul中的li创建ol中的li
        for(var i=0;i<ulLiArr.length;i++){
            var newli=document.createElement('li');
//                newli.innerHTML=i+1;
            ol.appendChild(newli);
        }
        //点亮第一个盒子，复制第一张添加到ul中
        var olLiArr=ol.getElementsByTagName('li');
        olLiArr[0].className='current';
        ul.appendChild(ulLiArr[0].cloneNode(true));

        for(var i=0;i<olLiArr.length;i++){
            olLiArr[i].index=i;
            olLiArr[i].onmouseenter=function(){
                for(var j=0;j<olLiArr.length;j++){
                    olLiArr[j].className='';
                }
                this.className='current';
                var sss=-imgWidth*this.index;
                animate(ul,sss)
                squer=key=this.index;
            }

        }


        var squer=0;
        var key=0;
        right.onclick=autoplay;

        left.onclick=function(){
            squer--;
            key--;
            if(squer==-1){
                squer=olLiArr.length-1;
            }
            if(key==-1){
                key=ulLiArr.length-2;
                ul.style.left=-(ulLiArr.length-1)*imgWidth+"px";
            }
            for(var i=0;i<olLiArr.length;i++){
                olLiArr[i].className='';
            }
            olLiArr[squer].className='current';
            var ss=-imgWidth*key;
            animate(ul,ss);

        }



        var timer=setInterval(autoplay,1500);
        lb.onmouseenter=function(){

            clearInterval(timer);
            arr.style.display='block'
        }
        lb.onmouseleave=function(){
            arr.style.display='none'
            timer=setInterval(autoplay,1500);
        }

        function autoplay(){
            squer++;
            key++;
            if(squer==olLiArr.length){
                squer=0;
            }
            if(key==ulLiArr.length){
                key=1;
                ul.style.left=0
            }
            for(var i=0;i<olLiArr.length;i++){
                olLiArr[i].className='';
            }
            olLiArr[squer].className='current';
            var ss=-imgWidth*key;
            animate(ul,ss);
        }
    });

    function animate(ele, traget) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = traget > ele.offsetLeft ? 10 : -10;
            ele.style.left = ele.offsetLeft + step + 'px';
            if (Math.abs(traget - ele.offsetLeft) <= Math.abs(step)) {
                ele.style.left = traget + 'px';
                clearInterval(ele.timer);
            }
        }, 10)
    }








    $(window).load(function(){
        $('.L-top>ul>li').mouseenter(function(){
            //$(this).children('.kb').stop().slideDown(1000);
            //$(this).show().siblings('li').hide()
            $(this).children('span').show().end().siblings('li').css('background-color','rgba(0,0,0,0.9)');
        });
        $('.L-top>ul>li').on('click',function(){
            $(this).children('s').show();
        })
        $('.L-top>ul>li').mouseleave(function(){
            //$(this).children('.kb').stop().slideUp(1000);
            //$(this).removeClass('bg')
            $(this).children('span').hide().end().siblings('li').css('background-color','rgba(0,0,0,0.1)');
        });
        $('.L-top>ul>li').on('mouseleave',function(){
            $(this).children('s').hide();
        })

    });




    $(window).load(function(){
        $('.L-bot').on('mouseenter',function(){
            $(this).children('.Hf').fadeTo(1000,0.8);
        })

        $('.L-bot').on('mouseleave',function(){
            $(this).children('.Hf').fadeOut(3000,0);
        })
    });






    $(function(){
        var oHeart = document.getElementsByClassName("heart3d")[0];

        for (var i=0;i<36 ;i++ )
        {
            var oDiv = document.createElement("div");
            oDiv.className = "heart";
            oDiv.style.transform = "rotateY("+i*10+"deg) rotateZ(45deg) translateX(30px)";
            oHeart.appendChild(oDiv);
        }
    })



//$(function(){
//    $('.Jh-Plan ul li a').onmouseenter(function(){
//        $(this).children('div').show();
//    });
//})

$(window).load(function(){
    $('.Jh-Plan ul li a').on('mouseenter',function(){
        $(this).children('.yin').fadeTo(1000,0.8);
    })

    $('.Jh-Plan ul li a').on('mouseleave',function(){
        $(this).children('.yin').fadeOut(1000,0);
    })
});
//失效的
//楼层
//$(window).load(function(){
//    $('#floor ul li').on('mouseenter click',function(){
//        $(this).addClass('L-bg').siblings('li').removeClass();
//        //$(this).parent().siblings('.back').addClass('L-bg');
//    })
//
//    $('#floor ul li').on('mouseleave',function(){
//        $(this).removeClass();
//    })
//})//

//点亮
$(function(){
    $('.tupan').find('li').on('mouseenter',function(){
        $(this).css('opacity',1).siblings('li').css('opacity',0.4);
    })

    $('.tupan').on('mouseleave',function(){
        $(this).find('li').css('opacity',1);
    })
})
//显示隐藏  底部微信二维码
$(window).load(function () {
    $('.weichat a').on('mouseover', function () {
        $('.weichat dl').show();
    })
    $('.weichat a').on('mouseleave', function () {
        $('.weichat dl').hide();
    })

})



$(function(){
    var listWidth = 0,
        listContWidth = $('.link_list_cont').width(),
        oList = $('.link_list'),
        aListItem = $('.link_list a');
    for(var i=0; i<aListItem.length; i++) {
        listWidth += parseInt(aListItem.eq(i).outerWidth());
    }
    oList.width(listWidth);
    if(listWidth > listContWidth) {
        scroll();
    }
    function scroll() {
        oList.width(listWidth*2);
        oList.append($('.link_items').clone());
        var offsetLeft = 0;

        var timer = setInterval(function() {
            offsetLeft = parseInt(oList.css('left')) - 1;
            oList.css('left', offsetLeft);
            if(offsetLeft <= (-listWidth+1)) {
                oList.css('left', 0);
                offsetLeft = 0;
            }
        }, 40);

        $('.link_list a').hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(function() {
                offsetLeft = parseInt(oList.css('left')) - 1;
                oList.css('left', offsetLeft);
                if(offsetLeft <= (-listWidth+1)) {
                    oList.css('left', 0);
                    offsetLeft = 0;
                }
            }, 40);
        })
    }
})





     //楼层跳跃
         $(function(){
             //console.log($(".Jh-Style").offset().top)

           //var sss=$(document).scrollTop();
           //  if(sss>=$(".Jh-Show").offset().top){
           //      $(".floor li").removeClass("current");
           //  }else if(sss>=$(".Jh-Plan").offset().top){
           //      $(".floor li").removeClass("current");
           //      $(".floor li").eq(2).addClass("current");
           //  }else if(sss>=$(".Jh-Hotel").offset().top){
           //      $(".floor li").removeClass("current");
           //      $(".floor li").eq(1).addClass("current");
           //  }else if(sss>=$(".Jh-Style").offset().top){
           //      $(".floor li").removeClass("current");
           //      $(".floor li").eq(0).addClass("current");
           //  }else{
           //      $(".floor li").removeClass("current");
           //  }



             //点击返回顶部，
             $(".back").click(function(){
                 $(document).scrollTop(0);

             })
             //console.log($("#floor li"))
             $("#floor li").on("click",function(){


                 var s=$(".jd").eq($(this).index()).offset().top-$('#Search').height();//$("div").height()
                 $("html,body").stop().animate({"scrollTop":s});

                 $(this).addClass("L-bg").siblings("li").removeClass("L-bg");


             })

        })



//广告

$(function(){
    $('.sc').on('click',function(){
        $(this).parent().hide();
    })
})






