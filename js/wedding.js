
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
     
      // shaps part 
     
    
    $('.shap').click(function(){
      var rectangle = new fabric.Rect({
        width: 100,
        height: 100,
        top: 100,
        left: 100,
        fill: 'rgba(255,0,0,0.5)'
      });
  
      var triangle = new fabric.Triangle({
        width: 100, height: 100, left: 50, top: 300, fill: '#cca'
      });

      var cir = new fabric.Circle({
        top: 10,
        left: 100,
        radius: 50,
        fill: '',
        stroke: 'blue',
        strokeWidth: 2
    });

    var trapezoid = [ {x:-100,y:-50},{x:100,y:-50},{x:150,y:50},{x:-150,y:50} ];
    var emerald = [ 	{x:850,y:75},
                      {x:958,y:137.5},
                      {x:958,y:262.5},
                      {x:850,y:325},
                      {x:742,y:262.5},
                      {x:742,y:137.5},
                      ];
    var star4 = [
      {x:0,y:0},
      {x:100,y:50},
      {x:200,y:0},
      {x:150,y:100},
      {x:200,y:200},
      {x:100,y:150},
      {x:0,y:200},
      {x:50,y:100},
      {x:0,y:0}
    ];
    var star5 = [ 	{x:350,y:75},
                  {x:380,y:160},
                  {x:470,y:160},
                  {x:400,y:215},
                  {x:423,y:301},
                  {x:350,y:250},
                  {x:277,y:301},
                  {x:303,y:215},
                  {x:231,y:161},
                  {x:321,y:161},];
    var shape = new Array(trapezoid,emerald,star4,star5);
    
    var polyg = new fabric.Polygon(shape[1], {
        top: 180,
        left: 200,
        fill: '',
        stroke: 'blue',
        strokeWidth: 2
    });


      if(this.getAttribute('kind')== 'rectangle'){
        canvas.add(rectangle);
      }else if(this.getAttribute('kind')== 'triangle'){
        canvas.add(triangle);
      }else if(this.getAttribute('kind')== 'circle'){
        canvas.add(cir);
      }else if(this.getAttribute('kind')== 'polyg'){
        canvas.add(polyg);
      }
      $(".choose-shaps-container").hide(500);
    })
    $('.shaps').click(function(){
      $(".choose-shaps-container").show(1000);
    });

    $('.color').click(function(){
      var colorValue = this.getAttribute('mycolor');
      

 
    
    })
    
  
  
// free drawing part 
// free drawing part 
//text part


$('.text').click(function(){
     
  
  var canvas = new fabric.Canvas('c');
  // Define an array with all fonts
  var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata"];
  
  var textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
    left: 50,
    top: 50,
    width: 150,
    fontSize: 20
  });
  canvas.add(textbox).setActiveObject(textbox);
  fonts.unshift('Times New Roman');
  // Populate the fontFamily select
  var select = document.getElementById("font-family");
  fonts.forEach(function(font) {
    var option = document.createElement('option');
    option.innerHTML = font;
    option.value = font;
    select.appendChild(option);
  });
  
  // Apply selected font on change
  document.getElementById('font-family').onchange = function() {
    if (this.value !== 'Times New Roman') {
      loadAndUse(this.value);
    } else {
      canvas.getActiveObject().set("fontFamily", this.value);
      canvas.requestRenderAll();
    }
  };
  
  function loadAndUse(font) {
    var myfont = new FontFaceObserver(font)
    myfont.load()
      .then(function() {
        // when font is loaded, use it.
        canvas.getActiveObject().set("fontFamily", font);
        canvas.requestRenderAll();
      }).catch(function(e) {
        console.log(e)
        alert('font loading failed ' + font);
      });
  }
  

  })

/// text part 
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
  $(".choose-shaps-container").hide(500);

  $(".choose-accessoires-container").hide(500);
});



$('.bg-img').click(function(){
 workSpace.style.backgroundImage = "url("+this.getAttribute('src')+")";
 $('.choose-background-container').hide(1000)
})


