const produtos = [
  {
    nome: "Batom Matte Rosê",
    preco: 39.90,
    imagem: "https://cdn.pixabay.com/photo/2016/11/19/14/00/lipstick-1839414_1280.jpg"
  },
  {
    nome: "Base Líquida Natural",
    preco: 59.90,
    imagem: "https://cdn.pixabay.com/photo/2016/03/27/20/51/cosmetics-1281661_1280.jpg"
  },
  {
    nome: "Máscara de Cílios Volume Max",
    preco: 49.90,
    imagem: "https://cdn.pixabay.com/photo/2016/03/27/19/50/cosmetics-1281508_1280.jpg"
  },
  {
    nome: "Paleta de Sombras Glam",
    preco: 89.90,
    imagem: "https://cdn.pixabay.com/photo/2017/01/09/14/48/makeup-1967762_1280.jpg"
  }
];

const lista = document.getElementById("lista-produtos");

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.classList.add("produto");

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p>R$ ${produto.preco.toFixed(2)}</p>
    <button class="btn-comprar">Comprar</button>
  `;

  lista.appendChild(card);
});

document.getElementById("btn-ver-produtos").addEventListener("click", () => {
  document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
});
