var candidato = new Array('Marina Silva', 'Jair Bolsonaro', 'Fernando Haddad', 'Ciro Gomes', 'Geraldo Alckmin', 'Alvaro Dias', 'Henrique Meirelles', 'João Amoedo', 'Guilherme Boulos', 'José Maria Eymael', 'Cabo Daciolo', 'João Goulart Filho', 'Vera Lúcia');
var cont = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);

function votar(cand){
	alert('Você votou em ' + candidato[cand - 1]);
	$('button[id^="btnVotar"]').prop('disabled', true);
	$('button[id^="btnVotar"]').css('filter', 'brightness(60%)');
	document.getElementsByTagName("btnVotar").disabled = true;
	cont[cand]++;
}