var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16, lng: -47},
    zoom: 3
  });
}

var arr;
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/estado";

var estados = new Array();
var info = new Array();

xmlhttp.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
  {
  	arr = JSON.parse(this.responseText);
    var dados = "";
  	for (var i = 0; i < arr.length; i++)
  	{
  		estados[i] = arr[i].nome;
  		dados =  "Área: " + arr[i].area;
      dados += "\nPopulação: " + arr[i].populacao;
  		dados += "\nPIB: " + arr[i].pib;
      dados += "\nEsperança de vida: " + arr[i].esperancaDeVida;
      dados += "\nMoralidade infantil: " + arr[i].mortalidadeInfantil;
      dados += "\nAlfabetização: " + arr[i].alfabetizacao;
      dados += "\nIDH: " + arr[i].idh;
      dados += "\nRegião: " + arr[i].regiao;
  		info[i] = dados;
  	}
  }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

document.getElementById('cbxEstados').onchange = function(){
	var indice = document.getElementById("cbxEstados").selectedIndex;
	alert('Você selecionou: ' + estados[indice] + "\nDados:\n" + info[indice]);
}
