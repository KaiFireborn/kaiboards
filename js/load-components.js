function loadComponent(id, path) {
	fetch(path)
		.then(response => response.text())
		.then(data => {
			document.getElementById(id).innerHTML = data;
		});
}
loadComponent('navbar-keyboards-placeholder', '/components/navbar_keyboards.html');
loadComponent('navbar-main-placeholder', '/components/navbar.html');
loadComponent('footer-placeholder', '/components/footer.html');
