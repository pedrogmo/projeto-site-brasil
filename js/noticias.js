var imagem = document.getElementById("img-noticia");

function trocarImagem(img){
	imagem.src = img;
}

var arr;
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/noticia";

xmlhttp.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
    localStorage.setItem("noticias", this.responseText);	
}

xmlhttp.open("GET", url, true);
xmlhttp.send();
arr = JSON.parse(this.localStorage.getItem("noticias"));