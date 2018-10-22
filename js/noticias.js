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
arr = JSON.parse(this.localStorage.getItem("noticias"));
xmlhttp.open("GET", url, true);
xmlhttp.send();


for(var i = 0; i < arr.length; i++)
{
	var noticia = "not" + (i+1);
	var titulo = "titulo" + (i+1);
	var subtitulo = "sub" + (i+1);
	var imagem = "img" + (i+1);
	document.getElementById(titulo).innerHTML = arr[i].titulo;
	document.getElementById(subtitulo).innerHTML = arr[i].subtitulo;
	document.getElementById(imagem).src = arr[i].urlImagem;
	var link = arr[i].link;
	document.getElementById(noticia).onclick=function(){location.href = link}
}

