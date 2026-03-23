const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Please fill out all fields.';
    formStatus.style.color = '#ff6b6b';
    return;
  }

  formStatus.textContent = 'Sending message...';
  formStatus.style.color = '#b0b4c9';

  setTimeout(() => {
    formStatus.textContent = 'Message sent! We will respond in 1-2 business days.';
    formStatus.style.color = '#4aedb4';
    contactForm.reset();
  }, 700);
});

const eventList = document.getElementById('eventList');
const addEventBtn = document.getElementById('addEventBtn');

addEventBtn?.addEventListener('click', () => {
  if (!eventList) return;
  const item = document.createElement('li');
  item.className = 'event-item';
  item.textContent = 'Practice Scrim - ' + new Date().toLocaleDateString() + ' - Online';
  eventList.appendChild(item);
});
