// se encarga de guardar un nuevo ítem en una base de datos//
let Item = require('./schemaperro');


// crea un nuevo documento en la base de datos con los valores pasados en el cuerpo de la solicitud//
exports.Guardar = function(req,res){

    Item.create({
        nombreperro: req.body.nombreperro, 
        razaperro: req.body.razaperro,
        imagenperro: req.body.imagenperro

        
    }, function(err,item){
        if (err){
            res.send(err);
        }
        else{

            //Obtiene y find le devuele todos los documentos 
            Item.find(function(err, item){
                if (err){
                    res.send(err);
                }
                else{
                    res.json(item);
                }
            });
        }
    });
}


exports.Eliminar = function(req,res){

    Item.remove({_id:req.body._id}, 
        function(err,item){
        if (err){
            res.send(err);
        }
        else{

            //Obtiene y find le devuele todos los documentos//
            Item.find(function(err, item){
                if (err){
                    res.send(err);
                }
                else{
                    res.json(item);
                }
            });
        }
    });
}

exports.Todas = function(req,res){
    
    Item.find(function(err, item){
        if (err){
            res.send(err);
        }
        res.json(item);
    });

}

