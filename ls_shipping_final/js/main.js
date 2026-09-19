document.addEventListener('DOMContentLoaded',()=>{
  const modal=document.getElementById('thankYouModal');
  const close=document.getElementById('modalClose');
  const forms=document.querySelectorAll('.contact-form');
  forms.forEach(form=>form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const subject=encodeURIComponent('LS Shipping enquiry');
    const body=encodeURIComponent(
      `Full name: ${data.get('name')||''}\nEmail: ${data.get('email')||''}\nInquiry type: ${data.get('type')||''}\n\n${data.get('message')||''}`
    );
    window.location.href=`mailto:info@shipls.com?subject=${subject}&body=${body}`;
    if(modal) modal.classList.add('show');
    form.reset();
  }));
  close?.addEventListener('click',()=>modal.classList.remove('show'));
  modal?.addEventListener('click',e=>{if(e.target===modal) modal.classList.remove('show')});
});
