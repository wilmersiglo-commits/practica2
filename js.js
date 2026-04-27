let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let boton=document.getElementById("boton")
let contador=document.getElementById("contador")
let suma

boton.addEventListener("click",mostrar)

function mostrar () {

    num1=Number(num1.value)
    num2=Number(num2.value)

    suma=num1+num2

    contador.textContent= suma

}
