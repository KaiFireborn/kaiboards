function loadComponent(id, path) {
	// Determine the relative path from current page to components
	const currentPath = window.location.pathname;
	// Count slashes to determine depth
	// /index.html = 1 slash (root, no prefix needed)
	// /keyboards/index.html = 2 slashes (1 level deep, need ../)
	// /keyboards/articles/index.html = 3 slashes (2 levels deep, need ../../)
	const slashCount = (currentPath.match(/\//g) || []).length;
	const prefix = slashCount > 1 ? '../'.repeat(slashCount - 1) : '';
	const resolvedPath = prefix + path;
	
	fetch(resolvedPath)
		.then(response => response.text())
		.then(data => {
			document.getElementById(id).innerHTML = data;
		})
		.catch(err => console.error(`Failed to load ${resolvedPath}:`, err));
}
loadComponent('navbar-keyboards-placeholder', 'components/navbar_keyboards.html');
loadComponent('navbar-main-placeholder', 'components/navbar.html');
loadComponent('footer-placeholder', 'components/footer.html');
