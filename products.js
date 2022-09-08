const products = [
  {
    title: "Uva Crimson",
    price: "R$ 8.99",
    category: "Frutas",
    image:"./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Banana",
    price:"R$ 5.69",
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: "R$ 4.99",
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: "R$ 9.20",
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: "R$ 8.99",
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Vinho",
    price:"R$8.99",
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: "R$ 8.99",
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: "R$ 8.99",
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: "R$ 8.99",
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: "R$ 8.99",
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: "R$ 8.99",
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price:"R$ 8.99",
    category: "Higiene",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
];

const listaSecaoFrutas = document.querySelector(".products-content-fruits")

const listaSecaoDrinks = document.querySelector(".products-content-drinks")

const listaSecaoHigiene = document.querySelector(".products-content-hygiene")

function listaDeProdutoFruit (lista, referenciaHtml){
  for(let i = 0; i < lista.length; i++){
    let produto = lista[i]
    if(produto.category == "Frutas"){
      let produtoCriado = criarProdutos(produto)
      referenciaHtml.appendChild(produtoCriado)
    }
}
}
listaDeProdutoFruit(products, listaSecaoFrutas)

function listaDeProdutoDrink (lista, referenciaHtml){
  for(let i = 0; i < lista.length; i++){
    let produto = lista[i]
    if(produto.category == "Bebidas"){
      let produtoCriado = criarProdutos(produto)
      referenciaHtml.appendChild(produtoCriado)
    }
}
}
listaDeProdutoDrink(products, listaSecaoDrinks)

function listaDeProdutoHigiene (lista, referenciaHtml){
  for(let i = 0; i < lista.length; i++){
    let produto = lista[i]
    if(produto.category == "Higiene"){
      let produtoCriado = criarProdutos(produto)
      referenciaHtml.appendChild(produtoCriado)
    }
}
}
listaDeProdutoHigiene(products, listaSecaoHigiene)

function criarProdutos (produto){

  let imagem          = produto.image
  let nome            = produto.title
  let secao           = produto.category
  let valor           = produto.price
  let descricaoImagem = produto.imageDescription
  
  let tagLi     = document.createElement("li")
  let tagImg    = document.createElement("img")
  let tagMain   = document.createElement("main")
  let tagH1     = document.createElement("h1")
  let tagH5     = document.createElement("h5")
  let tagStrong = document.createElement("strong")
  
  tagLi.classList.add("product")
  tagImg.classList.add("product-img")
  tagMain.classList.add("product-main")
  tagH1.classList.add("product-title")
  tagH5.classList.add("product-category")
  tagStrong.classList.add("product-price")
  
  tagImg.src      = imagem
  tagImg.alt      = descricaoImagem
  tagH1.innerText = nome
  tagH5.innerText = secao
  tagStrong.innerHTML = valor
  
  tagLi.appendChild(tagImg)
  tagLi.appendChild(tagMain)
  tagMain.appendChild(tagH1)
  tagMain.appendChild(tagH5)
  tagMain.appendChild(tagStrong)

  return tagLi
}
