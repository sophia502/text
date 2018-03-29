var oButton = document.getElementById('n-btn');
var oBignav = document.getElementById('big-nav');
var oSnav = document.getElementById('s-nav');
var aCmenu = oBignav.getElementsByTagName('div');
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