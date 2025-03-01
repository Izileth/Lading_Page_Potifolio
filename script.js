// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("fa-sun");
});

// Mobile Menu
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form Submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});

// Typing Text
document.addEventListener("DOMContentLoaded", function () {
  const text = "I'm Izileth";
  const typingText = document.querySelector(".typ-text");
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 200;
  const deletingSpeed = 170;
  const pauseBeforeDelete = 1000;
  const pauseBeforeType = 500;

  function typeEffect() {
    const currentText = text.substring(0, charIndex);
    typingText.textContent = currentText;

    if (!isDeleting) {
      charIndex++;

      if (charIndex > text.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseBeforeDelete);
        return;
      }
    } else {
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        setTimeout(typeEffect, pauseBeforeType);
        return;
      }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeEffect, speed);
  }
  typeEffect();
});

//Contato Whatsapp

function criarLinkWhatsApp(numero, mensagem) {
    const mensagemCodificada = encodeURIComponent(mensagem);
    return `https://wa.me/${numero}?text=${mensagemCodificada}`;
}

// Exemplo de uso:
const meuNumero = "5591993961874";
const template = `Olá! Estou entrando em contato através do seu site.

*Tenho interesse em:*
- Informações sobre serviços
- Orçamento
- Agendamento

Poderia me ajudar?`;

const link = criarLinkWhatsApp(meuNumero, template);
document.getElementById("whatsapp-link").href = link;

//Envio do formulario

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Monta a mensagem que será enviada
    const whatsappMessage = `Olá, me chamo: ${name}\nEntro em contato pelo Email: ${email}\nE desejo saber: ${message}`;

    // Codifica a mensagem para ser usada em uma URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Número de telefone para o qual a mensagem será enviada
    const phoneNumber = '5591993961874'; // Substitua pelo número de telefone

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abre o link no WhatsApp
    window.open(whatsappUrl, '_blank');
});