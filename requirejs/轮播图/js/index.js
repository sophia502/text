require(["jQuery","carousel"],function($,carousel){
var setting = {
    selector:"container1",
    // 轮播图渲染到什么地方
    imgArr : ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jg"],
    speed : 500,
    btnStyle : "square",//circle
    arrowPos :"bottom"//center
};
    var carsousel = new Carousel(setting);
    carousel.init();
});