function cambiar(valor){

    

    //cuadro de informacion
    const informacion = document.querySelector('.informacion');

    if(valor == "2"){

        informacion.style.color ="rgb(53, 50, 50)"
        informacion.style.backgroundColor = "#FFFFFF"
    }
    
    else if(valor == "3"){

        informacion.style.color="rgb(255, 252, 252)"
    
        informacion.style.backgroundColor="rgb(53, 50, 50)"
    }
   //cuadro de inicio
    const inicio = document.querySelector('.inicio');

    if(valor == "2"){
        inicio.style.color ="rgb(8, 8, 8)"

        inicio.style.backgroundColor = "rgb(133, 126, 126)"
    }
    
    else if(valor == "3"){
        inicio.style.color = "rgb(255, 255, 255)"
        inicio.style.backgroundColor="rgb(53, 50, 50)"
    }
    
    const informationT2 = document.querySelector('.informationT2');

    if(valor == "2"){
        informationT2.style.color ="rgb(8, 8, 8)"

       
    }
    
    else if(valor == "3"){
        informationT2.style.color = "rgb(255, 255, 255)"
        
    }
}




function registrar()
{
    const usuario = document.getElementById("nuevoU").value;
    const edad=document.getElementById("edad").value;
    const rol=document.getElementById("roll").value;

    if(usuario && edad){

        localStorage.getItem("usuario",usuario);
         localStorage.getItem("edad",edad);

         document.getElementById("nombreusuario").innerText = usuario;
         document.getElementById("edadusuario").innerText = "Edad:"+edad;
         document.getElementById("rolusuario").innerText = (rol == "2") ? "Alumno" :
         "Profesor";
          

        document.querySelector(".reg").style.display="none";
        document.getElementById("cuadrousuario").style.display="block";
        

        

            if(rol == "2"){
            alert("Bienvenido,Alumno"+ nombre+"de"+ edad +"reguistrado correctamente");
            }
            else if (rol == "3"){
            alert("Bienvenido,Profesor"+ usuario+"de"+ edad +"reguistrado correctamente");
            }
             
         } else{  
            alert("Complete los dos campos");
         }
         
}    

function cambiart(numero){
    console.log("mostrar texto,numero");


  for(let i = 1; i <= 2; i++){  
    document.getElementById("informationT" + i).style.display = "none";
    document.getElementById("imginf" + i).style.display ="none";
    }
    
   
   
    document.getElementById("informationT"+ numero).style.display ="block";
    document.getElementById("imginf"+ numero).style.display ="block";
}

function toggleVentana(id) {
  const ventana = document.querySelectorAll('.ventana');

  ventana.forEach(ventana =>{
    if(ventana.id == id){

       ventana.style.display = (ventana.style.display === "none" || ventana.style.display === "") ? "block" : "none";}
       else{
        ventana.style.display = "none";
       }
    
  }
);  
}



