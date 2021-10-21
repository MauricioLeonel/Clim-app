import React from 'react';
import Navbar from './components/Navbar'
import Tiempo from './components/Tiempo'
import back1 from './back1.jpg'
import back3 from './back3.jpg'
import back4 from './back4.jpg'
import back5 from './back5.jpg'
import back6 from './back6.jpg'
import back8 from './back8.jpg'
import back7 from './back7.jpg'
import back9 from './back9.jpg'

const Cabecera = (props) => {
  var maps ;
  var url;
 
  if(props.clima.ubicacion?.coords){
    maps = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${props.clima.ubicacion?.coords.accuracy}!2d${props.clima.ubicacion?.coords.longitude}!3d${props.clima.ubicacion?.coords.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1633746210221!5m2!1ses-419!2sar`
  }else{
    maps=''
  }

  if(props.clima.clima.weather){
    //'01n'
    if(props.clima.clima.weather[0].icon==='01n'){
     url= `url(${back1})`
     var colorback={
        backgroundColor:'#00958463'
     }
    }
    if(props.clima.clima.weather[0].icon==='01d'){
      url= `url(${back3})`
      var colorback={
        backgroundColor:'#95490063'
      }
    }

    if(props.clima.clima.weather[0].icon==='02d'){
      url= `url(${back4})`
      var colorback={
        backgroundColor:'rgb(248 192 141 / 40%)'
     }
    }
    if(props.clima.clima.weather[0].icon==='03d' || props.clima.clima.weather[0].icon==='03n'){
      url= `url(${back5})`
      var colorback={
        backgroundColor:'#00958463'
     }
    }
    if(props.clima.clima.weather[0].icon==='04d' || props.clima.clima.weather[0].icon==='04n'){
      url= `url(${back6})`
      var colorback={
        backgroundColor:'rgb(0 101 149 / 39%)'
     }
    }

    if(props.clima.clima.weather[0].icon==='09d' || props.clima.clima.weather[0].icon==='09n' || props.clima.clima.weather[0].icon==='10d' || props.clima.clima.weather[0].icon==='10n'){
      url= `url(${back8})`
      var colorback={
        backgroundColor:'rgb(149 0 0 / 39%)'
     }
    }

    if(props.clima.clima.weather[0].icon==='11d' || props.clima.clima.weather[0].icon==='11n'){
      url= `url(${back7})`
      var colorback={
        backgroundColor:'rgb(0 0 0 / 39%)'
     }
    }

    if(props.clima.clima.weather[0].icon==='50n' || props.clima.clima.weather[0].icon==='50d'){
     url= `url(${back9})`
     var colorback={
        backgroundColor:'rgb(149 152 147 / 39%)'
     }
    }
    // console.log(props.clima.clima.weather[0].icon)
  }else{
    url =''
  }
  const fondo ={
    backgroundImage:url,
    backgroundAttachment :'fixed',
    backgroundSize : 'cover'
  }

  return (
    <>
      <div className="Contenedor-Nav-Clima" style={fondo}>
        <Navbar/>
        <Tiempo clima={props}/>
        <div className="cont-box-rot" style={colorback}></div>
      </div>
      <div className="mapa" id="mapa">
        <iframe src={maps} loading="lazy"></iframe>
      </div>
    </>
    
  )
}

export default Cabecera;