const T = {
  es: {
    skip: "Saltar al contenido",
    "nav.about": "Sobre mí", "nav.work": "Proyectos", "nav.ai": "IA", "nav.experience": "Experiencia", "nav.contact": "Contacto",
    "hero.eyebrow": "Frontend-first Full Stack Engineer · Ecuador · Remoto",
    "hero.lead": "Me dedico a que las interfaces se sientan rápidas, claras y accesibles, en web y móvil. Y como también trabajo el backend, entiendo qué hay detrás de cada pantalla.",
    "hero.cta1": "Ver proyectos", "hero.cta2": "Escríbeme",
    "facts.1": "Web y móvil, con TypeScript", "facts.2": "Storybook y componentes reutilizables",
    "facts.3": "Unitarias, integración, E2E y accesibilidad", "facts.4": "En mi flujo diario, con criterio",
    "about.title": "Sobre mí",
    "about.p1": "Soy más frontend. Empecé en React y React Native y mi trabajo favorito es la experiencia de usuario: sistemas de diseño, estados de carga y error, accesibilidad y rendimiento. Desde sep. 2025 trabajo también de extremo a extremo en módulos transaccionales de una plataforma financiera.",
    "about.p2": "Me interesa la arquitectura que permite cambiar cosas sin miedo: microfrontends y design systems en el frontend, hexagonal en el backend, y pruebas como parte del trabajo y no como un extra.",
    "work.title": "Proyectos",
    "work.note": "La mayoría son proyectos de empresas, así que no publico su código. Cuento el problema, qué hice yo y las decisiones técnicas.",
    "f.all": "Todos", "f.web": "Web", "f.mobile": "Móvil", "f.ai": "IA",
    "l.problem": "Contexto", "l.did": "Qué hice", "l.decision": "Decisiones", "l.stack": "Stack",
    "kaito.title": "Plataforma financiera: Business, Backoffice, PO y Mobile",
    "kaito.problem": "Módulos transaccionales críticos donde la lógica de negocio no podía depender de la infraestructura ni de terceros.",
    "kaito.did": "En el frontend construí interfaces modulares y reutilizables con React, Next.js, Tailwind y Material UI, con estado global en Redux. En el backend diseñé y desplegué microservicios con NestJS y AWS Lambda, con registros financieros en DynamoDB.",
    "kaito.decision": "Arquitectura hexagonal para desacoplar negocio, infraestructura y servicios externos. Auth0 y JWT para autenticación, y firmas criptográficas y cifrado en headers HTTP para la seguridad entre servicios. Pruebas unitarias, de integración y E2E con Vitest y cobertura alta antes de producción.",
    "fin.title": "FinPilot — finanzas familiares (app móvil)",
    "fin.tag": "Proyecto personal · 2026",
    "fin.problem": "Una app para que una familia vea cuánto dinero tiene realmente disponible, no solo el saldo de sus cuentas.",
    "fin.did": "La construí completa con React Native, Expo y TypeScript sobre Supabase: autenticación, hogares con invitación, cuentas, movimientos, agenda de pagos recurrentes, presupuestos, metas y deudas, alertas, recordatorios locales, fotos de comprobantes, sincronización en tiempo real y un modo demostración sin configurar nada.",
    "fin.decision": "Los cálculos (dinero disponible, proyección a 30 días, prioridad de deudas) viven en un motor determinista sin red ni IA, con pruebas propias. La IA solo podría explicar patrones, nunca decidir saldos ni permisos. La privacidad se resuelve en la base de datos con RLS, y la app usa solo la clave anónima.",
    "fin.private": "El repositorio es privado. Con gusto lo muestro y lo recorremos en una entrevista.",
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
    "ai.title": "Desarrollo con IA",
    "ai.p1": "Uso IA todos los días y también la limito. Me ayuda a ir más rápido, pero la responsabilidad del resultado sigue siendo mía.",
    "ai.a.t": "Dónde la uso", "ai.a.p": "Maquetar UI, depurar lógica compleja en TypeScript, generar el borrador de pruebas con Vitest y explorar código que no conozco.",
    "ai.b.t": "Cómo la controlo", "ai.b.p": "Reviso cada cambio como si lo hubiera escrito otra persona, lo ejecuto y lo cubro con pruebas antes de aceptarlo.",
    "ai.c.t": "Dónde no", "ai.c.p": "En FinPilot, la IA no calcula saldos ni decide permisos. Eso es lógica determinista y probada; la IA queda para explicar, no para decidir.",
    "ai.tools": "Herramientas con las que trabajo:",
    "exp.title": "Experiencia", "exp.now": "Actualidad",
    "exp.kaito": "Desarrollo E2E de módulos transaccionales: frontend, backend serverless, seguridad y testing.",
    "exp.sofkel": "Apps móviles y web para clientes: HelperEc y Cedepa.",
    "exp.oro": "App móvil, sistema de diseño y calidad de código.",
    "edu.title": "Educación y formación",
    "edu.civil": "Ingeniería Civil — Universidad Técnica Particular de Loja (2017–2022)",
    "edu.platzi": "Escuela de JavaScript — Platzi (2021–2022)",
    "edu.ai1": "Desarrollo con IA: Programa con Agentes — BIG school / mouredev, 6 h (jun. 2026)",
    "edu.ai2": "Iniciación al Desarrollo con IA — BIG school / mouredev, 4 h (oct. 2026)",
    "contact.title": "Contacto",
    "contact.p": "¿Hablamos? Respondo por correo o LinkedIn."
  },
  en: {
    skip: "Skip to content",
    "nav.about": "About", "nav.work": "Work", "nav.ai": "AI", "nav.experience": "Experience", "nav.contact": "Contact",
    "hero.eyebrow": "Frontend-first Full Stack Engineer · Ecuador · Remote",
    "hero.lead": "I make interfaces feel fast, clear and accessible, on web and mobile. I also work on the backend, so I understand what's behind every screen.",
    "hero.cta1": "See my work", "hero.cta2": "Email me",
    "facts.1": "Web and mobile, with TypeScript", "facts.2": "Storybook and reusable components",
    "facts.3": "Unit, integration, E2E and accessibility", "facts.4": "In my daily workflow, with judgment",
    "about.title": "About",
    "about.p1": "I lean frontend. I started with React and React Native, and my favorite work is user experience: design systems, loading and error states, accessibility and performance. Since Sep 2025 I also work end to end on transactional modules of a financial platform.",
    "about.p2": "I care about architecture that lets you change things without fear: microfrontends and design systems on the frontend, hexagonal on the backend, and tests as part of the job, not an extra.",
    "work.title": "Work",
    "work.note": "Most of these are company projects, so I don't publish their code. I explain the problem, what I did and the technical decisions.",
    "f.all": "All", "f.web": "Web", "f.mobile": "Mobile", "f.ai": "AI",
    "l.problem": "Context", "l.did": "What I did", "l.decision": "Decisions", "l.stack": "Stack",
    "kaito.title": "Financial platform: Business, Backoffice, PO and Mobile",
    "kaito.problem": "Critical transactional modules where business logic couldn't depend on infrastructure or third parties.",
    "kaito.did": "On the frontend I built modular, reusable interfaces with React, Next.js, Tailwind and Material UI, with global state in Redux. On the backend I designed and deployed microservices with NestJS and AWS Lambda, storing financial records in DynamoDB.",
    "kaito.decision": "Hexagonal architecture to decouple business logic, infrastructure and external services. Auth0 and JWT for authentication, and cryptographic signatures and encryption in HTTP headers for service-to-service security. Unit, integration and E2E tests with Vitest and high coverage before production.",
    "fin.title": "FinPilot — family finances (mobile app)",
    "fin.tag": "Personal project · 2026",
    "fin.problem": "An app that shows a family how much money they really have available, not just their account balances.",
    "fin.did": "I built it end to end with React Native, Expo and TypeScript on Supabase: authentication, households with invite codes, accounts, transactions, a recurring-payments agenda, budgets, goals and debts, alerts, local reminders, receipt photos, realtime sync and a demo mode that needs no setup.",
    "fin.decision": "The math (available money, 30-day projection, debt priority) lives in a deterministic engine with no network or AI, with its own tests. AI could only explain patterns, never decide balances or permissions. Privacy is enforced in the database with RLS, and the app only uses the anon key.",
    "fin.private": "The repository is private. I'm happy to walk through it in an interview.",
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
    "ai.title": "AI-assisted development",
    "ai.p1": "I use AI every day, and I also set limits on it. It helps me move faster, but I stay responsible for the result.",
    "ai.a.t": "Where I use it", "ai.a.p": "Scaffolding UI, debugging complex TypeScript logic, drafting Vitest tests and exploring code I don't know.",
    "ai.b.t": "How I keep control", "ai.b.p": "I review every change as if someone else wrote it, run it, and cover it with tests before accepting it.",
    "ai.c.t": "Where I don't", "ai.c.p": "In FinPilot, AI doesn't compute balances or decide permissions. That's deterministic, tested logic; AI is for explaining, not deciding.",
    "ai.tools": "Tools I work with:",
    "exp.title": "Experience", "exp.now": "Present",
    "exp.kaito": "End-to-end development of transactional modules: frontend, serverless backend, security and testing.",
    "exp.sofkel": "Mobile and web apps for clients: HelperEc and Cedepa.",
    "exp.oro": "Mobile app, design system and code quality.",
    "edu.title": "Education and training",
    "edu.civil": "Civil Engineering — Universidad Técnica Particular de Loja (2017–2022)",
    "edu.platzi": "JavaScript School — Platzi (2021–2022)",
    "edu.ai1": "AI Development: Programming with Agents — BIG school / mouredev, 6 h (Jun 2026)",
    "edu.ai2": "Introduction to AI Development — BIG school / mouredev, 4 h (Oct 2026)",
    "contact.title": "Contact",
    "contact.p": "Let's talk. I answer by email or LinkedIn."
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

// Project filter
const filters = document.querySelectorAll(".f");
filters.forEach((btn) => btn.addEventListener("click", () => {
  filters.forEach((b) => { b.classList.toggle("on", b === btn); b.setAttribute("aria-pressed", String(b === btn)); });
  document.querySelectorAll(".card").forEach((card) => {
    card.hidden = btn.dataset.f !== "all" && !card.dataset.kind.split(" ").includes(btn.dataset.f);
  });
}));
filters.forEach((b) => b.setAttribute("aria-pressed", String(b.classList.contains("on"))));

// Reveal on scroll + active nav (both skipped when motion is reduced or unsupported)
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduce) {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}
if ("IntersectionObserver" in window) {
  const links = [...document.querySelectorAll(".top nav a")];
  const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
}
render();
