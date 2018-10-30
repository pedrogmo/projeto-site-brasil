﻿var map;
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
  dados += "<br>População: " + vetEstados[i].populacao;
	dados += "<br>PIB: " + vetEstados[i].pib;
  dados += "<br>Esperança de vida: " + vetEstados[i].esperancaDeVida;
  dados += "<br>Mortalidade infantil: " + vetEstados[i].mortalidadeInfantil;
  dados += "<br>Alfabetização: " + vetEstados[i].alfabetizacao;
  dados += "<br>IDH: " + vetEstados[i].idh;
  dados += "<br>Área: " + vetEstados[i].area;
  info[i] = dados;
}

document.getElementById('cbxEstados').onchange = function(){
	var indice = document.getElementById("cbxEstados").selectedIndex;
  var mensagem = 'Você selecionou: ' + estados[indice - 1] + "<br><br>" + info[indice - 1];
  setTimeout(  function(){alertModal(mensagem);}  , 100);
}

function alertModal(msg){
  document.getElementById("modalAlert").style.display = "block";
  document.getElementById("mensagem").innerHTML = msg;
}