function loadComponent(id, path) {
	// Determine the relative path from current page to components
	const currentPath = window.location.pathname;
	// Count slashes to determine depth (e.g., /keyboards/index.html = 2, /keyboards/articles/index.html = 3)
	const slashCount = (currentPath.match(/\//g) || []).length;
	// If at root level (1 slash), use relative path directly
	// If one level deep (2 slashes), use ../
	// If two levels deep (3 slashes), use ../../
	const prefix = slashCount > 2 ? '../'.repeat(slashCount - 2) : (slashCount > 1 ? '../' : '');
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
