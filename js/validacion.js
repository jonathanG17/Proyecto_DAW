function validacion (){
    var nombre, email, comentario;
     nombre=document.getElementById("nombre").value;
     email=document.getElementById("email").value;
     comentario=document.getElementById("comentario").value;     
    

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" /*|| email ==="" || comentario ===""*/){
        document.getElementById("nombre2").innerHTML="El campo Nombre es requerido";
         //alert("Todos los campos son obligatorios");
        return false;
    }

    else if(email === ""){
        document.getElementById("email2").innerHTML="El campo Email es requerido";
        return false;
    }

    else if(comentario ===""){
        document.getElementById("comentario2").innerHTML="El campo Comentario es requerido";
        return false;
    }
    else if(!expresion.test(email)){
        document.getElementById("email3").innerHTML="El correo no es valido";
        return false;
    }
}