let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('activeLine'));
      const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
      activeLink.classList.add('activeLine');
    }
    else {
      const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
      activeLink.classList.remove('activeLine');
    }
  });
}, { threshold: 0.2 }); 
sections.forEach(section => observer.observe(section));

const bodyId = document.body.id; 
console.log(bodyId);

const homeP = document.getElementById('home-p');
const aboutP = document.getElementById('about-p');
function updateHomePText() {
    if (window.innerWidth <= 830 && bodyId == 'perfecto') {
        homeP.innerHTML = 'A web developer builds and maintains websites using coding languages like HTML, CSS, and JavaScript.';
        aboutP.innerHTML = 'Hello! I\'m Perfecto S. Gardoce III, a passionate web developer with a knack for creating efficient and scalable web applications.'
    } else if(window.innerWidth > 830 && bodyId == 'perfecto') {
        homeP.innerHTML = 'A web developer builds and maintains websites using coding languages like HTML, CSS, and JavaScript. They make sure a website works properly on different devices and browsers. They focus on the technical side, such as functions, speed, and security. Some web developers work on the front-end (what users see) while others handle the back-end (server and database). Their goal is to make a website that runs smoothly and meets user needs.'
        aboutP.innerHTML = 'Hello! I\'m Perfecto S. Gardoce III, a passionate web developer with a knack for creating efficient and scalable web applications. My expertise lies in HTML, CSS, and JavaScript, and I specialize in crafting visually stunning and user-friendly interfaces. With a strong foundation in front-end development, I excel in translating design concepts into functional, responsive websites.'
    }

    if (window.innerWidth <= 830 && bodyId == 'winston') {
        homeP.innerHTML = 'A web designer focuses on how a website looks and feels. They choose colors, fonts, images, and layouts to make the site attractive.';
        aboutP.innerHTML = 'Hi, I’m Winston. I\'m currently a 2nd-year student taking up Bachelor of Science in Information Systems at La Verdad Christian College. I was born and raised in Manila, and I am currently living in Apalit, Pampanga to continue my studies.'
    } else if(window.innerWidth > 830 && bodyId == 'winston') {
        homeP.innerHTML = 'A web designer focuses on how a website looks and feels. They choose colors, fonts, images, and layouts to make the site attractive. They often use tools like Figma, Photoshop, or Canva for design mockups. Their job is to make sure the design matches the brand and looks appealing to users. They work closely with web developers to turn the design into a real website.'
        aboutP.innerHTML = 'Hi, I’m Winston. I\'m currently a 2nd-year student taking up Bachelor of Science in Information Systems at La Verdad Christian College. I was born and raised in Manila, and I am currently living in Apalit, Pampanga to continue my studies. I am interested in technology and software development, and I enjoy learning new things that can help improve my knowledge and skills.'
    }
    
    if (window.innerWidth <= 830 && bodyId == 'april') {
        homeP.innerHTML = 'A UI/UX designer focuses on user interface (UI) and user experience (UX). They make sure a website or app is easy to use, clear, and enjoyable.';
        aboutP.innerHTML = 'I\'m April Joy M. Gud-ay, from the Province of Kalinga, a place rich in tradition and known for its beautiful tourist spots.'
        
    } else if(window.innerWidth > 830 && bodyId == 'april') {
        homeP.innerHTML = 'A UI/UX designer focuses on user interface (UI) and user experience (UX). They make sure a website or app is easy to use, clear, and enjoyable. UI deals with design elements like buttons, icons, and layout. UX deals with how users move through and feel while using the site. Their goal is to create a smooth, simple, and satisfying experience for users.'
        aboutP.innerHTML = 'I\'m April Joy M. Gud-ay, from the Province of Kalinga, a place rich in tradition and known for its beautiful tourist spots. I\'m currently pursuing an Associate in Computer Technology at La Verdad Christian College, where I\'m learning how to build websites, write code, and explain ideas in simple and meaningful ways.'
    }
}
window.addEventListener('resize', updateHomePText);
updateHomePText();

