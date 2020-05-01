var button = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1  =  0;
var operand2 = null;
var operator = null;

for(var i = 0; i< button.length; i++){
      button[i].addEventListener('click',function(){
          var value = this.getAttribute('data-value');
          
          if(value == '+'){
            operator = '+';
            operand1 =  parseFloat(display.textContent);
            display.innerText = "";

          } else if(value == '-'){


          }else if( value == '='){
              operand2 = parseFloat(display.textContent);
              display.innerText = operand2;

          }else if(value== "clear"){

               display.innerText = "";
          }
          
          else{
              display.innerText += value;
          }
        
      });
}