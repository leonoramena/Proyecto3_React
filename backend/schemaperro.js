let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//se define un objeto de esquema que especifica la estructura de los datos que se almacenarán en la base de datos.//
let PerritosEnMongo = new Schema({
    nombreperro:String,
    razaperro:String,
    imagenperro:String 
});
// Toma dos argumentos: el nombre del modelo y el objeto de esquema definido anteriormente. //
module.exports = mongoose.model('perritosEnMongo',PerritosEnMongo); /* Conectar JS con JS */