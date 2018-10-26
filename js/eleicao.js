
var candidatos;
var eleitor;
var xmlCandidatos = new XMLHttpRequest();
var urlCand = "http://localhost:3000/candidato";

xmlCandidatos.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
    localStorage.setItem("candidatos", this.responseText);
}
xmlCandidatos.open("GET", urlCand, true);
xmlCandidatos.send();
candidatos = JSON.parse(localStorage.getItem("candidatos"));

window.onload = function(){
	if (sessionStorage.getItem("logou") != "sim")
	{
		$('button.btnVotar').prop('disabled', true);
		$('button.btnVotar').css('filter', 'brightness(60%)');
		setTimeout(  function(){alert('Logue no site para votar');}  , 100);		
	}
	else
	{
		eleitor = JSON.parse(sessionStorage.getItem("usuario"));
		if (usuario.jaVotou == 1)
		{
			$('button.btnVotar').prop('disabled', true);
			$('button.btnVotar').css('filter', 'brightness(60%)');
		}
	}
	for(var i = 0; i < candidatos.length; i++)
	{
		var nome = "nome" + (i+1);
		var desc = "desc" + (i+1);
		var imgCand = "imgCand" + (i+1);
		var imgPart = "imgPart" + (i+1);
		var botao = "btn" + (i+1);
		document.getElementById(nome).innerHTML = candidatos[i].nome;
		document.getElementById(desc).innerHTML = candidatos[i].descricao;
		document.getElementById(imgCand).src = candidatos[i].urlCand;
		document.getElementById(imgPart).src = candidatos[i].urlPart;
	}
}

function votar(cand){
	cand--;
	alert('Você votou em ' + candidatos[cand].nome);
	eleitor.jaVotou = 1;
	sessionStorage.setItem("usuario", JSON.stringify(eleitor));
	var updateEleitor = new XMLHttpRequest();
	updateEleitor.open('PATCH', "http://localhost:3000/eleitor/" + eleitor.codUsuario, true);
  	updateEleitor.send();
	candidatos[cand].votos++;
	var votosNovos = candidatos[cand].votos;
	var updateVotos = new XMLHttpRequest();
  	updateVotos.open('PATCH', urlCand + "/" + candidatos[cand].codCandidato + "/" + votosNovos, true);
  	updateVotos.send();
  	location.reload();
}

var pegouBD = (localStorage.getItem("candidatos") != null)
function info(cand){
	if (pegouBD){
		var link = "";
		switch(cand){
			case 1: link = "https://pt.wikipedia.org/wiki/Marina_Silva";break;
			case 2: link = "https://pt.wikipedia.org/wiki/Jair_Bolsonaro";break;
			case 3: link = "https://pt.wikipedia.org/wiki/Fernando_Haddad";break;
			case 4: link = "https://pt.wikipedia.org/wiki/Ciro_Gomes";break;
			case 5: link = "https://pt.wikipedia.org/wiki/Geraldo_Alckmin";break;
			case 6: link = "https://pt.wikipedia.org/wiki/Alvaro_Dias";break;
			case 7: link = "https://pt.wikipedia.org/wiki/Henrique_Meirelles";break;
			case 8: link = "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Amo%C3%AAdo";break;
			case 9: link = "https://pt.wikipedia.org/wiki/Guilherme_Boulos";break;
			case 10: link = "https://pt.wikipedia.org/wiki/Jos%C3%A9_Maria_Eymael";break;
			case 11: link = "https://pt.wikipedia.org/wiki/Cabo_Daciolo";break;
			case 12: link = "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Goulart_Filho";break;
			case 13: link = "https://pt.wikipedia.org/wiki/Vera_L%C3%BAcia_Salgado";break;			
		}
		location.href = link;
	}
}