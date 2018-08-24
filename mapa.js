var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16, lng: -47},
    zoom: 3
  });
}

var estados = new Array(
ac{nome = "Acre", info = "não existe"}
	);

function trocaEstado(){
	var indice = document.getElementById("cbxEstados").selectedIndex;
	alert('Você selecionou: ' + estados[i].nome);
}
