/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var salario; 
	var resultado;
	

	salario= document.getElementById('sueldo');
	
	sueldo= parseInt(sueldo);
	
	resultado= (sueldo*10/100);
	
	alert(resultado);
	
}
