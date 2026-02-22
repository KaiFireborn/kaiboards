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
          const html = marked.parse(content);
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
