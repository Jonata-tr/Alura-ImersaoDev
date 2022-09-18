var listaJogadores =[]

var player = { nome: "", vitorias: 2, derrotas: 0, empates: 1, pontos: 0 };

function adicionarJogador() {
  var jogador =  document.getElementsByName('array[]');
  player.nome = jogador;
  listaJogadores.push(player)
  console.log(listaJogadores)
  document.getElementById("input").value = "";
  return listaJogadores
}

imprimirJogadoresNaTela(listaJogadores);

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

    console.log(tabela);
  }

  var table = document.getElementById("placarPontos");
  table.innerHTML = tabela;
}

calcularPontos(listaJogadores);

function calcularPontos(pontosJogador) {
  var classificação = player.vitorias * 3 + player.empates;
  player.pontos = classificação;
  console.log(classificação);
}

function adicionarVitoria(i) {
  var jogador = listaJogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  imprimirJogadoresNaTela(listaJogadores);
}
