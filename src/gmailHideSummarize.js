// "run_at": "document_idle" in manifest means our DOM is always ready - no need for DOMContentLoaded event handler
setInterval(() => {
	const span = Array.from(document.getElementsByTagName('span')).find(
		el => el.textContent.trim() === 'Summarize this email'
	);
	
	if (span) {
		let targetElement = span;
		for (let i = 0; i < 2; i++) {
			if (targetElement.parentElement) {
			targetElement = targetElement.parentElement;
			}
		}
	
		if (targetElement.parentElement) {
			targetElement.parentElement.removeChild(targetElement);
		}
	}
}, 100)