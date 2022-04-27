const livros = require("../database")
const read = require("readline-sync")
const app = require("../app")

const listarRecomendados = () => {

  const inputRecomendados = (read.question(`
  ------------------------------------------
  Deseja listar os livros recomendados? S/N :
  ------------------------------------------
  `)).toUpperCase()

  if(inputRecomendados == "S") {
  const livrosFiltrados = livros.filter((livro) => livro.recomenda == true)
  console.table(livrosFiltrados)

  } if(inputRecomendados == "N") {
    console.log(`
    -----------------------
    Retorne ao menu inicial
    -----------------------`)
  
  }

}

module.exports = listarRecomendados


