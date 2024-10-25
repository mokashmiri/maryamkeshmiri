// aboutMe.js - JavaScript to enhance the About Me page

// Click event for the About Me name
function clickMyName() {
    alert('Welcome to Maryam Keshmiri\'s Portfolio!');
  }
  
  // Ensure the navigation bar link remains active
  const aboutMeLink = document.querySelector('.aboutMeLink');
  aboutMeLink.classList.add('active');
  
  // Smooth scroll to the About Me section
  function scrollToSection() {
  const section = document.querySelector('section');
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    console.error('Section element not found');
  }
}
  
  document.addEventListener('DOMContentLoaded', () => {
    // Attach event to the name element
    const nameElement = document.querySelector('.name');
    if (nameElement) {
      nameElement.addEventListener('click', scrollToSection);
    }
  
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.navBar');
    hamburger.addEventListener('click', () => {
      navBar.classList.toggle('active');
    });
  });
  