const prompt = require("prompt-sync")();

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  const nome = prompt("Nome: ");

  if (nome != "") {
    return {
      id,
      nome,
    };
  }
  console.log("Dados inválidos.");
};

const store = () => {
  const novo = model();

  if (novo) {
    db.push(novo);
    console.log("Registro concluído.");
  }
};

const index = () => {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado.");
    return false;
  }

  db.forEach((el) => console.log(el));
  //Para cada el (elemento) no array "db", faça aguma coisa (mostre, pelo console.log os elementos (el))
  return true;
};

const show = (id) => (el = db.find((el) => (el.id = id)));
//A função "show" recebe um parâmetro, "alguma coisa pré-programada", para ser executada (ela precisa de um ID para funcionar).
//Find é uma função onde exercerá um laço de repetição.
//O find percorrerá o array db.
//O parâmetro diz: para cada elemento (el) no array (db), retornará um valor SE o elemento percorrido (el.id) for igual ao que você quer (id).

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));
    //ParseInt converte um número para um número inteiro.

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Registro atualizado.");
      }
    } else {
      console.log("Registro não encontrado");
    }
  }
};

const destroy = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      db.splice(indice, 1);
      console.log("Registro excluído.");
    } else {
      console.log("Registro não encontrado");
    }
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
