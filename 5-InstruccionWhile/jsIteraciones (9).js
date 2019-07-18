function mostrar()
{
	var contador = 0;
	var numero;
	var max;
	var min;
	var respuesta = "si";
	
	while(respuesta == "si"){
			contador++;
		do{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
			
		}	while(isNaN(numero));
	
	if(contador == 1)
		{
		max = numero;
		min = numero;
		}   
	if(numero >= max)
		{
		max = numero;
		}else
			{
				if(numero <= min)
				{
				min = numero;
				}
			}
		
		respuesta = prompt("Desea ingresar otro numero?").toLowerCase();
		}
		
		document.getElementById('maximo').value = max;
		document.getElementById('minimo').value = min;
































/*
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
document.getElementById('minimo').value=min;*/




}//FIN DE LA FUNCIÓN