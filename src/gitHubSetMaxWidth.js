// "run_at": "document_idle" in manifest means our DOM is always ready - no need for DOMContentLoaded event handler
document.querySelectorAll("main div.container-lg").forEach(function (section) { section.style.maxWidth = "85vw"; });