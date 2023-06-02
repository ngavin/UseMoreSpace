setInterval(() => {
	document.querySelectorAll('span').forEach(btn => {
		if (btn.textContent === 'Generate') {
			simulateClick(btn)
		}
	})
}, 1000)

simulateClick = (element) => {
	simulateMouseEvent(element, 'mousedown')
	simulateMouseEvent(element, 'mouseup')
	simulateMouseEvent(element, 'click')
}

simulateMouseEvent = (element, eventName) => {
	const box = element.getBoundingClientRect(),
    coordX = box.left + (box.right - box.left) / 2,
    coordY = box.top + (box.bottom - box.top) / 2

	element.dispatchEvent(new MouseEvent(eventName, {
		view: window,
		bubbles: true,
		cancelable: true,
		clientX: coordX,
		clientY: coordY,
		button: 0
	}))
}