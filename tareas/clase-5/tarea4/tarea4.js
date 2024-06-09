// Obtener la lista de números

const listaNumeros = document.getElementById('numeros').querySelectorAll('li');

// Convertir los números a un array
const numerosArray = Array.from(listaNumeros).map(li => parseInt(li.textContent));

// Calcular el promedio
const promedio = numerosArray.reduce((acc, num) => acc + num, 0) / numerosArray.length;
document.getElementById('promedio').textContent = "El promedio es:" + promedio;


// Obtener el número más pequeño
const numeroMasPequeno = Math.min(...numerosArray);
document.getElementById('numeroMasPequeno').textContent = `El número más pequeño es: ${numeroMasPequeno}`;

// Obtener el número más grande
const numeroMasGrande = Math.max(...numerosArray);
document.getElementById('numeroMasGrande').textContent = `El número más grande es: ${numeroMasGrande}`;

// Obtener el número que más se 

const conteoNumeros = {};
numerosArray.forEach(numero => {
    conteoNumeros[numero] = (conteoNumeros[numero] || 0) + 1;
});
const numeroMasFrecuente = Object.keys(conteoNumeros).reduce((a, b) => conteoNumeros[a] > conteoNumeros[b] ? a : b);
document.getElementById('numeroMasFrecuente').textContent = `El número más frecuente es: ${numeroMasFrecuente}`;
