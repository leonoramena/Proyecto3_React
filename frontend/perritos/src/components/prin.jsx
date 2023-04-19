import React, { Component } from 'react'
import Ingresar from './logIn';
import Perrito from './perros';
import Usuario from './registrousu';

class Principal extends Component{
state={
           
    muestraLogin: true,
    muestraPerritos:false,
    muestraRegistro: true
       
    }
            render(){

              if (this.state.muestraLogin) {
                return (
                    <React.Fragment>
                    <input type='button' value= 'Registro' onClick={(e) => this.muestraRegistro()}/>
                    <input type='button' value= 'Log in' onClick={(e) => this.muestraLogin()}/>
                    <input type='button' value= 'Formulario' onClick={(e) => this.muestraPerritos()}/>
                    
                        <br />
         <Ingresar/>
                    </React.Fragment>
   );
}

      if (this.state.muestraPerritos) {
                return (
                <React.Fragment>
                     <input type='button' value= 'Mostrar Log in' onClick={(e) => this.muestraLogin()}/>
                    <input type='button' value= 'Mostrar formulario' onClick={(e) => this.muestraPerritos()}/>
                    <input type='button' value= 'Mostrar Registro' onClick={(e) => this.muestraRegistro()}/>
                        <br />
       <Perrito/>
                       </React.Fragment>
   );
}

      if (this.state.muestraRegistro) {
                return (
                <React.Fragment>
                     <input type='button' value= 'Mostrar Log in' onClick={(e) => this.muestraLogin()}/>
                    <input type='button' value= 'Mostrar formulario' onClick={(e) => this.muestraPerritos()}/>
                    <input type='button' value= 'Mostrar Registro' onClick={(e) => this.muestraRegistro()}/>
                        <br />
       <Usuario/>
                       </React.Fragment>
   );
}

                   

}
       

           
  muestraLogin()  {
     
       
    this.setState({muestraPerritos : false })
    this.setState({muestraRegistro : false })
    this.setState({muestraLogin : true })
     
  }
 muestraPerritos()  {
     
     
    this.setState({muestraPerritos : true })
    this.setState({muestraRegistro : false })
    this.setState({muestraLogin : false })
     
  }

 muestraRegistro()  {
     
     
    this.setState({muestraRegistro : true })
    this.setState({muestraPerritos : false })
    this.setState({muestraLogin : false })
     
  }
}
export default Principal;
