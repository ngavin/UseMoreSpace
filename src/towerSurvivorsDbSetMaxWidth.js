// "run_at": "document_idle" in manifest means our DOM is always ready - no need for DOMContentLoaded event handler
setInterval(function () {
	document.querySelectorAll(".WeaponCard_wrapper__hJEdm").forEach(function (section) { section.style.width = "100%"; });
	document.querySelectorAll(".WeaponCard_cardGrid__i0SPB").forEach(function (section) { section.style.maxWidth = "none"; });
}, 100);
