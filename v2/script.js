const preloader = document.getElementById("preloader");
const header = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const cursorGlow = document.getElementById("cursorGlow");
const languageToggle = document.querySelector(".footer-language");

const translations = {
  pt: {
    metaTitle: "Novtek | Solutions and Services",
    metaDescription:
      "A Novtek estrutura soluções e serviços para investimentos, ativos e negócios com inteligência executiva, processos claros e acompanhamento consistente.",
    "nav.features": "Capacidades",
    "nav.about": "Sobre",
    "nav.process": "Processo",
    "nav.deliverables": "Entregas",
    "nav.contact": "Contato",
    "hero.announcement": "Suporte estratégico para investimentos, ativos e decisões de negócio",
    "hero.title": "Clareza de investimento para proprietários e decisores.",
    "hero.lede":
      "A Novtek organiza informações de investimento, acompanha ativos e estrutura análises de oportunidades para que executivos avancem com confiança.",
    "hero.primary": "Fale com a Novtek",
    "hero.secondary": "Explorar capacidades",
    "hero.metric1": "Frentes principais",
    "hero.metric2": "Entregas estruturadas",
    "hero.metric3": "Comunicação executiva",
    "dashboard.title": "Visão do portfólio",
    "dashboard.status": "Ao vivo",
    "dashboard.row1": "Score da oportunidade",
    "dashboard.row2": "Visibilidade de risco",
    "dashboard.row2.value": "Mapeado",
    "dashboard.mini1": "Movimento de capital",
    "dashboard.mini2": "Foco atual",
    "dashboard.mini2.value": "Estrutura de ativos",
    "strip.one": "Mapeamento de ativos",
    "strip.two": "Revisão de oportunidades",
    "strip.three": "Relatórios executivos",
    "strip.four": "Visibilidade de risco",
    "strip.five": "Suporte à decisão",
    "strip.six": "Análise de investimentos",
    "features.label": "Capacidades",
    "features.title": "Tudo para enxergar a decisão antes de assumir o risco.",
    "features.card1.title": "Soluções de investimento",
    "features.card1.copy": "Estruturas, prioridades e leituras para apoiar decisões de alocação com disciplina.",
    "features.card2.title": "Ativos e patrimônio",
    "features.card2.copy":
      "Organização de informações, acompanhamento de ativos e visibilidade sobre pontos críticos.",
    "features.card3.title": "Serviços de negócio",
    "features.card3.copy": "Processos, rotinas e estruturas para empresas que precisam operar com mais controle.",
    "features.card4.title": "Inteligência executiva",
    "features.card4.copy": "Dashboards, indicadores e ritos de acompanhamento para decisões mais objetivas.",
    "about.label": "Sobre a Novtek",
    "about.title": "Menos ruído. Mais estrutura. Conversas melhores.",
    "about.copy":
      "A Novtek atua em momentos em que uma decisão envolve capital, ativos, risco, tempo e muitas partes móveis. Reduzimos a confusão transformando informações dispersas em um sistema executivo organizado.",
    "about.item1": "Clareza sobre ativos e oportunidades",
    "about.item2": "Melhor comparação entre cenários possíveis",
    "about.item3": "Relatórios práticos para executivos e investidores",
    "about.cta": "Ver o processo",
    "process.label": "Processo",
    "process.title": "Um fluxo simples para decisões financeiras complexas.",
    "process.tab1": "Mapear",
    "process.tab2": "Organizar",
    "process.tab3": "Analisar",
    "process.tab4": "Acompanhar",
    "process.panel1.title": "Mapear o contexto da decisão",
    "process.panel1.copy":
      "Identificamos objetivos, responsáveis, ativos, lacunas de informação e decisões que precisam de suporte.",
    "process.panel2.title": "Organizar as informações",
    "process.panel2.copy":
      "Criamos uma estrutura clara para documentos, indicadores, responsabilidades e itens prioritários.",
    "process.panel3.title": "Analisar cenários e riscos",
    "process.panel3.copy":
      "Comparamos possibilidades, destacamos trade-offs e transformamos informação em direção executiva.",
    "process.panel4.title": "Acompanhar a execução",
    "process.panel4.copy":
      "Mantemos a decisão viva com dashboards, rotinas de revisão e visibilidade de acompanhamento.",
    "deliverables.label": "Entregas",
    "deliverables.title": "Análise de investimentos e oportunidades de negócio em operação.",
    "deliverables.copy":
      "Análise estruturada para investimentos, leitura de oportunidades, visibilidade de ativos e execução acompanhada.",
    "deliverables.card1.title": "Análise de investimentos",
    "deliverables.card1.copy":
      "Leituras estruturadas, premissas e materiais de decisão para avaliar alocações e movimentos de capital.",
    "deliverables.card2.title": "Oportunidades de negócio",
    "deliverables.card2.copy":
      "Mapeamento, qualificação e acompanhamento de oportunidades, parcerias e movimentos estratégicos.",
    "deliverables.card3.title": "Ativos e execução",
    "deliverables.card3.copy":
      "Visibilidade de ativos, rotinas, indicadores e fluxos para manter responsabilidades e execução alinhadas.",
    "support.label": "Suporte à decisão",
    "support.title": "Construído para pessoas responsáveis por movimentos importantes.",
    "support.card1.copy":
      "Informação confiável, leitura executiva e acompanhamento disciplinado antes dos movimentos de capital.",
    "support.card1.title": "Decisões de capital",
    "support.card1.meta": "Soluções de investimento",
    "support.card2.copy": "Uma visão comum de ativos, prioridades, responsabilidades e próximos passos.",
    "support.card2.title": "Visibilidade de ativos",
    "support.card2.meta": "Organização e acompanhamento",
    "support.card3.copy":
      "Análise estruturada para parcerias, aquisições, novos negócios e oportunidades estratégicas.",
    "support.card3.title": "Oportunidades de negócio",
    "support.card3.meta": "Revisão de oportunidades",
    "faq.label": "FAQ",
    "faq.title": "Perguntas antes de começar.",
    "faq.q1": "A Novtek é banco ou corretora?",
    "faq.a1":
      "Não. A Novtek atua com inteligência de investimentos, organização de ativos, análise de negócios e suporte executivo à decisão.",
    "faq.q2": "Para quais clientes isso funciona?",
    "faq.a2":
      "Investidores, fundadores, executivos e proprietários de negócios que precisam de estrutura antes de decisões financeiras ou estratégicas.",
    "faq.q3": "A Novtek pode acompanhar ativos continuamente?",
    "faq.a3":
      "Sim. O trabalho pode incluir dashboards recorrentes, rotinas de revisão, relatórios e reuniões de acompanhamento.",
    "contact.label": "Contato",
    "contact.title": "Pronto para organizar a próxima decisão?",
    "contact.copy":
      "Envie uma mensagem e comece com uma visão mais clara dos seus ativos, oportunidades e prioridades.",
    "footer.copy": "Solutions and Services."
  },
  en: {
    metaTitle: "Novtek | Solutions and Services",
    metaDescription:
      "Novtek structures solutions and services for investments, assets and business with executive intelligence, clear processes and consistent monitoring.",
    "nav.features": "Capabilities",
    "nav.about": "About",
    "nav.process": "Process",
    "nav.deliverables": "Deliverables",
    "nav.contact": "Contact",
    "hero.announcement": "Strategic support for investments, assets and business decisions",
    "hero.title": "Investment clarity for owners and decision makers.",
    "hero.lede":
      "Novtek organizes investment information, monitors assets and structures business opportunity analysis so executives can move with confidence.",
    "hero.primary": "Talk to Novtek",
    "hero.secondary": "Explore capabilities",
    "hero.metric1": "Core areas",
    "hero.metric2": "Structured deliverables",
    "hero.metric3": "Executive communication",
    "dashboard.title": "Portfolio Overview",
    "dashboard.status": "Live",
    "dashboard.row1": "Opportunity score",
    "dashboard.row2": "Risk visibility",
    "dashboard.row2.value": "Mapped",
    "dashboard.mini1": "Capital movement",
    "dashboard.mini2": "Current focus",
    "dashboard.mini2.value": "Asset structure",
    "strip.one": "Asset Mapping",
    "strip.two": "Opportunity Review",
    "strip.three": "Executive Reports",
    "strip.four": "Risk Visibility",
    "strip.five": "Decision Support",
    "strip.six": "Investment Analysis",
    "features.label": "Capabilities",
    "features.title": "Everything needed to see the decision before taking the risk.",
    "features.card1.title": "Investment solutions",
    "features.card1.copy": "Structures, priorities and readings that support allocation decisions with discipline.",
    "features.card2.title": "Assets and wealth",
    "features.card2.copy": "Information organization, asset monitoring and visibility over critical points.",
    "features.card3.title": "Business services",
    "features.card3.copy": "Processes, routines and structures for companies that need greater control.",
    "features.card4.title": "Executive intelligence",
    "features.card4.copy": "Dashboards, indicators and monitoring rhythms for more objective decisions.",
    "about.label": "About Novtek",
    "about.title": "Less noise. More structure. Better conversations.",
    "about.copy":
      "Novtek is built for moments when a decision involves capital, assets, risk, timing and many moving parts. We reduce confusion by transforming scattered information into an organized executive system.",
    "about.item1": "Clear asset and opportunity visibility",
    "about.item2": "Better comparison between possible scenarios",
    "about.item3": "Practical reporting for executives and investors",
    "about.cta": "See the process",
    "process.label": "Process",
    "process.title": "A simple flow for complex financial decisions.",
    "process.tab1": "Map",
    "process.tab2": "Organize",
    "process.tab3": "Analyze",
    "process.tab4": "Monitor",
    "process.panel1.title": "Map the decision context",
    "process.panel1.copy":
      "We identify goals, stakeholders, assets, information gaps and the decisions that need support.",
    "process.panel2.title": "Organize the information",
    "process.panel2.copy":
      "We create a clear structure for documents, indicators, responsibilities and priority items.",
    "process.panel3.title": "Analyze scenarios and risks",
    "process.panel3.copy":
      "We compare possibilities, highlight trade-offs and turn information into executive direction.",
    "process.panel4.title": "Monitor the execution",
    "process.panel4.copy": "We keep the decision alive with dashboards, review routines and follow-up visibility.",
    "deliverables.label": "Deliverables",
    "deliverables.title": "Investment analysis and business opportunities in operation.",
    "deliverables.copy":
      "Structured analysis for investments, opportunity review, asset visibility and monitored execution.",
    "deliverables.card1.title": "Investment analysis",
    "deliverables.card1.copy":
      "Structured readings, assumptions and decision materials for evaluating allocations and capital moves.",
    "deliverables.card2.title": "Business opportunities",
    "deliverables.card2.copy":
      "Opportunity mapping, qualification and monitoring for initiatives, partnerships and strategic moves.",
    "deliverables.card3.title": "Assets and execution",
    "deliverables.card3.copy":
      "Asset visibility, routines, indicators and workflows to keep responsibilities and execution aligned.",
    "support.label": "Decision support",
    "support.title": "Built for people responsible for important moves.",
    "support.card1.copy":
      "Reliable information, executive interpretation and disciplined monitoring before capital moves.",
    "support.card1.title": "Capital decisions",
    "support.card1.meta": "Investment solutions",
    "support.card2.copy": "A common view of assets, priorities, responsibilities and next steps.",
    "support.card2.title": "Asset visibility",
    "support.card2.meta": "Organization and monitoring",
    "support.card3.copy":
      "Structured analysis for partnerships, acquisitions, ventures and strategic opportunities.",
    "support.card3.title": "Business opportunities",
    "support.card3.meta": "Opportunity review",
    "faq.label": "FAQ",
    "faq.title": "Questions before starting.",
    "faq.q1": "Is Novtek a bank or broker?",
    "faq.a1":
      "No. Novtek focuses on investment intelligence, asset organization, business analysis and executive decision support.",
    "faq.q2": "What kind of clients is this for?",
    "faq.a2":
      "Investors, founders, executives and business owners who need structure before making financial or strategic decisions.",
    "faq.q3": "Can Novtek monitor assets continuously?",
    "faq.a3": "Yes. The work can include recurring dashboards, review routines, reports and follow-up meetings.",
    "contact.label": "Contact",
    "contact.title": "Ready to organize the next decision?",
    "contact.copy": "Send a message and start with a clearer view of your assets, opportunities and priorities.",
    "footer.copy": "Solutions and Services."
  }
};

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

  document
    .querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]')
    .forEach(meta => meta.setAttribute("content", dictionary.metaDescription));

  document.querySelectorAll("[data-i18n]").forEach(element => {
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

window.addEventListener("load", () => {
  if (preloader) {
    setTimeout(() => preloader.classList.add("hide"), 150);
  }
});

window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
});

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("active");
    document.body.classList.toggle("no-scroll", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      document.body.classList.remove("no-scroll");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (cursorGlow) {
  document.addEventListener("mousemove", event => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

const counters = document.querySelectorAll("[data-count]");
let countersStarted = false;

function startCounters() {
  if (countersStarted) return;

  countersStarted = true;
  counters.forEach(counter => {
    const target = Number(counter.dataset.count);
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 32));

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    }, 28);
  });
}

startCounters();

const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach(item => item.classList.remove("active"));
    tabPanels.forEach(panel => panel.classList.remove("active"));

    tab.classList.add("active");
    const panel = document.getElementById(target);
    if (panel) {
      panel.classList.add("active");
    }
  });
});

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const button = item.querySelector("button");
  if (!button) return;

  button.addEventListener("click", () => {
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) otherItem.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

document.querySelectorAll(".magnetic").forEach(button => {
  button.addEventListener("mousemove", event => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

setLanguage("en");
