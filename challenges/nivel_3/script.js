let contador = 0;
function alterarContador(valor) {
  contador += valor;
  document.getElementById('contador-valor').textContent = contador;
}

function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const erro = document.getElementById('erro-form');
  erro.textContent = "";

  if (nome === "" || email === "") {
    erro.textContent = "Preencha todos os campos.";
    return false;
  }
  alert("Formulário enviado com sucesso!");
  return false; 
}

function trocarCorFundo() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function adicionarItemLista() {
  const input = document.getElementById('item-lista');
  const texto = input.value.trim();
  if (texto !== "") {
    const ul = document.getElementById('lista-ul');
    const li = document.createElement('li');
    li.textContent = texto;
    ul.appendChild(li);
    input.value = "";
    input.focus();
  }
}
