function mostrar()
{/*en una tienda de libros existe una oferta, por la cual, si compra mas de dos libros tiene un 10% en el precio, y si ademas supera los $2000 se le hace un 15% de descuento adicional, recordar que si la compra es con tarjeta, se le debera agregar un 10% de recargo.
		mostrar en un solo alert toda la informacion de la operacion.*/

	var primerNumero;
	var segundoNumero;
	var tercerNumero;
	var cuartoNumero;
	var sumaTotal;
	var descuento;
	var recargo;
	var precioAPagar;
	var numeroMayor;
	
	primerNumero = prompt("Por favor ingrese el primer precio");
	segundoNumero = prompt("Por favor ingrese el segundo precio");
	tercerNumero = prompt("Por favor ingrese el tercer precio");	
	cuartoNumero = prompt("Por favor ingrese el cuarto precio");

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
	tercerNumero=parseInt(tercerNumero);
	cuartoNumero=parseInt(cuartoNumero);


	sumaTotal = primerNumero + segundoNumero + tercerNumero + cuartoNumero;

		if(sumaTotal>100){
			precioAPagar=(sumaTotal-sumaTotal*10/100);

		}else{
			if(sumaTotal>50){
				precioAPagar=(sumaTotal-sumaTotal*5/100);
			}else{
				precioAPagar=(sumaTotal+sumaTotal*15/100);
			}
		}
		
	if(primerNumero>=segundoNumero && primerNumero>=tercerNumero &&primerNumero>=cuartoNumero){
    	numeroMayor=primerNumero;
    }else{
    	if(segundoNumero>=primerNumero && segundoNumero>=tercerNumero && segundoNumero>=cuartoNumero){
    		numeroMayor=segundoNumero;
    	}else{
    		if(tercerNumero>=segundoNumero && tercerNumero>=primerNumero && tercerNumero>=cuartoNumero){
    			numeroMayor=tercerNumero;
    		}else{
    			numeroMayor=cuartoNumero;
    		}
    	}
    }
    alert("El precio mayor es de $"+numeroMayor+ "y el precio a pagar es de $"+ precioAPagar);

}

