function mostrar()
{
	var numero;
	var letra;
	var respuesta ="si";
	var contador = 0;
	var promedio = 0;
	var cantidadPares = 0;
	var cantidadImpares = 0;
	var cantidadCeros = 0;
	var promedioPositivo = 0;
	var suma = 0;
	var sumaNegativos = 0;
	var numeroMin;
	var letraMin;
	var numeroMax;
	var letraMax;
	
	while(respuesta=="si")
	{
		
		contador++;
		

		letra=prompt("Ingrese una letra.");
		
		numero=prompt("Ingrese un numero.");
		numero=parseInt(numero);
		
		while(numero < -100 || numero >100)
			{
			numero=prompt("Error,Ingrese un numero del -100 al 100.")
			numero=parseInt(numero);		
			}


		if(contador==1)
			{
				numeroMin = numero;
				letraMin = letra;
				numeroMax = numero;
				letraMax = letra;
			}
		if(numero < numeroMax)
		{
			numeroMax = numero;
			letraMax = letra;
		}else if(numero < numeroMin)
			{
				numeroMin = numero;
				letraMin = letra;
			}
		
		if(numero%2==0)
			{
			cantidadPares++;
			}else
			{
				cantidadImpares++;
			}
		if(numero==0)
			{
			cantidadCeros++;
			}
		if(numero>0)
			{
			suma=suma+numero;
			}else
				{
					sumaNegativos = sumaNegativos + numero;
				}	
		respuesta=prompt("Desea ingresar otro numero y letra?").toLowerCase();	
	}
	
		
	
	promedioPositivo = suma / contador;
	
	document.write("La cantidad de numeros pares es de: "+cantidadPares+"<br>");
	document.write("La cantidad de numeros impares es de: "+cantidadImpares+"<br>");
	document.write("La cantidad de ceros es de: "+cantidadCeros+"<br>");
	document.write("El promedio de numeros positivos es: "+promedioPositivo+"<br>");
	document.write("La suma de los numeros negativos es de: "+sumaNegativos+"<br>");
	document.write("El numero maximo es "+numeroMax+" su letra es "+letraMax+" Y el numero minimo es "+numeroMin+" con la letra "+letraMin+"<br>");
}
