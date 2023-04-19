import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FilaTablaPerros from './filatablaperros';


class Perrito extends Component{
    state={
        perrito :{
       
        _id:"",
        nombreperro:"",
        razaperro:"",
        imagenperro:"" 
        
    },
    perrosactuales:[]

    }
    render(){
        const inputStyleimg = { border_radius: '50%',cursor:'pointer',width:'100px' }
            const oculta = { visibility: 'collapse'}
              const muestra = { visibility: 'vivible' }
        return (<React.Fragment>

                <br></br> <input type='text'  id='_id' placeholder = 'Identificador' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/> <br></br> <br></br>
                <input type='text'  id='nombreperro' placeholder = 'Nombre de su perro' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/> <br></br> <br></br>
                <input type='text'  id='razaperro' placeholder = 'Raza de su perro' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/> <br></br> <br></br>
                <input type ="file" className="form-control" id="imagenperro" onChange={ evt => this._onChange(evt)} /> <br></br> 
               
              <input type= 'button' className='btn btn-primary' id='botonGuardar' value='Guardar'  onClick={this.guardarPerrito} /> <br></br>
             
                   <br></br> <table className="table">
                        <thead>
                            <tr>
                               
                                <th scope='col'>Nombre del perro</th>
                                <th scope='col'>Raza del perro</th>
                                <th scope='col'>Imágen de Idenificación del perro</th>
                                <th scope='col'>Eliminar</th>
                            </tr>    
                        </thead>    
                        <tbody id='filasTabla'>
                            {this.state.perrosactuales.map(op => <FilaTablaPerros 
                            _id={op._id}  nombreperro = {op.nombreperro} razaperro = {op.razaperro} imagenperro = {op.imagenperro} eliminarPerrito={this.eliminarPerrito}/>)}
                        </tbody>
                    </table>              
            </React.Fragment>
               );
    }

 _onChange = (e) => {
        var objLocalPerro = new Object();
            objLocalPerro= this.state.perrito
            if (e.target.files && e.target.files[0]) {
                if (e.target.files[0].size < 2097152) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                      objLocalPerro.imagenperro  = e.target.result
                    };
                    reader.readAsDataURL(e.target.files[0]);
               
                           this.setState({
                                perrito: objLocalPerro
                                        });

                }
               
            }
    console.log(e)
}


actualizaDatosAGuardar(evt)
{
   
    var objLocalPerro= new Object();
   
    objLocalPerro= this.state.perrito
    switch(evt.target._id)
        {
            case "nombreperro":
                {
                    console.log(this.state.perrito)
                    objLocalPerro.nombreperro= evt.target.value;
                    break;
                }
            case "razaperro":
                {
                    console.log(this.state.perrito)
                    objLocalPerro.razaperro= evt.target.value;
                    break;
                }
            case "imagenperro":
                {
                    console.log(this.state.perrito)
                    objLocalPerro.imagenperro= evt.target.value;
                    break;
                }
               
        }
   
        this.setState({
          perrito: objLocalPerro
    })
   
   
}

eliminarPerrito = (_id) => {
    console.log(_id)
    
    var objLocal = this.state.perrito
    objLocal._id = _id
    const recipeUrl = 'http://localhost:8080/api/eliminarperro'; 
    const requestMetadata = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(objLocal)
    };
    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(perritos => {
            console.log(perritos)
            this.setState({
                perrosactuales: 'perritos'
            })
                              
        alert("Eliminado");
        });

        
}



guardarPerrito = () => {
    // With all properties
   var objLocal = this.state.perrito
   // const Url = 'https://kongzilla.herokuapp.com/api/guardarPerrito&#39;;
   const recipeUrl = 'http://localhost:8080/api/guardarperro';
  const requestMetadata = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objLocal)
    };

    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(perritos => {
            console.log(perritos)
            this.setState({ 
                perrosactuales: perritos
            })
                              
        alert("Guardado");
        });

    
}

   

}
export default Perrito;

