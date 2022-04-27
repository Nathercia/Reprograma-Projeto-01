const livros = require("../database")
const read = require("readline-sync")

const listarLivrosOrdenados = () => {
  const inputDesejaOrdenar = read.question(`
  ---------------------------------------------------
  Deseja listar os livros pelo numero de paginas? S/N :
  ---------------------------------------------------
  `).toUpperCase()

  if(inputDesejaOrdenar == "S") {  

    const livrosOrdenadosPaginas = livros.sort((x,y) => {
      return x.paginas - y.paginas
    })
    console.table(livrosOrdenadosPaginas)

  } if(inputDesejaOrdenar == "N") {
    console.log(`
    -----------------------
    Retorne ao menu inicial
    -----------------------`)
  } 
  
}

module.exports = listarLivrosOrdenados