import{i as n,S as u}from"./assets/vendor-B07T6_gy.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const d=e=>{const i={method:"get"},s=new URLSearchParams({key:"48321806-d480a24496502db5d22ba5dda",image_type:"photo",orientation:"hotizontal",safesearch:!0,q:e});return fetch(`https://pixabay.com/api/?${s.toString()}`,i).then(a=>{if(!a.ok)throw a.status;return a.json()}).catch(a=>{n.error({title:"Error",message:a})})},h=new u(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".gallery");function p(e){return`<li>
  <a class="gallery-link" href="${e.largeImageURL}">
  <img class="gallery-image" src="${e.previewURL}" alt="${e.tags}"/>
  <ul class="statistic">
  <li>
  <h3 class="statistic-title">Likes</h3>
  <p class="statistic-text">${e.likes}</p>
  </li>
  <li>
  <h3 class="statistic-title">Views</h3>
  <p class="statistic-text">${e.views}</p>
  </li>
  <li>
  <h3 class="statistic-title">Comments</h3>
  <p class="statistic-text">${e.comments}</p>
  </li>
  <li>
  <h3 class="statistic-title"> Downloads</h3>
  <p class="statistic-text">${e.downloads}</p>
  </li>
  </ul>
  </a>
  </li>`}function f(e){if(l.innerHTML="",e.length==0)throw"Sorry, there are no images matching your search query. Please try again!";const i=e.map(s=>p(s)).join("");l.innerHTML=i,h.refresh()}const y=document.querySelector("#search"),c=document.querySelector(".loader-wrapper");document.querySelector(".submit").addEventListener("click",e=>{e.preventDefault(),c.style.display="block",d(y.value).then(s=>{f(s.hits)}).catch(s=>{n.error({title:"Error",message:s})}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=index.js.map
