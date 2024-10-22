document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active");
  });
});


// Contoh: Menambahkan efek interaktif pada tombol Get a Quote
const getQuoteButton = document.querySelector('.nav-cta');

getQuoteButton.addEventListener('click', function() {
    alert('Thank you for requesting a quote! We will get back to you shortly.');
});

// Tambahkan lebih banyak kode JavaScript sesuai kebutuhan, seperti validasi formulir, galeri gambar, dll.


// JavaScript for Mobile Menu
const mobileMenuButton = document.querySelector('.mobile-menu');
const mainNav = document.querySelector('.main-nav');

mobileMenuButton.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

// JavaScript for smooth scrolling when clicking on navigation links
document.addEventListener('DOMContentLoaded', function () {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarMenu = document.querySelector(".navbar-menu");

  navbarToggler.addEventListener("click", function () {
      navbarMenu.classList.toggle("active");
      navbarToggler.classList.toggle("open");
  });
});
