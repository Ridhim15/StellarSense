/* Generating Stars */
var darkCanvas = document.getElementById('stars');
for (let i = 0; i < 300; ++i) {
	const div = document.createElement("div");
	div.classList.add("star");

	const sizeFactor = Math.random() * 1.5;
	div.style.width = `${5 * sizeFactor}px`;
	div.style.height = `${5 * sizeFactor}px`;

	div.style.top = `${100 * Math.random()}%`;
	div.style.right = `${100 * Math.random()}%`;
	div.style.zIndex = `${Math.floor(Math.random() * 3 + 1)}`;

	darkCanvas.appendChild(div);
}




/* Switching Themes */