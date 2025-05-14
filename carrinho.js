document.addEventListener("DOMContentLoaded", () => {
  const carrinho = document.getElementById("carrinho");
  const botaoCarrinho = document.getElementById("botao-carrinho");
  const itensCarrinho = document.getElementById("itens");
  const totalSpan = document.getElementById("total");
  const botaoFinalizar = document.getElementById("finalizar");
  const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");
  const contador = document.getElementById("contador-carrinho");

  let total = 0;
  let totalItens = 0;
  let carrinhoMap = new Map();

  function atualizarCarrinho() {
    itensCarrinho.innerHTML = "";
    total = 0;

    if (carrinhoMap.size === 0) {
      itensCarrinho.innerHTML = "<p class='vazio'>Seu carrinho está vazio.</p>";
      totalSpan.textContent = "Total: R$ 0,00";
      botaoFinalizar.style.display = "none";
      contador.textContent = "";
      contador.style.display = "none";
      return;
    }

    botaoFinalizar.style.display = "block";
    contador.style.display = "inline-block";

    carrinhoMap.forEach(({ nome, preco }) => {
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `
        <span>${nome}</span>
        <span>R$ ${preco.toFixed(2).replace(".", ",")}</span>
      `;
      itensCarrinho.appendChild(item);
      total += preco;
    });

    totalSpan.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
    contador.textContent = carrinhoMap.size;
  }

  botaoCarrinho.addEventListener("click", () => {
    carrinho.style.display = carrinho.style.display === "block" ? "none" : "block";
  });

  document.querySelectorAll(".btn-carrinho").forEach(button => {
    // Inicia com botão "+"
    button.classList.add("adicionar");
    button.textContent = "+";

    button.addEventListener("click", () => {
      const card = button.closest(".item-cardapio");
      const nome = card.querySelector("h3").textContent;
      const precoTexto = card.querySelector(".preco").textContent.replace("R$", "").replace(",", ".").trim();
      const preco = parseFloat(precoTexto);
      const idProduto = nome + preco;

      if (carrinhoMap.has(idProduto)) {
        carrinhoMap.delete(idProduto);
        totalItens--;
        // Volta para botão "+"
        button.classList.remove("remover");
        button.classList.add("adicionar");
        button.textContent = "+";
      } else {
        carrinhoMap.set(idProduto, { nome, preco });
        totalItens++;
        // Muda para botão "-"
        button.classList.remove("adicionar");
        button.classList.add("remover");
        button.textContent = "-";
      }

      atualizarCarrinho();
    });
  });

    botaoFinalizar.addEventListener("click", () => {
    carrinhoMap.clear();
    totalItens = 0;
    atualizarCarrinho();

    // Resetar todos os botões para "+"
    document.querySelectorAll(".btn-carrinho").forEach(button => {
      button.classList.remove("remover");
      button.classList.add("adicionar");
      button.textContent = "+";
    });

    mensagemConfirmacao.innerHTML = `
      Pedido a caminho de seu endereço:<br>
      <strong>Rua Bresser, 2315 - Mooca - São Paulo/SP</strong>.<br>
      Tempo de espera estimado: <strong>40 minutos</strong>.<br>
      O Jão agradece pelo pedido!<br>
    `;
    mensagemConfirmacao.style.display = "block";

    setTimeout(() => {
      mensagemConfirmacao.style.display = "none";
      carrinho.style.display = "none";
    }, 20000);
  });
});
