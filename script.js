// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// Skill bars
const skillBars = document.querySelectorAll('.skill-bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const pct = entry.target.getAttribute('data-pct');
      entry.target.style.width = pct + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => barObserver.observe(bar));

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--white)' : '';
  });
});

// Language translations
const translations = {
  es: {
    // Navigation
    "nav-home": "Inicio",
    "nav-services": "Qué Hago",
    "nav-offer": "Qué Ofrezco",
    "nav-skills": "Habilidades",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",
    "nav-status": "disponible para proyectos",

    // Hero
    "hero-tag": "Quality Assurance Engineer",
    "hero-title-1": "Garantizo",
    "hero-title-2": "Calidad",
    "hero-title-3": "del Software",
    "hero-subtitle": "Tecnólogo en Análisis y Desarrollo de Software con 2 años de experiencia asegurando que cada producto que llega al usuario final sea robusto, funcional y sin errores críticos.",
    "hero-btn-projects": "Ver Proyectos →",
    "hero-btn-skills": "Mis Habilidades",

    // Stats
    "stat-exp": "Años de Exp.",
    "stat-projects": "Proyectos",
    "stat-cert": "Certificación",

    // Services
    "services-tag": "// 01 — Especialidades",
    "services-title": "Qué Hago",
    "service-manual-title": "Pruebas Manuales",
    "service-manual-desc": "Ejecución exhaustiva de casos de prueba de forma manual, identificando bugs y comportamientos inesperados antes de que impacten a usuarios reales.",
    "service-smoke-title": "Pruebas de Humo",
    "service-smoke-desc": "Validación rápida de las funcionalidades críticas de cada build o despliegue, asegurando que el producto es estable antes de pruebas más profundas.",
    "service-regression-title": "Pruebas de Regresión",
    "service-regression-desc": "Ejecución sistemática de ciclos de regresión completos con sus test de ejecución, garantizando que nuevas funcionalidades no rompen las existentes.",
    "service-api-title": "Pruebas de API",
    "service-api-desc": "Testing completo de APIs REST con Postman y Swagger: validación de endpoints, respuestas, autenticación, y manejo de errores en cada integración.",
    "service-gherkin-title": "Escenarios Gherkin",
    "service-gherkin-desc": "Diseño y montaje de escenarios de prueba en lenguaje Gherkin (BDD), haciendo la documentación legible para equipos técnicos y de negocio.",
    "service-jira-title": "Gestión con Jira",
    "service-jira-desc": "Manejo experto de Jira para seguimiento de bugs, gestión de sprints, reportes de calidad y comunicación efectiva del estado de los proyectos.",

    // Offer
    "offer-tag": "// 02 — Propuesta de Valor",
    "offer-title": "Qué Ofrezco",
    "offer-1-title": "Cobertura Total de Calidad",
    "offer-1-desc": "Gestión completa del ciclo QA: desde el análisis de requerimientos hasta el cierre de bugs y validación en producción.",
    "offer-2-title": "Multi-Proyecto Simultáneo",
    "offer-2-desc": "Capacidad demostrada de manejar varios proyectos en paralelo sin comprometer la calidad ni los tiempos de entrega.",
    "offer-3-title": "Perspectiva de Ciberseguridad",
    "offer-3-desc": "Certificación profesional de Google en Ciberseguridad aplicada a las pruebas, identificando vulnerabilidades y riesgos de seguridad.",
    "offer-4-title": "Documentación Clara",
    "offer-4-desc": "Entrega de reportes, planes de prueba y evidencias organizadas que facilitan la trazabilidad y la toma de decisiones.",
    "offer-5-title": "Integración BDD",
    "offer-5-desc": "Escritura de criterios de aceptación en Gherkin que conectan al equipo de negocio con el equipo técnico desde el inicio.",
    "offer-6-title": "Mejora Continua",
    "offer-6-desc": "Análisis de métricas de calidad para identificar patrones de fallo y proponer mejoras en procesos de desarrollo.",

    // Skills
    "skills-tag": "// 03 — Skills & Tools",
    "skills-title": "Habilidades",
    "skill-manual": "Pruebas Manuales",
    "skill-jira": "Jira",
    "skill-gherkin": "Gherkin / BDD",
    "skill-postman": "Postman & Swagger",
    "skill-regression": "Pruebas de Regresión",
    "skill-security": "Ciberseguridad",
    "skill-ai": "Uso de la IA",
    "skill-scrum": "Metodologías Scrum",
    "cert-title": "Google Cybersecurity",
    "cert-desc": "Certificación Profesional de Google en Ciberseguridad — fundamentos de seguridad, redes, sistemas, Python para automatización y respuesta a incidentes.",
    "cert-verified": "✓ Certificado Verificado",

    // Projects
    "projects-tag": "// 04 — Portfolio",
    "projects-title": "Proyectos",
    "project-1-type": "Web & App — Delivery",
    "project-1-desc": "Plataforma de pedidos de comida similar a Rappi, disponible en web y app móvil. Gestión de QA para flujos de pedido, pagos, tracking en tiempo real y notificaciones.",
    "project-2-type": "App Móvil — Salud",
    "project-2-desc": "Aplicación de bienestar que recomienda videos diarios personalizados para salud mental y física. QA enfocado en recomendaciones, reproducción de contenido y flujos de usuario.",
    "project-3-type": "Web — E-Commerce",
    "project-3-desc": "Tienda virtual venezolana de comercio electrónico con amplio catálogo de productos. Validación de carrito, pagos, inventario y experiencia de compra completa.",
    "project-4-type": "Web — Gestión Vehicular",
    "project-4-desc": "Plataforma web para gestión de daños vehiculares, trámites y procesos administrativos del sector automotriz. QA de flujos complejos de gestión y reportes.",
    "project-5-type": "Web — Ciberseguridad",
    "project-5-desc": "Plataforma de ciberseguridad especializada en la atención y gestión de ataques cibernéticos. QA con enfoque en seguridad, integridad de datos y disponibilidad del sistema.",

    // Tags
    "tag-manual": "Pruebas Manuales",
    "tag-api": "API Testing",
    "tag-regression": "Regresión",
    "tag-jira": "Jira",
    "tag-smoke": "Smoke Testing",
    "tag-gherkin": "Gherkin",
    "tag-mobile": "Mobile QA",
    "tag-ecommerce": "E-Commerce QA",
    "tag-rest": "API Rest",
    "tag-bdd": "BDD",
    "tag-postman": "Postman",
    "tag-functional": "Pruebas Funcionales",
    "tag-swagger": "Swagger",
    "tag-security": "Security Testing",
    "tag-api-security": "API Security",

    // Contact
    "contact-tag": "// 05 — Get In Touch",
    "contact-title": "Contacto",
    "contact-intro": "¿Tienes un proyecto en mente o quieres trabajar juntos? Me encantaría escucharte. Contáctame a través de cualquiera de estos canales:",
    "contact-email-title": "Email",
    "contact-whatsapp-title": "WhatsApp",
    "contact-linkedin-title": "LinkedIn"
  },
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-services": "What I Do",
    "nav-offer": "What I Offer",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "nav-status": "available for projects",

    // Hero
    "hero-tag": "Quality Assurance Engineer",
    "hero-title-1": "I Guarantee",
    "hero-title-2": "Quality",
    "hero-title-3": "of Software",
    "hero-subtitle": "Software Analysis and Development Technologist with 2 years of experience ensuring that every product reaching the end user is robust, functional, and free of critical errors.",
    "hero-btn-projects": "View Projects →",
    "hero-btn-skills": "My Skills",

    // Stats
    "stat-exp": "Years Exp.",
    "stat-projects": "Projects",
    "stat-cert": "Certification",

    // Services
    "services-tag": "// 01 — Specialties",
    "services-title": "What I Do",
    "service-manual-title": "Manual Testing",
    "service-manual-desc": "Thorough execution of test cases manually, identifying bugs and unexpected behaviors before they impact real users.",
    "service-smoke-title": "Smoke Testing",
    "service-smoke-desc": "Quick validation of critical functionalities in each build or deployment, ensuring the product is stable before deeper testing.",
    "service-regression-title": "Regression Testing",
    "service-regression-desc": "Systematic execution of complete regression cycles with execution tests, guaranteeing that new functionalities don't break existing ones.",
    "service-api-title": "API Testing",
    "service-api-desc": "Complete REST API testing with Postman and Swagger: endpoint validation, responses, authentication, and error handling in each integration.",
    "service-gherkin-title": "Gherkin Scenarios",
    "service-gherkin-desc": "Design and assembly of test scenarios in Gherkin language (BDD), making documentation readable for technical and business teams.",
    "service-jira-title": "Jira Management",
    "service-jira-desc": "Expert handling of Jira for bug tracking, sprint management, quality reports, and effective project status communication.",

    // Offer
    "offer-tag": "// 02 — Value Proposition",
    "offer-title": "What I Offer",
    "offer-1-title": "Total Quality Coverage",
    "offer-1-desc": "Complete QA cycle management: from requirements analysis to bug closure and production validation.",
    "offer-2-title": "Multi-Project Simultaneous",
    "offer-2-desc": "Demonstrated ability to handle multiple projects in parallel without compromising quality or delivery times.",
    "offer-3-title": "Cybersecurity Perspective",
    "offer-3-desc": "Google Cybersecurity Professional Certification applied to testing, identifying security vulnerabilities and risks.",
    "offer-4-title": "Clear Documentation",
    "offer-4-desc": "Delivery of organized reports, test plans, and evidence that facilitate traceability and decision-making.",
    "offer-5-title": "BDD Integration",
    "offer-5-desc": "Writing acceptance criteria in Gherkin that connect the business team with the technical team from the beginning.",
    "offer-6-title": "Continuous Improvement",
    "offer-6-desc": "Quality metrics analysis to identify failure patterns and propose process improvements.",

    // Skills
    "skills-tag": "// 03 — Skills & Tools",
    "skills-title": "Skills",
    "skill-manual": "Manual Testing",
    "skill-jira": "Jira",
    "skill-gherkin": "Gherkin / BDD",
    "skill-postman": "Postman & Swagger",
    "skill-regression": "Regression Testing",
    "skill-security": "Cybersecurity",
    "skill-ai": "AI Usage",
    "skill-scrum": "Scrum Methodologies",
    "cert-title": "Google Cybersecurity",
    "cert-desc": "Google Cybersecurity Professional Certification — security fundamentals, networks, systems, Python for automation and incident response.",
    "cert-verified": "✓ Verified Certificate",

    // Projects
    "projects-tag": "// 04 — Portfolio",
    "projects-title": "Projects",
    "project-1-type": "Web & App — Delivery",
    "project-1-desc": "Food ordering platform similar to Rappi, available on web and mobile app. QA management for order flows, payments, real-time tracking, and notifications.",
    "project-2-type": "Mobile App — Health",
    "project-2-desc": "Wellness application that recommends personalized daily videos for mental and physical health. QA focused on recommendations, content playback, and user flows.",
    "project-3-type": "Web — E-Commerce",
    "project-3-desc": "Venezuelan virtual store for e-commerce with wide product catalog. Cart validation, payments, inventory, and complete shopping experience.",
    "project-4-type": "Web — Vehicle Management",
    "project-4-desc": "Web platform for vehicle damage management, procedures, and administrative processes in the automotive sector. QA of complex management and reporting flows.",
    "project-5-type": "Web — Cybersecurity",
    "project-5-desc": "Specialized cybersecurity platform for attention and management of cyber attacks. QA with focus on security, data integrity, and system availability.",

    // Tags
    "tag-manual": "Manual Testing",
    "tag-api": "API Testing",
    "tag-regression": "Regression",
    "tag-jira": "Jira",
    "tag-smoke": "Smoke Testing",
    "tag-gherkin": "Gherkin",
    "tag-mobile": "Mobile QA",
    "tag-ecommerce": "E-Commerce QA",
    "tag-rest": "API Rest",
    "tag-bdd": "BDD",
    "tag-postman": "Postman",
    "tag-functional": "Functional Testing",
    "tag-swagger": "Swagger",
    "tag-security": "Security Testing",
    "tag-api-security": "API Security",

    // Contact
    "contact-tag": "// 05 — Get In Touch",
    "contact-title": "Contact",
    "contact-intro": "Do you have a project in mind or want to work together? I'd love to hear from you. Contact me through any of these channels:",
    "contact-email-title": "Email",
    "contact-whatsapp-title": "WhatsApp",
    "contact-linkedin-title": "LinkedIn"
  }
};

// Language switching functionality
let currentLang = localStorage.getItem('language') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all elements with data-lang-key
  const elements = document.querySelectorAll('[data-lang-key]');
  elements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

  // Update page title
  const titleKey = lang === 'es' ? 'QA Engineer — Portfolio' : 'QA Engineer — Portfolio';
  document.title = titleKey;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  // Add click event listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
