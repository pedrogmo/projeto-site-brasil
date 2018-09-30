var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16, lng: -47},
    zoom: 3
  });
}

var estados = new Array("Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
				"Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais",
				"Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte",
				"Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins");

var info = new Array("");

function trocaEstado(){
	var indice = document.getElementById("cbxEstados").selectedIndex;
	alert('Você selecionou: ' + estados[indice] + info[indice]);
}
