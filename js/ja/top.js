if (localStorage.hasOwnProperty("update")) {
} else if (localStorage.hasOwnProperty("record")) {
	localStorage.removeItem("record");
	localStorage.setItem("update", "1");
}
else {
	localStorage.setItem("update", "1");
}
