window.addEventListener("scroll",()=>{
document.querySelector("header").style.boxShadow=
window.scrollY>50
? "0 2px 15px rgba(0,0,0,.2)"
: "none";
});