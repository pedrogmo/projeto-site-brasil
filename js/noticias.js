var imagem = document.getElementById("img-noticia");

function trocarImagem(img){
	imagem.src = img;
}

var vetNoticias;
var xmlNoticias = new XMLHttpRequest();
var urlNoticias = "http://localhost:3000/noticia";

xmlNoticias.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
    localStorage.setItem("noticias", this.responseText);	
}
vetNoticias = JSON.parse(this.localStorage.getItem("noticias"));
xmlNoticias.open("GET", urlNoticias, true);
xmlNoticias.send();


for(var i = 0; i < vetNoticias.length; i++)
{
	var noticia, titulo, lide;
	if (i > 3){
		noticia = "not" + (i+1);
		titulo = "titulo" + (i+1);
		lide = "lide" + (i+1);
		var imagem = "img" + (i+1);
		var tema = "tema" + (i+1);
		var data = "dataNoticia" + (i+1);
		var site = "siteOrigem" + (i+1);
		document.getElementById(data).innerHTML += vetNoticias[i].dataPublicacao;
		document.getElementById(site).innerHTML += vetNoticias[i].siteFonte;
		document.getElementById(tema).innerHTML = vetNoticias[i].tema;
		document.getElementById(imagem).src = vetNoticias[i].urlImagem;
	}
	else{
		noticia = "destaque" + (i+1);
		titulo = "desTitulo" + (i+1);
		lide = "desDesc" + (i+1);
		document.getElementById(noticia).style.backgroundImage = 'url(' + vetNoticias[i].urlImagem + ')';
	}	
	document.getElementById(titulo).innerHTML = vetNoticias[i].titulo;
	document.getElementById(lide).innerHTML = vetNoticias[i].lide;	
	var link = vetNoticias[i].link;
	document.getElementById(noticia).onclick=function(){location.href = link}
}

