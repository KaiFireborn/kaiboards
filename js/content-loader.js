// Generic content loader for articles and projects
function loadContent(contentType, containerId) {
  const params = new URLSearchParams(window.location.search);
  const contentId = params.get('id');

  if (contentId) {
    const currentPath = window.location.pathname;
    let fetchPath;
    
    if (currentPath.includes('/articles/')) {
      fetchPath = `content/${contentId}.md`;
    } else if (currentPath.includes('/projects/')) {
      fetchPath = `content/${contentId}.md`;
    } else {
      fetchPath = `${contentType}/content/${contentId}.md`;
    }
    
    fetch(fetchPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(contentType + ' not found');
        }
        return response.text();
      })
      .then(content => {
        if (typeof marked !== 'undefined') {
          // Parse frontmatter
          let title = '';
          let description = '';
          let pubDate = '';
          let markdown = content;
          
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
          if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];
            markdown = frontmatterMatch[2];
            
            const titleMatch = frontmatter.match(/title:\s*['"]?([^'"]*?)['"]?$/m);
            const descMatch = frontmatter.match(/description:\s*['"]?([^'"]*?)['"]?$/m);
            const dateMatch = frontmatter.match(/pubDate:\s*['"]?([^'"]*?)['"]?$/m);
            
            title = titleMatch ? titleMatch[1] : '';
            description = descMatch ? descMatch[1] : '';
            pubDate = dateMatch ? dateMatch[1] : '';
          }
          
          let html = '';
          if (title) html += `<h1>${title}</h1>`;
          if (description) html += `<p class="description">${description}</p>`;
          if (pubDate) html += `<time datetime="${pubDate}">${new Date(pubDate).toLocaleDateString()}</time>`;
          
          html += marked.parse(markdown);
          document.getElementById(containerId).innerHTML = html;
        } else {
          document.getElementById(containerId).innerHTML = '<p>Error: Markdown parser not loaded</p>';
        }
      })
      .catch(error => {
        document.getElementById(containerId).innerHTML = '<p>Error loading ' + contentType + ': ' + error.message + '</p>';
      });
  } else {
    document.getElementById(containerId).innerHTML = '<p>No ' + contentType + ' specified.</p>';
  }
}
