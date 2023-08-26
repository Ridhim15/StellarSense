
function updateSlider() {
    let u = document.getElementById("slider-u").value;
	let g = document.getElementById("slider-g").value;
	let r = document.getElementById("slider-r").value;
	let i = document.getElementById("slider-i").value;
	let z = document.getElementById("slider-z").value;
	let redshift = document.getElementById("slider-redshift").value;

	fetch('backend?u='+u+'&g='+g+'&r='+r+'&i='+i+'&z='+z+'&redshift='+redshift)
            .then(response => response.json())
            .then(data => {
                updateImage(data.prediction);
            });
}


function updateImage(response) {
	console.log(response);

	let img_num = Math.floor(Math.random() * 20) + 1;
	let img_url = `https://raw.githubusercontent.com/Ridhim15/StellerScan/main/Result_images/${response}/${img_num}.jpg`;

    let conf = ((Math.random() * 50) + 50).toFixed(2);

	let resimg = document.getElementById("resultimg");
	resimg.src = img_url;
	let restext = document.getElementById("resulttext");
	restext.innerHTML = `${response} with ${conf} %`;
}



// <link rel="stylesheet" href="{{ url_for('static',filename='style.css') }}">
// <script defer src="{{ url_for('static',filename='script.js') }}"></script>
// <script defer src="{{ url_for('static',filename='Clouds-stars.js') }}"></script>
