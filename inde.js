const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ee90f0846mshc6caf06d5ec8664p17f505jsn3093d8908abc',
		'X-RapidAPI-Host': 'everyearthquake.p.rapidapi.com'
	}
};
const btn = document.querySelector("button")
const lat = document.querySelector("#lat");
const long = document.querySelector("#long");
const result = document.querySelector("#result")
let param1 = "";
let param2 = "";



const callParams = () => {
param1 = lat.value;
param2 = long.value;


fetch(`https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=100&type=earthquake&latitude=${param1}&longitude=${param2}&radius=200&units=miles&magnitude=3&intensity=1`, options)
	.then(response => response.json())
	.then(response => {
		// Clear the contents of the result div
		result.innerHTML = '';
		for (let i = 0; i < response.data.length; i++) {
		  result.innerHTML += 
		  `<h5 class="mag">Magnitude: ${response.data[i].magnitude}</h5>
		  <h5 class="dat">Date: ${response.data[i].date}</h5>
		  <h5 class="loc">Location: ${response.data[i].location}</h5>
		  <h5 class="locality">Locality: ${response.data[i].locality}</h5>
		  <a href="${response.data[i].url} target="_blank"><p class="source">Source: ${response.data[i].url}</p></a>`
		}
	  })
	.catch(err => console.error(err));
		
}

btn.addEventListener('click', callParams)
