// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.querySelector("#cep");
const btnCep = document.querySelector(".btn");
const resultadoCep = document.querySelector(".resultadoCep");

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  pesquisarCep(cep);
}

function pesquisarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      resultadoCep.innerText = body;
      console.log(body);
    });
}
btnCep.addEventListener("click", handleClick);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
