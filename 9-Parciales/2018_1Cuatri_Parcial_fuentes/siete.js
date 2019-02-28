function mostrar()
{
	var contador=0
	var nota
	var sexo
	var promedio
	var notabaja
	var varonseis
	var suma
	while(contador<5){
		contador++;
		
	do{
		sexo=prompt("Ingrese el sexo");  
	 
	 } while(sexo!="m" && sexo !="f");
	 do{
	 	nota=prompt("Ingrese su nota");
	 	nota=parseInt(nota);
	 	suma+=nota;
	 } while(isNaN(nota) && (nota<0 || nota>10) );
	 promedio=suma/contador;
}



alert("El promedio de las notas totales es "+promedio+ " La nota mas baja es "+notabaja+" y su sexo es ")

}
