module.exports = () => {
    const data = { products: [] }
    for (let i = 0; i < 10; i++) {
      data.products.push({
          productCode: 1000,
          productName: 'Product',
          price: 100,
          rating: 3,
          comments: [
              { message: 'Test Comment 1' },
              { message: 'Test Comment 2' },
              { message: 'Test Comment 3' }
          ]
      })
    }
    return data
}