let elApp = document.getElementById('app')
let elCanvas = document.createElement('canvas')

let elImg = document.createElement('img')
elImg.src = 'de_dust_overhead_2.jpg'
elImg.onload = init

let currentLayer = 'kill'

function init() {
	resize()
	let ctx = elCanvas.getContext('2d')
	ctx.drawImage(elImg, 0, 0, width(), height())
	console.log(width(), height())

	elCanvas.addEventListener('click', function (e) {
		console.log('clicked', e)
		ctx.beginPath()
		ctx.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI, false)
		if (currentLayer === 'death') {
			ctx.fillStyle = 'red'
			currentLayer = 'kill'
		} else {
			ctx.fillStyle = 'green'
			currentLayer = 'death'
		}
		ctx.fill()
		ctx.stroke()
	})

	elApp.appendChild(elCanvas)
}

function aspect() {
	return elImg.width / elImg.height
}

function height() {
	return Math.min(elImg.height, document.body.offsetHeight)
}

function width() {
	return Math.min(elImg.width, document.body.offsetWidth)
}

function resize() {
	elCanvas.height = height()
	elCanvas.width = width()
}

window.addEventListener('resize', resize)

console.log('balls')
