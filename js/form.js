
var obtener=document.getElementById("pais");
 
 /*alert(localStorage.pais);
 alert(localStorage.email);
 alert(localStorage.comentario);*/
//document.getElementById("nombre").value=localStorage.nombre;
//document.getElementById("nombre").value=localStorage.getItem("nombre");


function guardarDatos(){
 var pais=document.getElementById("pais");
 localStorage.nombre = document.getElementById("nombre").value;
 localStorage.pais = document.getElementById("pais").options[pais.getElementById("pais").selectedIndex].text;
 localStorage.email = document.getElementById("email").value;
 localStorage.comentario = document.getElementById("comentario").value;
}


function verificar(){
  sessionStorage.nombre = document.getElementById("nombre").value;
  sessionStorage.pais = document.getElementById("pais").options[pais.selectedIndex].text;
  sessionStorage.email = document.getElementById("email").value;
  sessionStorage.comentario = document.getElementById("comentario").value;
  
  if(document.getElementById("nombre").value||document.getElementById("email").value||document.getElementById("comentario").value!=""){
  alert('Los datos ingresados son:'+"\n"+"Nombre:" + sessionStorage.nombre+"\n"+"Email:" + sessionStorage.email+"\n"+"Pais:" + sessionStorage.pais);   
  }

  else{
    alert("Debe ingresar los datos para porder revisar");
  }

}

function init(){
 // document.getElementById("nombre").value=localStorage.nombre;
}

window.onload=init;