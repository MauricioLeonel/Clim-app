import React from 'react';

const CardClimaCinco = (props) => {
	const {main} = props.climaHora
	const {wind} = props.climaHora
  return (
    <div>
    	<div className="contenedor-tiempo-datosahora"> 
    			<div>
					
					<h2>{props?.climaHora?.dt_txt?.split(' ')[1]}</h2>
				</div>				
				<div className="datos-temp">
					<div>
						<h4>Temp. Minima</h4>
						<p>{main?.temp_min}</p>
					</div>
					<div>
						<h4>Temp. Maxima</h4>
						<p>{main?.temp_max}</p>
					</div>
					
				</div>
				<div className="datos-temp-plus">
						<div>
							<h4>Humedad</h4>
							<p>{main?.humidity}</p>
						</div>
						<div>
							<h4>Viento</h4>
							<p>velocidad: {wind?.speed}</p>
						</div>
					</div>
			</div>
    </div>
  )
}

export default CardClimaCinco;