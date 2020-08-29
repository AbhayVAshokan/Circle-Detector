// Function to render body once the opencv.js files are loaded.
function loadContent() {
	const loading = document.getElementsByClassName('loading')[0]
	const content = document.getElementsByClassName('content')[0]

	content.style.visibility = "visible"
	loading.style.visibility = "hidden"
}
