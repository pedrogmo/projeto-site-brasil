var arrGovernantes;
var xmlGovernantes = new XMLHttpRequest();

var urlGov = "http://localhost:3000/governante";
xmlGovernantes.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
    localStorage.setItem("vetGovernantes", this.responseText);	
}
xmlGovernantes.open("GET", urlGov, true);
xmlGovernantes.send();

window.onload = function(){
	arrGovernantes = JSON.parse(localStorage.getItem("vetGovernantes"));
	for(var i=0; i<arrGovernantes.length; i++)
	{		
		var nome = "nome" + (i+1);
		var numero = "numero" + (i+1);
		var foto = "foto" + (i+1);
		var mandato = "mandato" + (i+1);
		var partido = "partido" + (i+1);

		document.getElementById(nome).innerHTML = arrGovernantes[i].nome;
		document.getElementById(numero).innerHTML = arrGovernantes[i].posicao;
		document.getElementById(mandato).innerHTML = arrGovernantes[i].inicio + " - " + arrGovernantes[i].fim;
		document.getElementById(partido).innerHTML = arrGovernantes[i].partido;
		document.getElementById(foto).src = arrGovernantes[i].urlImagem;
	}
}

function clicouGovern(govern){
	var url = "";
	switch(govern){
		case 1:  url = "https://pt.wikipedia.org/wiki/Pedro_I_do_Brasil"; break;
		case 2:  url = "https://pt.wikipedia.org/wiki/Pedro_II_do_Brasil"; break;
		case 3:  url = "https://pt.wikipedia.org/wiki/Deodoro_da_Fonseca"; break;
		case 4:  url = "https://pt.wikipedia.org/wiki/Floriano_Peixoto"; break;
		case 5:  url = "https://pt.wikipedia.org/wiki/Prudente_de_Moraes"; break;
		case 6:  url = "https://pt.wikipedia.org/wiki/Campos_Sales"; break;
		case 7:  url = "https://pt.wikipedia.org/wiki/Rodrigues_Alves"; break;
		case 8:  url = "https://pt.wikipedia.org/wiki/Afonso_Pena"; break;
		case 9:  url = "https://pt.wikipedia.org/wiki/Nilo_Pe%C3%A7anha"; break;
		case 10: url = "https://pt.wikipedia.org/wiki/Hermes_da_Fonseca"; break;
		case 11: url = "https://pt.wikipedia.org/wiki/Venceslau_Br%C3%A1s"; break;
		case 12: url = "https://pt.wikipedia.org/wiki/Delfim_Moreira"; break;
		case 13: url = "https://pt.wikipedia.org/wiki/Epit%C3%A1cio_Pessoa"; break;
		case 14: url = "https://pt.wikipedia.org/wiki/Artur_Bernardes"; break;
		case 15: url = "https://pt.wikipedia.org/wiki/Washington_Lu%C3%ADs"; break;
		case 16: url = "https://pt.wikipedia.org/wiki/Get%C3%BAlio_Vargas"; break;
		case 17: url = "https://pt.wikipedia.org/wiki/Jos%C3%A9_Linhares"; break;
		case 18: url = "https://pt.wikipedia.org/wiki/Eurico_Gaspar_Dutra"; break;
		case 19: url = "https://pt.wikipedia.org/wiki/Get%C3%BAlio_Vargas"; break;
		case 20: url = "https://pt.wikipedia.org/wiki/Caf%C3%A9_Filho"; break;
		case 21: url = "https://pt.wikipedia.org/wiki/Carlos_Luz"; break;
		case 22: url = "https://pt.wikipedia.org/wiki/Nereu_Ramos"; break;
		case 23: url = "https://pt.wikipedia.org/wiki/Juscelino_Kubitschek"; break;
		case 24: url = "https://pt.wikipedia.org/wiki/J%C3%A2nio_Quadros"; break;
		case 25: url = "https://pt.wikipedia.org/wiki/Ranieri_Mazzilli"; break;
		case 26: url = "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Goulart"; break;
		case 27: url = "https://pt.wikipedia.org/wiki/Ranieri_Mazzilli"; break;
		case 28: url = "https://pt.wikipedia.org/wiki/Humberto_de_Alencar_Castelo_Branco"; break;
		case 29: url = "https://pt.wikipedia.org/wiki/Costa_e_Silva"; break;
		case 30: url = "https://pt.wikipedia.org/wiki/Em%C3%ADlio_Garrastazu_M%C3%A9dici"; break;
		case 31: url = "https://pt.wikipedia.org/wiki/Ernesto_Geisel"; break;
		case 32: url = "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Figueiredo"; break;
		case 33: url = "https://pt.wikipedia.org/wiki/Jos%C3%A9_Sarney"; break;
		case 34: url = "https://pt.wikipedia.org/wiki/Fernando_Collor_de_Mello"; break;
		case 35: url = "https://pt.wikipedia.org/wiki/Itamar_Franco"; break;
		case 36: url = "https://pt.wikipedia.org/wiki/Fernando_Henrique_Cardoso	"; break;
		case 37: url = "https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva"; break;
		case 38: url = "https://pt.wikipedia.org/wiki/Dilma_Rousseff"; break;
		case 39: url = "https://pt.wikipedia.org/wiki/Michel_Temer"; break;
	}
	window.location.href = url;
}