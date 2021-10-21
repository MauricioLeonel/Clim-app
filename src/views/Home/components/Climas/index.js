import React from 'react';

const Climas = (props) => {
  	const [inputBusqueda,setInputBusqueda]=React.useState('')
  	const [ciudad,setCiudad]=React.useState({})
  	const handleOnClickCiudad = async ()=>{
  		var ciudadData = await props.basicFetch2(inputBusqueda)
  		setCiudad(ciudadData)
  	}

	return (
	<div className="contenedor-busqueda">
		<div className='contendor-busqueda-botones'>
			<input type="text" value={inputBusqueda} onChange={(e)=>setInputBusqueda(e.target.value)} id='buscar' placeholder='ingrese ciudad'/>
			<button onClick={handleOnClickCiudad}>Buscar</button>
		</div>
		
		{ciudad.name ? 
			<>
				<div className="contenedor-tiempo">
					<div className="contenedor-tiempo-datosahora-buscado">
						<div className="contenedor-ubicacion">
							<h2>Lugar</h2>
							{ciudad?.name}
						</div>
						<div className="datos-temp">
							<div>
								<h3>Temperatura</h3>
								<p>{ciudad?.main?.temp}</p>
							</div>

							<div>
								<h3>Sensación</h3>
								<p>{ciudad?.main?.feels_like}</p>
							</div>
							<div>
								<h3>Temp. Mínima</h3>
								<p>{ciudad?.main?.temp_min}</p>
							</div>
							<div>
								<h3>Temp. Máxima</h3>
								<p>{ciudad?.main?.temp_max}</p>
							</div>

						</div>
						<div className="datos-temp-plus">
							<div>
								<h3>Humedad</h3>
								<p>{ciudad?.main?.humidity}</p>
							</div>
							<div>
								<h3>Viento</h3>
								<p>velocidad: {ciudad?.wind?.speed}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="contenedor-img">
					<img src={`http://openweathermap.org/img/wn/${ciudad?.weather[0].icon}@2x.png`} alt=""/>				
				</div>
			</>
			: null}
	</div>
	)
}

export default Climas;