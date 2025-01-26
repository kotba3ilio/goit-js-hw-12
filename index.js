import{a as g,S as p,i as n}from"./assets/vendor-3h0fHshV.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();g.defaults.baseURL="https://pixabay.com/";const m=async(e,r)=>(await g.get("api/",{params:{key:"48321806-d480a24496502db5d22ba5dda",image_type:"photo",orientation:"hotizontal",safesearch:!0,q:e,page:r,per_page:15}})).data,f=new p(".gallery a",{captionsData:"alt",captionDelay:250}),a={searchString:"",pageNumber:1,images:[]},l=document.querySelector(".gallery"),d=document.querySelector(".loader-wrapper"),h=document.querySelector("#load-more"),u=document.querySelector("#search");function y(e){return`<li>
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
  </li>`}function b(e){a.pageNumber=1,a.images=[],a.searchString=e,l.innerHTML="",u.classList.remove("error")}function L(){try{if(!a.searchString)throw"Search value can not be null";d.style.display="block",m(a.searchString,a.pageNumber).then(r=>{if(a.images.push(...r.hits),a.images.length==0)throw"Sorry, there are no images matching your search query. Please try again!";const i=a.images.map(o=>y(o)).join("");l.innerHTML=i,f.refresh(),a.pageNumber++,S(l.children[l.children.length-1]),a.images.length<r.totalHits?h.classList.remove("hidden"):(h.classList.add("hidden"),n.info({message:"We're sorry, but you've reached the end of search results."}))}).catch(r=>{n.error({title:"Error",message:r})}).finally(()=>{d.style.display="none"})}catch(e){u.classList.add("error"),u.focus,n.error({message:e})}}function S(e){const r=e.getBoundingClientRect();window.scrollBy({top:r.top,height:r.height,behavior:"smooth"})}document.querySelector(".search").addEventListener("input",e=>{b(e.target.value)});document.querySelectorAll(".button").forEach(e=>e.addEventListener("click",()=>{L()}));
//# sourceMappingURL=index.js.map
