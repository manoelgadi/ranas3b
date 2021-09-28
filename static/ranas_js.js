function mueverana(elemento){
	//alert('Cambio 9:52');
	var id_num = parseInt(elemento.id, 10), destino = -1;

	if(elemento.src.includes('R.png')){
		if(//id_num-1>=0 -- resuelve la causa del problema
		document.getElementById(id_num-1) != null  // resuelve el sintoma
		&& document.getElementById(id_num-1).src.includes('B.png')){
			destino = id_num-1;
		} else if(//id_num-2>=0 -- resuelve la causa del problema
			document.getElementById(id_num-2) != null  // resuelve el sintoma
			&& document.getElementById(id_num-2).src.includes('B.png')){
			destino = id_num-2;
		}
		if (destino>=0){
			var aux = document.getElementById(destino).src;
			document.getElementById(destino).src = elemento.src;
			elemento.src=aux;	
		}
	} else if(elemento.src.includes('L.png')){
		try { //Resulve a posteriori - como una cirugia
			if(document.getElementById(id_num+1).src.includes('B.png')){
				destino = id_num+1;
			} else if(document.getElementById(id_num+2).src.includes('B.png')){
				destino = id_num+2;
			}
			if (destino>=0){
				var aux = document.getElementById(destino).src;
				document.getElementById(destino).src = elemento.src;
				elemento.src=aux;	
			}
		} catch (err){
			//console.log(err.message);
		}
	}

	// Falta implementar parte de la lógica.

//			elemento.width *=2;
//			elemento.height *=2;
}

function aleatoriza_ranas(){
	
}