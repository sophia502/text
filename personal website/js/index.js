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

});