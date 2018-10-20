var usuario;

window.onload = function(){
	usuario = JSON.parse(sessionStorage.getItem("usuario"));
	document.getElementById("nomeUsuario").innerHTML = usuario.nomeUsuario;
	document.getElementById("emailUsuario").innerHTML = usuario.email;
	document.getElementById("aniversarioUsuario").innerHTML = usuario.dataAniversario;
	document.getElementById("paisUsuario").innerHTML = usuario.nacionalidade;
	document.getElementById("pontuacaoUsuario").innerHTML = usuario.pontuacao;
}

document.getElementById("trocarSenha").onclick = function(){
	var xmlhttpp = new XMLHttpRequest();
    var urll = "http://localhost:3000/usuario/" + usuario.codUsuario;
    xmlhttpp.open("PATCH", urll, true);
    xmlhttpp.send();
}

document.getElementById("excluirConta").onclick = function(){
	var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/usuario/" + usuario.codUsuario;
    xmlhttp.open("DELETE", url, true);
    xmlhttp.send();
}