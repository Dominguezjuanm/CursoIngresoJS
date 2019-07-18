function mostrar()
{

	var contador = 0;
	var numero;
	var negativos = 0;
	var positivos = 0;
	var respuesta = "si";
	var cantidadNegativo = 0;
	var cantidadPositivo = 0;
	var cantidadCero = 0;
	var cantidadPares = 0;
	var promedioPositivo;
	var promedioNegativo;

	while(respuesta == "si"){
			contador++;
		
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
			
			while(isNaN(numero)){
			numero= prompt("Error, ingrese un numero");
		}
		if(numero >= 0)
		{
			positivos += numero;
			cantidadPositivo++;

		}else
			{    
			negativos = negativos + numero;
			cantidadNegativo++;
			}
		
		if(numero == 0){
			cantidadCero++;
		}		
		respuesta = prompt("Desea ingresar otro numero?").toLowerCase();
		}
		
		document.write("La suma de los numeros positivos es: "+positivos+"<br>");
		document.write("La suma de los numeros negativos es: "+negativos+"<br>");
		document.write("La cantidad de numeros positivos es: "+cantidadPositivo+"<br>");
		document.write("La cantidad de numeros negativos es: "+cantidadNegativo+"<br>");
		document.write("La cantidad de ceros es: "+cantidadCero+"<br>");






















































	/*var num;
	var rta=true;
	var acumneg=0;
	var acumpos=0;
	var contpos=0;
	var contneg=0;
	var contceros=0;
	var contpares=0;

	while(rta==true){
		do{
			num=prompt("ingrese el numero");
			num=parseInt(num);
		}while(isNaN(num));

		if(num<0){
			contneg=0
			acumneg=acumneg+num;
		}else{
			if(num>0){
				acumpos+=num;
			}else{
				contceros++;
			}
		}
		if(num%2==0){
			contpares++;
		}
	}
	rta=confirm()*/




}//FIN DE LA FUNCIÓN