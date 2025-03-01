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

// Fechar menu ao clicar em um link
const navLinksList = document.querySelectorAll(".nav-links a"); // Seleciona todos os links dentro do menu

navLinksList.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active"); // Fecha o menu
    });
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

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Monta a mensagem que será enviada
    const whatsappMessage = `Olá, me chamo: ${name}\nEntro em contato pelo Email: ${email}\nE desejo saber: ${message}`;

    // Codifica a mensagem para ser usada em uma URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Número de telefone para o qual a mensagem será enviada
    const phoneNumber = "5591993961874"; // Substitua pelo número de telefone

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abre o link no WhatsApp
    window.open(whatsappUrl, "_blank");
  });

//Observador do Efeito Fade

// Seleciona todos os elementos com a classe .fade-in
const fadeElements = document.querySelectorAll(".fade-in");

// Configurações do Intersection Observer
const options = {
  root: null, // Observa a viewport
  rootMargin: "0px", // Sem margem adicional
  threshold: 0.5, // Dispara quando 50% do elemento está visível
};

// Callback que será executada quando os elementos forem observados
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Se o elemento estiver visível
      entry.target.classList.add("visible"); // Adiciona a classe .visible
      observer.unobserve(entry.target); // Para de observar o elemento
    }
  });
};

// Cria o Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Observa cada elemento com a classe .fade-in
fadeElements.forEach((element) => {
  observer.observe(element);
});

//Abre o Link Para os Repositórios

document.getElementById("github-repos").addEventListener("click", function (event) {
  event.preventDefault(); // Impede o redirecionamento padrão

  // URL do repositório
  const repoUrl = "https://github.com/kawakawi/Lading_Page_Potifolio";

  // Abre o repositório no navegador
  window.open(repoUrl, "_blank");
});
