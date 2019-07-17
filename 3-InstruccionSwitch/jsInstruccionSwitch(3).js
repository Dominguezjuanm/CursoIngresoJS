function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	var resultado;
//alert (mesDelAño);
	switch (mesDelAño){
  case "Febrero":
    resultado = ("Este mes no tiene más de 29 días.");
    break;
   default :
	resultado = ("Este mes tiene 30 o más días");
	}
	alert(resultado);
}//FIN DE LA FUNCIÓN