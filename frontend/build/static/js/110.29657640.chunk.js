"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[110],{794:(e,t,n)=>{n.d(t,{Z:()=>o});n(791);var r=n(202),s=n(495),i=n(87),a=n(184);const o=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("footer",{children:[(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsxs)("div",{className:"footer-links",children:[(0,a.jsx)("h3",{children:"Links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.OL,{to:"/",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.OL,{to:"/doctors",children:"Doctors"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.OL,{to:"/appointments",children:"Appointments"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.OL,{to:"/notifications",children:"Notifications"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.fO,{to:"/#contact",children:"Contact Us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.OL,{to:"/profile",children:"Profile"})})]})]}),(0,a.jsxs)("div",{className:"social",children:[(0,a.jsx)("h3",{children:"Social links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"linkedin",children:(0,a.jsx)("a",{href:"https://www.linkedin.com/in/asifhossain01/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(r.BUd,{})})}),(0,a.jsx)("li",{className:"github",children:(0,a.jsx)("a",{href:"https://www.github.com/asifhossain12",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(r.hJX,{})})}),(0,a.jsx)("li",{className:"instagram",children:(0,a.jsx)("a",{href:"https://www.instagram.com/_.asif_12",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(r.Zf_,{})})})]})]})]}),(0,a.jsxs)("div",{className:"footer-bottom",children:["Made by"," ","Asif & Surojit"," ","\xa9 ",(new Date).getFullYear()]})]})})},841:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(791),s=n(689),i=n(87),a=n(495),o=n(420),l=n(318),c=n(974),u=n(41),d=n(456),h=n(184);const p=()=>{const[e,t]=(0,r.useState)(!1),n=(0,o.I0)(),p=(0,s.s0)(),[f,m]=(0,r.useState)(localStorage.getItem("token")||""),[g,j]=(0,r.useState)(localStorage.getItem("token")?(0,d.Z)(localStorage.getItem("token")):"");return(0,h.jsxs)("header",{children:[(0,h.jsxs)("nav",{className:e?"nav-active":"",children:[(0,h.jsx)("h2",{className:"nav-logo",children:(0,h.jsx)(i.OL,{to:"/",children:"Mediplus"})}),(0,h.jsxs)("ul",{className:"nav-links",children:[(0,h.jsx)("li",{children:(0,h.jsx)(i.OL,{to:"/",children:"Home"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.OL,{to:"/doctors",children:"Doctors"})}),f&&g.isAdmin&&(0,h.jsx)("li",{children:(0,h.jsx)(i.OL,{to:"/dashboard/users",children:"Dashboard"})}),f&&!g.isAdmin&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{children:(0,h.jsx)(i.OL,{to:"/appointments",children:"Appointments"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.OL,{to:"/notifications",children:"Notifications"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,h.jsx)("li",{children:(0,h.jsx)(a.fO,{to:"/#contact",children:"Contact Us"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.OL,{to:"/profile",children:"Profile"})})]}),f?(0,h.jsx)("li",{children:(0,h.jsx)("span",{className:"btn",onClick:()=>{n((0,l.ps)({})),localStorage.removeItem("token"),p("/login")},children:"Logout"})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{children:(0,h.jsx)(i.OL,{className:"btn",to:"/login",children:"Login"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,h.jsxs)("div",{className:"menu-icons",children:[!e&&(0,h.jsx)(c.cur,{className:"menu-open",onClick:()=>{t(!0)}}),e&&(0,h.jsx)(u.ySC,{className:"menu-close",onClick:()=>{t(!1)}})]})]})}},890:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(791),s=(n(62),n(184));const i=()=>{const[e,t]=(0,r.useState)({name:"",email:"",message:""}),n=n=>{const{name:r,value:s}=n.target;return t({...e,[r]:s})};return(0,s.jsx)("section",{className:"register-section flex-center",id:"contact",children:(0,s.jsxs)("div",{className:"contact-container flex-center contact",children:[(0,s.jsx)("h2",{className:"form-heading",children:"Contact Us"}),(0,s.jsxs)("form",{method:"POST",action:"https://formspree.io/f/".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLOUDINARY_BASE_URL:"https://api.cloudinary.com/v1_1/dnnw4vgf1/image/upload",REACT_APP_CLOUDINARY_CLOUD_NAME:"dnnw4vgf1",REACT_APP_CLOUDINARY_PRESET:"mediplusBooking",REACT_APP_RAZORPAY_KEY_ID:"rzp_test_MmFBO75TyYotdf",REACT_APP_SERVER_DOMAIN:"http://localhost:5000/api"}.REACT_FORMIK_SECRET),className:"register-form ",children:[(0,s.jsx)("input",{type:"text",name:"name",className:"form-input",placeholder:"Enter your name",value:e.name,onChange:n}),(0,s.jsx)("input",{type:"email",name:"email",className:"form-input",placeholder:"Enter your email",value:e.email,onChange:n}),(0,s.jsx)("textarea",{type:"text",name:"message",className:"form-input",placeholder:"Enter your message",value:e.message,onChange:n,rows:"8",cols:"12"}),(0,s.jsx)("button",{type:"submit",className:"btn form-btn",children:"send"})]})]})})},a=n.p+"static/media/aboutimg.fcf556e1d22a6e98de71.jpg",o=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{className:"container",children:[(0,s.jsx)("h2",{className:"page-heading about-heading",children:"About Us"}),(0,s.jsxs)("div",{className:"about",children:[(0,s.jsx)("div",{className:"hero-img",children:(0,s.jsx)("img",{src:a,alt:"hero"})}),(0,s.jsx)("div",{className:"hero-content",children:(0,s.jsx)("p",{children:"At MediPlus, we believe in redefining healthcare with excellence and innovation. Our mission is to provide comprehensive, personalized care that puts your health first. With a team of dedicated professionals, state-of-the-art technology, and a patient-centered approach, we are committed to delivering the best medical services. We understand that healthcare goes beyond just treatment\u2014it\u2019s about building lasting relationships with our patients, ensuring comfort, and promoting wellness. Whether it's preventive care, treatment, or recovery, MediPlus stands by your side every step of the way. Your health is our responsibility, and we take that seriously. Trust MediPlus for compassionate care, cutting-edge solutions, and a seamless healthcare experience tailored just for you."})})]})]})});var l=n(794);const c=n.p+"static/media/heroimg.93d5ec483ca705e2b7b5.jpg",u=()=>(0,s.jsxs)("section",{className:"hero",children:[(0,s.jsxs)("div",{className:"hero-content",children:[(0,s.jsxs)("h1",{children:["Your Wellness, ",(0,s.jsx)("br",{}),"Our Priority"]}),(0,s.jsx)("p",{children:"At MediPlus, we are dedicated to providing top-notch healthcare solutions for you and your family. Ensuring your well-being is our highest priority, and we strive to deliver personalized care with compassion and innovation. Trust us to be your partner in health, every step of the way."})]}),(0,s.jsx)("div",{className:"hero-img",children:(0,s.jsx)("img",{src:c,alt:"hero"})})]});var d=n(841),h=n(835);const p=()=>(0,s.jsxs)("section",{className:"container circles",children:[(0,s.jsxs)("div",{className:"circle",children:[(0,s.jsx)(h.ZP,{start:0,end:1e3,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:e=>{let{countUpRef:t}=e;return(0,s.jsxs)("div",{className:"counter",children:[(0,s.jsx)("span",{ref:t}),"+"]})}}),(0,s.jsxs)("span",{className:"circle-name",children:["Satisfied",(0,s.jsx)("br",{}),"Patients"]})]}),(0,s.jsxs)("div",{className:"circle",children:[(0,s.jsx)(h.ZP,{start:0,end:250,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:e=>{let{countUpRef:t}=e;return(0,s.jsxs)("div",{className:"counter",children:[(0,s.jsx)("span",{ref:t}),"+"]})}}),(0,s.jsxs)("span",{className:"circle-name",children:["Verified",(0,s.jsx)("br",{}),"Doctors"]})]}),(0,s.jsxs)("div",{className:"circle",children:[(0,s.jsx)(h.ZP,{start:0,end:75,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:e=>{let{countUpRef:t}=e;return(0,s.jsxs)("div",{className:"counter",children:[(0,s.jsx)("span",{ref:t}),"+"]})}}),(0,s.jsxs)("span",{className:"circle-name",children:["Specialist",(0,s.jsx)("br",{}),"Doctors"]})]})]}),f=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Z,{}),(0,s.jsx)(u,{}),(0,s.jsx)(o,{}),(0,s.jsx)(p,{}),(0,s.jsx)(i,{}),(0,s.jsx)(l.Z,{})]})},340:(e,t,n)=>{n.r(t),n.d(t,{CountUp:()=>s});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},r.apply(this,arguments)},s=function(){function e(e,t,n){var s=this;this.endVal=t,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){s.startTime||(s.startTime=e);var t=e-s.startTime;s.remaining=s.duration-t,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration);var n=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=n?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(e){var t,n,r,i,a=e<0?"-":"";t=Math.abs(e).toFixed(s.options.decimalPlaces);var o=(t+="").split(".");if(n=o[0],r=o.length>1?s.options.decimal+o[1]:"",s.options.useGrouping){i="";for(var l=3,c=0,u=0,d=n.length;u<d;++u)s.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(i=s.options.separator+i),c++,i=n[d-u-1]+i;n=i}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]}))),a+s.options.prefix+n+r+s.options.suffix},this.easeOutExpo=function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),r=n.top+window.pageYOffset,s=n.top+n.height+window.pageYOffset;s<t&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||r>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t;if(this.el){var n=this.formattingFn(e);(null===(t=this.options.plugin)||void 0===t?void 0:t.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},835:(e,t,n)=>{var r=n(791),s=n(340);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function l(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,i,a,o=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(o.push(r.value),o.length!==t);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw s}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function f(e){var t=r.useRef(e);return p((function(){t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],g={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},j=function(e){var t=Object.fromEntries(Object.entries(e).filter((function(e){return void 0!==d(e,2)[1]}))),n=r.useMemo((function(){return a(a({},g),t)}),[e]),i=n.ref,o=n.startOnMount,l=n.enableReinitialize,c=n.delay,h=n.onEnd,p=n.onStart,j=n.onPauseResume,x=n.onReset,y=n.onUpdate,v=u(n,m),b=r.useRef(),w=r.useRef(),O=r.useRef(!1),S=f((function(){return function(e,t){var n=t.decimal,r=t.decimals,i=t.duration,a=t.easingFn,o=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,h=t.start,p=t.suffix,f=t.useEasing,m=t.useGrouping,g=t.useIndianSeparators,j=t.enableScrollSpy,x=t.scrollSpyDelay,y=t.scrollSpyOnce,v=t.plugin;return new s.CountUp(e,o,{startVal:h,duration:i,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:p,plugin:v,useEasing:f,useIndianSeparators:g,useGrouping:m,enableScrollSpy:j,scrollSpyDelay:x,scrollSpyOnce:y})}("string"===typeof i?i:i.current,v)})),E=f((function(e){var t=b.current;if(t&&!e)return t;var n=S();return b.current=n,n})),V=f((function(){var e=function(){return E(!0).start((function(){null===h||void 0===h||h({pauseResume:N,reset:A,start:R,update:P})}))};c&&c>0?w.current=setTimeout(e,1e3*c):e(),null===p||void 0===p||p({pauseResume:N,reset:A,update:P})})),N=f((function(){E().pauseResume(),null===j||void 0===j||j({reset:A,start:R,update:P})})),A=f((function(){E().el&&(w.current&&clearTimeout(w.current),E().reset(),null===x||void 0===x||x({pauseResume:N,start:R,update:P}))})),P=f((function(e){E().update(e),null===y||void 0===y||y({pauseResume:N,reset:A,start:R})})),R=f((function(){A(),V()})),C=f((function(e){o&&(e&&A(),V())}));return r.useEffect((function(){O.current?l&&C(!0):(O.current=!0,C())}),[l,O,C,c,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),r.useEffect((function(){return function(){A()}}),[A]),{start:R,pauseResume:N,reset:A,update:P,getCountUp:E}},x=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,s=e.containerProps,i=e.children,o=e.style,l=u(e,x),d=r.useRef(null),h=r.useRef(!1),p=j(a(a({},l),{},{ref:d,startOnMount:"function"!==typeof i||0===e.delay,enableReinitialize:!1})),m=p.start,g=p.reset,y=p.update,v=p.pauseResume,b=p.getCountUp,w=f((function(){m()})),O=f((function(t){e.preserveValue||g(),y(t)})),S=f((function(){"function"!==typeof e.children||d.current instanceof Element?b():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){S()}),[S]),r.useEffect((function(){h.current&&O(e.end)}),[e.end,O]);var E=n&&e;return r.useEffect((function(){n&&h.current&&w()}),[w,n,E]),r.useEffect((function(){!n&&h.current&&w()}),[w,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),r.useEffect((function(){h.current=!0}),[]),"function"===typeof i?i({countUpRef:d,start:m,reset:g,update:y,pauseResume:v,getCountUp:b}):r.createElement("span",c({className:t,ref:d,style:o},s),"undefined"!==typeof e.start?b().formattingFn(e.start):"")}},62:()=>{}}]);
//# sourceMappingURL=110.29657640.chunk.js.map