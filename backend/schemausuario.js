let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//se define un objeto de esquema que especifica la estructura de los datos que se almacenarán en la base de datos.//
const usuarioEnMongo = new Schema({
    Nombre:String,
    Apellido:String,
    Email:String,
    TipoUsuario:String,
    Password:String,
    Foto:String
});
// Toma dos argumentos: el nombre del modelo y el objeto de esquema definido anteriormente. //
module.exports = mongoose.model('UsuarioEnMongo',usuarioEnMongo); /* Conectar JS con JS */