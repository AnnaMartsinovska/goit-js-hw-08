function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,o,i,f,a,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function E(e){return c=e,a=setTimeout(j,t),l?y(e):f}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function j(){var e=v();if(h(e))return w(e);a=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function w(e){return a=void 0,g&&r?y(e):(r=o=void 0,f)}function O(){var e=v(),n=h(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return E(u);if(s)return a=setTimeout(j,t),y(u)}return void 0===a&&(a=setTimeout(j,t)),f}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},O.flush=function(){return void 0===a?f:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y={formEl:document.querySelector(".feedback-form")};let E={};y.formEl.addEventListener("input",e(t)((function(e){const t=e.target.name,n=e.target.value;E[t]=n,function(e,t){localStorage.setItem(e,JSON.stringify(t))}("feedback-form-state",E)}),500)),y.formEl.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=e.target.elements;if(""===t.value||""===n.value)return alert("Заповніть пусті поля");console.log(E),e.target.reset(),localStorage.removeItem("feedback-form-state"),E={}})),E=function(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}("feedback-form-state")||{},y.formEl.value=E.email||"",y.formEl.value=E.message||"";
//# sourceMappingURL=03-feedback.88cb60ce.js.map
