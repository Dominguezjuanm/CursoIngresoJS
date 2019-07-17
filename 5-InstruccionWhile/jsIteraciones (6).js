function mostrar()
{
	var contador = 0;
	var laSuma = 0;
	var numero;
	var elPromedio;

	while(contador < 5){
		contador++;
		do{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
	}while(isNaN(numero));
		laSuma +=numero;
		document.getElementById('suma').value = laSuma;
		document.getElementById('promedio').value = laSuma/5;
	}































	/*var contador=0;
	var acumulador=0;
	var suma=0;
	var numero;
	var promedio;




	while( contador <5){
		contador++;
		do{
			numero=prompt("ingrese su numero");
			numero=parseInt(numero);
		  } while(isNaN(numero));
		  suma+=numero
		  	
	document.getElementById('suma').value=suma;
	document.getElementById('promedio').value=suma/5;
		
	}
	*/




}//FIN DE LA FUNCIÓN