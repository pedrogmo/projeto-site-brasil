var mudarIcone = true;

document.getElementById("heart").onclick = function(){
	if(mudarIcone){
		document.getElementById("heart").className = "fas fa-heart";
		mudarIcone = false;
	}
	else{
		document.getElementById("heart").className = "far fa-heart";
		mudarIcone = true;
	}
}