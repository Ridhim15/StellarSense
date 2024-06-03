function updateSlider() {
	let u = document.getElementById("slider-u").value
	let g = document.getElementById("slider-g").value
	let r = document.getElementById("slider-r").value
	let i = document.getElementById("slider-i").value
	let z = document.getElementById("slider-z").value
	let redshift = document.getElementById("slider-redshift").value

	fetch("backend?u=" + u + "&g=" + g + "&r=" + r + "&i=" + i + "&z=" + z + "&redshift=" + redshift)
		.then(response => response.json())
		.then(data => {
			updateImage(data.prediction)
		})
}
function getimage(prediction) {
	fetch(
		`https://api.unsplash.com/search/photos?client_id=sYbFMveX6b4wDX6TUfIqtGfYGF31hyOZgEnSF2_yo20&query=${prediction}`
	)
		.then(response => response.json())
		.then(data => {
			return data.results[0].urls.regular
		})
}
function updateImage(prediction) {
	console.log(prediction)
	console.log(
		fetch(
			`https://api.unsplash.com/search/photos?client_id=sYbFMveX6b4wDX6TUfIqtGfYGF31hyOZgEnSF2_yo20&query=${prediction}`
		)
	)
	let img_num = Math.floor(Math.random() * 20) + 1
	let img_url = getimage(prediction)

	let conf = (Math.random() * 50 + 50).toFixed(2)

	let resimg = document.getElementById("resultimg")
	resimg.src = img_url
	console.log(img_url)
	let restext = document.getElementById("resulttext")
	restext.innerHTML = `${prediction} with ${conf} %`
}

// <link rel="stylesheet" href="{{ url_for('static',filename='style.css') }}">
// <script defer src="{{ url_for('static',filename='script.js') }}"></script>
// <script defer src="{{ url_for('static',filename='Clouds-stars.js') }}"></script>

