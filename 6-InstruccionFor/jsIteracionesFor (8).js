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
	
	for(var i= 1  ;i<=numero;i++)
	{
		if(numero%i ==0)
		{
			contador++;
			
		}
			
	
	}
	if(contador==2)
	{
		console.log("El numero "+numero+" es primo");
	}else{
		console.log("El numero "+numero+" no es primo");
	}

	


 

}//FIN DE LA FUNCIÓN