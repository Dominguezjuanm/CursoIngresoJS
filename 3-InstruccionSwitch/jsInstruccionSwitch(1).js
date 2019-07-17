function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
  var resultado;
  switch (mesDelAño){
    case "Enero":
      resultado = ("Que comiences bien el año!!!.");
    break;
    case "Marzo":
      resultado = ("A clases!!!.");
      break;
    case "Julio":
      resultado = ("Se vienen las vacaciones!!!.");
      break;
    case "Diciembre":
      resultado = ("Felices fiestas!!!.");
      break;  
      }
      
  
  alert(resultado);





  /*var mesDelAño = document.getElementById('mes').value;
	
	switch (mesDelAño){
  case "Enero":
    alert("Que comiences bien el año!!!");
    break;
  
  case "Marzo":
    alert("A clases!!!");
    break;
  
  case "Julio":
    alert("Se vienen las vacaciones!!!");
    break;
 
  case "Diciembre":
    alert("Felices fiestas!!!");
    break;
  	}*/


}//FIN DE LA FUNCIÓN