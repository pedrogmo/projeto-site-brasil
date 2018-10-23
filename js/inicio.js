var curiosidades;
var xmlCuriosiades = new XMLHttpRequest();
var urlCuriosiades = "http://localhost:3000/curiosidade";
xmlCuriosiades.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)      
    localStorage.setItem("vetorCuriosidade", this.responseText);
}
xmlCuriosiades.open("GET", urlCuriosiades, true);
xmlCuriosiades.send();

window.onload = function(){
	curiosidades = JSON.parse(localStorage.getItem("vetorCuriosidade"));
	var indice = Math.floor(Math.random() * curiosidades.length - 1);
	document.getElementById("curiosidade").innerHTML = '"' + curiosidades[indice].texto + '"';
}