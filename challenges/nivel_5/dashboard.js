document.getElementById('atualizar-btn').addEventListener('click', function() {
  document.getElementById('clientes').innerText = Math.floor(Math.random() * 200) + 80;
  document.getElementById('vendas').innerText = Math.floor(Math.random() * 180) + 10;
  document.getElementById('produtos').innerText = Math.floor(Math.random() * 300) + 1;
});
