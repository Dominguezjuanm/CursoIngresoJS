/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo; 
	var divisor;
	var resto;

	primerNumero= numeroDividendo.value;
	segundoNumero= numeroDivisor.value;
	
	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);
	resto= (primerNumero%segundoNumero);

	alert(resto);	
}
