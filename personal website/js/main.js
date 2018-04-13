'use strict';
$(document).ready(function () {
    var navigating = false, curPage = 1, pages = $('.section').length, $sections = $('.sections'), $paginationPage = $('.pagination .page'), $paginationTotal = $('.total-pages'), $textStuff = $('.section-heading, .additional-text');
    if (pages >= 10) {
        $paginationTotal.text(pages);
    } else {
        $paginationTotal.text('0' + pages);
    }
    function randomDelay() {
        $('.left-part').css('transition-delay', (Math.floor(Math.random() * 9) + 4) / 10 + 's');
        for (var i = 1; i <= pages; i++) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            $('.bg-part:nth-child(' + i + ')').css('transition-delay', (Math.floor(Math.random() * 9) + 4) / 10 + 's');
        }
        window.CP.exitedLoop(1);
    }
    function timeoutNav(t) {
        var time = t || 2000;
        $textStuff.addClass('not-visible');
        setTimeout(function () {
            navigating = false;
            randomDelay();
        }, time);
        setTimeout(function () {
            $('.section-heading, .additional-text').css({ 'margin-top': 0 - (parseInt($('.nav-elem.active').attr('data-page')) - 1) * 100 + 'vh' }).hide();
        }, 410);
        setTimeout(function () {
            $textStuff.show();
            $textStuff.css('top');
            $textStuff.removeClass('not-visible');
        }, time + 10);
    }
    function magicStuff(paramPage) {
        if (paramPage)
            curPage = paramPage;
        navigating = true;
        var calculatedMargin = 0 - (curPage - 1) * 100;
        $('.bg-part, .left-part').css('margin-top', calculatedMargin + 'vh');
    }
    function trickyStuff(page) {
        $('.left-part, .bg-part').css({
            'transition-duration': '0s',
            'transition-delay': '0s'
        });
        $('.main').css('top');
        magicStuff(page);
        $('.main').css('top');
        $('.left-part, .bg-part').css('transition-duration', '0.8s');
        randomDelay();
    }
    function pagination(pg) {
        $('.nav-elem').removeClass('active');
        $('.nav-' + pg).addClass('active');
        curPage = pg;
        if (pages >= 10) {
            $paginationPage.text(pg);
        } else {
            $paginationPage.text('0' + pg);
        }
    }
    function navigateUp() {
        if (curPage > 1) {
            curPage--;
            pagination(curPage);
            magicStuff();
            timeoutNav();
        }
    }
    function navigateDown() {
        if (curPage < pages) {
            curPage++;
            pagination(curPage);
            magicStuff();
            timeoutNav();
        }else if(curPage == pages){
            curPage = 0;
        }
    }
     $($sections).on('click', function (e) {
        if (!navigating) {
            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                navigateUp();
            } else {
                navigateDown();
            }
        }
    });

    //mousewheel DOMMouseScroll
    $($sections).on('click', '.sidebar-hover, .sidebar-real', function (e) {
        e.stopPropagation();
    });
    $(document).on('click', '.nav-elem:not(.active)', function () {
        if (navigating)
            return;
        var activePage = parseInt($('.nav-elem.active').attr('data-page'), 10), futurePage = $(this).attr('data-page');
        pagination(futurePage);
        if (Math.abs(activePage - futurePage) > 2) {
            var $fakePage = $('.section-' + futurePage).clone(), $currentPage = $('.section-' + activePage), fakeNumber = 0;
            if (activePage < futurePage) {
                $currentPage.after($fakePage);
                fakeNumber = activePage + 1;
                $('.main').css('top');
                randomDelay();
                magicStuff(fakeNumber);
            } else {
                $currentPage.before($fakePage);
                fakeNumber = activePage - 1;
                trickyStuff(activePage + 1);
                $('.main').css('top');
                randomDelay();
                $('.main').css('top');
                magicStuff(activePage);
            }
            timeoutNav(2050);
            setTimeout(function () {
                $fakePage.remove();
                trickyStuff(futurePage);
            }, 2000);
        } else {
            magicStuff(futurePage);
            timeoutNav();
        }
    });
//    canvas
    var canvas = document.getElementsByTagName("canvas");
    var canvas2 = document.getElementsByTagName("canvas");
    // console.log(canvas);
    for(var i=0; i<canvas.length; i++){
        canvas[i].getContext("2d").strokeStyle = "#cfcfcf";
        canvas[i].getContext("2d").lineWidth = "4";
        //绘制圆
        canvas[i].getContext("2d").beginPath();
        canvas[i].getContext("2d").arc(79,79,75,0,2*Math.PI);
        canvas[i].getContext("2d").stroke();
    }
    for(var i=0; i<canvas2.length; i++){
        canvas2[i].getContext("2d").strokeStyle = "#888888";
        canvas2[i].getContext("2d").lineWidth = "4";
        //绘制圆
        canvas2[i].getContext("2d").beginPath();
    }
    canvas2[0].getContext("2d").arc(79,79,75,-Math.PI/2,Math.PI*1.5*0.6);
    canvas2[0].getContext("2d").stroke();
    canvas2[1].getContext("2d").arc(79,79,75,-Math.PI/2,Math.PI*1.5*0.9);
    canvas2[1].getContext("2d").stroke();
    canvas2[2].getContext("2d").arc(79,79,75,-Math.PI/2,Math.PI*1.5*0.85);
    canvas2[2].getContext("2d").stroke();

//    导航
    var oNav = document.getElementById('nav');
    var oHead = document.getElementById('head');
    var aLi = oNav.getElementsByTagName('li');
    var oLPart = document.getElementById('l-part2');
    // console.log(oHead.getBoundingClientRect().bottom);
    window.onscroll = function () {
        if(oNav.getBoundingClientRect().top <= 0){
            oNav.style.position = 'fixed';
            oLPart.style.position = 'fixed';
            oLPart.style.top = '70px';
        }
        if(oHead.getBoundingClientRect().bottom > 0){
            oNav.style.position = 'relative';
            oLPart.style.position = 'relative';
            oLPart.style.top = '0px';
        }
    };
    for(var i=0; i<aLi.length; i++){
        aLi[i].onclick = function () {
            for(var i=0;i<aLi.length;i++){
                   aLi[i].className="";
               }
            this.className = 'select';
        }
    }

});