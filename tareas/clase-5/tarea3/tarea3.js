document.querySelector("#calcularTotal").onclick = calcularTotal;

function calcularTotal(){

    // var miArray = [];

    const clase1 = [Number(document.querySelector("#horas1").value),Number(document.querySelector("#minutos1").value),Number(document.querySelector("#segundos1").value)];
    const clase2 = [Number(document.querySelector("#horas2").value),Number(document.querySelector("#minutos2").value),Number(document.querySelector("#segundos2").value)];
    const clase3 = [Number(document.querySelector("#horas3").value),Number(document.querySelector("#minutos3").value),Number(document.querySelector("#segundos3").value)];

    // Definir las tres variables con horas, minutos y segundos

    var segundosTotales = clase1[2] + clase2[2] + clase3[2];

    // Calcular el exceso de segundos
    
    var minutosExcedidos = Math.floor(segundosTotales / 60);
    var segundosRestantes = segundosTotales % 60;

    // Sumar los minutos
    var minutosTotales = clase1[1] + clase2[1] + clase3[1] + minutosExcedidos;

    // Calcular el exceso de minutos
    var horasExcedidas = Math.floor(minutosTotales / 60);
    var minutosRestantes = minutosTotales % 60;

    // Sumar las horas
    var horasTotales = clase1[0] + clase2[0] + clase3[0] + horasExcedidas;

    // Crear la nueva variable con el formato de horas, minutos y segundos
    var horaResultante = [horasTotales, minutosRestantes, segundosRestantes];

    // convertir el array en un texto

    var resultadoFormateado = horaResultante.join(":");

    var strong = document.querySelector("#resultadoTotal");
    strong.textContent = (horaResultante)+ "\n" + " (horas, minutos y segundos)";

    return false;

    
}