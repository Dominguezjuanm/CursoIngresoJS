/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio;
 	var cantidadlamp;
 	var marca;
 	var descuento;
 	var total;
 	var preciofinal;
 	
 	cantidadlamp=document.getElementById('Cantidad');
 	precio= 35;
	precio=parseInt(precio);
	cantidadlamp=parseInt(cantidadlamp);
 	
 	total=(precio *cantidadlamp);
	

	if(cantidadlamp>5)
	{
		preciofinal=(total - total*0,5);
		
	}
	
	/*switch(marca){
	case"argluz:
		if(cant>5){
				total=precio*cant*0,5;
		}elseif(cant == 5){ 
				desc= 0,6;
			}
	}elseif(cant==4){
		desc= 0,75;
	}
	}
	if(cant >=6){
		desc= 0,5;
	}elseif(cant==5 && marca== "argluz"){
		desc=0,6;
	}elseif(cant==4){
		if(marca=="argluz" || maca=="felipe"){
		desc=0,75;
		}else{
		desc= 0,8;
		}
	
	}elseif(cant==3){
		switch(marca){
		case "argluz":
			desc=0,85
		break;
		}
	}
	total=cant*precio*desc;
	if(total>120){
		ingresosBrutos=total*1.10;
		total=total+ingresosBrutos;
		alert("ust, IB "+ IB);
		document.getelementbyid("total")=total;
	}
	*/
}
