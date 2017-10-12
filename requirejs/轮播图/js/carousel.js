define(["jquery"],function($){
    function Carousel(){
        this.$container = $('<div class="carousel-container"></div>');//$开头的原因，因为每一个对象都是jQuery对象
        this.$tabs = $('<ul class="carousel-tabs"></ul>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$prev = $('<span class="carousel-prev">&lt;</span>');
        this.$next = $('<span class="carousel-next">&gt;</span>');
        this.defaultSettings = {
            selector : document.body,
            imgArr : [],
            speed : 1000,
            btnStyle : "square",//circle
            arrowPos : "bottom"//center
        };
        $.extend(this.defaultSettings, settings);
    }
    Carousel.prototype.init = function(){
        this.$container.append(this.$tabs).append(this.$imgs).append(this.$arrows);
        this.$arrows.append(this.$prev).append(this.$next);
        for(var i=0; i<this.defaultSettings.imgArr.length; i++){
            var $li = $("<li></li>").html(i + 1);
            this.$tabs.append($li);

            var $img = $("<img />").attr("src", this.defaultSettings.imgArr[i]);
            this.$imgs.append($img);
        }
        if(this.defaultSettings.btnStyle == "circle"){
            $("li", this.$tabs).html("").css({
                borderRadius : "50%"
            });
        }
        this.$prev.addClass(this.defaultSettings.arrowPos);
        this.$next.addClass(this.defaultSettings.arrowPos);


        $("img", this.$imgs).eq(0).addClass("selected");
        $("li", this.$tabs).eq(0).addClass("selected");
        $(this.defaultSettings.selector).append(this.$container);
    };
    return Carousel;
});