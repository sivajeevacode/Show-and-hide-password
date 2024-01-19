//select input,eye
var input=document.getElementById("input")
var eye=document.getElementById("eye")

eye.addEventListener('click',function(){
   
    if(input.type=="password")
    {
        input.type="text"
        eye.src="eye-open.png"
    }
    else
    {
        input.type="password"
        eye.src="eye-close.png"
    }

})

   