var arrEras;
var xmlHistoria = new XMLHttpRequest();
xmlHistoria.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
    localStorage.setItem("erasHistoricas", this.responseText);	
}
xmlHistoria.open("GET", "http://localhost:3000/historia", true);
xmlHistoria.send();

window.onload = function(){
	arrEras = JSON.parse(localStorage.getItem("erasHistoricas"));
	for(var i=0; i<arrEras.length; i++)
	{
		var imagem = "img" + (i+1);
		var titulo = "titulo" + (i+1);
		var duracao = "duracao" + (i+1);
		var desc = "desc" + (i+1);
		
		document.getElementById(imagem).src = arrEras[i].urlImagem;
		document.getElementById(titulo).innerHTML = arrEras[i].nome;
		document.getElementById(duracao).innerHTML = "(" + arrEras[i].inicio + " - " + arrEras[i].fim + ")";
		document.getElementById(desc).innerHTML = arrEras[i].descricao;		
	}
}

function clicouCard(indice)
{
	switch(indice)
	{
		case 1: location.href = "./historia/precolonial.html"; break;
		case 2: location.href = "./historia/colonial.html"; break;
		case 3: location.href = "./historia/imperio.html"; break;
		case 4: location.href = "./historia/rep_velha.html"; break;
		case 5: location.href = "./historia/era_vargas.html"; break;
		case 6: location.href = "./historia/rep_populista.html"; break;
		case 7: location.href = "./historia/reg_militar.html"; break;
		case 8: location.href = "./historia/rep_nova.html"; break;
	}
}