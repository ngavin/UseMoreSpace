// "run_at": "document_idle" in manifest means our DOM is always ready - no need for DOMContentLoaded event handler
document.querySelectorAll(".main-wrapper").forEach(function (section) {
	section.style.marginLeft = "1vw";
	section.style.marginRight = "1vw";
	section.style.maxWidth = "100%";
	section.style.gridTemplateColumns = "minmax(0,.5fr) minmax(0,2.5fr) minmax(0,15rem)"
});