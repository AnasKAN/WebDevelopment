const productsWrapper = document.querySelector('.products-wrapper')

discountProducts.forEach((section) => {
  let sectionTitleWrapper
  if (section.section) {
    sectionTitleWrapper = document.createElement('div')
    const sectionTitle = document.createElement('h1')
    sectionTitle.textContent = section.section
    sectionTitleWrapper.appendChild(sectionTitle)
    productsWrapper.appendChild(sectionTitleWrapper)
  }

  const productsContainer = document.createElement('div')
  productsContainer.classList.add('products-container')
  section.items.forEach((item) => {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    const productImage = document.createElement('img')
    productImage.src = item.image
    productImage.alt = item.name
    productImage.classList.add('product-image')
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
    const productDescription = document.createElement('p')
    productDescription.textContent = item.name
    const productPrice = document.createElement('p')
    productPrice.textContent = `${item.price} ريال`
    productPrice.classList.add('price')
    const buyButton = document.createElement('button')
    buyButton.textContent = 'شراء المنتج الان'
    buyButton.classList.add('btn-grad')
    productInfo.appendChild(productDescription)
    productInfo.appendChild(productPrice)
    productInfo.appendChild(buyButton)
    productCard.appendChild(productImage)
    productCard.appendChild(productInfo)
    productsContainer.appendChild(productCard)
  })

  productsWrapper.appendChild(productsContainer)
})
