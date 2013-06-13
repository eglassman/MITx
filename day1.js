function read_operand(mytokenarray) {
    var token = mytokenarray[0]; //first element of the array
    mytokenarray.shift(); //the first element using the .shift() method of array
    if (token == "(") return evaluation(mytokenarray);
    else var number = parseInt(token);  //use built-in function parseInt() to convert num to an integer
    try {
        if (isNaN(number)) throw "number expected";
        else 
            return number; // result is the value NaN (“not a number”), throw an error “number expected”
    } //otherwise return the integer value
    catch(err) {
        console.log('error!');
    }
}

function evaluation(mytokenarray) {
   //try {
       if (mytokenarray.length === 0) throw "missing operand";
       //if array is empty, throw an error “missing operand”

    var value = read_operand(mytokenarray);
   while (mytokenarray.length !== 0 && value != ")") {
       var operator = mytokenarray.shift(); // token, remove from array
       if (operator=="(") {
           mytokenarray.shift()
           return evaluation(mytokenarray)
       }
       //if ( operator isn’t +, -, * or /, throw an error “unrecognized operator”
       //if (operator !== "+" | operator !=="-") throw "unrecognized operator"; //|"*"|"/")  // 
       if (mytokenarray.length===0) throw "missing operand"; // array is empty, throw an error “missing operand”
       var secondNum = read_operand(mytokenarray);
        if (operator=="+") var valueOut = parseInt(value) + parseInt(secondNum);   // perform requested operation
        else if (operator=="-") valueOut = parseInt(value) - parseInt(secondNum);
        else if (operator=="*") valueOut = parseInt(value) * parseInt(secondNum);
        else if (operator=="/") valueOut = parseInt(value) / parseInt(secondNum);
        else throw "unrecognized operator";
   }
   return valueOut
   //}
   /*catch(err) {
       console.log('error!');
   }*/
}

function calculate(text) {
    var pattern = /\d+|\+|\-|\*|\/|\(|\)/g;
    var tokens = text.match(pattern);
    //return JSON.stringify(tokens);
     try {
      var val = evaluation(tokens);
      if (tokens.length !== 0) throw "ill-formed expression"
      else return String(val)
    } catch (err) {
       return err;   // error message will be printed as the answer
    }
}
            
            
function setup_calc(div) {
    var input = $('<input></input>',{type: "text", size: 50})
    var output = $('<div></div>',{class: "output"});
    var button = $('<button>Calculate</button>');
    button.bind("click",function (){
        output.text(String(calculate(input.val())));
    });
    $(div).append(input,button,output);
}
            
$(document).ready(function (){
    $('.calculator').each(function(){
        //this refers to the <div> with class calculator
        setup_calc(this);
    });
});

