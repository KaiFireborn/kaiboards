function loadComponent(id, path) {
	const element = document.getElementById(id);
	if (!element) return;
	
	fetch(path)
		.then(response => response.text())
		.then(data => {
			element.innerHTML = data;
		})
		.catch(err => console.error(`Failed to load ${absolutePath}`));
}

document.addEventListener('DOMContentLoaded', () => {
	loadComponent('navbar-keyboards-placeholder', '/components/navbar_keyboards.html');
	loadComponent('navbar-main-placeholder', '/components/navbar.html');
	loadComponent('footer-placeholder', '/components/footer.html');
});
