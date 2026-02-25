const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const row = document.getElementById('recipeRow');
let dragging=false, startX, scrollLeft;
row.addEventListener('mousedown', e => { dragging=true; startX=e.pageX-row.offsetLeft; scrollLeft=row.scrollLeft; });
row.addEventListener('mouseleave', ()=>dragging=false);
row.addEventListener('mouseup', ()=>dragging=false);
row.addEventListener('mousemove', e => {
  if(!dragging) return; e.preventDefault();
  row.scrollLeft = scrollLeft-(e.pageX-row.offsetLeft-startX)*1.5;
});

document.getElementById('nlBtn').addEventListener('click', function(){
  const inp=document.getElementById('nlInput');
  if(inp.value && inp.value.includes('@')){
    this.textContent='\u2713 You\'re in!'; this.style.background='#3bb89a';
    inp.value=''; inp.placeholder='See you soon \uD83C\uDF38'; this.disabled=true;
  }
});
