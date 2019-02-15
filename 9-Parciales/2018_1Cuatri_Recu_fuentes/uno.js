
function mostrar()
{
	var primermascota;
	var segundamascota;
	var pesouno;
	var pesodos;
	var sumadepeso
	primermascota = prompt("Ingresa el nombre de la primer mascota");
	segundamascota = prompt("ingresa el nombre de la segunda mascota");

	pesouno = prompt("Ingrese el peso de la primer mascota").value;
	pesodos = prompt("Ingrese el peso de la segunda mascota").value;

	pesouno = parseint(pesouno);
	pesodos = parseint(pesodos);

	sumadepeso = (pesouno + pesodos);






	alert("tenes dos mascotas" + primermascota + " y " + segundamascota +" , que pesan "+ pesouno+" y " +  pesodos + "kilos, la suma de los kilos es " +sumadepeso);

}
