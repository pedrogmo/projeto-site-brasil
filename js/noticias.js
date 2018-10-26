var imagem = document.getElementById("img-noticia");

function trocarImagem(img){
	imagem.src = img;
}

var arr;
var xmlNoticias = new XMLHttpRequest();
var urlNoticias = "http://localhost:3000/noticia";

xmlNoticias.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
    localStorage.setItem("noticias", this.responseText);	
}
arr = JSON.parse(this.localStorage.getItem("noticias"));
xmlNoticias.open("GET", urlNoticias, true);
xmlNoticias.send();


for(var i = 0; i < arr.length; i++)
{
	var noticia = "not" + (i+1);
	var titulo = "titulo" + (i+1);
	var subtitulo = "sub" + (i+1);
	var imagem = "img" + (i+1);
	var tema = "tema" + (i+1);
	var data = "dataNoticia" + (i+1);
	var site = "siteOrigem" + (i+1);
	document.getElementById(titulo).innerHTML = arr[i].titulo;
	document.getElementById(subtitulo).innerHTML = arr[i].subtitulo;
	document.getElementById(data).innerHTML += arr[i].dataPublicacao;
	document.getElementById(site).innerHTML += arr[i].siteFonte;
	document.getElementById(tema).innerHTML = arr[i].tema;
	document.getElementById(imagem).src = arr[i].urlImagem;
	var link = arr[i].link;
	document.getElementById(noticia).onclick=function(){location.href = link}
}

