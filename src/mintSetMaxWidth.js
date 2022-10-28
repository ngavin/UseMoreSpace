// "run_at": "document_idle" in manifest means our DOM is always ready - no need for DOMContentLoaded event handler
document.querySelectorAll("#wrapper").forEach(function (section) { section.style.maxWidth = "85vw"; });

let ele = null;
var CONTROL_INTERVAL = setInterval(function() {

	ele = document.querySelectorAll("#module-accounts .nickname, #module-accounts a.accountName");
    if ( ele.length >= 3) 
	{
		ele.forEach(function (section) { section.style.width = "100%"; });
        clearInterval(CONTROL_INTERVAL);
    }

}, 100); // Check for every 100ms