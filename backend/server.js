//indica el express//
let express = require('express');
let cors = require('cors');
let app = express();
let mongoose = require('mongoose');
let port = process.env.PORT || 8080;

app.configure(function(){

    //app.use(express.static(__dirname + '/'));
    app.use(express.logger('dev'));
    app.use(express.methodOverride());

});

const mongoAtlasUri = 'mongodb+srv://Prueba:Leoypablito@cluster0.lua1sjl.mongodb.net/?retryWrites=true&w=majority';
try{
    mongoose.connect(mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true},() =>
        console.log("conectado")
    );
}
    catch (error) {
        console.log("no se pudo conectar");
    }

    const dbConnection = mongoose.connection;
    dbConnection.on("error",(err) => console.log(`Connection error ${err}`));
    dbConnection.once("open",() => console.log("Connected a DB!"));


    let bodyParser = require('body-parser');
    let { json } = require('body-parser');
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

    app.use(cors())
    require('./routes.js')(app);

//Cogemos el puerto para escuchar//
app.listen(port);
console.log("APP por el puerto " + port);