function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

   switch(mesDelAño){
    case "Julio":
    case "Agosto":
      alert("Abrigate que hace frio.");
      break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":  
      alert("Ya pasamos el frio, ahora calor!!!.");  
      break;
    default:
      alert("Falta para el invierno.");
      break;
    }
/*var mesDelAño = document.getElementById('mes').value;


	switch (mesDelAño){
  case "Julio":
    alert("Abrigate que hace frio.");
    break;
  
  case "Agosto":
    alert("Abrigate que hace frio.");
    break;
  
  case "Septiembre":
    alert("Ya pasamos el frio, ahora calor!!!.");
    break;
 
  case "Octubre":
    alert("Ya pasamos el frio, ahora calor!!!.");
    break;
  
  case "Noviembre":
    alert("Ya pasamos el frio, ahora calor!!!.");
    break;
  
  case "Diciembre":
    alert("Felices fiestas!!!");
    break;  	
  
  default :
    alert("Falta para el invierno.");
    break;	
  	}*/
//se ponen varios case para no poner tantos alert






}//FIN DE LA FUNCIÓN