function mostrar()
{
	var velocidad;
	var contador=0;
	var combustible;
	var acumuladorVel=0;
	var promedio;
	var bandera=true;
	var velocidadmax;
	var velocidadmin;
	var combustibleVmin;
	var velocidadMaxSolido;
	var cantidadCombustiblel=0;

	while(contador < 5)
	{
		contador++;
		do
		{
			velocidad = prompt("Ingrese la velocidad en kilometros del vehiculo");
			velocidad = parseInt(velocidad);
		} 
		while(isNaN(velocidad) || (velocidad < 0 || velocidad > 250));
			acumuladorVel += velocidad;
		
		do
		{
			combustible = prompt("Ingrese el tipo de combustible, liquido (l) o solido (s)");
	
	    }	while(combustible != "s" && combustible != "l");

	   if(bandera)
	   {
	   	bandera=false;
 		velocidadmax = velocidad;

	   	velocidadmin=velocidad;
		}else{
	   			if(velocidadmin > velocidad)
	   			{
	   			velocidadmin = velocidad;
	   		 	}
	   		 	if(velocidadmax < velocidad){
				velocidadmax = velocidad
			}	
	         }
		
		if(velocidadmin == velocidad && combustible == "s"){
			combustibleVmin = combustible;
		}
		if(velocidadmin == velocidad && combustible == "l"){
			combustibleVmin = combustible;
		}
	
	}
		if(velocidad > 100 && combustible== "l"){
			cantidadCombustiblel += 1;
		}
		if(velocidadmax = velocidad && combustible == "s"){
			velocidadMaxSolido = velocidad;
		}
	
		promedio=acumuladorVel/contador;
	

	alert("El promedio de estas velocidades es "+promedio+", la velocidad minima ingresada es "+velocidadmin+", y su combustible es "+combustibleVmin+". La cantidad de combustibles liquidos cuya velocidad supera los 100km es "+cantidadCombustiblel+". La velocidad maxima con combustible solido es "+velocidadMaxSolido);
} 
