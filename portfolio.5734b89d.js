!function(){var e,t,a,o=document.querySelector("[data-header]").getBoundingClientRect().height;document.body.style.paddingTop="".concat(o,"px"),e=document.querySelector("[data-menu]"),t=document.querySelector("[data-menu-btn]"),a=document.querySelector("[data-page]"),t.addEventListener("click",(function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),t.classList.toggle("active"),a.classList.toggle("no-scroll")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.classList.remove("active"),a.classList.remove("no-scroll"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=portfolio.5734b89d.js.map
