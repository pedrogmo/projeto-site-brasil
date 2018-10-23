var candidatos;
var xmlCandidatos = new XMLHttpRequest();
var urlCand = "http://localhost:3000/candidato";
xmlCandidatos.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
    localStorage.setItem("candidatos", this.responseText);
}
xmlCandidatos.open("GET", urlCand, true);
xmlCandidatos.send();
candidatos = JSON.parse(localStorage.getItem("candidatos"));

if (sessionStorage.getItem("logou") != "sim")
{
	$('button.btnVotar').prop('disabled', true);
	$('button.btnVotar').css('filter', 'brightness(60%)');
	alert('Logue no site para votar');
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
	// document.getElementById(botao).onclick = function(){votar(i)}
}

function votar(cand){
	alert('Você votou em ' + candidatos[cand - 1].nome);
	$('button.btnVotar').prop('disabled', true);
	$('button.btnVotar').css('filter', 'brightness(60%)');
	// document.getElementsByTagName("btnVotar").disabled = true;
	candidatos[cand - 1].votos++;
	var votosNovos = candidatos[cand - 1].votos;
	var updateVotos = new XMLHttpRequest();
  	updateVotos.open('PATCH', urlCand + "/" + candidatos[cand - 1].codCandidato + "/" + votosNovos, true);
  	updateVotos.send();
}