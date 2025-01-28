import{a as h,S as p,i as n}from"./assets/vendor-3h0fHshV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}})();h.defaults.baseURL="https://pixabay.com/";const f=async(e,t,l)=>{if(e.trim().length==0)throw"Search value can not be null";return await h.get("api/",{params:{key:"48321806-d480a24496502db5d22ba5dda",image_type:"photo",orientation:"hotizontal",safesearch:!0,q:e,page:t,per_page:l}})},y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(e){return`<li>
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
  </li>`}const i={searchString:"",pageNumber:1,images:[],totalHits:0,pageSize:15};async function L(e,t){await f(t.searchString,t.pageNumber,t.pageSize).then(l=>{const{data:a}=l;if(a.hits.length==0)throw"Sorry, there are no images matching your search query. Please try again!";t.images.push(...a.hits);const s=t.images.map(r=>b(r)).join("");e.innerHTML=s,y.refresh(),S(e.children[e.children.length-t.pageSize+1]),t.pageNumber+=1,t.totalHits=a.totalHits})}function S(e){const t=e.getBoundingClientRect();window.scrollBy({top:t.bottom,height:t.height*2,behavior:"smooth"})}const w=document.querySelector("form"),d=document.querySelector("#search"),u=document.querySelector(".loader-wrapper"),o=document.querySelector("#load-more"),g=document.querySelector(".gallery");function v(){i.pageNumber=1,i.images=[],i.searchString=d.value,g.innerHTML="",d.classList.remove("error")}async function m(){try{u.style.display="block",await L(g,i),i.images.length<i.totalHits?o.classList.remove("hidden"):(o.classList.add("hidden"),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch(e){n.error({title:"Error",message:e}),o.classList.add("hidden")}finally{u.style.display="none"}}w.addEventListener("submit",e=>{e.preventDefault(),v(),m()});o.addEventListener("click",()=>{m()});
//# sourceMappingURL=index.js.map
