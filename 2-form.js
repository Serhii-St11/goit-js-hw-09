import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form"),l="feedback-form-state";let e={email:"",message:""};function s(){const a=localStorage.getItem(l);a&&(e=JSON.parse(a),t.email.value=e.email||"",t.message.value=e.message||"")}function r(){localStorage.setItem(l,JSON.stringify(e))}t.addEventListener("input",a=>{const{name:o,value:m}=a.target;e[o]=m.trim(),r()});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Submitted data:",e),localStorage.removeItem(l),e={email:"",message:""},t.reset()});s();
//# sourceMappingURL=2-form.js.map
