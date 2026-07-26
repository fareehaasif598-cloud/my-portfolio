/* =============================================================
   WEEK 8 STARTER — src/projects.js
   Your projects array, card template, and render function —
   moved here from app.js. Everything used outside this file
   must have `export` in front of it.

   HOW TO USE THIS FILE:
   🔨 Replace the sample projects with your real ones.
   🔨 Write projectCard() — same logic as your Week 6 version.
   🔨 Write renderProjects() — same logic as your Week 6 version.
   ============================================================= */


/* =============================================================
   PROJECT DATA ✏️
   Replace with your real projects. Each object needs:
     title  — the project name (string)
     tech   — ONE OF: 'html' | 'css' | 'javascript'
     week   — the week number (number)
     desc   — a short description (string)
   ============================================================= */
export const projects = [
  {
    title: 'Portfolio v1',
    tech: 'html',
    week: 1,
    desc: 'A personal portfolio page built with semantic HTML, sections, links, images, and basic page structure.'
  },
  {
    title: 'Styled Profile Page',
    tech: 'css',
    week: 2,
    desc: 'A styled version of my profile page using custom fonts, colors, spacing, borders, shadows, and hover effects.'
  },
  {
    title: 'Responsive Portfolio',
    tech: 'css',
    week: 4,
    desc: 'A responsive portfolio update using media queries, flexible layouts, and mobile-friendly styling.'
  },
  {
    title: 'Interactive Quiz App',
    tech: 'javascript',
    week: 5,
    desc: 'An interactive quiz app using JavaScript functions, arrays, DOM updates, click events, scoring, and a results screen.'
  },
  {
    title: 'Interactive Portfolio',
    tech: 'javascript',
    week: 6,
    desc: 'A portfolio project with dynamic project cards, JavaScript rendering, filtering, and live search.'
  },
  {
    title: 'GitHub API Portfolio',
    tech: 'javascript',
    week: 7,
    desc: 'A portfolio update that fetches live GitHub repositories from the GitHub API and displays them on the page.'
  }
];
  // TIP: add more objects here as you build more projects!



/* =============================================================
   PROJECT CARD TEMPLATE 🔨
   Takes ONE project object, returns ONE HTML string.
   Use the classes already in src/style.css:
     .card  .tag  .card-title  .card-desc
   ============================================================= */
export const projectCard = (p) =>`
  <article class="card" data-tech="${p.tech}">
    <span class="tag">Week ${p.week}</span>
    <h3 class="card-title">${p.title}</h3>
    <p class="card-desc">${p.desc}</p>
    <span class="tag">${p.tech}</span>
  </article>
  `;


/* =============================================================
   RENDER FUNCTION 🔨
   Takes any array of projects, fills in #project-grid.
   If the array is empty, show a friendly message instead
   (the .empty-state class is already styled for you).
   ============================================================= */
export function renderProjects(list) {
  const projectGrid = document.getElementById('project-grid');

  if (list.length === 0) {
    projectGrid.innerHTML = `
      <div class="empty-state">
        <p>No projects match your filter.</p>
      </div>
    `;
  } else {
    projectGrid.innerHTML = list.map(projectCard).join('');
  }

}
