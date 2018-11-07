var arrGovernantes;
var xmlGovernantes = new XMLHttpRequest();
var urlLP = "http://localhost:3000/governantes";

xmlGovernantes.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
    localStorage.setItem("vetGovernantes", this.responseText);	
}
xmlGovernantes.open("GET", urlLP, true);
xmlGovernantes.send();

window.onload = function(){
	arrGovernantes = JSON.parse(localStorage.getItem("vetGovernantes"));
	for(var i=0; i<arrGovernantes.length; i++)
	{
		var nome
		var numero
		var foto
		var mandato
		var partido
	}
}

function clicouGovern(govern){
	var url = "";
	switch(govern){
		case 1:
		var url = "https://pt.wikipedia.org/wiki/Pedro_I_do_Brasil";
		break;
		case 2:
		var url = "https://pt.wikipedia.org/wiki/Pedro_II_do_Brasil";
		break;
		case 3:
		var url = "https://pt.wikipedia.org/wiki/Deodoro_da_Fonseca";
		break;
		case 4:
		var url = "https://pt.wikipedia.org/wiki/Floriano_Peixoto";
		break;
		case 5:
		var url = "https://pt.wikipedia.org/wiki/Prudente_de_Moraes";
		break;
		case 6:
		var url = "https://pt.wikipedia.org/wiki/Campos_Sales";
		break;
		case 7:
		var url = "https://pt.wikipedia.org/wiki/Rodrigues_Alves";
		break;
		case 8:
		var url = "https://pt.wikipedia.org/wiki/Afonso_Pena";
		break;
		case 9:
		var url = "https://pt.wikipedia.org/wiki/Nilo_Pe%C3%A7anha";
		break;
		case 10:
		var url = "https://pt.wikipedia.org/wiki/Hermes_da_Fonseca";
		break;
		case 11:
		var url = "https://pt.wikipedia.org/wiki/Venceslau_Br%C3%A1s";
		break;
		case 12:
		var url = "https://pt.wikipedia.org/wiki/Delfim_Moreira";
		break;
		case 13:
		var url = "https://pt.wikipedia.org/wiki/Epit%C3%A1cio_Pessoa";
		break;
		case 14:
		var url = "https://pt.wikipedia.org/wiki/Artur_Bernardes";
		break;
		case 15:
		var url = "https://pt.wikipedia.org/wiki/Washington_Lu%C3%ADs";
		break;
		case 16:
		var url = "https://pt.wikipedia.org/wiki/Get%C3%BAlio_Vargas";
		break;
		case 17:
		var url = "https://pt.wikipedia.org/wiki/Jos%C3%A9_Linhares";
		break;
		case 18:
		var url = "https://pt.wikipedia.org/wiki/Eurico_Gaspar_Dutra";
		break;
		case 19:
		var url = "https://pt.wikipedia.org/wiki/Get%C3%BAlio_Vargas";
		break;
		case 20:
		var url = "https://pt.wikipedia.org/wiki/Caf%C3%A9_Filho";
		break;
		case 21:
		var url = "https://pt.wikipedia.org/wiki/Carlos_Luz";
		break;
		case 22:
		var url = "https://pt.wikipedia.org/wiki/Nereu_Ramos";
		break;
		case 23:
		var url = "https://pt.wikipedia.org/wiki/Juscelino_Kubitschek";
		break;
		case 24:
		var url = "https://pt.wikipedia.org/wiki/J%C3%A2nio_Quadros";
		break;
		case 25:
		var url = "https://pt.wikipedia.org/wiki/Ranieri_Mazzilli";
		break;
		case 26:
		var url = "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Goulart";
		break;
		case 27:
		var url = "https://pt.wikipedia.org/wiki/Ranieri_Mazzilli";
		break;
		case 28:
		var url = "https://pt.wikipedia.org/wiki/Humberto_de_Alencar_Castelo_Branco";
		break;
		case 29:
		var url = "https://pt.wikipedia.org/wiki/Costa_e_Silva";
		break;
		case 30:
		var url = "https://pt.wikipedia.org/wiki/Em%C3%ADlio_Garrastazu_M%C3%A9dici";
		break;
		case 31:
		var url = "https://pt.wikipedia.org/wiki/Ernesto_Geisel";
		break;
		case 32:
		var url = "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Figueiredo";
		break;
		case 33:
		var url = "https://pt.wikipedia.org/wiki/Jos%C3%A9_Sarney";
		break;
		case 34:
		var url = "https://pt.wikipedia.org/wiki/Fernando_Collor_de_Mello";
		break;
		case 35:
		var url = "https://pt.wikipedia.org/wiki/Itamar_Franco";
		break;
		case 36:
		var url = "https://pt.wikipedia.org/wiki/Fernando_Henrique_Cardoso	";
		break;
		case 37:
		var url = "https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva";
		break;
		case 38:
		var url = "https://pt.wikipedia.org/wiki/Dilma_Rousseff";
		break;
		case 39:
		var url = "https://pt.wikipedia.org/wiki/Michel_Temer";
		break;
	}
	window.location.href = url;
}