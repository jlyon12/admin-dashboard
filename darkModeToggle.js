let darkMode = localStorage.getItem("darkMode");
const toggleSwitch = document.getElementById("toggle-switch");
const toggleText = document.getElementById("toggle-result");
toggleText.innerText = "Dark Mode Disabled";

const enableDarkMode = () => {
	document.body.classList.remove("lightmode");
	document.body.classList.add("darkmode");
	localStorage.setItem("darkMode", "enabled");
	toggleText.innerText = "Dark Mode Enabled";
};

const enableLightMode = () => {
	document.body.classList.remove("darkmode");
	document.body.classList.add("lightmode");
	localStorage.setItem("darkMode", null);
	toggleText.innerText = "Dark Mode Disabled";
};

if (darkMode === "enabled") {
	enableDarkMode();
}

toggleSwitch.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");
	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		enableLightMode();
	}
});
