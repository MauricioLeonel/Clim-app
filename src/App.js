import './App.css';
import React from 'react'
import Home from './views/Home'
import {basicFetch,basicFetch2} from './dataclima.js'

function App() {

  const [clima, setClima] = React.useState({})
  const [climacinco, setClimaCinco] = React.useState({})
  const [ubicacion,setUbicacion] = React.useState()
  const [error,setError] = React.useState('')

  React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setUbicacion(position)
    },(e)=>{
      setError(e.message)
    }) 
  },[])

  React.useEffect(async()=>{
     if(error===''){
      if(ubicacion) {
        const dataclima = await basicFetch(ubicacion,'weather')
        const dataclimacinco = await basicFetch(ubicacion,'forecast')
        setClima(dataclima)
        setClimaCinco(dataclimacinco)
      }
    }
  },[ubicacion])

  return (
    <div className="App">
      <Home clima = {clima} climacinco={climacinco} ubicacion={ubicacion} basicFetch2={basicFetch2}/>      
    </div>
  );
}

export default App;
