const reveals = document.querySelectorAll(".reveal");
const translations = {
  pt: {
    metaTitle: "Novtek | Solutions and Services",
    metaDescription:
      "A Novtek estrutura soluções e serviços para investimentos, ativos e negócios com inteligência executiva, processos claros e acompanhamento consistente.",
    "cta.primary": "Falar com a Novtek",
    "hero.tagline": "Solutions and Services",
    "hero.title": "Soluções e serviços para investimentos, ativos e negócios.",
    "hero.lede":
      "A Novtek estrutura soluções executivas para decisões de investimento, organização de ativos e desenvolvimento de negócios com clareza, controle e acompanhamento consistente.",
    "panel.metric1.label": "Ativos",
    "panel.metric1.value": "360°",
    "panel.metric2.label": "Capital",
    "panel.metric2.value": "alocado",
    "panel.metric3.label": "Negócios",
    "panel.metric3.value": "em foco",
    "problem.copy":
      "Investimentos, ativos e oportunidades de negócio exigem informação confiável, leitura executiva e rotina de acompanhamento.",
    "problem.title":
      "Quando dados, decisões e responsabilidades ficam dispersos, o capital perde velocidade e clareza.",
    "fronts.label": "Frentes",
    "fronts.title": "Quatro frentes para conectar visão executiva, ativos e execução de negócios.",
    "fronts.card1.title": "Soluções de investimento",
    "fronts.card1.copy": "Estruturas, prioridades e leituras para apoiar decisões de alocação com disciplina.",
    "fronts.card2.title": "Ativos e patrimônio",
    "fronts.card2.copy":
      "Organização de informações, acompanhamento de ativos e visibilidade sobre pontos críticos.",
    "fronts.card3.title": "Serviços de negócio",
    "fronts.card3.copy":
      "Processos, rotinas e estruturas para empresas que precisam operar com mais controle.",
    "fronts.card4.title": "Inteligência executiva",
    "fronts.card4.copy": "Dashboards, indicadores e ritos de acompanhamento para decisões mais objetivas.",
    "method.label": "Método",
    "method.title": "Como a Novtek estrutura uma solução.",
    "method.copy":
      "Um ciclo formal para entender o cenário, organizar a informação e manter a execução acompanhada.",
    "method.step1.title": "Entender",
    "method.step1.copy": "Mapear objetivos, ativos, informações disponíveis e pontos de decisão relevantes.",
    "method.step2.title": "Organizar",
    "method.step2.copy":
      "Estruturar indicadores, responsabilidades, cadência e materiais de acompanhamento.",
    "method.step3.title": "Acompanhar",
    "method.step3.copy": "Monitorar evolução, revisar prioridades e ajustar a execução conforme o contexto.",
    "delivery.label": "Entregas",
    "delivery.title": "O que a Novtek coloca em operação.",
    "delivery.copy":
      "Menos informação dispersa. Mais clareza sobre capital, ativos, responsabilidades e próximos passos.",
    "delivery.card1.title": "Mapa de ativos",
    "delivery.card1.copy":
      "Registros e visões organizadas para acompanhar posições, oportunidades e pontos de atenção.",
    "delivery.card2.title": "Rotina executiva",
    "delivery.card2.copy":
      "Ritos, indicadores e materiais de suporte para manter decisões e execução alinhadas.",
    "delivery.card3.title": "Processos e serviços",
    "delivery.card3.copy":
      "Fluxos de trabalho, checklists e acompanhamento para negócios que exigem precisão.",
    "contact.label": "Contato",
    "contact.title": "Fale com a Novtek.",
    "contact.copy":
      "Para estruturar soluções e serviços voltados a investimentos, ativos e negócios com padrão executivo.",
    "footer.copy": "Solutions and Services."
  },
  en: {
    metaTitle: "Novtek | Solutions and Services",
    metaDescription:
      "Novtek structures solutions and services for investments, assets and business with executive intelligence, clear processes and consistent monitoring.",
    "cta.primary": "Talk to Novtek",
    "hero.tagline": "Solutions and Services",
    "hero.title": "Solutions and services for investments, assets and business.",
    "hero.lede":
      "Novtek structures executive solutions for investment decisions, asset organization and business development with clarity, control and consistent monitoring.",
    "panel.metric1.label": "Assets",
    "panel.metric1.value": "360°",
    "panel.metric2.label": "Capital",
    "panel.metric2.value": "allocated",
    "panel.metric3.label": "Business",
    "panel.metric3.value": "in focus",
    "problem.copy":
      "Investments, assets and business opportunities require reliable information, executive interpretation and a disciplined monitoring routine.",
    "problem.title":
      "When data, decisions and responsibilities are dispersed, capital loses speed and clarity.",
    "fronts.label": "Areas",
    "fronts.title": "Four areas connecting executive vision, assets and business execution.",
    "fronts.card1.title": "Investment solutions",
    "fronts.card1.copy": "Structures, priorities and readings that support allocation decisions with discipline.",
    "fronts.card2.title": "Assets and wealth",
    "fronts.card2.copy": "Information organization, asset monitoring and visibility over critical points.",
    "fronts.card3.title": "Business services",
    "fronts.card3.copy": "Processes, routines and structures for companies that need greater control.",
    "fronts.card4.title": "Executive intelligence",
    "fronts.card4.copy": "Dashboards, indicators and monitoring rhythms for more objective decisions.",
    "method.label": "Method",
    "method.title": "How Novtek structures a solution.",
    "method.copy":
      "A formal cycle to understand the scenario, organize information and keep execution monitored.",
    "method.step1.title": "Understand",
    "method.step1.copy": "Map objectives, assets, available information and relevant decision points.",
    "method.step2.title": "Organize",
    "method.step2.copy": "Structure indicators, responsibilities, cadence and monitoring materials.",
    "method.step3.title": "Monitor",
    "method.step3.copy": "Track progress, review priorities and adjust execution as the context evolves.",
    "delivery.label": "Deliverables",
    "delivery.title": "What Novtek puts into operation.",
    "delivery.copy":
      "Less dispersed information. More clarity over capital, assets, responsibilities and next steps.",
    "delivery.card1.title": "Asset map",
    "delivery.card1.copy": "Organized records and views to monitor positions, opportunities and attention points.",
    "delivery.card2.title": "Executive routine",
    "delivery.card2.copy": "Rhythms, indicators and support materials to keep decisions and execution aligned.",
    "delivery.card3.title": "Processes and services",
    "delivery.card3.copy": "Workflows, checklists and monitoring for businesses that require precision.",
    "contact.label": "Contact",
    "contact.title": "Talk to Novtek.",
    "contact.copy":
      "To structure solutions and services focused on investments, assets and business with an executive standard.",
    "footer.copy": "Solutions and Services."
  }
};

const languageToggle = document.querySelector(".footer-language");
const translatableElements = document.querySelectorAll("[data-i18n]");
let currentLanguage = "en";

function setLanguage(language) {
  const normalizedLanguage = language === "pt" ? "pt" : "en";
  const dictionary = translations[normalizedLanguage];
  currentLanguage = normalizedLanguage;

  document.documentElement.lang = normalizedLanguage === "en" ? "en" : "pt-BR";
  document.title = dictionary.metaTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dictionary.metaDescription);
  }

  translatableElements.forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  if (languageToggle) {
    const isPortuguese = normalizedLanguage === "pt";
    languageToggle.classList.toggle("is-active", isPortuguese);
    languageToggle.setAttribute("aria-pressed", String(isPortuguese));
    languageToggle.setAttribute(
      "aria-label",
      isPortuguese ? "Change language to English" : "Change language to Brazilian Portuguese"
    );
  }
}

function toggleLanguage() {
  setLanguage(currentLanguage === "en" ? "pt" : "en");
}

window.toggleLanguage = toggleLanguage;

setLanguage("en");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  reveals.forEach(element => observer.observe(element));
} else {
  reveals.forEach(element => element.classList.add("is-visible"));
}
