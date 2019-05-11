
(function() {
  var canvas = this.__canvas = new fabric.Canvas('c');
  fabric.Object.prototype.transparentCorners = false;


 
    

    $('.acc-img').click(function(){
      fabric.Image.fromURL(this.getAttribute('src'), function(img) {
        img.scale(0.1).set({
          left: 100,
          top: 100,
          angle: -15,
          clipTo: function (ctx) {
            ctx.arc(0, 0,10000, 0, Math.PI * 2, false);
          }
        });
        canvas.add(img).setActiveObject(img);
      });
      $(".choose-accessoires-container").hide(500);

    })
     
})();
// ******************************************** canvas part


$(".background").click(function() {
  $(".choose-background-container").show(1000);
});
$(".accessoires").click(function() {
  $(".choose-accessoires-container").show(1000);
});
$(".close").click(function() {
  $(".choose-background-container").hide(500);
  $(".choose-accessoires-container").hide(500);
});

var workSpace =document.getElementById('workSpace');


$('.bg-img').click(function(){
 workSpace.style.backgroundImage = "url("+this.getAttribute('src')+")";
 $('.choose-background-container').hide(1000)
})


