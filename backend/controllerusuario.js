let Persona = require('./schemausuario.js');

let crypto = require('crypto'), 
    algorithm = "aes-256-ctr",
    password = "2580";

    function encrypt(text) {
        var cipher = crypto.createCipher(algorithm, password)
        var crypted = cipher.update(text,'utf8','hex');
        crypted += cipher.final('hex');
        return crypted;
    }

    function decrypt(text) {
        var decipher = crypto.createDecipher(algorithm,password)
        var dec = decipher.update(text,'utf8','hex')
        dec += decipher.final(utf8);
        return dec;
    }

exports.Guardar = function(req,res) /* Guarda los datos desde front-end. Sintaxis */
{ 
    Persona.create({
        Nombre:req.body.Nombre,
        Apellido:req.body.Apellido,
        Email:req.body.Email,
        TipoUsuario:req.body.TipoUsuario,
        Password:encrypt(req.body.Password),
        Foto:req.body.Foto
    }, function(err,item) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            Persona.find(function(err,item){ /*Encuentra y devuelve todos los esqueletos que se crearon */
                if (err) {
                    res.send(err);           
                }else{
                    res.json(item);
                }
            }); 
        }
    });
}


exports.Login = function(req, res){
    Persona.find({Email:req.body.Email,Password: encrypt(req.body.Password)}, function(err, Persona) {
    if (err) {
      res.send(err);
    }

      else{
        if (Persona.length > 0) {
          res.json(Persona); /*Devuelve todas las personas en JSON */
        }
        else{
          res.json("Error");
        }
      
      }
      });
}

exports.Eliminar = function(req,res)
{
    Persona.remove({_id:req.body._id}, /*Elimina el dato */
        function(err,item) {
        if (err) {
            res.send(err);
        } else {
            Persona.find(function(err,item){ /*Obtiene y devuelve todas las personas tras crear una de ellas */
                if (err) {
                    res.send(err);           
                }else{
                    res.json(item);
                }
            }); 
        }
    });
}

exports.Todos = function(req,res)
{
    Persona.find(
        function(err,item) {
        if (err) {
            res.send(err);
        } else {
            Persona.find(function(err,item){ /*Obtiene y devuelve todas las personas tras crear una de ellas */
                if (err) {
                    res.send(err);           
                }else{
                    res.json(item);
                }
            }
            ); 
        }
    });
}
