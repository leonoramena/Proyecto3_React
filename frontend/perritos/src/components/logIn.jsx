import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Ingreso extends Component {
    state = {
        Usuario: {

            _id: "",
            Nombre: "",
            Apellido: "",
            Email: "",
            TipoUsuario: "",
            Password: "",
            Foto: ""
        },

    
        usuariosActuales: []
    }
    render() {

        <h1>Log in</h1>

        return (<React.Fragment>
           <br></br> <input type='text' id='Email' placeholder='Email' onChange={(evt) => this.actualizaDatosGuardar(evt)} /> <br></br> <br></br>
            <input type='text' id='Password' placeholder='Contraseña' onChange={(evt) => this.actualizaDatosGuardar(evt)} /> <br></br>

       <input type='button' className='btn btn-primary' id='botonguardar' value='Ingresar' onClick={this.ingreso} />

        </React.Fragment>
        );
    }

    actualizaDatosGuardar(evt)
{
    var objLocalUsuario= new Object();
   
    objLocalUsuario= this.state.Usuario
    switch(evt.target.id)
        {

            case "Email":
                {
                    console.log(this.state.Usuario)
                    objLocalUsuario.Email= evt.target.value;
                    break;
                }
            case "Password":
                {
                    console.log(this.state.Usuario)
                    objLocalUsuario.Password= evt.target.value;
                    break;
                }
               
        }
   
                    this.setState({
                        Usuario: objLocalUsuario
    })
   
   
}

    ingreso = () => {
        // With all properties
        var objLocal = this.state.Usuario
        const recipeUrl = 'http://localhost:8080/api/logIn';
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objLocal)
        };

        fetch(recipeUrl, requestMetadata)
            .then(res => res.json())
            .then(Usuario => {
                if(Usuario.length === 1){
                    alert('Ingreso exitoso')
                }
                else
                {
                    alert('Algun dato es erroneo')
                }
            });
    }

    
}

export default Ingreso;