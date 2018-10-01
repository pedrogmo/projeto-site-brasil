var cont = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);

function votar(cand){
	alert('poar');
	$(':button').prop('disabled', true);
	$(':button').css('filter', 'brightness(60%)');
	cont[cand]++;
}