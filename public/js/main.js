import { loadPosts } from './posts.js';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadPosts();
  
  // Dark mode toggle
  document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Navigation
  document.getElementById('homeLink').addEventListener('click', loadHomePage);
});

function loadHomePage() {
  document.getElementById('mainContent').innerHTML = `
    <div class="create-post">
      <form id="postForm">
        <textarea placeholder="Share something..."></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
    <div id="postsContainer"></div>
  `;
}
