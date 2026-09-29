const btn=document.querySelector(".menu"),nav=document.querySelector(".header nav");
btn.addEventListener("click",()=>{nav.classList.toggle("open");btn.setAttribute("aria-expanded",nav.classList.contains("open"))});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();