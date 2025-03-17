let listaNomes = [];

function adicionarAmigo() {
  let input = document.querySelector('input');
  let nome = input.value;
  let lista = document.querySelector('ul');

  if (nome.trim() !== "") {
    listaNomes.push(nome);
    lista.innerHTML = "";

    listaNomes.forEach(amigo => {
      let li = document.createElement('li');
      li.textContent = amigo;
      lista.appendChild(li);
    });

    input.value = "";
  } else {
    alert("Por favor, digite um nome antes de adicionar!");
  }
}

function sortearAmigo() {
  if (listaNomes.length == 0) {
    document.getElementById("resultado").innerHTML = "A lista está vazia.";
    return;
  }

  let indice = Math.floor(Math.random() * listaNomes.length);
  let nomeSelecionado = listaNomes[indice];

  document.getElementById("resultado").innerHTML = "Amigo selecionado: " + nomeSelecionado;

}