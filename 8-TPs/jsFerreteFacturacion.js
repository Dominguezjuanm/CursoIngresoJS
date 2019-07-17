/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var resultado;
	numeroUno = document.getElementById('PrecioUno').value;
	numeroDos = document.getElementById('PrecioDos').value;
	numeroTres = document.getElementById('PrecioTres').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	resultado = numeroUno+numeroDos+numeroTres;
	MostrarMensaje("La suma es: "+resultado);//alert("La suma es: "+resultado);
}

function Promedio () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var resultado;
	numeroUno = document.getElementById('PrecioUno').value;
	numeroDos = document.getElementById('PrecioDos').value;
	numeroTres = document.getElementById('PrecioTres').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	resultado = (numeroUno+numeroDos+numeroTres)/3;
	MostrarMensaje("El promedio es: "+resultado);//alert("El promedio es: "+resultado);	
}

function PrecioFinal () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var resultado;
	numeroUno = document.getElementById('PrecioUno').value;
	numeroDos = document.getElementById('PrecioDos').value;
	numeroTres = document.getElementById('PrecioTres').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	resultado = (numeroUno+numeroDos+numeroTres)*1.21;
	MostrarMensaje("El precio mas IVA es: "+resultado); //alert("El promedio es: "+resultado);
}

function MostrarMensaje (resultado)
{
	alert(resultado);
}


//Para Sumale el Iva, ej:21% la formul es *1.21.