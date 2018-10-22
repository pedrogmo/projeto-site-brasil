var curiosidades;
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/curiosidade";
xmlhttp.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)      
    localStorage.setItem("vetorCuriosidade", this.responseText);
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
curiosidades = JSON.parse(localStorage.getItem("vetorCuriosidade"));

window.onload = function(){
	var indice = Math.floor(Math.random() * curiosidades.length - 1);
	document.getElementById("curiosidade").innerHTML = curiosidade[indice].texto = "";
}