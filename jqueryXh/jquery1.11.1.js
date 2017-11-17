/**
 * Created by Lenovo on 2017/9/11.
 */
//根据可视区域的宽给body改变背景色
function changeBodyBackground() {
    //获取一下浏览器可视区域的宽;
    if(client().width > 960){
        document.body.style.background = "red";
    }else if(client().width > 640){
        document.body.style.background = "blue";
    }else{
        document.body.style.background = "yellow";
    }

}

//获取浏览器可视区域宽高方法封装
function client(){
    return {
        "width": window.innerWidth || document.documentElement.clientWidth,
        "height":window.innerHeight ||document.documentElement.clientHeight
    };
}

//获取页面被卷去的顶部和左侧距离
function scroll(){
    return {
        "top": window.pageYOffset || document.documentElement.scrollTop,
        "left":window.pageXOffset || document.documentElement.scrollLeft
    }
}
//显示和隐藏方法
function show(ele){
    ele.style.display = "block";
}
function hide(ele){
    ele.style.display = "none";
}