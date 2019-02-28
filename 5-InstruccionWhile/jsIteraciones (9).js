function mostrar()
{

	var contador=0;
	var respuesta='si';
	var max;
	var min;
	var bandera=true;
	var numero;
	
	while(respuesta == "si"){
		contador++;
	do{
		
		numero=prompt("ingrese su numero");
		numero=parseInt(numero);
		respuesta=prompt("Desea ingresar otro numero");  
	} while(isNaN(numero));
	
		if(bandera==true){
			bandera=false;
			max=numero;
			min=numero;
		}else{
			if (numero>max){
			max=numero;
		}
		if(numero<min){
			min=numero;
		}
		}
		} 
		 					


document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;




}//FIN DE LA FUNCIÓN