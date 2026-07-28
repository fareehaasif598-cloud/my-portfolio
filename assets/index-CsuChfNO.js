(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const p=[{title:"Portfolio v1",tech:"html",week:1,desc:"A personal portfolio page built with semantic HTML, sections, links, images, and basic page structure."},{title:"Styled Profile Page",tech:"css",week:2,desc:"A styled version of my profile page using custom fonts, colors, spacing, borders, shadows, and hover effects."},{title:"Responsive Portfolio",tech:"css",week:4,desc:"A responsive portfolio update using media queries, flexible layouts, and mobile-friendly styling."},{title:"Interactive Quiz App",tech:"javascript",week:5,desc:"An interactive quiz app using JavaScript functions, arrays, DOM updates, click events, scoring, and a results screen."},{title:"Interactive Portfolio",tech:"javascript",week:6,desc:"A portfolio project with dynamic project cards, JavaScript rendering, filtering, and live search."},{title:"GitHub API Portfolio",tech:"javascript",week:7,desc:"A portfolio update that fetches live GitHub repositories from the GitHub API and displays them on the page."}],f=e=>`
  <article class="card" data-tech="${e.tech}">
    <span class="tag">Week ${e.week}</span>
    <h3 class="card-title">${e.title}</h3>
    <p class="card-desc">${e.desc}</p>
    <span class="tag">${e.tech}</span>
  </article>
  `;function n(e){const t=document.getElementById("project-grid");e.length===0?t.innerHTML=`
      <div class="empty-state">
        <p>No projects match your filter.</p>
      </div>
    `:t.innerHTML=e.map(f).join("")}async function h(e){const t=await fetch(`https://api.github.com/users/${e}/repos`);if(!t.ok)throw new Error("Could not load repositories. Please try again later.");return await t.json()}const g=e=>{const t=e.description?e.description:"No description provided.",r=e.language?e.language:"";return`
    <article class="card repo-card">
      <div class="repo-card__header">
        <h3 class="card-title">${e.name}</h3>
        <span class="repo-card__stars">⭐ ${e.stargazers_count}</span>
      </div>

      <p class="card-desc">${t}</p>

      ${r?`<span class="tag">${r}</span>`:""}

      <a
        class="card-link" 
        href="${e.html_url}" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Repository
      </a>
    </article>
  `},m="fareehaasif598-cloud";let l="all",a="";function d(){return p.filter(e=>{const t=l==="all"||e.tech===l,r=e.title.toLowerCase().includes(a)||e.tech.toLowerCase().includes(a)||e.desc.toLowerCase().includes(a);return t&&r})}async function u(){const e=document.getElementById("repo-grid"),t=document.getElementById("loading-indicator");try{t.classList.remove("hidden");const r=await h(m);e.innerHTML=r.map(g).join("")}catch(r){e.innerHTML=`
      <div class="error-state">
         <p>⚠️</p>
         <p>Error: ${r.message}</p>
         <button class="retry-btn" type="button" id="retry-repos">Try Again</button>
      </div>
   `,document.getElementById("retry-repos").addEventListener("click",()=>{e.innerHTML=`
         <div class="loading-state" id="loading-indicator">Loading repositories…</div>
      `,u()})}finally{t.classList.add("hidden")}}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".filter-btn"),t=document.getElementById("project-search");n(p),u(),e.forEach(r=>{r.addEventListener("click",()=>{l=r.dataset.filter,e.forEach(o=>{o.classList.remove("active")}),r.classList.add("active"),n(d())})}),t.addEventListener("input",()=>{a=t.value.toLowerCase().trim(),n(d())})});
