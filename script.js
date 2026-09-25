const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$('#menu')?.addEventListener('click',()=>{const n=$('#nav');n.style.display=n.style.display==='flex'?'none':'flex'});
$$('#nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=950)$('#nav').style.display='none'}));
$('#year').textContent=new Date().getFullYear();
const cards=$$('.card');
$('#search')?.addEventListener('click',()=>{const t=$('#stype').value,a=$('#sarea').value.trim().toLowerCase();let n=0;cards.forEach(c=>{const ok=(t==='all'||c.dataset.type===t)&&(!a||c.dataset.area.includes(a));c.style.display=ok?'':'none';if(ok)n++});$('#none').hidden=n!==0;$('#searchNote').textContent=`${n} ${n===1?'category':'categories'} match your search.`;$('#properties').scrollIntoView({behavior:'smooth'})});
$$('.areas button').forEach(b=>b.addEventListener('click',()=>{$('#sarea').value=b.dataset.a;$('#home').scrollIntoView({behavior:'smooth'});setTimeout(()=>$('#search').click(),250)}));
$$('[data-p]').forEach(a=>a.addEventListener('click',()=>{$('[name="property"]').value=a.dataset.p}));
function money(n){return '₹'+Math.round(n).toLocaleString('en-IN')}
function calc(){const p=Math.max(0,+$('#price').value||0),d=Math.min(p,Math.max(0,+$('#down').value||0)),l=p-d,r=Math.max(0,+$('#rate').value||0)/1200,m=Math.max(1,+$('#years').value||1)*12,e=l===0?0:r===0?l/m:l*r*Math.pow(1+r,m)/(Math.pow(1+r,m)-1),total=e*m;$('#emiv').textContent=money(e);$('#loanv').textContent=money(l);$('#intv').textContent=money(Math.max(0,total-l));$('#payv').textContent=money(total)}
$('#emi')?.addEventListener('click',calc);['price','down','rate','years'].forEach(id=>$('#'+id)?.addEventListener('input',calc));calc();
function mapText(){return ($('#loc').value.trim()||'Tirunelveli')+', Tirunelveli, Tamil Nadu'}
$('#map')?.addEventListener('click',()=>window.open('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(mapText()),'_blank'));
$('#copy')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(mapText());$('#mapnote').textContent='Location copied.'}catch{$('#mapnote').textContent=mapText()}});
$('#form')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const text=`*NELLAI ASSETS*\n━━━━━━━━━━━━━━━━━━━━\n*PROPERTY ENQUIRY*\n\nName          : ${d.get('name')}\nMobile        : ${d.get('phone')}\nPreferred Area: ${d.get('area')||'Not specified'}\nBudget        : ${d.get('budget')||'Not specified'}\nProperty      : ${d.get('property')}\nPreferred     : ${d.get('contact')}\nRequirement   : ${d.get('message')||'Not provided'}\n━━━━━━━━━━━━━━━━━━━━\nNellai Assets`;window.open('https://wa.me/919360390690?text='+encodeURIComponent(text),'_blank');$('#msg').textContent='Enquiry prepared in WhatsApp.'});


// Project-specific enquiry
document.querySelectorAll('[data-project]').forEach(link=>link.addEventListener('click',()=>{const m=document.querySelector('#form textarea[name="message"]');if(m)m.value=`I'm interested in ${link.dataset.project}. Please share the project details.`;}));


const enquiryForm=document.getElementById('form');
if(enquiryForm){enquiryForm.addEventListener('submit',function(e){e.preventDefault();const f=this;const v=n=>f.querySelector(`[name="${n}"]`)?.value.trim()||'Not specified';const text=`*NELLAI ASSETS — PROPERTY ENQUIRY*\n\n*Customer Details*\nName: ${v('name')}\nMobile: ${v('phone')}\n\n*Requirement*\nProperty: ${v('property')}\nArea: ${v('area')}\nBudget: ${v('budget')}\nContact Preference: ${v('contact')}\nMessage: ${v('message')}\n\n*Nellai Assets*\nTirunelveli Property & Real Estate`;window.open('https://wa.me/919360390690?text='+encodeURIComponent(text),'_blank');const m=document.getElementById('msg');if(m)m.textContent='Opening WhatsApp with your enquiry...';});}
/* =========================================
   NELLAI EMIRATES TOWN GALLERY
========================================= */

const emiratesImages = [
    "images/emirates/emirates-01.jpeg",
    "images/emirates/emirates-02.jpeg",
    "images/emirates/emirates-03.jpeg",
    "images/emirates/emirates-04.jpeg",
    "images/emirates/emirates-05.jpeg",
    "images/emirates/emirates-06.jpeg",
    "images/emirates/emirates-07.jpeg",
    "images/emirates/emirates-08.jpeg",
    "images/emirates/emirates-09.jpeg"
];

let emiratesCurrent = 0;

const emiratesMainImage =
    document.getElementById("emiratesMainImage");

const galleryCount =
    document.getElementById("galleryCount");

const galleryThumbs =
    document.querySelectorAll(".gallery-thumb");


function showEmiratesImage(index) {

    emiratesCurrent =
        (index + emiratesImages.length) %
        emiratesImages.length;

    emiratesMainImage.src =
        emiratesImages[emiratesCurrent];

    galleryCount.textContent =
        `${emiratesCurrent + 1} / ${emiratesImages.length}`;

    galleryThumbs.forEach((thumb, i) => {

        thumb.classList.toggle(
            "active",
            i === emiratesCurrent
        );

    });
}


/* PREVIOUS */

document
    .getElementById("galleryPrev")
    .addEventListener("click", () => {

        showEmiratesImage(
            emiratesCurrent - 1
        );

    });


/* NEXT */

document
    .getElementById("galleryNext")
    .addEventListener("click", () => {

        showEmiratesImage(
            emiratesCurrent + 1
        );

    });


/* THUMBNAIL CLICK */

galleryThumbs.forEach((thumb, index) => {

    thumb.addEventListener("click", () => {

        showEmiratesImage(index);

    });

});
