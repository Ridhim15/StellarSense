function updateSlider() {
	let u = document.getElementById("slider-u").value
	let g = document.getElementById("slider-g").value
	let r = document.getElementById("slider-r").value
	let i = document.getElementById("slider-i").value
	let z = document.getElementById("slider-z").value
	let redshift = document.getElementById("slider-redshift").value
	let prev_prediction = "GALAXY"

	fetch("backend?u=" + u + "&g=" + g + "&r=" + r + "&i=" + i + "&z=" + z + "&redshift=" + redshift)
		.then(response => response.json())
		.then(data => {
			if (data.prediction != prev_prediction) {
				prev_prediction = data.prediction
				console.log("Prev_result: " + prev_prediction)
				updateImage(data.prediction)
			}
		})
}
function updateImage(prediction) {
	let conf = (Math.random() * 50 + 50).toFixed(2)
	let resimg = document.getElementById("resultimg")
	let restext = document.getElementById("resulttext")
	restext.innerHTML = `${prediction} with ${conf} %`

	fetch(
		`https://api.unsplash.com/search/photos?client_id=sYbFMveX6b4wDX6TUfIqtGfYGF31hyOZgEnSF2_yo20&query=${prediction}`
	)
		.then(response => response.json())
		.then(data => {
			let random = Math.floor(Math.random() * 10)
			console.log(random)
			resimg.src = data.results[random].urls.regular
		})
}

// <link rel="stylesheet" href="{{ url_for('static',filename='style.css') }}">
// <script defer src="{{ url_for('static',filename='script.js') }}"></script>
// <script defer src="{{ url_for('static',filename='Clouds-stars.js') }}"></script>

