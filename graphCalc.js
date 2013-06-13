
$(document).ready(function (){
     //. finds everything in of the calculator class into a list
    $('.graphCalc').each(function(){
        //this refers to the <div> with class calculator
        setup_graphCalc(this);
    });  
 });
 
 function setup_graphCalc(div){
     
     var fxspan = $('<span></span>');
     var fxtag = $('<h6>f(x):</h6>');
     var input = $('<input></input',{type: "text", size : 50});
     //var firstLine = $('<div></div>');
     
     fxspan.append(fxtag, input);
     
     var minxtag = $('<span></span>', {label:'min x:'});
     var inputX = $('<input></input',{type: "text", size : 50});
     
     var minytag = $('<span></span>', {label:'min y:'});
     var inputY = $('<input></input',{type: "text", size : 50});
     
     
     var outputCanvas = $('<canvas id="output" width="200" height="200"></canvas>');
     var button = $("<button> Plot</button>");
     button.bind("click", function(){
         plotGraph();
     });
     $(div).append(outputCanvas,fxspan, button);
 }
 
 
function plotGraph(){
    var JQcanvas = $('#output:first');
    var DOMcanvas = JQcanvas[0];
    var ctx = DOMcanvas.getContext('2d');
    
}



// $(document).ready(function (){
//      //. finds everything in of the calculator class into a list
//     $('.graphCalc').each(function(){
//         //this refers to the <div> with class calculator
//         setup_graphCalc(this);
//     });  
//  });
 
//  function setup_graphCalc(div){
//      var input = $('<input></input>',{type: "text", size : 50});
//      var inputX = $('<input></input>',{type: "text", size : 50});
//      var inputY = $('<input></input>',{type: "text", size : 50});
//      var outputCanvas = $('<canvas id="output" width="200" height="200"></canvas>');
//      var button = $("<button> Plot</button>");
//      button.bind("click", function(){
//          plotGraph();
//      });
//      $(div).append(outputCanvas, input,inputX, inputY, button);
//  }
 
// function plotGraph(){
//     var JQcanvas = $('#output:first');
//     var DOMcanvas = JQcanvas[0];
//     var ctx = DOMcanvas.getContext('2d');
    
// }

// function checkInput() {
    
    
// }