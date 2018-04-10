$(function(){
var oButton = document.getElementById('n-btn');
var oBignav = document.getElementById('big-nav');
var oSnav = document.getElementById('s-nav');
var oUlnav = document.getElementById('ul-nav');
var aliba = oUlnav.getElementsByClassName('b-a');
var aCmenu = oBignav.getElementsByTagName('div');
var oLine = document.getElementById('a-line');
oButton.onclick = function () {
    for(var i = 0;i <aCmenu.length;i++){
    if(aCmenu[i].className=='nav-button cmenu'){
        oSnav.style.display = 'none';
        oButton.classList.remove('cmenu');
    }else{
        oSnav.style.display = 'block';
        oButton.classList.add('cmenu');
    }
    }

};
for (var i=0;i<aliba.length;i++){
    aliba[i].onmouseover = function () {
        oLine.style.transform = 'rotate(45deg)';
    };
    aliba[i].onmouseout = function () {
        oLine.style.transform = 'rotate(-45deg)';
    };
}
var aTop = document.getElementById('to-top');
aTop.onclick = function () {
    var iScrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
    var timer = setInterval(function () {
        window.scrollTo(0,iScrollTop*=0.6);
        if (iScrollTop<=1){
            clearInterval(timer);
        }
    },100);
};

var aLt = document.getElementById('lt');
var aGt = document.getElementById('gt');
var oWork = document.getElementById('work');
var aWorks = oWork.getElementsByClassName('works');

aGt.onclick = function () {

    if(oWork.offsetLeft > -724){
        animate(oWork,{left:oWork.offsetLeft - (aWorks[0].offsetWidth + 59)});
        // oWork.style.left =  oWork.offsetLeft - (aWorks[0].offsetWidth + 60)  +'px';
    }
    console.log(oWork.offsetLeft);
};
aLt.onclick = function () {
    if(oWork.offsetLeft < 0) {
        animate(oWork,{left:oWork.offsetLeft + (aWorks[0].offsetWidth + 59)});
        // oWork.style.left = oWork.offsetLeft + (aWorks[0].offsetWidth + 60) + 'px';
    }
    console.log(oWork.offsetLeft);
};

});
