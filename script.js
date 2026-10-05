const T = {
  es: {
    "nav.about": "Sobre mí", "nav.work": "Proyectos", "nav.experience": "Experiencia", "nav.contact": "Contacto",
    "hero.eyebrow": "Full Stack Engineer · Ecuador · Remoto",
    "hero.lead": "Construyo productos web y móviles de punta a punta: interfaces en React y React Native, servicios en NestJS sobre AWS Lambda, y las pruebas que los mantienen estables.",
    "hero.cta1": "Ver proyectos", "hero.cta2": "Escríbeme",
    "about.title": "Sobre mí",
    "about.p1": "Tengo 3 años de experiencia en desarrollo web y móvil. Empecé en frontend y móvil (React, React Native, Expo) y hoy trabajo de extremo a extremo en módulos transaccionales de una plataforma financiera.",
    "about.p2": "Me interesa la arquitectura que permite cambiar cosas sin miedo: hexagonal en el backend, microfrontends y design systems en el frontend, y pruebas unitarias, de integración y E2E como parte del trabajo, no como un extra. También uso asistentes de IA en mi flujo diario para maquetar, depurar y generar pruebas.",
    "work.title": "Proyectos",
    "work.note": "Son proyectos de empresas, así que no publico su código. Aquí cuento el problema, qué hice yo y las decisiones técnicas.",
    "l.problem": "Contexto", "l.did": "Qué hice", "l.decision": "Decisiones", "l.stack": "Stack",
    "kaito.title": "Plataforma financiera: Business, Backoffice, PO y Mobile",
    "kaito.problem": "Módulos transaccionales críticos donde la lógica de negocio no podía depender de la infraestructura ni de terceros.",
    "kaito.did": "Diseñé y desplegué microservicios con NestJS y funciones AWS Lambda, con almacenamiento y consulta de registros financieros en DynamoDB. En el frontend construí interfaces modulares y reutilizables con React, Next.js, Tailwind y Material UI, con estado global en Redux.",
    "kaito.decision": "Arquitectura hexagonal para desacoplar negocio, infraestructura y servicios externos. Autenticación con Auth0 y JWT, y seguridad entre servicios con firmas criptográficas y cifrado en headers HTTP. Estrategia de pruebas unitarias, de integración y E2E con Vitest y cobertura alta antes de producción.",
    "helper.title": "HelperEc — app móvil iOS y Android",
    "helper.problem": "App móvil con onboarding, chat en tiempo real, notificaciones push y deeplinks, con módulos desarrollados por otros equipos.",
    "helper.did": "Desarrollé la app con React Native y Expo, Redux y React Query, incluyendo onboarding, chats en tiempo real, push y deeplinks.",
    "helper.decision": "Monorepo para integrar los módulos de otros equipos, y soluciones transversales para mejorar escalabilidad y mantenimiento. Pruebas con Jest, Testing Library y MSW, y flujos E2E con Maestro.",
    "cedepa.title": "Cedepa — ecommerce web",
    "cedepa.problem": "Tienda en línea que necesitaba ser rápida e inclusiva.",
    "cedepa.did": "Desarrollé autenticación, checkout, landing y filtros con Next.js, React Query y Zustand.",
    "cedepa.decision": "Un módulo de caché para mejorar la velocidad percibida, y soporte de accesibilidad para personas no videntes.",
    "oro.title": "App móvil y sistema de diseño",
    "oro.problem": "App móvil para iOS y Android que necesitaba actualizaciones rápidas, monitoreo de errores y una base de UI consistente.",
    "oro.did": "Implementé funcionalidades con React Native y TypeScript, mantuve una biblioteca de componentes en Storybook, integré CodePush, Crashlytics, Sentry, Google Analytics, deeplinks y push, soporté iPad, y revisé PRs del equipo.",
    "exp.title": "Experiencia", "exp.now": "Actualidad",
    "exp.kaito": "Desarrollo E2E de módulos transaccionales: backend serverless, frontend, seguridad y testing.",
    "exp.sofkel": "Apps móviles y web para clientes: HelperEc y Cedepa.",
    "exp.oro": "App móvil, sistema de diseño y calidad de código.",
    "edu.title": "Educación",
    "edu.civil": "Ingeniería Civil — Universidad Técnica Particular de Loja (2017–2022)",
    "edu.platzi": "Escuela de JavaScript — Platzi (2021–2022)",
    "contact.title": "Contacto",
    "contact.p": "¿Hablamos? Respondo por correo."
  },
  en: {
    "nav.about": "About", "nav.work": "Work", "nav.experience": "Experience", "nav.contact": "Contact",
    "hero.eyebrow": "Full Stack Engineer · Ecuador · Remote",
    "hero.lead": "I build web and mobile products end to end: React and React Native interfaces, NestJS services on AWS Lambda, and the tests that keep them stable.",
    "hero.cta1": "See my work", "hero.cta2": "Email me",
    "about.title": "About",
    "about.p1": "I have 3 years of experience in web and mobile development. I started in frontend and mobile (React, React Native, Expo) and now work end to end on transactional modules of a financial platform.",
    "about.p2": "I care about architecture that lets you change things without fear: hexagonal on the backend, microfrontends and design systems on the frontend, and unit, integration and E2E tests as part of the job, not an extra. I also use AI assistants daily to scaffold UI, debug and generate tests.",
    "work.title": "Work",
    "work.note": "These are company projects, so I don't publish their code. Here I explain the problem, what I did and the technical decisions.",
    "l.problem": "Context", "l.did": "What I did", "l.decision": "Decisions", "l.stack": "Stack",
    "kaito.title": "Financial platform: Business, Backoffice, PO and Mobile",
    "kaito.problem": "Critical transactional modules where business logic couldn't depend on infrastructure or third parties.",
    "kaito.did": "Designed and deployed microservices with NestJS and AWS Lambda, storing and querying financial records in DynamoDB. On the frontend I built modular, reusable interfaces with React, Next.js, Tailwind and Material UI, with global state in Redux.",
    "kaito.decision": "Hexagonal architecture to decouple business logic, infrastructure and external services. Auth0 and JWT for authentication, and service-to-service security with cryptographic signatures and encryption in HTTP headers. Unit, integration and E2E tests with Vitest and high coverage before production.",
    "helper.title": "HelperEc — iOS and Android mobile app",
    "helper.problem": "A mobile app with onboarding, real-time chat, push notifications and deep links, with modules built by other teams.",
    "helper.did": "Built the app with React Native and Expo, Redux and React Query, including onboarding, real-time chat, push and deep links.",
    "helper.decision": "A monorepo to integrate other teams' modules, plus cross-cutting solutions for scalability and maintainability. Tested with Jest, Testing Library and MSW, with E2E flows in Maestro.",
    "cedepa.title": "Cedepa — web ecommerce",
    "cedepa.problem": "An online store that needed to be fast and inclusive.",
    "cedepa.did": "Built authentication, checkout, landing pages and filters with Next.js, React Query and Zustand.",
    "cedepa.decision": "A caching module to improve perceived speed, and accessibility support for blind users.",
    "oro.title": "Mobile app and design system",
    "oro.problem": "An iOS and Android app that needed fast updates, error monitoring and a consistent UI foundation.",
    "oro.did": "Shipped features with React Native and TypeScript, maintained a Storybook component library, integrated CodePush, Crashlytics, Sentry, Google Analytics, deep links and push, added iPad support, and reviewed team PRs.",
    "exp.title": "Experience", "exp.now": "Present",
    "exp.kaito": "End-to-end development of transactional modules: serverless backend, frontend, security and testing.",
    "exp.sofkel": "Mobile and web apps for clients: HelperEc and Cedepa.",
    "exp.oro": "Mobile app, design system and code quality.",
    "edu.title": "Education",
    "edu.civil": "Civil Engineering — Universidad Técnica Particular de Loja (2017–2022)",
    "edu.platzi": "JavaScript School — Platzi (2021–2022)",
    "contact.title": "Contact",
    "contact.p": "Let's talk. I answer by email."
  }
};

const safe = (fn) => { try { return fn(); } catch { return null; } };
const root = document.documentElement;
let lang = safe(() => localStorage.getItem("lang")) || (navigator.language || "es").slice(0, 2);
if (!T[lang]) lang = "es";

function render() {
  root.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = T[lang][el.dataset.i18n] ?? ""; });
  document.getElementById("lang").textContent = lang === "es" ? "EN" : "ES";
  safe(() => localStorage.setItem("lang", lang));
}
document.getElementById("lang").addEventListener("click", () => { lang = lang === "es" ? "en" : "es"; render(); });

const savedTheme = safe(() => localStorage.getItem("theme"));
if (savedTheme) root.dataset.theme = savedTheme;
document.getElementById("theme").addEventListener("click", () => {
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  safe(() => localStorage.setItem("theme", root.dataset.theme));
});
render();
