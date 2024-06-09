
document.querySelector("#buttonMostrar").onclick = mostrarDatos;

function mostrarDatos(){
    const priNombre = String(document.querySelector("#primer-nombre").value);
    const segNombre = String(document.querySelector("#segundo-nombre").value);
    const apellido = String(document.querySelector("#apellido").value);
    const edad = Number(document.querySelector("#edad").value);

    const valores = "Primer nombre: " + priNombre + "\n" +
                    "Segundo nombre: " + segNombre + "\n" +
                    "Apellido: " + apellido + "\n" +
                    "Edad: " + edad;

    document.querySelector("#valores").value = valores;                
    
    var h1 = document.querySelector("#titulo");
    h1.textContent += priNombre + " "+ segNombre ;

    return false;
    
   }


    