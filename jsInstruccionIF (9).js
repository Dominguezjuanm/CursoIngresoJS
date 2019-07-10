function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
	numero = Math.floor(Math.random() * 10)+1;
	alert(numero);

}//FIN DE LA FUNCIÓN
//falto el +1 al final, sino no llega a 10.
// Math.floor(Math.random()*(max-min))+min; es para sacar numeros random entre un max y min