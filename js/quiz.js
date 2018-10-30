var acertos, erros, respostas, o, p, r, pontos, pontosUsuario, t, usuarioQuiz;

window.onload = function() //vai dar ruim
{
    document.getElementById("enviar").style.visibility = "hidden";
    document.getElementById("resp").style.visibility = "hidden";
    if (sessionStorage.getItem("logou") == "sim")
      inicioQuiz();
    else
      alert('Você não está logado, faça login para começar o quiz!');
}

function inicioQuiz(){
    document.getElementById("enviar").style.visibility = "visible";
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

    var xmlPerguntas = new XMLHttpRequest();
    var urlPerguntas = "http://localhost:3000/pergunta";
    xmlPerguntas.onreadystatechange=function(){
      if (this.readyState == 4 && this.status == 200)
        localStorage.setItem("perguntaQuiz", this.responseText);
    }
    xmlPerguntas.open("GET", urlPerguntas, true);
    xmlPerguntas.send();

    var vetPerguntas = JSON.parse(localStorage.getItem("perguntaQuiz"));
    for(var i = 0; i < t; i++)
    {
      p[i + 1] = vetPerguntas[i].texto;
      r[i + 1] = vetPerguntas[i].resposta;
      pontos[i + 1] = vetPerguntas[i].pontos;
      var id = i + 1 + "";
      document.getElementById(id).innerHTML = "<font color='#002776'>" + (i + 1) + ". </font>" + p[i + 1];
    }
}

document.getElementById("enviar").onclick = function()
{
    document.getElementById("enviar").style.visibility = "hidden";
    document.getElementById("resp").style.visibility = "visible";

    var certo = 'acertos fas fa-check'; 
    var errado = 'erros fas fa-times';
    var acertou = new Array();
    for(var i=1;i<=t;i++)
    {
      var id = 'r' + i;
      var campo = document.getElementById(id);
      respostas[i] = document.getElementById(id).value.toUpperCase().trim();
      if(respostas[i]==r[i].toUpperCase())
      {
        acertou[i] = certo;
        acertos++;
        pontosUsuario += pontos[i];
        campo.style.borderColor = "#1db954";
      }        
      else
      {
        acertou[i] = errado;
        erros++;
        campo.style.borderColor = "#fe2020";
      }
    }
    for(var i = 1; i <= t; i++)
    {
      var id = 'a' + i;
      document.getElementById(id).className = acertou[i];
    }
    document.getElementById('acertos').innerHTML = "Acertos: " + acertos;
    document.getElementById('erros').innerHTML = "Erros: " + erros;
    usuarioQuiz = JSON.parse(sessionStorage.getItem("usuario"));
    var fim = 'Fim do Quiz.' + '<br>Usuário: ' + usuarioQuiz.nomeUsuario + '<br>Acertos: ' + acertos + '<br>Pontos: ' + pontosUsuario + '<br>Highscore: ' + usuarioQuiz.pontuacao;
    if (pontosUsuario > usuarioQuiz.pontuacao)
    {
      fim += '\nHighscore atualizado!';
      var updatePontos = new XMLHttpRequest();
      var urlUsuarios = "http://localhost:3000/usuario" + "/" + usuarioQuiz.codUsuario;
      updatePontos.open('PATCH', urlUsuarios + "/" + pontosUsuario, true);
      updatePontos.send();
      usuarioQuiz.pontuacao = pontosUsuario;
      sessionStorage.setItem("usuario", JSON.stringify(usuarioQuiz));
      document.getElementById('highScore').innerHTML = "&nbsp;&nbsp;&nbsp;<i class='fas fa-trophy'></i>&nbsp;&nbsp;&nbsp;Highscore do quiz: " + usuarioQuiz.pontuacao;
    }
    alert(fim);
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