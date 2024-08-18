import{S as c,i as m}from"./assets/vendor-96ed78f5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=s=>`
  <li class="gallery-item">
      <a class="gallery-link" href="${s.largeImageURL}">
      <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}" />
      </a>
      <ul class="img-info-list">
        <li class="img-info-item">
          <p class="img-info-text">Likes</p>
          <p class="img-info-value">${s.likes}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Views</p>
          <p class="img-info-value">${s.views}</p>
        </li>
        <li class="img-info-item">
           <p class="img-info-text">Comments</p>
          <p class="img-info-value">${s.comments}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Downloads</p>
          <p class="img-info-value">${s.downloads}</p>
        </li>
      </ul>
  </li>
  `,d="45436364-f90a0cfe5f9b13d8d0e95a311",f="https://pixabay.com",p=s=>{const r=new URLSearchParams({q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",key:d});return fetch(`${f}/api/?${r}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})},l=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),g=s=>{s.preventDefault();const r=document.querySelector(".js-loader");r.classList.remove("is-hidden");const i=l.elements.user_query.value;p(i).then(o=>{if(r.classList.add("is-hidden"),o.hits.length===0){m.show({timeout:5e3,message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",iconUrl:"/src/img/bi_x-octagon.svg"}),n.innerHTML="";return}const e=o.hits.map(t=>u(t)).join("");n.innerHTML=e,h.refresh()}).catch(o=>{o.message==="404"&&alert("Incorrectly entered address. Check and try again")}),l.reset()};l.addEventListener("submit",g);let h=new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
