const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('quoteForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Website Enquiry — General Water & Engineering');
  const body = encodeURIComponent(
`Hello General Water & Engineering,

I would like to discuss a water treatment project.

Name: ${data.get('name')}
Email: ${data.get('email') || 'Not provided'}
Phone: ${data.get('phone')}
Service: ${data.get('service') || 'Not specified'}

Project details:
${data.get('message') || 'Please contact me to discuss requirements.'}

Thank you.`
  );
  document.getElementById('formStatus').textContent = 'Your email app should open with the enquiry prepared. Please review and send it.';
  window.location.href = `mailto:info@generalengineeringbd.com?subject=${subject}&body=${body}`;
});
