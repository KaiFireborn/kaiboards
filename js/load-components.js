function loadComponent(id, path) {
	const element = document.getElementById(id);
	if (!element) return;
	
	// Determine base path: if we're at keyboards root, use relative; otherwise use absolute
	const pathname = window.location.pathname;
	const isKeyboardsRoot = pathname === '/' || pathname === '/index.html';
	const basePath = isKeyboardsRoot ? '' : '/keyboards/';
	const absolutePath = basePath + path;
	
	fetch(absolutePath)
		.then(response => response.text())
		.then(data => {
			element.innerHTML = data;
		})
		.catch(err => console.error(`Failed to load ${absolutePath}`));
}

document.addEventListener('DOMContentLoaded', () => {
	loadComponent('navbar-keyboards-placeholder', 'components/navbar_keyboards.html');
	loadComponent('navbar-main-placeholder', 'components/navbar.html');
	loadComponent('footer-placeholder', 'components/footer.html');
});
