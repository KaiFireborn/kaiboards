async function loadItems(type) {
  const items = document.querySelectorAll(`[data-${type}]`);
  
  // Use relative path to content directory (same directory as current page)
  let basePath = 'content/';

  const fetchPromises = Array.from(items).map(item => {
    const id = item.getAttribute(`data-${type}`);
    const url = `${basePath}${id}.md`;
    console.log(`Fetching: ${url}`);
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          console.error(`Failed to fetch ${url}: ${response.status}`);
          return { id, text: '', item };
        }
        return response.text().then(text => ({ id, text, item }));
      })
      .catch(e => {
        console.error(`Error loading ${type} ${id}:`, e);
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
    
    console.log(`Setting ${id} to title: ${title}`);
    item.innerHTML = `<a href="${singularType}.html?id=${id}">${title}</a>`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-articles]')) {
    console.log('Loading articles...');
    loadItems('articles');
  }
  if (document.querySelector('[data-projects]')) {
    console.log('Loading projects...');
    loadItems('projects');
  }
});
