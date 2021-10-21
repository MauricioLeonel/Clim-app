import React from 'react';
import Cabecera from './components/Cabecera';
import Climas from './components/Climas';
import back10 from './back11.jpg';
const index = (props) => {
 
  return (
    <div>
    	<header>
    		<Cabecera clima = {props}/>
    	</header>	
      <div className="contenedor-pie" style={{backgroundImage:`url(${back10})`,backgroundSize:'cover'}}>
        <section>
          <Climas basicFetch2= {props.basicFetch2}/>
        </section>
        <footer>
          Mauricio Barrios
        </footer>
      </div>
        
    </div>
  )
}

export default index;