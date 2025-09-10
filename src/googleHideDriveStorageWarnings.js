const intervalId = setInterval(() => {
	// const banner = document.querySelector('#docs-recommendation-banner-container');
	const banner = document.querySelector('#docs-banner-container');
	if (banner) {
		banner.style.display = 'none';
		clearInterval(intervalId); // stop checking once hidden
	}
}, 1000);