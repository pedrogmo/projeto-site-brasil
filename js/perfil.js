var usuario;
var urlMudanca = "http://localhost:3000/usuario/" + usuario.codUsuario;
window.onload = function(){
	usuario = JSON.parse(sessionStorage.getItem("usuario"));
	document.getElementById("nomeUsuario").innerHTML = usuario.nomeUsuario;
	document.getElementById("emailUsuario").innerHTML = usuario.email;
	document.getElementById("aniversarioUsuario").innerHTML = usuario.dataAniversario;
	document.getElementById("paisUsuario").innerHTML = usuario.nacionalidade;
	document.getElementById("pontuacaoUsuario").innerHTML = usuario.pontuacao;
}

document.getElementById("trocarSenha").onclick = function(){
	var updateSenha = new XMLHttpRequest();
    updateSenha.open("PATCH", urlMudanca, true);
    updateSenha.send();
}

document.getElementById("excluirConta").onclick = function(){
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("DELETE", urlMudanca, true);
    xmlhttp.send();
}