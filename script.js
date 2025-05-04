// Sistemma de Troca de Tema 
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("fa-sun");
});



// Sistema do Menu Mobile
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



// //Efeito Smooth para toas as Tags "a"
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});



//Efeito Smooth para o Botão

const button = document.querySelector(".hr-btn");

button.addEventListener("click", () => {
  const scrollTo = document.querySelector("#about");
  scrollTo.scrollIntoView({ behavior: "smooth" });
});



// Sistema para o Efeito de Texto Sendo Escritto
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




//Sistema de Interação do Whastsapp
// Função para criar link do WhatsApp com mensagem personalizada
function criarLinkWhatsApp(numero, mensagem) {
  const mensagemCodificada = encodeURIComponent(mensagem);
  return `https://wa.me/${numero}?text=${mensagemCodificada}`;
}

// Definições do botão WhatsApp
const meuNumero = "5591993961874";
const template = `Olá! Estou entrando em contato através do seu site.

*Tenho interesse em:*
- Informações sobre serviços
- Orçamento
- Agendamento

Poderia me ajudar?`;

const whatsappBtn = document.getElementById("whatsapp-link");
const messageBox = document.getElementById("whatsapp-message");
const footer = document.querySelector("footer");

whatsappBtn.href = criarLinkWhatsApp(meuNumero, template);

// Função para exibir/esconder o botão de WhatsApp
function toggleWhatsAppButton() {
  const scrollY = window.scrollY || window.pageYOffset;
  const footerTop = footer.getBoundingClientRect().top + window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY > 200 && scrollY + windowHeight < footerTop) {
      whatsappBtn.style.display = "inline-block";
  } else {
      whatsappBtn.style.display = "none";
  }
}

// Evento de rolagem para mostrar ou esconder o botão
window.addEventListener("scroll", toggleWhatsAppButton);

// Exibir mensagem ao passar o mouse
whatsappBtn.addEventListener("mouseover", () => {
  messageBox.classList.add("active");
});

// Esconder mensagem ao tirar o mouse
whatsappBtn.addEventListener("mouseout", () => {
  messageBox.classList.remove("active");
});

// Exibir mensagem ao clicar no botão
whatsappBtn.addEventListener("click", (event) => {
  messageBox.textContent = "Abrindo o WhatsApp...";
  messageBox.classList.add("active");

  setTimeout(() => {
      messageBox.classList.remove("active");
      window.open(whatsappBtn.href, "_blank");
  }, 1000);
});

// Inicializa a verificação do botão ao carregar a página
toggleWhatsAppButton();



//Sistema do Formulário
document.getElementById("contactForm").addEventListener("submit", function (event) {
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

// Form Submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});



//Sitena do Efeito Fade
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



// Sistema da Inteface do Modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("comment-modal");
  const commentInput = document.getElementById("comment-input");
  const sendCommentBtn = document.getElementById("send-comment");
  const commentMessage = document.getElementById("comment-message");
  const closeModal = document.querySelector(".close");
  
  let currentId = null; // Para armazenar o ID do item que está recebendo o comentário

  // Garante que o modal começa escondido
  modal.style.display = "none";

  // Abre o modal e define o ID do comentário ao clicar no botão
  document.querySelectorAll(".comment-btn").forEach(button => {
      button.addEventListener("click", function () {
          currentId = this.getAttribute("data-id"); // Obtém o ID do post
          modal.style.display = "flex"; // Exibe o modal
      });
  });

  // Fecha o modal ao clicar no "X"
  closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      commentInput.value = ""; // Limpa o campo ao fechar o modal
  });

  // Fecha o modal ao clicar fora do conteúdo
  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
          commentInput.value = ""; // Limpa o campo ao fechar o modal
      }
  });

  // Enviar comentário
  sendCommentBtn.addEventListener("click", () => {
      const comentario = commentInput.value.trim();

      if (comentario) {
          console.log(`Comentário enviado para ${currentId}:`, comentario);
          commentInput.value = ""; // Limpa o campo de comentário
          modal.style.display = "none"; // Fecha o modal

          // Exibe mensagem de confirmação
          commentMessage.classList.add("show");
          setTimeout(() => {
              commentMessage.classList.remove("show");
          }, 2000);
      }
  });
});



