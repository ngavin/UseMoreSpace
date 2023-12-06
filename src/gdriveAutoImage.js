// "run_at": "document_idle" in manifest means our DOM is always ready - no need for DOMContentLoaded event handler
setInterval(() => {
	document.querySelectorAll('label').forEach(keep => {
		if (keep.textContent === 'Keep both files') {
			simulateClick(keep)

			setTimeout(() => document.querySelectorAll('span').forEach(upload => {
				if (upload.textContent === 'Upload') {
					simulateClick(upload)

					setTimeout(() => {
						simulateClick(
							document.querySelectorAll('c-wiz div c-wiz')[6]
								.childNodes[0]
								.childNodes[0]
								.childNodes[0]
								.childNodes[2]
								.childNodes[4]
						)

						setTimeout(() => simulateClick(document.querySelector('[aria-label="Copy link"]')), 1000)

						// setTimeout(() => document.querySelectorAll('div').forEach(get => {
						// 	if (get.textContent === 'Copy link') {
						// 		simulateClick(get)
						// 	}
						// }), 5000)
					}, 5000)
				}
			}), 500)
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