function mostrar()
{
	var nota;
	var sexo;
	var contador = 0;
	var promedio;
	var notaBaja;
	var sexoBaja;
	var cantVarones=0;
	var notatotal=0;
	
	while(contador<6)
	{
		contador++;
		nota=prompt("Ingrese la nota.");
		nota=parseInt(nota);
		
		while(nota < 0 || nota > 10)
			{
			nota=prompt("Error,Ingrese una nota del 0 al 10")
			nota=parseInt(nota);		
			}
		sexo=prompt("Ingrese el sexo del alumno/a").toLowerCase();
		
		while(sexo != "f" && sexo!="m")
			{
			sexo=prompt("Error, ingrese el sexo del alumno/a, f o m.").toLowerCase();
			}
		
		if(contador==1)
			{
			notaBaja=nota;
			sexoBaja=sexo;
			}
		
		if(nota<notaBaja)
			{
			notaBaja=nota;
			sexoBaja=sexo;
			}
		if(nota>=6 && sexo=="m")
			{
			cantVarones++;
			}	
	notatotal= notatotal+nota;	
	}
	
	promedio= notatotal/contador;
	
	console.log("El promedio de las notas ingresadas es de: "+promedio);
	console.log("La nota mas baja es "+notaBaja+" y su sexo es "+sexoBaja);
	console.log("La cantidad de varones cuya nota es 6 o mayor es "+cantVarones);
}