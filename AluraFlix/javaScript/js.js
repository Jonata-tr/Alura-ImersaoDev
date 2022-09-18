var lista = []

function filmeAdicionar() {
  var linkFilmes = document.getElementById("filmes").value
  lista.push(linkFilmes)
  imprimirImagens(lista)
}

function imprimirImagens(filme) {
  var imageDiv = document.getElementById("imagesDiv")
  imageDiv.replaceChildren()
  
  for(var indice = 0;indice < filme.length; indice++){
    var linkImagem = `<div class='imgUniqueDiv'><img src=${filme[indice]}></div>`
    imageDiv.innerHTML = imageDiv.innerHTML + linkImagem
    document.getElementById("filmes").value = ""
  }
}

var lista = filmeAdicionar(lista)
console.log(lista)

function removerFilme(){
  var i = parseInt(document.getElementById("removerFilmes").value) - 1
  console.log(lista)
  lista.splice(i, 1)
  console.log(lista)
  imprimirImagens(lista)

}
  

