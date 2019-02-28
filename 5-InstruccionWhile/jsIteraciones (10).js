function mostrar()
{

	var num;
	var rta=true;
	var acumneg=0;
	var acumpos=0;
	var contpos=0;
	var contneg=0;
	var contceros=0;
	var contpares=0;

	while(rta==true){
		do{
			num=prompt("ingrese el numero");
			num=parseInt(num);
		}while(isNaN(num));

		if(num<0){
			contneg=0
			acumneg=acumneg+num;
		}else{
			if(num>0){
				acumpos+=num;
			}else{
				contceros++;
			}
		}
		if(num%2==0){
			contpares++;
		}
	}
	rta=confirm()




}//FIN DE LA FUNCIÓN