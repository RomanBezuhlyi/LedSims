!function(){var e={116:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("slider"),t=document.getElementById("inputValue"),n=document.querySelector(".range-line");function o(e){return e.replace(/\B(?=(\d{3})+(?!\d))/g,",")+" м"}function c(){const t=e.value/e.max*97;n.style.width=t+"%"}c(),e.addEventListener("input",(function(){t.value=o(e.value),c()})),t.addEventListener("input",(function(){var n=t.value.replace(/,/g,"").replace(" м","");!isNaN(n)&&n>=0&&n<=2e4?e.value=n:e.value=2e4,t.value=o(e.value),c()}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("inputDrop"),t=document.getElementById("dropdownIcon"),n=document.getElementById("dropdownList");e.addEventListener("click",(function(){n.style.display="flex"===n.style.display?"none":"flex",t.style.transform="flex"===n.style.display?"rotate(180deg)":"rotate(0deg)"})),n.addEventListener("click",(function(o){o.target.classList.contains("input-dropdown__item")&&(e.value=o.target.textContent,n.style.display="none",t.style.transform="rotate(0deg)")})),document.addEventListener("click",(function(o){e.contains(o.target)||n.contains(o.target)||(n.style.display="none",t.style.transform="rotate(0deg)")}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("slider2"),t=document.getElementById("inputValue2"),n=document.querySelector(".range-line2");function o(e){return e.replace(/\B(?=(\d{3})+(?!\d))/g,",")+" м"}function c(){const t=e.value/e.max*97;n.style.width=t+"%"}c(),e.addEventListener("input",(function(){t.value=o(e.value),c()})),t.addEventListener("input",(function(){var n=t.value.replace(/,/g,"").replace(" м","");!isNaN(n)&&n>=0&&n<=8e3?e.value=n:e.value=8e3,t.value=o(e.value),c()}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("inputDrop2"),t=document.getElementById("dropdownIcon2"),n=document.getElementById("dropdownList2");e.addEventListener("click",(function(){n.style.display="flex"===n.style.display?"none":"flex",t.style.transform="flex"===n.style.display?"rotate(180deg)":"rotate(0deg)"})),n.addEventListener("click",(function(o){o.target.classList.contains("input-dropdown__item2")&&(e.value=o.target.textContent,n.style.display="none",t.style.transform="rotate(0deg)")})),document.addEventListener("click",(function(o){e.contains(o.target)||n.contains(o.target)||(n.style.display="none",t.style.transform="rotate(0deg)")}))}))},222:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".header__burger"),t=document.querySelector(".header__nav"),n=document.querySelector(".header__nav-close"),o=document.querySelectorAll(".header__nav-item");function c(){t.classList.toggle("show")}function d(n){t.contains(n.target)||e.contains(n.target)||(t.classList.remove("show"),document.removeEventListener("click",d))}e.addEventListener("click",(function(e){c(),e.stopPropagation(),document.addEventListener("click",d)})),n.addEventListener("click",(function(){c(),document.removeEventListener("click",d)})),o.forEach((function(e,t){e.addEventListener("click",(function(){o.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),localStorage.setItem("selectedNavItemIndex",t)}))}));const i=localStorage.getItem("selectedNavItemIndex");null!==i&&o.forEach((function(e,t){e.classList.toggle("active",t.toString()===i)}))}))},6:function(){new Swiper(".projects__tabs",{slidesPerView:2.75,spaceBetween:10,breakpoints:{480:{slidesPerView:4},576:{slidesPerView:6},768:{slidesPerView:7},991:{slidesPerView:8},1200:{slidesPerView:9}}}),document.addEventListener("DOMContentLoaded",(function(){let e;function t(t,n){e&&e!==t&&(e.pause(),e.nextElementSibling.classList.remove("hide")),t.paused||t.ended?(t.play(),n.classList.add("hide"),e=t):(t.pause(),n.classList.remove("hide"),e=null)}document.querySelectorAll(".play").forEach((e=>{e.addEventListener("click",(function(){t(e.previousElementSibling,e)}))})),document.querySelectorAll("video").forEach((e=>{e.addEventListener("click",(function(){t(e,e.nextElementSibling)}))}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".projects__tab"),t=document.querySelectorAll(".projects__list");e.forEach(((n,o)=>{n.addEventListener("click",(()=>{t.forEach((e=>{e.classList.add("hide")})),t[o].classList.remove("hide"),e.forEach((e=>{e.classList.remove("active")})),n.classList.add("active")}))}))}))}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(222),n(116),n(6)}()}();