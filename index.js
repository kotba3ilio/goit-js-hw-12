import{a as h,S as m,i as n}from"./assets/vendor-3h0fHshV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();h.defaults.baseURL="https://pixabay.com/";const f=async(e,s)=>await h.get("api/",{params:{key:"48321806-d480a24496502db5d22ba5dda",image_type:"photo",orientation:"hotizontal",safesearch:!0,q:e,page:s,per_page:15}}),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(e){return`<li>
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
  </li>`}const i={searchString:"",pageNumber:1,images:[],totalHits:0};async function L(e,s){await f(s.searchString,s.pageNumber).then(o=>{const{data:a}=o;if(a.hits.length==0)throw"Sorry, there are no images matching your search query. Please try again!";s.images.push(...a.hits);const t=s.images.map(r=>b(r)).join("");e.innerHTML=t,y.refresh(),w(e.children[e.children.length-1]),s.pageNumber+=1,s.totalHits=a.totalHits})}function w(e){const s=e.getBoundingClientRect();window.scrollBy({top:s.top,height:s.height,behavior:"smooth"})}const v=document.querySelector("form"),u=document.querySelector("#search"),d=document.querySelector(".loader-wrapper"),c=document.querySelector("#load-more"),g=document.querySelector(".gallery");function S(){i.pageNumber=1,i.images=[],i.searchString=u.value,g.innerHTML="",u.classList.remove("error")}async function p(){try{d.style.display="block",await L(g,i),i.images.length<i.totalHits?c.classList.remove("hidden"):(c.classList.add("hidden"),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch(e){n.error({title:"Error",message:e})}finally{d.style.display="none"}}v.addEventListener("submit",e=>{e.preventDefault(),S(),p()});c.addEventListener("click",()=>{p()});
//# sourceMappingURL=index.js.map
