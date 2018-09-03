var cont; var ind; var easteregg;
function onLoad()
{
	cont = 0;
	ind = 0;
	easteregg = new Array("EasterEgg","( ͡° ͜ʖ ͡°)","Você deseja continuar?","Você quer descobrir o que está por trás da vida, da verdade e do universo",
		"Você quer mesmo saber?","Eu avisei","3","2","1","Eu avisei","Hello am 48 year man from somalia. Sorry for my bed england. I selled my wife for internet connection for play \"conter strik\" and i want to become the goodest player like you I play with 400 ping on brazil and i am global elite 2. pls no copy pasterio my story");
}
function logoClick()
{
	cont++;
	if (cont == 5)
	{
		alert(easteregg[ind]);
		cont = 0;
		ind++;
	}
}








