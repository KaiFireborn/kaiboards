function loadComponent(id, path) {
	fetch(path)
		.then(response => response.text())
		.then(data => {
			document.getElementById(id).innerHTML = data;
		});
}
loadComponent('navbar-placeholder', '/components/navbar.html');
loadComponent('footer-placeholder', '/components/footer.html');
