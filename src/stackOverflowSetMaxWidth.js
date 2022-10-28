// "run_at": "document_idle" in manifest means our DOM is always ready - no need for DOMContentLoaded event handler
document.querySelectorAll("body>.container").forEach(function (section) { section.style.maxWidth = "99vw"; });
document.querySelectorAll("#content").forEach(function (section) { section.style.maxWidth = "99vw"; section.style.paddingRight = "0px" });
document.querySelectorAll(".js-consent-banner").forEach(function (section) { section.style.display = "none"; });