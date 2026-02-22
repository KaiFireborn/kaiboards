function loadComponent(id, path) {
	const element = document.getElementById(id);
	if (!element) return;
	
	const currentPath = window.location.pathname;
	const slashCount = (currentPath.match(/\//g) || []).length;
	const prefix = slashCount > 1 ? '../'.repeat(slashCount - 1) : '';
	const resolvedPath = prefix + path;
	
	fetch(resolvedPath)
		.then(response => response.text())
		.then(data => {
			element.innerHTML = data;
		})
		.catch(err => console.error(`Failed to load ${resolvedPath}`));
}

document.addEventListener('DOMContentLoaded', () => {
	loadComponent('navbar-keyboards-placeholder', 'components/navbar_keyboards.html');
	loadComponent('navbar-main-placeholder', 'components/navbar.html');
	loadComponent('footer-placeholder', 'components/footer.html');
});
