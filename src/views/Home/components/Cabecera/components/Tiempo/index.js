import React from 'react'
import CardClimaCinco from './components/CardClimaCinco'

const Tiempo = (props)=>{
	const {clima} = props.clima.clima
	const {main} = clima
	const {wind} = clima
	const {list} = props.clima.clima.climacinco

	

	
	return (
		<div className="contenedor-tiempo" >
			<div className="contenedor-tiempo-datosahora">

				<div className="contenedor-ubicacion">
					<h2>Lugar</h2>
					{clima.name}
				</div>

				<div className="datos-temp">
					<div>
						<h3>Temperatura</h3>
						<p>{main?.temp}</p>
					</div>

					<div>
						<h3>Sensación</h3>
						<p>{main?.feels_like}</p>
					</div>
					<div>
						<h3>Temp. Mínima</h3>
						<p>{main?.temp_min}</p>
					</div>
					<div>
						<h3>Temp. Máxima</h3>
						<p>{main?.temp_max}</p>
					</div>

				</div>
				<div className="datos-temp-plus">
					<div>
						<h3>Humedad</h3>
						<p>{main?.humidity}</p>
					</div>
					<div>
						<h3>Viento</h3>
						<p>velocidad: {wind?.speed}</p>
					</div>
				</div>
			</div>

			<div className="contenedor-datoscinco">
				<h2>Pronostico para las proximas horas</h2>
				<div className="contenedor-tiempo-datoscinco">
					{list?.map((el,index)=>{
						return <CardClimaCinco climaHora={el} key={index}/>
					})}
				</div>	
			</div>

		</div>
	)
}

export default Tiempo

