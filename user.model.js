const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    nome: {type: String, required: true, max: 100},
    idade: {type: Number, required: true},
});

module.exports = mongoose.model('User', UserSchema);