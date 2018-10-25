var usuarioPerfil;
var urlMudanca;
var novaSenhaUsuario;

window.onload = function(){
	// if (sessionStorage.getItem("logou") != "sim")
	// 	location.href = "inicio.html";
	usuarioPerfil = JSON.parse(sessionStorage.getItem("usuario"));
	urlMudanca = "http://localhost:3000/usuario/" + usuarioPerfil.codUsuario + '/';
	document.getElementById("nomeUsuario").value = usuarioPerfil.nomeUsuario;
	document.getElementById("emailUsuario").value = usuarioPerfil.email;
	document.getElementById("aniversarioUsuario").value = usuarioPerfil.dataAniversario;
	document.getElementById("paisUsuario").value = usuarioPerfil.nacionalidade;
	document.getElementById("pontuacaoUsuario").value = usuarioPerfil.pontuacao;
	document.getElementById("senhaUsuario").value = usuarioPerfil.senha;
}

document.getElementById("salvarAlteracoes").onclick = function(){
	
	novaSenhaUsuario = document.getElementById("novaSenhaUsuario").value;
	var updateSenha = new XMLHttpRequest();
    updateSenha.open("PATCH", "http://localhost:3000/senha/" + usuarioPerfil.codUsuario + '/' + novaSenhaUsuario, true);
    updateSenha.send();
    document.getElementById("salvarAlteracoes").hidden = true;
    document.getElementById("novaSenha").style.visibility = "hidden";
    usuarioPerfil.senha = novaSenhaUsuario;
    sessionStorage.setItem("usuario", JSON.stringify(usuarioPerfil));
	alert("Senha Alterada!");
	location.reload();
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

//Configura o botão mudar foto para abrir os documentos do usuário
document.getElementById("btn-choose").onclick = function(){
	document.getElementById("choose-photo").click();
}

function readURL(input)
{
	if(input.files && input.files[0])
	{
		var reader = new FileReader();
		reader.onload = function(e)
		{
			$('#user-photo')
			.attr('src', e.target.result)
			.height('100%')
			.width('100%');
		};
		reader.readAsDataURL(input.files[0]);
	}
}

document.getElementById("mudarSenha").onclick = function(){
	document.getElementById("novaSenha").style.visibility = "visible";
	document.getElementById("salvarAlteracoes").hidden = false;

}

