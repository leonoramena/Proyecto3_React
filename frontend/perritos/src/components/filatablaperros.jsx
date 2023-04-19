import React, { Component } from 'react'
  import 'bootstrap/dist/css/bootstrap.min.css'


  class FilaTablaPerros extends Component{
    render() {
      const inputStyleimg = { border_radius: '50%',cursor:'pointer',width:'100px' }
      return(<React.Fragment>

        <tr>
          <td>{this.props.nombreperro}</td>
          <td>{this.props.razaperro}</td>
          <td><img src={this.props.imagenperro} alt="" style={inputStyleimg}></img></td>

          <td><button className='btn btn-primary' onClick={() => this.props.eliminarPerrito(this.props._id)}>Eliminar</button></td>
        </tr>

      </React.Fragment>)
    }  
  }
  export default FilaTablaPerros ;