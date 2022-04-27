const livros = require("../database")
const read = require("readline-sync")

const listarLivrosNaoLidos = () => {

  const inputNaoLidos = read.question(`
  ---------------------------------------
  Deseja listar os livros nao lidos? S/N :
  ---------------------------------------
  `).toUpperCase()

  if(inputNaoLidos == "S") {
    const livrosNaoLidos = livros.filter((livro) => livro.leu == false)
    console.table(livrosNaoLidos)

  } if(inputNaoLidos == "N") {
    console.log(`
    -----------------------
    Retorne ao menu inicial
    -----------------------`)
  }

}

module.exports = listarLivrosNaoLidos