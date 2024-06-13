
function calculosNumeros (){

    let numero1 = parseInt(document.querySelector("#numero1").innerText);
    let numero2 = parseInt(document.querySelector("#numero2").innerText);
    let numero3 = parseInt(document.querySelector("#numero3").innerText);
    let numero4 = parseInt(document.querySelector("#numero4").innerText);
    let numero5 = parseInt(document.querySelector("#numero5").innerText);

    // Creating an array of numbers
    let arrayNumeros = [numero1, numero2, numero3, numero4, numero5];

    let contadorNumeros = 0;

    for (i=0; i < arrayNumeros.length ; i++){
        contadorNumeros += arrayNumeros[i];        

    }
    
    let emPromedios = document.querySelector("#promedio");
    let promedio = contadorNumeros / arrayNumeros.length;
    emPromedios.innerText += promedio;

    
    return false
}

calculosNumeros();


// ><