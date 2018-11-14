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
	tabelaEras.innerHTML += `
	<td id="cabecalho">Código</td>
	<td id="cabecalho">Nome</td>
	<td id="cabecalho">Início</td>
	<td id="cabecalho">Fim</td>
	<td id="cabecalho">Descrição</td>
	<td id="cabecalho">UrlImagem</td>
	</tr>`;
	var tabelaNoticias = document.getElementById("noticias");
	tabelaNoticias.innerHTML += `
	<td id="cabecalho">Cód.</td>
	<td id="cabecalho">Tema</td>
	<td id="cabecalho">Título</td>
	<td id="cabecalho">Sub<br>Título</td>
	<td id="cabecalho">Url<br>Img.</td>
	<td id="cabecalho" class="link">Link</td>
	<td id="cabecalho">Fonte</td>
	<td id="cabecalho">Data</td>
	</tr>`;	
	for(var i=0; i<vetEras.length; i++){
		if(i % 2 == 0)
		{
			var colunas = `<tr class="linhasPares">
			<td id="codigo">${vetEras[i].codEra}</td>
			<td>${vetEras[i].nome}</td>
			<td>${vetEras[i].inicio}</td>
			<td>${vetEras[i].fim}</td>
			<td>${vetEras[i].descricao}</td>
			<td>${vetEras[i].urlImagem}</td>
			</tr>`;
			tabelaEras.innerHTML += colunas;
		}
		else
		{
			var colunas = `<tr>
			<td id="codigo">${vetEras[i].codEra}</td>
			<td>${vetEras[i].nome}</td>
			<td>${vetEras[i].inicio}</td>
			<td>${vetEras[i].fim}</td>
			<td>${vetEras[i].descricao}</td>
			<td>${vetEras[i].urlImagem}</td>
			</tr>`;
			tabelaEras.innerHTML += colunas;
		}
		
	}
	for(var i=0; i<vetNoticias.length; i++){
		if(i % 2 == 0)
		{
			var colunas = `<tr class="linhasPares">
			<td id="codigo">${vetNoticias[i].codNoticia}</td>
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
		else
		{
			var colunas = `<tr>
			<td id="codigo">${vetNoticias[i].codNoticia}</td>
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
}