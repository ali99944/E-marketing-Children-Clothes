const products = {
  boys:[
    {
      name:"product 1",
      image:'../images/clothes/boys/p1.png',
      price:120
    },{
      name:"product 2",
      image:'../images/clothes/boys/p2.png',
      price:120
    },{
      name:"product 3",
      image:'../images/clothes/boys/p3.png',
      price:120
    },{
      name:"product 4",
      image:'../images/clothes/boys/p4.png',
      price:120
    },{
      name:"product 5",
      image:'../images/clothes/boys/p5.png',
      price:120
    },{
      name:"product 6",
      image:'../images/clothes/boys/p6.png',
      price:120
    },{
      name:"product 7",
      image:'../images/clothes/boys/p7.png',
      price:120
    },{
      name:"product 8",
      image:'../images/clothes/boys/p8.png',
      price:120
    },{
      name:"product 9",
      image:'../images/clothes/boys/p9.png',
      price:120
    },{
      name:"product 10",
      image:'../images/clothes/boys/p10.png',
      price:120
    },{
      name:"product 11",
      image:'../images/clothes/boys/p11.png',
      price:120
    },{
      name:"product 12",
      image:'../images/clothes/boys/p12.png',
      price:120
    },
  ],
  girls:[
    {
      name:"product 1",
      image:'../images/clothes/girls/p1.png',
      price:120
    },{
      name:"product 2",
      image:'../images/clothes/girls/p2.png',
      price:120
    },{
      name:"product 3",
      image:'../images/clothes/girls/p3.png',
      price:120
    },{
      name:"product 4",
      image:'../images/clothes/girls/p4.png',
      price:120
    },{
      name:"product 5",
      image:'../images/clothes/girls/p5.png',
      price:120
    },{
      name:"product 6",
      image:'../images/clothes/girls/p6.png',
      price:120
    },{
      name:"product 7",
      image:'../images/clothes/girls/p7.png',
      price:120
    },{
      name:"product 8",
      image:'../images/clothes/girls/p8.png',
      price:120
    },{
      name:"product 9",
      image:'../images/clothes/girls/p9.png',
      price:120
    },{
      name:"product 10",
      image:'../images/clothes/girls/p10.png',
      price:120
    },{
      name:"product 11",
      image:'../images/clothes/girls/p11.png',
      price:120
    },{
      name:"product 12",
      image:'../images/clothes/girls/p12.png',
      price:120
    },{
      name:"product 13",
      image:'../images/clothes/girls/p12.png',
      price:120
    },{
      name:"product 14",
      image:'../images/clothes/girls/p14.png',
      price:120
    },{
      name:"product 15",
      image:'../images/clothes/girls/p15.png',
      price:120
    },{
      name:"product 16",
      image:'../images/clothes/girls/p16.png',
      price:120
    },{
      name:"product 17",
      image:'../images/clothes/girls/p7.png',
      price:120
    },
  ]
}

const productsGrid = document.querySelector('.products-grid')
const productsSelect = document.querySelector('#standard-select')

const loadSelectedProducts = () =>{
  productsGrid.innerHTML = '';

  let category = productsSelect.value
  let productsArray = products[category]

  for(let product of productsArray){
    let container = document.createElement('div')
    let image = document.createElement('img')
    let name = document.createElement('p')
    let price = document.createElement('p')

    image.src = product.image
    name.textContent = product.name
    price.textContent = product.price + ' LE'

    let productDetailsContainer = document.createElement('div')
    productDetailsContainer.classList.add('product-details-container')
    productDetailsContainer.appendChild(price)
    productDetailsContainer.appendChild(name)

    container.classList.add('product-container')
    container.appendChild(image)
    container.appendChild(productDetailsContainer)

    productsGrid.appendChild(container)
  }
}

loadSelectedProducts()
