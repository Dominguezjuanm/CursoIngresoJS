/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var laTemperatura;
	var resultado;
	laTemperatura = document.getElementById('Temperatura').value;
	resultado = (laTemperatura-32)/1.8;
	MostrarMensaje(laTemperatura+" Fahrenheit son "+resultado+ " Centígrados");
}

function CentigradosFahrenheit () 
{
	var laTemperatura;
	var resultado;
	laTemperatura = document.getElementById('Temperatura').value;
	resultado = (laTemperatura*1.8)+32;
	MostrarMensaje(laTemperatura+" Centígrados son "+resultado+ " Fahrenheit");
}
function MostrarMensaje (resultado)
{
	alert(resultado);
}