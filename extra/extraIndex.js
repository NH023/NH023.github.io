const params = new URLSearchParams(window.location.search);
const id = params.get("id");

document.getElementById("output").textContent = `Setup ID: ${id}`;