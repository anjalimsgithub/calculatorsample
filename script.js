//1. display numbers in textbox
function displayNum(num){
    result.value +=num
}

//2.clear the content in textbox
function clearBox(){
    result.value =""
}

//3.Evaluate the expression
function evaluateExp(){
    // exp=result.value
    // output=eval(exp)
    // result.value=output
    result.value=eval(result.value)
}

//4.remove last item or backspace
function removeItem(){
    currentexp=result.value
    result.value=currentexp.slice(0,-1)

}