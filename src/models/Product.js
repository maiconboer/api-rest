const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

// criando schema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// paginação
ProductSchema.plugin(mongoosePaginate)

// registrando model
mongoose.model('Product', ProductSchema)