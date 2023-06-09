var n1=0,n2=0,res,texto="",uss="admin",pss="0000",contador=0


var form=document.getElementById("frmlogin").addEventListener("submit",function(evento){
    evento.preventDefault();
    var usuario=document.getElementById("usuario").value;
    var pass=document.getElementById("password").value;
    var btn=document.getElementById("boton");
    var url="../respuesta.html"
    var parametros="?user="+encodeURIComponent(uss)+"&password="+encodeURIComponent(pass)
    if(uss==usuario && pss==pass){
        window.location.href=(url+parametros)
    }else if(contador<3){
        contador=contador+1
        alert("Usuario o contraseña son incorrectos intento :"+contador)
    }else{
        btn.disabled=true
        alert("suficientes intentos")
    }    
})
//console.log(form)

function capturan1(){
    n1= document.getElementById("v1").value
    n1=Number.parseFloat(n1)
}

function capturan2() {
    n2=Number.parseFloat(document.getElementById("v2").value)
    res=document.getElementById("resultado")
}

function suma() {
    texto="El resultado de la suma es : "+(n1+n2)
    res.textContent=texto
}
function resta() {
    texto="El resultado de la resta es : "+(n1-n2)
    res.textContent=texto
}
function multiplicacion() {
    texto="El resultado de la Multiplicacion es : "+(n1*n2)
    res.textContent=texto
}
function division() {
    texto="El resultado de la division es : "+(n1/n2)
    res.textContent=texto
}
