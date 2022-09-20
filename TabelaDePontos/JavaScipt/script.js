
var jogador1 = {nome:"", vitorias: 0, derrotas: 0, empates:0, pontos:0 }
var jogador2 = {nome:"", vitorias: 0, derrotas: 0, empates:0, pontos:0 }
var jogador3 = {nome:"", vitorias: 0, derrotas: 0, empates:0, pontos:0 }
var jogador4 = {nome:"", vitorias: 0, derrotas: 0, empates:0, pontos:0 }

var listaJogadores = [jogador1, jogador2, jogador3, jogador4];


function calcularPontos(jogador) {
  var classificação = jogador.vitorias * 3 + jogador.empates;
  console.log(jogador.pontos)
  jogador.pontos = classificação;
}

jogador1.pontos = calcularPontos(jogador1);
jogador2.pontos = calcularPontos(jogador2);
jogador3.pontos = calcularPontos(jogador3);
jogador4.pontos = calcularPontos(jogador4);

var indice = 0;

function adicionarJogador() {
  var jogador = document.getElementById("input").value;
  console.log(listaJogadores);
  if (indice < listaJogadores.length) {
    listaJogadores[indice].nome = jogador;
    imprimirJogadoresNaTela(listaJogadores);
    indice++;
    return indice;
  } else if(indice == listaJogadores.length) {
    window.alert("Numero maximo de jogadores atingido.");
  }
}

function imprimirJogadoresNaTela(listaJogadores) {
  var tabela = "";
  for (var i = 0; i < listaJogadores.length; i++) {
    tabela += "<tr><th>" + listaJogadores[i].nome + "</th>";
    tabela += "<td>" + listaJogadores[i].vitorias + "</td>";
    tabela += "<td>" + listaJogadores[i].derrotas + "</td>";
    tabela += "<td>" + listaJogadores[i].empates + "</td>";
    tabela += "<td>" + listaJogadores[i].pontos + "</td>";
    tabela +=
    "<td><button class='adicionar' type='submit' onClick ='adicionarVitoria(" +
    i +
    ")'>Adicionar</button></td>";
    tabela +=
      "<td><button class='adicionar' type='submit' onClick ='adicionarDerrota(" +
      i +
      ")'>Adicionar</button></td>";
      tabela +=
      "<td><button class='adicionar' type='submit' onClick ='adicionarEmpate(" +
      i +
      ")'>Adicionar</button></td>";
    }
    var table = document.getElementById("placarPontos");
    table.innerHTML = tabela;
  }

function adicionarVitoria(i) {
  var jogador= listaJogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  imprimirJogadoresNaTela(listaJogadores);
}
