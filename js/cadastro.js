document.getElementById("criarConta").onclick = function(){
	var email = document.getElementById("email").value;
	var data = document.getElementById("data").value;
	var dia = parseInt(data.substring(0,2));
	var mes = parseInt(data.substring(3,5));
	var ano = parseInt(data.substring(6,10));
	if (dia > 31 || mes > 12 || ano > 2018)
		alert('Data inválida');
	else{
		var emailJaExiste = false;
		arr = JSON.parse(localStorage.getItem("usuarioGeral"));
		for(var i=0; i<arr.length; i++)
			if(email == arr[i].email)
			{
				alert('Email já existente no site');
				emailJaExiste = true;
				break;
			}
		if(!emailJaExiste)
			cadastrar();
	}
}

cadastrar = function(form){
$.post( "http://localhost:3000/usuario", form.serialize() ).done(function(data){
if (!data.erro) {
form.each(function(data){
//limpar formulário
this.reset();
});
}
alert(data.mensagem);
//chamar listarItem
});
};