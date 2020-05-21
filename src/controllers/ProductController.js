const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    // GET - listagem, todos os dados (com paginação)
    async index(req, res) {
        const { page = 1 } = req.query
        const products = await Product.paginate({}, { page, limit: 10 })

        return res.json(products)
    },

    // GET - listagem única
    async show(req, res) {
        const product = await Product.findById(req.params.id)

        return res.json(product)
    },

    // POST - criando novos produtos
    async store(req, res) {
        const product = await Product.create(req.body)

        return res.json(product)
    },

    // PUT - atualizando dados de produtos
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(product)
    },

    // DELETE - apagando produtos
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id)

        return res.send()
    }
}