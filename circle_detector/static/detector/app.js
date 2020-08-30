const loading 			= document.getElementById('loading')
const content 			= document.getElementById('content')
const caption 			= document.getElementById('caption')
const file    			= document.getElementById('input-file')
const image   			= document.getElementById('input-image')
const detectButton  = document.getElementById('detect-button')

// Function to render body once the opencv.js files are loaded
function loadContent() {
	loading.style.visibility = 'hidden'
	content.style.visibility = 'visible'
}

// Function to render image on upload
file.onchange = function() {
  	image.src = URL.createObjectURL(event.target.files[0])
}

// Function to draw image onto the canvas
image.onload = function() {
	detectButton.style.visibility = 'visible'

	let img = cv.imread(image)
  cv.imshow('image-canvas', img)
  img.delete()
}

// Function to perform circle detection
detectButton.onclick = function() {
    this.disabled  						= true
    caption.textContent 		  = 'Processing image. Please wait...'
    caption.style.color 			= 'grey'
    loading.style.visibility 	= 'visible'

    let srcMat     = cv.imread('image-canvas')
    let displayMat = srcMat.clone()
    let circlesMat = new cv.Mat()

    cv.cvtColor(srcMat, srcMat, cv.COLOR_RGBA2GRAY)

    cv.HoughCircles(srcMat, circlesMat, cv.HOUGH_GRADIENT, 1, 45, 75, 40, 0, 0)

    for (let i = 0; i < circlesMat.cols; ++i) {
        let x      = circlesMat.data32F[i * 3]
        let y      = circlesMat.data32F[i * 3 + 1]
        let radius = circlesMat.data32F[i * 3 + 2]

        let center = new cv.Point(x, y)
        cv.circle(displayMat, center, radius, [252, 186, 3, 255], 3)
    }

    cv.imshow('image-canvas', displayMat)

    srcMat.delete()
    displayMat.delete()
    circlesMat.delete()

    this.disabled 						= false
    loading.style.visibility  = 'hidden'
}
