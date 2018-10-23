var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16, lng: -47},
    zoom: 3
  });
}

var arr;
var xmlEstados = new XMLHttpRequest();
var urlEstados = "http://localhost:3000/estado";

var estados = new Array();
var info = new Array();

xmlEstados.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
    localStorage.setItem("estadoMapa", this.responseText);	
}
xmlEstados.open("GET", urlEstados, true);
xmlEstados.send();
vetEstados = JSON.parse(localStorage.getItem("estadoMapa"));
var dados = "";
for (var i = 0; i < vetEstados.length; i++)
{
  estados[i] = vetEstados[i].nome;
	dados =  "Região: " + vetEstados[i].regiao;
  dados += "\nPopulação: " + vetEstados[i].populacao;
	dados += "\nPIB: " + vetEstados[i].pib;
  dados += "\nEsperança de vida: " + vetEstados[i].esperancaDeVida;
  dados += "\nMortalidade infantil: " + vetEstados[i].mortalidadeInfantil;
  dados += "\nAlfabetização: " + vetEstados[i].alfabetizacao;
  dados += "\nIDH: " + vetEstados[i].idh;
  dados += "\nÁrea: " + vetEstados[i].area;
  info[i] = dados;
}

document.getElementById('cbxEstados').onchange = function(){
	var indice = document.getElementById("cbxEstados").selectedIndex;
  setTimeout(  function(){alert('Você selecionou: ' + estados[indice] + "\n" + info[indice]);}  , 100);
}
