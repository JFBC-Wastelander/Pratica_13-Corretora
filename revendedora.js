const prompt = require("prompt-sync")()

const dados = []

let ultimoId = 0

const modelo = (id = ++ultimoId) => {
    const revendedora = {
        corretora: prompt("Informe o nome da empresa corretora: "),
        corretor: prompt("Informe o nome do corretor: "),
        numero: prompt("Informe o número do imóvel: "),
        rua: prompt("Informe a rua do imóvel: "),
        bairro: prompt("Informe o bairro do imóvel: "),
        cliente: prompt("Informe o nome do cliente: "),
    }

    return revendedora, id
}

const criarImovel = () => {
    let novo = modelo()

    if (novo) {
        dados.push(novo)
        console.log("Imóvel cadastrado")
    }
}

const listarImovel = () => {
    dados.forEach((revendedora) => {
        console.log(`Corretora: ${revendedora.corretora}.
        Corretor: ${revendedora.corretor} - ID: ${revendedora.id}
        O imóvel ${revendedora.numero}, da rua ${revendedora.rua}, do bairro ${revendedora.bairro} pertence a: ${revendedora.cliente}`)
    })
}

const atualizarImovel = () => {
}

const deletarImovel = () => {
}

module.exports = {
    criarImovel,
    listarImovel,
    atualizarImovel,
    deletarImovel
}