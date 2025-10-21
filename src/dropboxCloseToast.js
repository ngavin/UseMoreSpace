// Track a single scheduled click so we don't stack timeouts
let pendingClick = null;

function findCloseButton() {
	const elements = document.querySelectorAll('span[data-dig-button-content="true"],button[data-testid="status-bar-drawer-close-button"]');
	for (const element of elements) {
		if (element.tagName === 'BUTTON' && element.getAttribute('data-testid') === 'status-bar-drawer-close-button') {
			return element;
		}
		else if ((element.textContent || '').trim().toLowerCase() === 'close') {
			return element
		}
	}
	return null;
}

setInterval(() => {
	if (pendingClick) return;

	const btn = findCloseButton();
	if (btn) {
		pendingClick = setTimeout(() => {
			simulateClick(btn)
			pendingClick = null;
		}, 5000);
	}
}, 1000);

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