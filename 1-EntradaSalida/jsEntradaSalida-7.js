/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero; 
	var segundoNumero;
	var suma;
	primerNumero= numeroUno.value;
	segundoNumero= numeroDos.value;
	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);
	suma= (primerNumero+segundoNumero);
	MostrarMensaje("El suma es: "+suma);//alert("La suma es: "+suma);
}

function restar()
{
	var primerNumero; 
	var segundoNumero;
	var resta;
	primerNumero= numeroUno.value;
	segundoNumero= numeroDos.value;
	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);
	resta= (primerNumero-segundoNumero);
	MostrarMensaje("La resta es: "+resta);//alert("La resta es: "+resta);
}

function multiplicar()
{ 
	var primerNumero; 
	var segundoNumero;
	var producto;
	primerNumero= numeroUno.value;
	segundoNumero= numeroDos.value;
	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);
	producto= (primerNumero*segundoNumero);
	MostrarMensaje("El producto es: "+producto);//alert("El producto es: "+producto);
}

function dividir()
{
	var primerNumero; 
	var segundoNumero;
	var dividendo;
	primerNumero= numeroUno.value;
	segundoNumero= numeroDos.value;
	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);
	dividendo= (primerNumero/segundoNumero);
	MostrarMensaje("El dividendo es: "+dividendo);//alert("El dividendo es: "+dividendo);
}
function MostrarMensaje(resultado)
{
	alert(resultado);
}
