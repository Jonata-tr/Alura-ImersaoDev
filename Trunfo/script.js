var cartas = [
  (carta1 = {
    nome: "Ishitar",
    atributos: {
      ataque: 16,
      defesa: 7,
      agilidade: 3,
    },
  }),

  (carta2 = {
    nome: "Tiffa",
    atributos: {
      ataque: 19,
      defesa: 9,
      agilidade: 11,
    },
  }),

  (carta3 = {
    nome: "2B",
    atributos: {
      ataque: 16,
      defesa: 10,
      agilidade: 13,
    },
  }),

  (carta4 = {
    nome: "Yor",
    atributos: {
      ataque: 11,
      defesa: 2,
      agilidade: 18,
    },
  }),

  (carta5 = {
    nome: "Nami",
    atributos: {
      ataque: 11,
      defesa: 5,
      agilidade: 8,
    },
  }),

  (carta6 = {
    nome: "Tastumaki",
    atributos: {
      ataque: 18,
      defesa: 1,
      agilidade: 12,
    },
  }),
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  cartaMaquina = cartas[parseInt(Math.random() * 6)];

  // SorteioCartasDoJogador

  cartaJogador = cartas[parseInt(Math.random() * 6)];
  while (cartaJogador == cartaMaquina) {
    cartaJogador = cartas[parseInt(Math.random() * 6)];
  }

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  imagens(cartaJogador, cartaMaquina)
}

// Amostra a imagem da carta e chama as opções

function imagens() {
  var imagem = document.getElementById("imagemDaCarta");
  var imagemInimigo = document.getElementById("imagemDaCartaInimigo");
  imagem.innerHTML = cartaJogador.imagem
  imagemInimigo.innerHTML = cartaMaquina.imagem
  
  var nomeCarta = document.getElementById("nomeDaCarta");
  var nomeInimigo = document.getElementById("nomeDaCartaInimigo");
  console.log(cartaJogador.nome)
  nomeCarta.innerHTML = `<h1>${cartaJogador.nome}</h1>`
  nomeInimigo.innerHTML = `<h1>${cartaMaquina.nome}</h1>`
  exibirOpcoes(cartaJogador);
}

// Imprimi o nome das cartas na tela
function nomes(){
}

// Imprime os radios dos atributos
function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'> ${atributo}`;
    console.log(atributo);
  }
  opcoes.innerHTML = opcoesTexto;
}


function obtemAtributoSelecionado() {
  var radio = document.getElementsByName("atributo");

  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked == true) {
      return radio[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  var elementoResultado = document.getElementById("resultado")

  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "GANHOU!!!!!!!!" 
  } else if(valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML = "PERDEU!!"
  } else {
    elementoResultado.innerHTML = "Empate!!"
  }

  console.log(valorCartaMaquina)
}

// Altera as cartas selecionadas do jogo
function resetar() {
  sortearCarta()
}