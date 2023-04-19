import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


class Usuario extends Component{
    state={
      Usuario :{
       
        _id:"",
        Nombre:"",
        Apellido: "",
        Email: "",
        TipoUsuario: "",
        Password: "",
        Foto:""
    },  
    usuariosActuales:[]
    }
    render(){
        const inputStyleimg = { border_radius: '50%',cursor:'pointer',width:'100px' }
        const borderStyle = { border_radius: '50%',}
            const oculta = { visibility: 'collapse'}
              const muestra = { visibility: 'vivible' }
        return (<React.Fragment>
             <br></br>   <input type='text'  id='_id' placeholder = 'Identificador' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/> <br></br> <br></br>
                    <input type ='text' id='Nombre' placeholder = 'Escriba su nombre' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/><br></br> <br></br>
                    <input type ='text' id='Apellido' placeholder = 'Escriba sus apelllidos' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/><br></br> <br></br>
                    <input type ='text' id='Email' placeholder = 'Escriba su email' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/><br></br> <br></br>
                    <input type ='text' id='TipoUsuario' placeholder = 'Escriba el rol de usuario' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/><br></br> <br></br>
                    <input type ='password' id='Password' placeholder = 'Digite su contraseña' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/><br></br> <br></br>
                    <input type ="file" className="form-control" id="Foto" onChange={ evt => this._onChange(evt)} /><br></br>
               
              <input type= 'button' className='btn btn-primary' id='botonGuardar' value='Guardar'  onClick={
                this.guardarUsuario
              } />
             
    

            </React.Fragment>
               );
    }

 _onChange = (e) => {
        var objLocalUsuario = new Object();
            objLocalUsuario= this.state.Usuario
            if (e.target.files && e.target.files[0]) {
                if (e.target.files[0].size < 2097152) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                      objLocalUsuario.Foto  = e.target.result
                    };
                    reader.readAsDataURL(e.target.files[0]);
               
                           this.setState({
                                            Usuario: objLocalUsuario
                                        });

                }
               
            }
    console.log(e)
}


actualizaDatosAGuardar(evt)
{
    var objLocalUsuario= new Object();
   
    objLocalUsuario= this.state.Usuario
    switch(evt.target.id)
        {
            case "Nombre":
                {
                    console.log(this.state.Usuario)
                    objLocalUsuario.Nombre= evt.target.value;
                    break;
                }
            case "Apellido":
                {
                    console.log(this.state.Usuario)
                    objLocalUsuario.Apellido= evt.target.value;
                    break;
                }
            case "Email":
                {
                    console.log(this.state.Usuario)
                    objLocalUsuario.Email= evt.target.value;
                    break;
                }
            case "TipoUsuario":
                {
                    console.log(this.state.Usuario)
                    objLocalUsuario.TipoUsuario= evt.target.value;
                    break;
                }
            case "Password":
                {
                    console.log(this.state.Usuario)
                    objLocalUsuario.Password= evt.target.value;
                    break;
                }
            case "Foto":
                {
                    console.log(this.state.Usuario)
                    objLocalUsuario.Foto= evt.target.value;
                    break;
                }
               
        }
   
        this.setState({
          Usuario: objLocalUsuario
    })
   
   
}

eliminarUsuario = (id) => {
    console.log(id)
    
    var objLocal = this.state.Usuario
    objLocal._id = id
    const recipeUrl = 'http://localhost:8080/api/eliminaUsuario'; 
    const requestMetadata = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(objLocal)
    };
    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(Usuario => {
            console.log(Usuario)
            this.setState({
              usuariosActuales: Usuario
            })
                              
        alert("Eliminado");
        });
}

guardarUsuario = () => {
    // With all properties

  var objLocal = this.state.Usuario
  const recipeUrl = 'http://localhost:8080/api/guardarUsuario';
  const requestMetadata = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objLocal)
    };

    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(Usuarios => {
            console.log(Usuarios)
            this.setState({
                usuariosActuales: Usuarios
            })
      
        alert("Te has registrado!");
        });
}
   

}
export default Usuario;