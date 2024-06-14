/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


document.querySelector("#crearForm").onclick = function(event) {
    const $numeroFamiliares = document.querySelector("#numeroFamilia");
    const numeroFamiliares = Number($numeroFamiliares.value);

    crearUsuarios(numeroFamiliares);

    event.preventDefault();
};

function crearUsuarios(numeroF||amiliares) {
    // Selecciona el contenedor para los integrantes.
    const $contenedor = document.querySelector("#div");

    // Limpia el contenedor antes de agregar nuevos campos.
    $contenedor.innerHTML = '';

    for (let i = 0; i < numeroFamiliares; i++) {
        // Crea un nuevo div para cada integrante.
        let div = document.createElement("div");
        div.className = "integrante";

        // Crea y configura la etiqueta.
        let label = document.createElement("label");
        label.textContent = 'Edad del familiar #' + (i + 1) + ':';

        // Crea y configura el campo de entrada.
        let input = document.createElement("input");
        input.type = "number";

        // Añade la etiqueta y el campo de entrada al div.
        div.appendChild(label);
        div.appendChild(input);

        // Añade el div al contenedor.
        $contenedor.appendChild(div);
    }
} 

/*
document.querySelector("#crearForm").onclick = function(event){

    const $numeroFamiliares = (document.querySelector("#numeroFamilia"));
    const numeroFamiliares = Number($numeroFamiliares.value);
    
    
    crearUsuarios(numeroFamiliares);
    
    event.preventDefault();
    
    }
    
    
    function crearUsuarios(numeroFamiliares){
         
        
        for (let i=0 ; i < numeroFamiliares ; i++){
    
            let div = document.createElement("div");
            div.className ="integrante";
            let label = document.createElement("label");
            let input = document.createElement("input");
    
            div.appendChild(label);
            div.appendChild(input);
                    
           let integrantes = document.querySelector("#div");
           integrantes.appendChild(div);
            
        }
    
    }
*/