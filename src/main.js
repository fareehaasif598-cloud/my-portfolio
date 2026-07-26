/* =============================================================
   WEEK 8 STARTER — src/main.js
   The ONLY file imported directly by index.html. Its job is to
   import the pieces from the other modules and wire them up on
   page load — it should NOT contain its own rendering or fetch
   logic.

   HOW TO USE THIS FILE:
   ✅  The CSS import below is already done — leave it as is.
   🔨 Import projects, projectCard, renderProjects from './projects.js'.
   🔨 Import fetchRepos, repoCard from './api.js'.
   🔨 Set USERNAME to your real GitHub username.
   🔨 Write initRepos() — fetch, render, handle loading/error states.
   🔨 Call renderProjects(projects) and initRepos() inside
       DOMContentLoaded.
   ============================================================= */

import './style.css';
import { projects, projectCard, renderProjects } from './projects.js';
import { fetchRepos, repoCard } from './api.js';

// TODO — import from './projects.js' and './api.js'


const USERNAME = 'fareehaasif598-cloud'; 
let activeFilter = 'all';
let searchTerm = '';
function getFilteredProjects() {
  return projects.filter((project) => {
    const matchesFilter = activeFilter === 'all' || project.tech === activeFilter;

    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm) ||
      project.tech.toLowerCase().includes(searchTerm) ||
      project.desc.toLowerCase().includes(searchTerm);

    return matchesFilter && matchesSearch;
  });
}


/* =============================================================
   initRepos() 🔨
   1. Call fetchRepos(USERNAME) inside a try block.
   2. On success: call repoCard on each repo, join, set as the
      #repo-grid innerHTML.
   3. On failure (catch): show an error message in #repo-grid.
   4. In finally: hide #loading-indicator either way.
   ============================================================= */
async function initRepos() {
   const repoGrid = document.getElementById('repo-grid');
   const loadingIndicator = document.getElementById('loading-indicator');

   try {
      loadingIndicator.classList.remove('hidden'); 
      const repos = await fetchRepos(USERNAME);
      repoGrid.innerHTML = repos.map(repoCard).join('');

   }
 catch (error) {
   repoGrid.innerHTML = `
      <div class="error-state">
         <p>⚠️</p>
         <p>Error: ${error.message}</p>
         <button class="retry-btn" type="button" id="retry-repos">Try Again</button>
      </div>
   `;

   const retryButton = document.getElementById('retry-repos');

   retryButton.addEventListener('click', () => {
      repoGrid.innerHTML = `
         <div class="loading-state" id="loading-indicator">Loading repositories…</div>
      `;

      initRepos();
   });
}
   finally {
      loadingIndicator.classList.add('hidden');
   }
}


document.addEventListener('DOMContentLoaded', () => {
   const filterButtons = document.querySelectorAll('.filter-btn');
   const searchInput = document.getElementById('project-search');

   renderProjects(projects);
   initRepos();

   filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
         activeFilter = button.dataset.filter;

         filterButtons.forEach((btn) => {
            btn.classList.remove('active');
         });

         button.classList.add('active');

         renderProjects(getFilteredProjects());
      });
   });

   searchInput.addEventListener('input', () => {
      searchTerm = searchInput.value.toLowerCase().trim();
      renderProjects(getFilteredProjects());
   });
});
