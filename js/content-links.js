async function loadItems(type) {
  const items = document.querySelectorAll(`[data-${type}]`);
  
  const currentPath = window.location.pathname;
  const isArticle = currentPath.includes('/articles/');
  const isProject = currentPath.includes('/projects/');
  
  let basePath = '';
  if (isArticle) basePath = '/articles/';
  if (isProject) basePath = '/projects/';
  
  for (const item of items) {
    const id = item.getAttribute(`data-${type}`);
    try {
      const response = await fetch(`${basePath}content/${id}.md`);
      const text = await response.text();
      
      let title = id;
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
      
      const singularType = type.slice(0, -1);
      item.innerHTML = `<a href="${singularType}.html?id=${id}">${title}</a>`;
    } catch (e) {
      console.warn(`Could not load ${type} ${id}`);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-articles]')) loadItems('articles');
  if (document.querySelector('[data-projects]')) loadItems('projects');
});
