const prompt = require("prompt-sync")()
const acoes = require("./revendedora.js")

console.log(`Tecle 1 para criar
Tecle 2 para listar
Tecle 3 para atualizar
Tecle 4 para deletar
Tecle 5 para sair`)

let entrada = +prompt("O que deseja fazer? ")

switch (entrada) {
    case 1:
        acoes.criarImovel()
        break
    case 2:
        acoes.listarImovel()
        break
    case 3:
        acoes.atualizarImovel()
        break
    case 4:
        acoes.deletarImovel()
        break
    case 5:
        console.log("Saindo. . .")
        process.exit()
        break
}