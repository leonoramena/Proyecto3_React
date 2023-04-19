import React, { Component } from 'react'
  import 'bootstrap/dist/css/bootstrap.min.css'


  class FilaTablaUsuario extends Component{
    render() {
      const inputStyleimg = { border_radius: '50%',cursor:'pointer',width:'100px' }
      return(<React.Fragment>

        <tr>

   <td>{this.props.Nombre}</td> 
   <td>{this.props.Apellido}</td> 
   <td>{this.props.Email}</td> 
   <td>{this.props.TipoUsuario}</td> 
   <td>{this.props.Password}</td> 
   <td><img src={this.props.Imagenperro} alt="" style={inputStyleimg}></img></td>

        </tr>

      </React.Fragment>)
    }  
  }
  export default FilaTablaUsuario ;
  