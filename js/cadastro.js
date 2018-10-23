document.getElementById("cadastro").onsubmit = function(){
	var email = document.getElementById("email").value;
	var data = document.getElementById("data").value;
	var dia = parseInt(data.substring(0,2));
	var mes = parseInt(data.substring(3,5));
	var ano = parseInt(data.substring(6,10));
	var senha = document.getElementById("senha").value;
	var senha2 = document.getElementById("confirmarSenha").value;
	if (isNaN(dia) || isNaN(mes) || isNaN(ano) || dia > 31 || mes > 12 || ano > 2018 || ano < 1890)
	{
		alert('Data inválida');
		document.getElementById("data").value = "";
		return false;
	}
	else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1){
		alert('Email inválido');
		document.getElementById("email").value = "";
		return false;
	}
	else if (senha != senha2)
	{
		alert("As senhas não estão iguais");
		document.getElementById("senha").value = document.getElementById("confirmarSenha").value = "";
		return false;
	}
	else{
		var emailJaExiste = false;
		var usuarios = JSON.parse(localStorage.getItem("usuarioGeral"));
		for(var i=0; i<usuarios.length; i++)
			if(email == usuarios[i].email)
			{
				alert('Email já existente no site');
				emailJaExiste = true;
				document.getElementById("email").value = "";
				return false;
				break;
			}
		if(!emailJaExiste)
		{
			alert('Conta criada');			
			return true;
		}
	}
}