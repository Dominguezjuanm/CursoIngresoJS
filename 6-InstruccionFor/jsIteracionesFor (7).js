function mostrar()
{
	var contador = 0;
	var numero= 0; 
	
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);
		
		while(isNaN(numero))
			{
			numero=prompt("Error, por favor ingrese un NUMERO");
			numero=parseInt(numero);
			}


	for(var i= 1  ;i<=numero;i++ )
	{
		
		if(numero%1==0)
		{
			contador++;
			console.log(i);
		}
		
	}
	console.log("La cantidad de divisores es de: "+contador);

}//FIN DE LA FUNCIÓN