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
    "nav-about": "Sobre Mí",
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
    "hero-btn-cv": "Descargar CV",

    // About
    "about-tag": "// 01 — Experiencia",
    "about-title": "Sobre Mí",
    "about-summary": "QA Analyst con más de 3+ años de experiencia en aseguramiento de calidad para aplicaciones empresariales en sectores diversos (e-commerce, fintech, legal, retail, salud y ciberseguridad). Especializado en testing manual, automatizado y de APIs con Playwright, Postman y Swagger. Experiencia validando aplicaciones web modernas, flujos de negocio complejos y sistemas transaccionales en ambientes Azure Cloud con pipelines CI/CD, bajo metodologías ágiles (Scrum, Kanban). Historial comprobado colaborando con equipos de desarrollo y producto para garantizar releases estables y de alta calidad en proyectos de alto impacto.",
    "about-stat-exp": "Años de Experiencia",
    "about-stat-sectors": "Sectores",
    "about-stat-projects": "Proyectos",
    "timeline-1-date": "2023 — Presente",
    "timeline-1-title": "QA Engineer",
    "timeline-1-company": "Proyectos Freelance & Contratos",
    "timeline-1-desc": "Automatización de pruebas con Playwright y Cypress, testing de APIs con Postman y Swagger, gestión de bugs en Jira. Flujos CI/CD en Azure y Jenkins.",
    "timeline-2-date": "2022 — 2023",
    "timeline-2-title": "QA Analyst",
    "timeline-2-company": "E-Commerce & Retail",
    "timeline-2-desc": "Validación de flujos de compra, pagos y catálogos. Pruebas de regresión y smoke testing en ciclos ágiles con Scrum.",
    "timeline-3-date": "2021 — 2022",
    "timeline-3-title": "Junior QA Tester",
    "timeline-3-company": "Salud & Ciberseguridad",
    "timeline-3-desc": "Ejecución de casos de prueba manuales, documentación de bugs en Jira, pruebas exploratorias en aplicaciones móviles y web.",

    // Services
    "services-tag": "// 02 — Especialidades",
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
    "service-automation-title": "Automatización & CI/CD",
    "service-automation-desc": "Diseño y ejecución de automatización con Playwright, Cypress, Robot Framework, Selenium y pipelines CI/CD en Azure, Jenkins y Docker.",
    "service-jira-title": "Gestión con Jira",
    "service-jira-desc": "Manejo experto de Jira para seguimiento de bugs, gestión de sprints, reportes de calidad y comunicación efectiva del estado de los proyectos.",

    // Offer
    "offer-tag": "// 03 — Propuesta de Valor",
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
    "skills-tag": "// 04 — Skills & Tools",
    "skills-title": "Habilidades",
    "skill-manual": "Pruebas Manuales & Exploratorias",
    "skill-automation": "Playwright / Cypress / Robot Framework",
    "skill-api": "API Testing / REST Assured / Postman",
    "skill-jira": "Jira / X-Ray / Gestión de Bugs",
    "skill-gherkin": "Gherkin / BDD",
    "skill-regression": "Pruebas de Regresión & E2E",
    "skill-cloud": "Azure / CI-CD / Jenkins / Docker",
    "skill-security": "Ciberseguridad & Riesgos",
    "skill-js": "JavaScript / TypeScript / SPA",
    "skill-ai": "Uso de IA para QA",
    "skill-scrum": "Scrum / Kanban",
    "cert-title": "Google Cybersecurity",
    "cert-desc": "Certificación Profesional de Google en Ciberseguridad — fundamentos de seguridad, redes, sistemas, Python para automatización y respuesta a incidentes.",
    "cert-verified": "✓ Certificado Verificado",
    "cert-link": "Ver certificado",

    // Projects
    "projects-tag": "// 05 — Portfolio",
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
    "contact-tag": "// 06 — Get In Touch",
    "contact-title": "Contacto",
    "contact-intro": "¿Tienes un proyecto en mente o quieres trabajar juntos? Conectemos.",
    "contact-email-title": "Email",
    "contact-whatsapp-title": "WhatsApp",
    "contact-linkedin-title": "LinkedIn"
  },
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-about": "About Me",
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
    "hero-btn-cv": "Download CV",

    // About
    "about-tag": "// 01 — Experience",
    "about-title": "About Me",
    "about-summary": "QA Analyst with 3+ years of experience in quality assurance for enterprise applications across diverse sectors (e-commerce, fintech, legal, retail, health, and cybersecurity). Specialized in manual, automated, and API testing with Playwright, Postman, and Swagger. Experience validating modern web applications, complex business flows, and transactional systems in Azure Cloud environments with CI/CD pipelines, under agile methodologies (Scrum, Kanban). Proven track record collaborating with development and product teams to deliver stable, high-quality releases in high-impact projects.",
    "about-stat-exp": "Years of Experience",
    "about-stat-sectors": "Sectors",
    "about-stat-projects": "Projects",
    "timeline-1-date": "2023 — Present",
    "timeline-1-title": "QA Engineer",
    "timeline-1-company": "Freelance & Contract Projects",
    "timeline-1-desc": "Test automation with Playwright and Cypress, API testing with Postman and Swagger, bug tracking in Jira. CI/CD pipelines in Azure and Jenkins.",
    "timeline-2-date": "2022 — 2023",
    "timeline-2-title": "QA Analyst",
    "timeline-2-company": "E-Commerce & Retail",
    "timeline-2-desc": "Validation of purchase flows, payments, and catalogs. Regression and smoke testing in agile cycles with Scrum.",
    "timeline-3-date": "2021 — 2022",
    "timeline-3-title": "Junior QA Tester",
    "timeline-3-company": "Health & Cybersecurity",
    "timeline-3-desc": "Manual test case execution, bug documentation in Jira, exploratory testing on mobile and web applications.",

    // Services
    "services-tag": "// 02 — Specialties",
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
    "service-automation-title": "Automation & CI/CD",
    "service-automation-desc": "Design and execution of automation with Playwright, Cypress, Robot Framework, Selenium and CI/CD pipelines in Azure, Jenkins and Docker.",
    "service-jira-title": "Jira Management",
    "service-jira-desc": "Expert handling of Jira for bug tracking, sprint management, quality reports, and effective project status communication.",

    // Offer
    "offer-tag": "// 03 — Value Proposition",
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
    "skills-tag": "// 04 — Skills & Tools",
    "skills-title": "Skills",
    "skill-manual": "Manual & Exploratory Testing",
    "skill-automation": "Playwright / Cypress / Robot Framework",
    "skill-api": "API Testing / REST Assured / Postman",
    "skill-jira": "Jira / X-Ray / Bug Management",
    "skill-gherkin": "Gherkin / BDD",
    "skill-regression": "Regression & E2E Testing",
    "skill-cloud": "Azure / CI-CD / Jenkins / Docker",
    "skill-security": "Cybersecurity & Risk",
    "skill-js": "JavaScript / TypeScript / SPA",
    "skill-ai": "AI Use for QA",
    "skill-scrum": "Scrum / Kanban",
    "cert-title": "Google Cybersecurity",
    "cert-desc": "Google Cybersecurity Professional Certification — security fundamentals, networks, systems, Python for automation and incident response.",
    "cert-verified": "✓ Verified Certificate",
    "cert-link": "View certificate",

    // Projects
    "projects-tag": "// 05 — Portfolio",
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
    "contact-tag": "// 06 — Get In Touch",
    "contact-title": "Contact",
    "contact-intro": "Got a project in mind or want to work together? Let's connect.",
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

  // Hide loader after page loads
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
    }
  }, 1800);
});
