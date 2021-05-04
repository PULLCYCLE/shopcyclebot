const kb = require('./keyboard-buttons')

module.exports = {
    home: [
        [kb.home.products, kb.home.shops],
        [kb.home.favourite]
    ],
    products: [
        [kb.product.vegetables, kb.product.fruits],
        [kb.product.drinks, kb.product.animal_products],
        [kb.back]
    ]
}