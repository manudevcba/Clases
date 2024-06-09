document.querySelector('#botonCalcular').onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario').value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);
  
    document.querySelector('#calcular').value = salarioMensual;
  
    return false;
  }
  function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12 ;
  }