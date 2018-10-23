var usuarioPerfil;
var urlMudanca;

window.onload = function(){
	if (sessionStorage.getItem("logou") != "sim")
		location.href = "inicio.html";
	usuarioPerfil = JSON.parse(sessionStorage.getItem("usuario"));
	urlMudanca = "http://localhost:3000/usuario/" + usuarioPerfil.codUsuario;
	document.getElementById("nomeUsuario").innerHTML = usuarioPerfil.nomeUsuario;
	document.getElementById("emailUsuario").innerHTML = usuarioPerfil.email;
	document.getElementById("aniversarioUsuario").innerHTML = usuarioPerfil.dataAniversario;
	document.getElementById("paisUsuario").innerHTML = usuarioPerfil.nacionalidade;
	document.getElementById("pontuacaoUsuario").innerHTML = usuarioPerfil.pontuacao;
}

document.getElementById("trocarSenha").onclick = function(){
	/*
	var updateSenha = new XMLHttpRequest();
    updateSenha.open("PATCH", urlMudanca, true);
    updateSenha.send();
    */
}

document.getElementById("excluirConta").onclick = function(){
	var confirmacao = confirm("Você deseja excluir sua conta?");
	if (confirmacao){
		var excluirConta = new XMLHttpRequest();
	    excluirConta.open("DELETE", urlMudanca, true);
	    excluirConta.send();
	    sessionStorage.removeItem("usuario");
	    sessionStorage.removeItem("logou");
	    alert('Sua conta foi excluída do Brasilee');
	    location.href = "inicio.html";
	}
}