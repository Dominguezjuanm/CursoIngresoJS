function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
  var resultado;
//alert (mesDelAño);
	
	switch (mesDelAño){
  case "Enero":
  case "Marzo":  
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":

	resultado = ("Este mes tiene 31 días.");
    break;
  
  case "Febrero":
    resultado = ("Este mes tiene 28 días.");
    break;
 
    
  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
    resultado = ("Este mes tiene 30 días.");
    break;
  
  	
}


}//FIN DE LA FUNCIÓN