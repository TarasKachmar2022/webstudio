const e={burgerBtn:document.querySelector("[data-burger-btn]")};e.burgerBtn.addEventListener("click",(function(){e.burgerBtn.classList.toggle("active")})),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("[data-page]")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const t=document.querySelector("#phone");new IMask(t,{mask:"+{38}(000)000-00-00"});
//# sourceMappingURL=index.025b339c.js.map
