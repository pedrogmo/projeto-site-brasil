var vetEras;
var vetNoticias;
var xmlEra = new XMLHttpRequest();
var xmlNoticias = new XMLHttpRequest();

xmlEra.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
    localStorage.setItem("erasHistoricas", this.responseText);	
}
xmlEra.open("GET", "http://localhost:3000/historia", true);
xmlEra.send();

xmlNoticias.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)
    localStorage.setItem("noticias", this.responseText);	
}
xmlNoticias.open("GET", "http://localhost:3000/noticia", true);
xmlNoticias.send();

window.onload = function(){
	vetEras = JSON.parse(localStorage.getItem("erasHistoricas"));
	vetNoticias = JSON.parse(localStorage.getItem("noticias"));
	var tabelaEras = document.getElementById("eras");
	tabelaEras.innerHTML += `<tr><th>Eras Históricas</th></tr>
	<tr>
	<td>Código</td>
	<td>Nome</td>
	<td>Início</td>
	<td>Fim</td>
	<td>Descrição</td>
	<td>UrlImagem</td>
	</tr>`;
	var tabelaNoticias = document.getElementById("noticias");
	tabelaNoticias.innerHTML += `<tr><th>Notícias</th></tr>
	<tr>
	<td>Código</td>
	<td>Tema</td>
	<td>Título</td>
	<td>SubTítulo</td>
	<td>UrlImagem</td>
	<td>Link</td>
	<td>SiteFonte</td>
	<td>DataPublicação</td>
	</tr>`;	
	for(var i=0; i<vetEras.length; i++){
		var colunas = `<tr>
		<td>${vetEras[i].codEra}</td>
		<td>${vetEras[i].nome}</td>
		<td>${vetEras[i].inicio}</td>
		<td>${vetEras[i].fim}</td>
		<td>${vetEras[i].descricao}</td>
		<td>${vetEras[i].urlImagem}</td>
		</tr>`;
		tabelaEras.innerHTML += colunas;
	}
	for(var i=0; i<vetNoticias.length; i++){
		var colunas = `<tr>
		<td>${vetNoticias[i].codNoticia}</td>
		<td>${vetNoticias[i].tema}</td>
		<td>${vetNoticias[i].titulo}</td>
		<td>${vetNoticias[i].subtitulo}</td>
		<td>${vetNoticias[i].urlImagem}</td>
		<td>${vetNoticias[i].link}</td>
		<td>${vetNoticias[i].siteFonte}</td>
		<td>${vetNoticias[i].dataPublicacao}</td>
		</tr>`;
		tabelaNoticias.innerHTML += colunas;
	}
}