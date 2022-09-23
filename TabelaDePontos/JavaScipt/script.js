
var jogador1 = {nome:"", vitorias: 0, derrotas: 0, empates: 0, pontos: 0}
var jogador2 = {nome:undefined, vitorias: 0, derrotas: 0, empates: 0, pontos: 0}
var jogador3 = {nome:undefined, vitorias: 0, derrotas: 0, empates: 0, pontos: 0}
var jogador4 = {nome:undefined, vitorias: 0, derrotas: 0, empates: 0, pontos: 0}

var listaJogadores = [jogador1, jogador2, jogador3, jogador4];

console.log(jogador1.pontos)


function calcularPontos(jogador) {
  var classificação = (jogador.vitorias * 3) + jogador.empates;
  return classificação
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
    if (indice == 4) {
      document.getElementById("butao").hidden = true
      document.getElementById("input").hidden = true
    }
    return indice;
  }
}

function imprimirJogadoresNaTela(listaJogadores) {
  var tabela = "";
  for (var i = 0; i < listaJogadores.length; i++) {
    if (listaJogadores[i].nome != undefined){
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
    document.getElementById("input").value = ""
  }
}

function adicionarVitoria(i) {
  var jogador= listaJogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  imprimirJogadoresNaTela(listaJogadores);
}

function adicionarDerrota(i) {
  var jogador= listaJogadores[i];
  jogador.derrotas++;
  imprimirJogadoresNaTela(listaJogadores);
}

function adicionarEmpate(i) {
  var jogador= listaJogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  imprimirJogadoresNaTela(listaJogadores);
}
