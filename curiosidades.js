var cont = 0;
var arr = new Array("Work in progress");
var band = 'A bandeira atual da República Federativa do Brasil foi feita em 1889, durante a República Velha. A frase "Ordem e Progresso"'+
' representa o positivismo, ideia segundo a qual a sociedade deve ser científica e autoritária, para que haja desenvolvimento. Acredita-se ' +
'que as cores verde e amarelo tenham surgido da riqueza presente nas matas e dos metais preciosos (o outro). Contudo, historiadores afirmam que' +
 'a escolha dessas cores provém da união entre as famílias reais Bragança (Brasil) e Habsburgo (Áustria).';

function curiosidade()
{
	alert(arr[cont]);
	cont++;
	if (cont >= 10)
		cont = 0
}

function bandeira()
{
	alert(band);
}