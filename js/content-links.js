async function loadItems(type) {
  const items = document.querySelectorAll(`[data-${type}]`);
  
  const currentPath = window.location.pathname;
  const isArticle = currentPath.includes('/articles/');
  const isProject = currentPath.includes('/projects/');
  
  let basePath = '';
  if (isArticle) basePath = '/articles/';
  if (isProject) basePath = '/projects/';
  
  const fetchPromises = Array.from(items).map(item => {
    const id = item.getAttribute(`data-${type}`);
    return fetch(`${basePath}content/${id}.md`)
      .then(response => response.text())
      .then(text => ({ id, text, item }))
      .catch(e => {
        console.warn(`Could not load ${type} ${id}`);
        return { id, text: '', item };
      });
  });
  
  const results = await Promise.all(fetchPromises);
  
  const singularType = type.slice(0, -1);
  results.forEach(({ id, text, item }) => {
    let title = id;
    
    if (text) {
      const frontmatterMatch = text.match(/^---\n([\s\S]*?)\n---/);
      if (frontmatterMatch) {
        const titleMatch = frontmatterMatch[1].match(/title:\s*['"]?([^'"]*?)['"]?$/m);
        if (titleMatch) {
          title = titleMatch[1];
        }
      } else {
        const h1Match = text.match(/^# (.*?)$/m);
        if (h1Match) {
          title = h1Match[1];
        }
      }
    }
    
    item.innerHTML = `<a href="${singularType}.html?id=${id}">${title}</a>`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-articles]')) loadItems('articles');
  if (document.querySelector('[data-projects]')) loadItems('projects');
});

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-articles]')) loadItems('articles');
  if (document.querySelector('[data-projects]')) loadItems('projects');
});
