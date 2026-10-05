(function(){
const I={
'arrow-right':'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
'arrow-up-right':'<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
'phone':'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
'map-pin':'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
'mail':'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
'clock':'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
'calendar':'<rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
'check':'<path d="M20 6 9 17l-5-5"/>',
'menu':'<line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="17" y2="17"/>',
'x':'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
'chevron-down':'<path d="m6 9 6 6 6-6"/>',
'home':'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
'building':'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
'shield-check':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>',
'award':'<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
'wrench':'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
'ruler':'<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',
'layers':'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
'star':'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
'move-horizontal':'<polyline points="18 8 22 12 18 16"/><polyline points="6 8 2 12 6 16"/><line x1="2" x2="22" y1="12" y2="12"/>',
'droplet':'<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
'rug':'<rect x="6" y="4" width="12" height="16" rx="1"/><rect x="9" y="7.5" width="6" height="9" rx=".5"/><path d="M7.5 4V2M10 4V2M12 4V2M14 4V2M16.5 4V2M7.5 22v-2M10 22v-2M12 22v-2M14 22v-2M16.5 22v-2"/>',
'planks':'<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M10 3v6M15 9v6M8 15v6"/>',
'carpet':'<path d="M3 6h14a4 4 0 0 1 0 8H3z"/><path d="M3 14v4h14"/><circle cx="17" cy="10" r="1.5"/>',
'facebook':'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
'linkedin':'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
'instagram':'<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>'};
document.querySelectorAll('[data-i]').forEach(el=>{
const n=el.dataset.i,s=+el.dataset.s||20,f=el.hasAttribute('data-fill'),w=el.dataset.w||(s<=17?1.5:1.25);
el.outerHTML='<svg class="'+(el.className||'')+'" width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="'+(f?'currentColor':'none')+'" stroke="currentColor" stroke-width="'+w+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none">'+(I[n]||'')+'</svg>';});
// nav active
const links=[...document.querySelectorAll('.sg-side nav a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('is-on',a.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('section[id]').forEach(s=>io.observe(s));
// before/after
document.querySelectorAll('.nc-ba').forEach(ba=>{
const top=ba.querySelector('.after'),h=ba.querySelector('.nc-ba__handle');
const set=p=>{p=Math.max(0,Math.min(100,p));top.style.clipPath='inset(0 0 0 '+p+'%)';h.style.left=p+'%';ba.setAttribute('aria-valuenow',Math.round(p));};
let d=false;const mv=e=>{const r=ba.getBoundingClientRect();set((e.clientX-r.left)/r.width*100);};
ba.addEventListener('pointerdown',e=>{d=true;ba.setPointerCapture(e.pointerId);mv(e);});
ba.addEventListener('pointermove',e=>d&&mv(e));ba.addEventListener('pointerup',()=>d=false);
ba.addEventListener('keydown',e=>{const v=+ba.getAttribute('aria-valuenow');if(e.key==='ArrowLeft'){set(v-5);e.preventDefault()}if(e.key==='ArrowRight'){set(v+5);e.preventDefault()}});
set(50);});
// header toggle
document.querySelectorAll('[data-hdr-toggle]').forEach(b=>b.addEventListener('click',()=>{
const f=document.getElementById(b.dataset.hdrToggle),h=f.querySelector('.nc-header');const s=!h.classList.contains('is-solid');
h.classList.toggle('is-solid',s);h.classList.toggle('nc-header--transparent',!s);h.style.background=s?'rgba(247,244,239,.97)':'';h.style.boxShadow=s?'var(--shadow-header)':'';
h.querySelectorAll('.nc-logo').forEach(l=>l.classList.toggle('nc-logo--light',!s));
const p=h.querySelector('[data-swap]');if(p){p.className='nc-btn nc-btn--sm '+(s?'nc-btn--primary':'nc-btn--light');}
b.textContent=s?'Show over photo':'Show scrolled state';}));
// header demo zoom fit
const zw=document.querySelectorAll('.sg-zw');const fit=()=>zw.forEach(w=>{const c=w.firstElementChild;if(c)c.style.zoom=Math.min(1,w.clientWidth/1440);});fit();window.addEventListener('resize',fit);
// copy tokens
const cp=document.getElementById('copyTokens');
if(cp)cp.addEventListener('click',()=>{navigator.clipboard&&navigator.clipboard.writeText(document.getElementById('tokenCode').textContent);cp.textContent='Copied';setTimeout(()=>cp.textContent='Copy CSS',1600);});
})();
