!function(){var e={222:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".header__burger"),t=document.querySelector(".header__nav"),n=document.querySelector(".header__nav-close"),o=document.querySelectorAll(".header__nav-item");function c(){t.classList.toggle("show")}function r(n){t.contains(n.target)||e.contains(n.target)||(t.classList.remove("show"),document.removeEventListener("click",r))}e.addEventListener("click",(function(e){c(),e.stopPropagation(),document.addEventListener("click",r)})),n.addEventListener("click",(function(){c(),document.removeEventListener("click",r)})),o.forEach((function(e,t){e.addEventListener("click",(function(){o.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),localStorage.setItem("selectedNavItemIndex",t)}))}));const i=localStorage.getItem("selectedNavItemIndex");null!==i&&o.forEach((function(e,t){e.classList.toggle("active",t.toString()===i)}))}))}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(222)}()}();