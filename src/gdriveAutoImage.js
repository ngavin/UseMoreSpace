// "run_at": "document_idle" in manifest means our DOM is always ready - no need for DOMContentLoaded event handler
setInterval(() => {
	document.querySelectorAll('label').forEach(label => {
		if (label.textContent === 'Keep both files') {
			simulateClick(label)

			setTimeout(() => document.querySelectorAll('span').forEach(span => {
				if (span.textContent === 'Upload') {
					simulateClick(span)
				}
			}), 10)
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