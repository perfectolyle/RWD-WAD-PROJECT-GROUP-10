// menu toggle (hamburger)
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// profile data store (easy to extend)
const profiles = {
  perfecto: {
    key: 'perfecto',
    name: 'Perfecto Gardoce',
    role: 'Web Developer',
    bio:
      "I'm a web developer with a knack for creating efficient and scalable web applications. My expertise lies in HTML, CSS, and JavaScript. I specialize in converting design into responsive and accessible interfaces.",
    image: 'https://i.pinimg.com/736x/25/4c/7d/254c7d3e4737995ddd5292a3450f70ca.jpg',
    theme: {
      '--main-color': '#ea580c',
      '--bg-color': '#080808',
      '--second-bg-color': '#101010'
    },
    ctaHref: 'profile2.html',
    ctaText: 'View Full Profile'
  },
  winston: {
    key: 'winston',
    name: 'Winston',
    role: 'Web Designer',
    bio:
      "Winston focuses on visual design, layout, and user-centered interfaces. He brings polished mockups and layout systems that improve clarity and flow across screen sizes.",
    image: 'https://i.pinimg.com/736x/00/14/08/00140847deddb10bbbc7711b0ecb0bc5.jpg',
    theme: {
      '--main-color': '#1e90ff',     // blue
      '--bg-color': '#071028',      // deep blue-black
      '--second-bg-color': '#0b2540'
    },
    ctaHref: '#contact',
    ctaText: 'Contact Winston'
  },
  april: {
    key: 'april',
    name: 'April',
    role: 'UI / UX Designer',
    bio:
      "April is a UI/UX designer who focuses on user journeys, wireframes, and accessible interactions. April designs friendly interfaces driven by research and empathy.",
    image: 'https://i.pinimg.com/1200x/a0/99/93/a0999341add425c3afbfd9c82312fe52.jpg',
    theme: {
      '--main-color': '#ff66b2',   // pink
      '--bg-color': '#100815',
      '--second-bg-color': '#2a0f1a'
    },
    ctaHref: '#contact',
    ctaText: 'Contact April'
  }
};

// DOM refs
const cardElements = document.querySelectorAll('.profile-card');
const displayImage = document.getElementById('display-image');
const displayNameSpan = document.getElementById('display-name-span');
const displayRole = document.getElementById('display-role');
const displayBio = document.getElementById('display-bio');
const displayCta = document.getElementById('display-cta');
const root = document.documentElement;

// helper to apply theme (CSS variables)
function applyTheme(themeObj) {
  Object.keys(themeObj).forEach((varName) => {
    root.style.setProperty(varName, themeObj[varName]);
  });
}

// helper to update content
function updateDisplay(profile) {
  // smooth crossfade
  const wrapper = document.querySelector('.profile-display');
  wrapper.style.opacity = 0;
  setTimeout(() => {
    displayImage.src = profile.image;
    displayImage.alt = `${profile.name} portrait`;
    displayNameSpan.textContent = profile.name;
    displayRole.innerHTML = profile.role.replace(/( |$)/, ' <span></span>'); // keep span usage
    displayBio.textContent = profile.bio;
    displayCta.href = profile.ctaHref;
    displayCta.textContent = profile.ctaText || 'View Profile';
    applyTheme(profile.theme);
    wrapper.style.opacity = 1;
  }, 180);
}

// remove .selected from cards
function clearSelected() {
  cardElements.forEach((el) => {
    el.classList.remove('selected');
    el.setAttribute('aria-pressed', 'false');
  });
}

// set selected card
function selectCard(cardEl) {
  clearSelected();
  cardEl.classList.add('selected');
  cardEl.setAttribute('aria-pressed', 'true');
}

// card click handling
cardElements.forEach((card) => {
  const key = card.dataset.key;
  // if link (Perfecto) is anchor, let browser navigate
  if (card.tagName.toLowerCase() === 'a') {
    // make it visually selectable but don't override navigation
    card.addEventListener('click', () => {
      clearSelected();
      card.classList.add('selected');
    });
    return;
  }

  card.addEventListener('click', (e) => {
    const k = card.dataset.key;
    const profile = profiles[k];
    if (!profile) return;
    updateDisplay(profile);
    selectCard(card);
    // for accessibility: move focus to the main content region
    document.getElementById('intro').focus({ preventScroll: true });
  });

  // keyboard support
  card.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      card.click();
    }
  });
});

// initial default: mark Perfecto selected visually (but it's a link)
document.querySelectorAll('.profile-card').forEach((el) => el.classList.remove('selected'));
const initial = document.querySelector('.profile-card[data-key="perfecto"]');
if (initial) initial.classList.add('selected');

// ensure default theme is applied
applyTheme(profiles.perfecto.theme);
