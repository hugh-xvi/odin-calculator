const display=document.querySelector('#display')
function appendToDisplay(input){
    display.value += input; /* sends the value of the button click to the function */
}
function clearDisplay(){
    display.value="";
    /* makes the value an empty string */
}

function calculate(){
    try{ /* lets you test block of code for errors */
        display.value= eval(display.value)
    }
    catch(error){ /* if there is an error because if you put 7 + and click equal it would give an error */
        display.value="Error"
    }
    /* eval function is basically a built in calculator function */

}