//  Sistema de Compartilhamento de Links 
document.addEventListener("DOMContentLoaded", () => {
  // Seletor para todos os botões de compartilhamento
  const shareButtons = document.querySelectorAll('a i.fa-share').forEach(icon => {
    const shareLink = icon.parentElement;
    
    shareLink.addEventListener('click', function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      
      // URL a ser compartilhada (você pode personalizar isso)
      // Pode ser a URL atual ou uma URL específica para o item
      const currentUrl = window.location.href;
      // Alternativa: para compartilhar URLs específicas de cada item
      // const itemUrl = this.getAttribute('data-share-url'); 
      
      // Copia a URL para a área de transferência
      navigator.clipboard.writeText(currentUrl)
        .then(() => {
          // Cria um tooltip temporário para feedback
          const tooltip = document.createElement('span');
          tooltip.textContent = 'Link copiado!';
          tooltip.classList.add('share-tooltip');
          
          // Adiciona o tooltip próximo ao botão
          this.appendChild(tooltip);
          
          // Remove o tooltip após 2 segundos
          setTimeout(() => {
            tooltip.remove();
          }, 2000);
        })
        .catch(err => {
          console.error('Erro ao copiar: ', err);
        });
    });
  });
});



// Interface para os cards de depoimento 

document.addEventListener("DOMContentLoaded", () => {
  // ===== FUNCIONALIDADE DE COMPARTILHAMENTO =====
  document.querySelectorAll('.tm-midia a[href="/"], .share-btn').forEach(shareBtn => {
    shareBtn.innerHTML = '<i class="fas fa-share-alt"></i>'; // Ícone de compartilhamento
    shareBtn.setAttribute('aria-label', 'Compartilhar depoimento');
    shareBtn.setAttribute('role', 'button');
    shareBtn.href = '#';
    
    shareBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Pegar informações do depoimento para compartilhar
      const card = this.closest('.testimonial');
      const nome = card.querySelector('.tm-content h3').textContent;
      const depoimento = card.querySelector('.tm-content p').textContent;
      const urlAtual = window.location.href;
      
      // Texto para compartilhar
      const textoCompartilhamento = `Depoimento de ${nome}: ${depoimento} - Veja mais em: ${urlAtual}`;
      
      // Copiar para área de transferência
      navigator.clipboard.writeText(textoCompartilhamento).then(() => {
        // Feedback visual
        const tooltip = document.createElement('span');
        tooltip.textContent = 'Depoimento copiado!';
        tooltip.classList.add('share-tooltip');
        this.appendChild(tooltip);
        
        setTimeout(() => tooltip.remove(), 2000);
      });
    });
  });
  
  // ===== FUNCIONALIDADE READ MORE =====
  // Corrigido: Seletor mais abrangente para capturar os botões corretamente
  document.querySelectorAll('.read-more-btn, .tm-btns .btn').forEach(readMoreBtn => {
    const card = readMoreBtn.closest('.testimonial');
    const contentArea = card.querySelector('.tm-content p');
    
    // Verificar se o elemento existe para evitar erros
    if (!contentArea) return;
    
    // Adicionar estilo de visibilidade para garantir que o botão esteja visível
    readMoreBtn.style.display = 'block';
    
    // Obter o texto completo do atributo data-full-text ou do conteúdo atual
    let textoCompleto = contentArea.getAttribute('data-full-text') || contentArea.textContent;
    
    // Se não tiver data-full-text, definir agora
    if (!contentArea.getAttribute('data-full-text')) {
      contentArea.setAttribute('data-full-text', textoCompleto);
    }
    
    // Verificar se há necessidade do botão Read More (texto maior que 100 chars)
    // Removemos as aspas do texto para uma comparação mais precisa
    const textoSemAspas = textoCompleto.replace(/["]/g, '');
    
    if (textoSemAspas.length > 100) {
      // Texto resumido com 100 caracteres
      const textoResumido = textoSemAspas.substring(0, 100) + '...';
      
      // Inicialmente mostrar o texto resumido (se ainda não estiver definido como expandido)
      if (!contentArea.hasAttribute('data-is-expanded') || contentArea.getAttribute('data-is-expanded') === 'false') {
        contentArea.textContent = textoResumido;
      }
      
      // Definir estado inicial
      contentArea.setAttribute('data-is-expanded', 'false');
      
      // Adicionar evento de clique para expandir/recolher
      readMoreBtn.addEventListener('click', function() {
        console.log('Botão Read More clicado!'); // Debug
        
        if (contentArea.getAttribute('data-is-expanded') === 'false') {
          // Expandir
          contentArea.textContent = textoCompleto;
          contentArea.setAttribute('data-is-expanded', 'true');
          this.textContent = 'Read Less';
          
          // Animação suave de expansão
          card.style.transition = 'max-height 0.5s ease';
          card.style.maxHeight = '1000px'; // Valor alto para garantir que todo o conteúdo seja exibido
        } else {
          // Recolher
          contentArea.textContent = textoResumido;
          contentArea.setAttribute('data-is-expanded', 'false');
          this.textContent = 'Read More';
          
          // Animação suave de recolhimento
          card.style.maxHeight = '';
        }
      });
    } else {
      // Se o texto for curto, mantenha o botão, mas desative a funcionalidade
      // Em vez de esconder, podemos fazer algo diferente
      readMoreBtn.addEventListener('click', function() {
        alert('Este é o depoimento completo!');
      });
    }
  });
  
  // ===== FUNCIONALIDADE REDES SOCIAIS =====
  document.querySelectorAll('.tm-social a').forEach(socialLink => {
    // Identificar qual rede social baseado no texto ou URL
    const text = socialLink.textContent.trim();
    let icon, socialName;
    
    if (text === 'X' || socialLink.href.includes('x.com')) {
      icon = 'fab fa-x-twitter';
      socialName = 'Twitter/X';
    } else if (text === 'T' || socialLink.href.includes('/t')) {
      icon = 'fab fa-tumblr';
      socialName = 'Tumblr';
    } else if (text === 'F' || socialLink.href.includes('/f')) {
      icon = 'fab fa-facebook-f';
      socialName = 'Facebook';
    }
    
    // Atualizar o link com ícone e acesibilidade
    if (icon) {
      socialLink.innerHTML = `<i class="${icon}"></i>`;
      socialLink.setAttribute('aria-label', socialName);
      socialLink.setAttribute('target', '_blank');
      socialLink.setAttribute('rel', 'noopener noreferrer');
      
      // Adicionar tooltip
      socialLink.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('span');
        tooltip.textContent = `Visite no ${socialName}`;
        tooltip.classList.add('social-tooltip');
        this.appendChild(tooltip);
      });
      
      socialLink.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.social-tooltip');
        if (tooltip) tooltip.remove();
      });
    }
  });
  
  // ===== ANIMAÇÃO DE ENTRADA =====
  // Usar Intersection Observer para detectar quando cards entram na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Para de observar após animar
      }
    });
  }, { threshold: 0.2 }); // 20% do elemento visível
  
  // Observar todos os cards de depoimentos
  document.querySelectorAll('.testimonial.fade-in').forEach(card => {
    observer.observe(card);
  });

  // ===== GARANTIR VISIBILIDADE DO BOTÃO READ MORE =====
  // Adicionar estilos inline para garantir que os botões estão visíveis
  document.querySelectorAll('.read-more-btn, .tm-btns .btn').forEach(btn => {
    btn.style.display = 'inline-block';
    btn.style.visibility = 'visible';
    btn.style.opacity = '1';
    
    // Adicionar uma classe de destaque temporária
    btn.classList.add('highlight-btn');
    setTimeout(() => {
      btn.classList.remove('highlight-btn');
    }, 3000);
  });
});

// Sistema de Dowload do Curriculo
function baixarPDF() {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=1VvptF8I5raMJzeNZv626yXhwtdyf-jIs';
  link.download = 'meu-arquivo.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}