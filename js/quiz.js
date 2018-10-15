var acertos, erros, respostas, o, p, r, pontos, pontosUsuario, t;

window.onload = function() //vai dar ruim
{   
    document.getElementById("resp").style.visibility = "hidden";
    acertos=0; //quantidade de acertos e erros
    erros=0;
    pontosUsuario = 0;
    respostas = new Array(); //repostas do usuário
    o = new Array();
    p = new Array(); //perguntas
    r = new Array(); //respostas certas
    pontos = new Array();
    t = 30; //quantidade de perguntas
    p[0] = "";
    r[0] = "";
    pontos[0] = 0;

    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/pergunta";
    xmlhttp.onreadystatechange=function(){
      if (this.readyState == 4 && this.status == 200)
        localStorage.setItem("vetor", this.responseText);
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    var arr = JSON.parse(localStorage.getItem("vetor"));
    for(var i = 0; i < t; i++)
    {
      p[i + 1] = arr[i].texto;
      r[i + 1] = arr[i].resposta.toUpperCase();
      pontos[i + 1] = arr[i].pontos;
      var id = i + 1 + "";
      document.getElementById(id).innerHTML = "P: " + p[i + 1];
    }
     
}

function fim(botao)
{
  botao.style.visibility="hidden";
  document.getElementById("resp").style.visibility = "visible";

  var certo = "<font color = 'lime'>Certo!</font>"; 
  var errado = "<font color = 'red'>Errado!</font>";
  var acertou = new Array();
  for(var i=1;i<=t;i++)
  {
    var id = 'r' + i;
    respostas[i] = document.getElementById(id).value.toUpperCase();
    if(respostas[i]==r[i])
    {
      acertou[i] = certo;
      acertos++;
      pontosUsuario += pontos[i];
    }        
    else
    {
      acertou[i] = errado;
      erros++;
    }
  }
  for(var i = 1; i <= t; i++)
  {
    var id = i + '';
    document.getElementById(id).innerHTML += '<br>' + acertou[i];
  }
  document.getElementById('acertos').innerHTML = "Acertos: " + acertos;
  document.getElementById('erros').innerHTML = "Erros: " + erros;
}

document.getElementById('resp').onclick = function()
{
  var texto = '<ol>';
  for(var i = 1; i <= t; i++)
  texto += '<ul>P: '+p[i]+'<br>R: '+r[i]+'</ul><br>';
  texto += '</ol>';
  var janela = window.open("", "_blank", 'height=800,width=1000');
  janela.document.write(texto);
  janela.focus();
}