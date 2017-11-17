window.onload=function() {
    var btn = document.getElementsByTagName('i')[0];
    var Itop = document.getElementById('I-top');
    btn.onclick = function () {
        Itop.style.display = 'none';
    }
    var toggle1 = document.getElementsByClassName('toggle1')[0];
    var hMap = toggle1.getElementsByClassName('h-map')[0];
    toggle1.onmouseenter = function () {
        hMap.style.display = 'block';
        console.log(2);
    }
    toggle1.onmouseleave = function () {
        hMap.style.display = 'none';
    }

    var sj = document.getElementsByClassName('sj')[0];
    var eWm = sj.getElementsByClassName('ewm')[0];
    sj.onmouseenter = function () {
        eWm.style.display = 'block';
        console.log(1);
    }
    sj.onmouseleave = function () {
        eWm.style.display = 'none';
    }


    var ul = document.getElementsByClassName('Ul')[0];
    var liArr = ul.getElementsByTagName('li');
    for (var i = 0; i < liArr.length; i++) {
        liArr[i].onmouseenter = function () {
            for (var j = 0; j < liArr.length; j++) {
                liArr[j].className = '';
                liArr[0].className = 'current';
            }
            this.className = 'current';
        }
        liArr[i].onmouseleave = function () {
            for (var j = 0; j < liArr.length; j++) {
                liArr[j].className = '';
            }
            liArr[0].className = 'current';
        }
    }




    var first = document.getElementsByClassName("Top")[0];
    var second = document.getElementById("Search");
    var third = document.getElementsByClassName("Conten")[0];

    window.onscroll = function () {
        if(scroll().top > first.scrollHeight){
            second.className = " Search fixed";
            third.style.marginTop = second.scrollHeight+"px";
        }else{
            second.className = "";
            third.style.marginTop = 0;
        }
    }




}









function scroll(){
    return {
        "top": window.pageYOffset || document.documentElement.scrollTop,
        "left": window.pageXOffset || document.documentElement.scrollLeft
    };
}