
function mostrar()
{
	var primermascota;
	var segundamascota;
	var pesomascota1;
	var pesomascota2;
	var sumadepeso
	
	primermascota = prompt("Ingresa el nombre de la primer mascota");
	segundamascota = prompt("ingresa el nombre de la segunda mascota");

	pesomascota1 = prompt("Ingrese el peso de la primer mascota");
	pesomascota2 = prompt("Ingrese el peso de la segunda mascota");
	
	pesomascota1= Parseint(pesomascota1);
	pesomascota2= Parseint(pesomascota2);
	
	sumadepeso = (pesomascota1 + pesomascota2);

	alert("tenes dos mascotas " + primermascota + " y " + segundamascota +" , que pesan "+ pesomascota1 +" y " +  pesomascota2 + " kilos, la suma de los kilos es " +sumadepeso);

}
