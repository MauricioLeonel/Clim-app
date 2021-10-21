const API_KEY='680fcab08a4510dad80ed2cbc86f4d43'
const END_POINT={'weather':'weather','forecast':'forecast'}

const basicFetch = async (position,tipo)=>{
	const {latitude,longitude} = position?.coords
	const res = await fetch(`https://api.openweathermap.org/data/2.5/${END_POINT[tipo]}?lat=${latitude}&lon=${longitude}&units=metric&cnt=5&lang=fr&appid=${API_KEY}`)
	const data = await res.json()
	return data
}

const basicFetch2 = async (ciudad)=>{
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=fr&appid=${API_KEY}`)
	const data = await res.json()
	return data
}




const errores=(e)=>{
	return e.message
}

export {
	basicFetch,
	basicFetch2
}