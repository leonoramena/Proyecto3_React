
let controllerperros = require('./controllerperros.js')
let controllerusuario = require('./controllerusuario.js')


module.exports = function(app){

    //Aqui es app.get que es desde la URL, req es analiza y res es el que responde//
      
        //acepta una solicitud y llama a la función//
        app.put('/api/guardarperro', controllerperros.Guardar);
        app.delete('/api/eliminarperro', controllerperros.Eliminar);
        app.post('/api/todas',controllerperros.Todas);

        app.post('/api/login',controllerusuario.Login);
        app.put('/api/guardarusuario', controllerusuario.Guardar);
        app.delete('/api/eliminarusuario', controllerusuario.Eliminar);
        app.post('/api/todousuario',controllerusuario.Todos);

};