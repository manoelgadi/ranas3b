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
}

function cambia_ranas(i,j){
	var aux = document.getElementById(i).src;
	document.getElementById(i).src = document.getElementById(j).src;
	document.getElementById(j).src=aux;		
}

function aleatoriza_ranas(){
	var destino;
	for (var origen=0;origen<=6;origen++){
		destino = Math.floor(Math.random()*7)
		while(origen == destino || destino == 7){
			destino = Math.floor(Math.random()*7)
		}
		cambia_ranas(origen,destino);
	}
}

function deshacer_ultimo(){
	
}
