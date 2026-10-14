// Replace the address below with your real business email before publishing.
const BUSINESS_EMAIL = 'hello@yourcateringbusiness.com';
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.links');
menu.addEventListener('click', () => { const open = links.classList.toggle('open');menu.setAttribute('aria-expanded', String(open));menu.textContent = open ? '×' : '☰'; });
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'; }));
if ('IntersectionObserver' in window) {const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('enquiry').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const body=`Name: ${d.get('name')}
Email: ${d.get('email')}
Event: ${d.get('event')}
Date: ${d.get('date')||'To be confirmed'}

Details:
${d.get('details')}`;const link=document.getElementById('emailSend');link.href=`mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('Catering event enquiry')}&body=${encodeURIComponent(body)}`;link.hidden=false;document.getElementById('enquiryMessage').textContent='Your enquiry is ready. Select the email link below to send it.';});