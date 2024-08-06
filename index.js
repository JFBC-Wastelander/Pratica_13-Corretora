const prompt = require("prompt-sync")();
const corretora = require("./modulos/corretora.js");
const cliente = require("./modulos/cliente.js");
const corretor = require("./modulos/corretor.js");

const menuPrincipal = () => {
  console.log(`GERENCIAMENTO DE CORRETORA DE IMÓVEIS.\n`);
  while (true) {
    console.log(`ESCOLHA O MÓDULO QUE QUER GERENCIAR:
  
1- CORRETORA
2- CLIENTE
3- CORRETOR
0- SAIR\n`);

    let entrada = parseInt(prompt(": "));

    switch (entrada) {
      case 1:
        MenuCorretora();
        break;
      case 2:
        MenuCliente();
        break;
      case 3:
        MenuCorretor();
        break;
      case 4:
        acoes.deletarImovel();
        break;
      case 0:
        console.log("Saindo . . .");
        process.exit();
        break;
      default:
        console.log("Opção inválida.");
        break;
    }
  }
};

const MenuCorretora = () => {
  console.log("GERENCIAMENTO DE CORRETORA");
  while (true) {
    console.log(`
          1- CADASTRAR CORRETORA
          2- LISTAR CORRETORA
          3- ATUALIZAR CORRETORA
          4- EXCLUIR CORRETORA
          0- SAIR`);

    let opcaoServico = parseInt(prompt(": "));
    switch (opcaoServico) {
      case 1:
        corretora.store();
        break;
      case 2:
        corretora.index();
        break;
      case 3:
        corretora.update();
        break;
      case 4:
        corretora.destroy();
        break;
      case 0:
        return;
      default:
        console.log("Opção inválida.");
        break;
    }
  }
};

const MenuCliente = () => {
  console.log("GERENCIAMENTO DE CLIENTE");
  while (true) {
    console.log(`
          1- CADASTRAR CLIENTE
          2- LISTAR CLIENTE
          3- ATUALIZAR CLIENTE
          4- EXCLUIR CLIENTE
          0- SAIR`);

    let opcaoServico = parseInt(prompt(": "));
    switch (opcaoServico) {
      case 1:
        cliente.store();
        break;
      case 2:
        cliente.index();
        break;
      case 3:
        cliente.update();
        break;
      case 4:
        cliente.destroy();
        break;
      case 0:
        return;
      default:
        console.log("Opção inválida.");
        break;
    }
  }
};

const MenuCorretor = () => {
  console.log("GERENCIAMENTO DE CORRETOR");
  while (true) {
    console.log(`
            1- CADASTRAR CORRETOR
            2- LISTAR CORRETOR
            3- ATUALIZAR CORRETOR
            4- EXCLUIR CORRETOR
            0- SAIR`);

    let opcaoServico = parseInt(prompt(": "));
    switch (opcaoServico) {
      case 1:
        corretor.store();
        break;
      case 2:
        corretor.index();
        break;
      case 3:
        corretor.update();
        break;
      case 4:
        corretor.destroy();
        break;
      case 0:
        return;
      default:
        console.log("Opção inválida.");
        break;
    }
  }
};
menuPrincipal();
