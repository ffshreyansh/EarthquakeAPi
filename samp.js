const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ee90f0846mshc6caf06d5ec8664p17f505jsn3093d8908abc',
		'X-RapidAPI-Host': 'everyearthquake.p.rapidapi.com'
	}
};

fetch('https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=100&type=earthquake&radius=1000&units=miles&magnitude=3&intensity=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));