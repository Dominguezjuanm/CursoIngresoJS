function mostrar()
{
	var contador = 0;
	var respuesta = "si";
	var laSuma= 0;
	var numero;

		while(respuesta == "si"){
			contador++;
		do{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
			respuesta = prompt("Desea ingresar otro numero?");
		}while(isNaN(numero));
		laSuma += numero;
		
		document.getElementById('suma').value = laSuma;
		document.getElementById('promedio').value = laSuma / contador;
		}
	































	/*var contador=0;
	var respuesta='si';
	var numero;
	var suma=0;
	
	while(respuesta == "si" ){
		contador++;
		
	do{
		
		numero=prompt("ingrese su numero");
		numero=parseInt(numero);
		respuesta=prompt("Desea ingresar otro numero")  
	  } while(isNaN(numero));
		 {
		 suma+=numero	
		 } 
}

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;
*/
}//FIN DE LA FUNCIÓN
