var candidato = new Array('Marina Silva', 'Jair Bolsonaro', 'Fernando Haddad', 'Ciro Gomes', 'Geraldo Alckmin', 'Alvaro Dias', 'Henrique Meirelles', 'João Amoedo', 'Guilherme Boulos', 'José Maria Eymael', 'Cabo Daciolo', 'João Goulart Filho', 'Vera Lúcia');
var cont = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);

function votar(cand){
	alert('Você votou em ' + candidato[cand - 1]);
	$(':button').prop('disabled', true);
	$(':button').css('filter', 'brightness(60%)');
	cont[cand]++;
}