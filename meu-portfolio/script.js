// =============================================
// TRADUÇÕES — PT, EN, ES
//
// Cada chave aqui corresponde a um data-i18n
// no HTML. Pra adicionar texto novo, coloca no HTML
// com data-i18n="nome_da_chave" e adiciona aqui
// nos três idiomas. Simples assim.
// =============================================

const translations = {

  pt: {
    // Nav
    nav_about:    "Sobre",
    nav_skills:   "Skills",
    nav_projects: "Projetos",
    nav_exp:      "Experiência",
    nav_contact:  "Contato",

    // Hero
    hero_available:    "Disponível para oportunidades",
    hero_tagline:      `Construo <strong>interfaces que não só funcionam</strong>, mas ajudam a entender dados e tomar melhores decisões. Front-end com visão de produto, análise de dados e experiência real com usuário.`,
    hero_cta_projects: "Ver projetos →",
    hero_cta_contact:  "Entrar em contato",
    stat_areas:        "Áreas de atuação",
    stat_sql:          "Nível avançado",
    stat_es:           "Espanhol avançado",

    // Sobre
    about_label: "Sobre mim",
    about_title: `Um dev que entende<br><em>de dados e de gente</em>`,
    about_p1:    `Sou desenvolvedor front-end com um perfil que foge do padrão: além de escrever código, gosto de entender <strong>por que aquilo faz sentido para o usuário</strong> e o que os dados dizem sobre quem usa o produto.`,
    about_p2:    `Essa combinação surgiu naturalmente — trabalhei com atendimento ao cliente, ensinei programação pra crianças e adolescentes, criei uma atlética do zero, e em paralelo fui aprendendo React, SQL e Power BI. Cada experiência me ensinou algo sobre produto, lógica e pessoas.`,
    about_p3:    `Hoje me vejo como um <strong>desenvolvedor com visão de produto</strong>: consigo tanto implementar uma feature quanto questionar se ela faz sentido pra quem vai usar.`,
    card_atletica_title: "Criou uma atlética do zero",
    card_atletica_desc:  "Liderança, gestão de pessoas e eventos — projeto real com impacto real.",
    card_kodland_title:  "Instrutor de programação",
    card_kodland_desc:   "Ensinar é a melhor forma de aprender. Comunicação técnica e didática apurada.",
    card_es_title:       "Espanhol avançado",
    card_es_desc:        "Diferencial real para empresas com atuação na América Latina ou no exterior.",

    // Skills
    skills_label:  "Stack técnica",
    skills_title:  `O que eu <em>sei fazer</em>`,
    sg_frontend:   "Front-end",
    sg_data:       "Dados & BI",
    sg_backend:    "Back-end",
    sg_soft:       "Soft Skills",
    tag_sql_adv:   "SQL avançado",
    tag_modeling:  "Modelagem",
    tag_analysis:  "Análise de dados",
    tag_structuring:"Estruturação de dados",
    soft_comm:     "Comunicação clara",
    soft_problem:  "Resolução de problemas",
    soft_learn:    "Aprendizagem rápida",
    soft_analytical:"Pensamento analítico",
    soft_team:     "Trabalho em equipe",
    soft_proactive:"Proatividade",
    soft_user:     "Foco no usuário",
    soft_product:  "Visão de produto",

    // Projetos
    proj_label:        "Portfólio",
    proj_title:        `O que já <em>construí</em>`,
    badge_highlight:   "⭐ Destaque",
    badge_data:        "Dados",
    badge_soon:        "Em breve",
    proj_link_linkedin:"Ver no LinkedIn →",
    proj1_title:       "Dashboard de Emoções",
    proj1_desc:        `Interface React para visualizar dados emocionais ao longo do tempo. Filtros por emoção e período, gráfico com gradiente customizado e visual dark moderno. Um projeto que une front-end, dados e UX numa entrega só — e foi onde eu vi de perto o quanto design e dado precisam conversar.`,
    proj2_subtitle:    "Análise de dados",
    proj2_desc:        `Sistema com foco em estruturação e análise de dados. Modelagem de informações, SQL e geração de insights reais. É o projeto que mostra que consigo ir além do front-end e pensar em dados com consistência.`,
    proj3_title:       "Fullstack + API",
    proj3_desc:        `Próximo passo: aplicação com React no front, Python no back e consumo de API externa. Não é só pra mostrar que sei fazer — é pra fechar o ciclo e entregar de ponta a ponta.`,

    // Experiência
    exp_label:    "Trajetória",
    exp_title:    `De onde <em>vim</em>`,
    exp_present:  "presente",
    exp_previous: "Anterior",
    exp1_role:    "Instrutor de Programação Freelancer",
    exp1_li1:     "Ensinei lógica de programação, HTML, CSS e Python pra alunos de 8 a 17 anos",
    exp1_li2:     "Aprendi que explicar bem é tão difícil quanto escrever bem — e tão importante",
    exp1_li3:     "Adaptei linguagem e abordagem conforme o perfil de cada aluno",
    exp1_li4:     "A interface mais importante que já precisei otimizar foi a mente humana",
    exp2_role:    "Fundador",
    exp2_company: "Atlética (criada do zero)",
    exp2_li1:     "Montei a estrutura do zero: time, estatuto, eventos e operação",
    exp2_li2:     "Tomei decisões com impacto real em pessoas reais — isso é diferente de qualquer exercício",
    exp2_li3:     "Aprendi a organizar fluxo, comunicar internamente e resolver problema no susto",
    exp2_li4:     "Experiência de liderança que a maioria dos juniors não tem no currículo",
    exp3_role:    "Atendimento ao Cliente",
    exp3_others:  "outros",
    exp3_li1:     "Atendimento direto ao cliente em ambiente de alta demanda e pouco tempo",
    exp3_li2:     "Aprendi a ler o que o cliente quer antes de ele terminar de falar",
    exp3_li3:     "Operação sob pressão com foco em resolver, não em explicar por que não deu",
    exp3_li4:     "Foi aqui que nasceu minha obsessão com experiência do usuário",
    diff1_title:  "Visão de produto",
    diff1_desc:   "Entendo o negócio por trás do código",
    diff2_title:  "SQL avançado",
    diff2_desc:   "Combo raro: dev que também analisa dados",
    diff3_title:  "Espanhol avançado",
    diff3_desc:   "Diferencial real pra empresas internacionais",
    diff4_title:  "IA no workflow",
    diff4_desc:   "Uso prático e produtivo todo dia",

    // Contato
    contact_label: "Contato",
    contact_title: `Bora <em>conversar?</em>`,
    contact_sub:   "Aberto a estágios, freelas e oportunidades júnior.<br>Me manda uma mensagem — respondo rápido.",
  },

  // ─────────────────────────────────────────────
  en: {
    nav_about:    "About",
    nav_skills:   "Skills",
    nav_projects: "Projects",
    nav_exp:      "Experience",
    nav_contact:  "Contact",

    hero_available:    "Open to opportunities",
    hero_tagline:      `I build <strong>interfaces that don't just work</strong>, they help people understand data and make better decisions. Front-end developer with a product mindset, data analysis skills, and real user experience.`,
    hero_cta_projects: "See projects →",
    hero_cta_contact:  "Get in touch",
    stat_areas:        "Areas of expertise",
    stat_sql:          "Advanced level",
    stat_es:           "Advanced Spanish",

    about_label: "About me",
    about_title: `A dev who gets<br><em>data and people</em>`,
    about_p1:    `I'm a front-end developer with an unconventional profile: beyond writing code, I like to understand <strong>why something makes sense to the user</strong> and what the data tells us about how people interact with a product.`,
    about_p2:    `This combination happened naturally — I worked in customer service, taught programming to kids and teens, built an athletic association from scratch, and alongside all of that I was learning React, SQL, and Power BI. Every experience taught me something about product, logic, and people.`,
    about_p3:    `Today I see myself as a <strong>developer with a product mindset</strong>: I can both implement a feature and question whether it actually makes sense for the person who'll use it.`,
    card_atletica_title: "Built an athletic association from scratch",
    card_atletica_desc:  "Leadership, people management, events — a real project with real impact.",
    card_kodland_title:  "Programming instructor",
    card_kodland_desc:   "Teaching is the best way to learn. Sharp technical communication and pedagogy.",
    card_es_title:       "Advanced Spanish",
    card_es_desc:        "A real advantage for companies operating in Latin America or internationally.",

    skills_label:  "Tech stack",
    skills_title:  `What I <em>can do</em>`,
    sg_frontend:   "Front-end",
    sg_data:       "Data & BI",
    sg_backend:    "Back-end",
    sg_soft:       "Soft Skills",
    tag_sql_adv:   "Advanced SQL",
    tag_modeling:  "Modeling",
    tag_analysis:  "Data analysis",
    tag_structuring:"Data structuring",
    soft_comm:     "Clear communication",
    soft_problem:  "Problem solving",
    soft_learn:    "Fast learner",
    soft_analytical:"Analytical thinking",
    soft_team:     "Teamwork",
    soft_proactive:"Proactivity",
    soft_user:     "User focus",
    soft_product:  "Product vision",

    proj_label:        "Portfolio",
    proj_title:        `What I've <em>built</em>`,
    badge_highlight:   "⭐ Featured",
    badge_data:        "Data",
    badge_soon:        "Coming soon",
    proj_link_linkedin:"View on LinkedIn →",
    proj1_title:       "Emotions Dashboard",
    proj1_desc:        `React interface to visualize emotional data over time. Dynamic filters by emotion and period, custom gradient chart, and a modern dark UI. A project that blends front-end, data, and UX in one delivery — and where I saw firsthand how much design and data need to talk to each other.`,
    proj2_subtitle:    "Data analysis",
    proj2_desc:        `System focused on data structuring and analysis. Information modeling, SQL, and real insight generation. This is the project that proves I can go beyond front-end and think through data with consistency.`,
    proj3_title:       "Fullstack + API",
    proj3_desc:        `Next step: an application with React on the front, Python on the back, and external API consumption. Not just to show I can do it — it's to close the loop and deliver end-to-end.`,

    exp_label:    "Journey",
    exp_title:    `Where I <em>came from</em>`,
    exp_present:  "present",
    exp_previous: "Previous",
    exp1_role:    "Freelance Programming Instructor",
    exp1_li1:     "Taught programming logic, HTML, CSS, and Python to students aged 8–17",
    exp1_li2:     "Learned that explaining something well is as hard as building it — and just as important",
    exp1_li3:     "Adapted language and approach based on each student's profile",
    exp1_li4:     "The most important interface I ever had to optimize was the human mind",
    exp2_role:    "Founder",
    exp2_company: "Athletic association (built from scratch)",
    exp2_li1:     "Built the whole structure from zero: team, bylaws, events, and operations",
    exp2_li2:     "Made decisions with real impact on real people — that's different from any exercise",
    exp2_li3:     "Learned to organize flow, communicate internally, and solve problems on the fly",
    exp2_li4:     "Leadership experience most junior devs simply don't have",
    exp3_role:    "Customer Service",
    exp3_others:  "others",
    exp3_li1:     "Direct customer service in high-demand, fast-paced environments",
    exp3_li2:     "Learned to read what the customer needs before they finish saying it",
    exp3_li3:     "Operated under pressure with focus on solving, not on explaining why it didn't work",
    exp3_li4:     "This is where my obsession with user experience was born",
    diff1_title:  "Product vision",
    diff1_desc:   "I understand the business behind the code",
    diff2_title:  "Advanced SQL",
    diff2_desc:   "Rare combo: a dev who also analyzes data",
    diff3_title:  "Advanced Spanish",
    diff3_desc:   "Real advantage for international companies",
    diff4_title:  "AI in workflow",
    diff4_desc:   "Practical and productive use every day",

    contact_label: "Contact",
    contact_title: `Let's <em>talk?</em>`,
    contact_sub:   "Open to internships, freelance work, and junior positions.<br>Send me a message — I reply fast.",
  },

  // ─────────────────────────────────────────────
  es: {
    nav_about:    "Sobre mí",
    nav_skills:   "Skills",
    nav_projects: "Proyectos",
    nav_exp:      "Experiencia",
    nav_contact:  "Contacto",

    hero_available:    "Disponible para oportunidades",
    hero_tagline:      `Construyo <strong>interfaces que no solo funcionan</strong>, sino que ayudan a entender datos y tomar mejores decisiones. Front-end con visión de producto, análisis de datos y experiencia real con usuarios.`,
    hero_cta_projects: "Ver proyectos →",
    hero_cta_contact:  "Ponerse en contacto",
    stat_areas:        "Áreas de actuación",
    stat_sql:          "Nivel avanzado",
    stat_es:           "Español avanzado",

    about_label: "Sobre mí",
    about_title: `Un dev que entiende<br><em>de datos y de personas</em>`,
    about_p1:    `Soy desarrollador front-end con un perfil fuera de lo común: además de escribir código, me gusta entender <strong>por qué algo tiene sentido para el usuario</strong> y qué dicen los datos sobre cómo usa el producto.`,
    about_p2:    `Esta combinación surgió de forma natural — trabajé en atención al cliente, enseñé programación a niños y adolescentes, creé una asociación atlética desde cero, y en paralelo aprendí React, SQL y Power BI. Cada experiencia me enseñó algo sobre producto, lógica y personas.`,
    about_p3:    `Hoy me veo como un <strong>desarrollador con visión de producto</strong>: puedo tanto implementar una funcionalidad como cuestionar si tiene sentido para quien la va a usar.`,
    card_atletica_title: "Creó una asociación atlética desde cero",
    card_atletica_desc:  "Liderazgo, gestión de personas y eventos — proyecto real con impacto real.",
    card_kodland_title:  "Instructor de programación",
    card_kodland_desc:   "Enseñar es la mejor forma de aprender. Comunicación técnica y didáctica sólida.",
    card_es_title:       "Español avanzado",
    card_es_desc:        "Ventaja real para empresas con presencia en América Latina o en el exterior.",

    skills_label:  "Stack técnico",
    skills_title:  `Lo que <em>sé hacer</em>`,
    sg_frontend:   "Front-end",
    sg_data:       "Datos & BI",
    sg_backend:    "Back-end",
    sg_soft:       "Soft Skills",
    tag_sql_adv:   "SQL avanzado",
    tag_modeling:  "Modelado",
    tag_analysis:  "Análisis de datos",
    tag_structuring:"Estructuración de datos",
    soft_comm:     "Comunicación clara",
    soft_problem:  "Resolución de problemas",
    soft_learn:    "Aprendizaje rápido",
    soft_analytical:"Pensamiento analítico",
    soft_team:     "Trabajo en equipo",
    soft_proactive:"Proactividad",
    soft_user:     "Foco en el usuario",
    soft_product:  "Visión de producto",

    proj_label:        "Portafolio",
    proj_title:        `Lo que ya <em>construí</em>`,
    badge_highlight:   "⭐ Destacado",
    badge_data:        "Datos",
    badge_soon:        "Próximamente",
    proj_link_linkedin:"Ver en LinkedIn →",
    proj1_title:       "Dashboard de Emociones",
    proj1_desc:        `Interfaz React para visualizar datos emocionales a lo largo del tiempo. Filtros por emoción y período, gráfico con gradiente personalizado y visual dark moderno. Un proyecto que une front-end, datos y UX en una sola entrega — y donde vi de cerca cuánto el diseño y el dato necesitan dialogar.`,
    proj2_subtitle:    "Análisis de datos",
    proj2_desc:        `Sistema enfocado en la estructuración y análisis de datos. Modelado de información, SQL y generación de insights reales. Es el proyecto que demuestra que puedo ir más allá del front-end y pensar en datos con consistencia.`,
    proj3_title:       "Fullstack + API",
    proj3_desc:        `Próximo paso: aplicación con React en el front, Python en el back y consumo de API externa. No es solo para mostrar que sé hacerlo — es para cerrar el ciclo y entregar de punta a punta.`,

    exp_label:    "Trayectoria",
    exp_title:    `De dónde <em>vengo</em>`,
    exp_present:  "presente",
    exp_previous: "Anterior",
    exp1_role:    "Instructor de Programación Freelancer",
    exp1_li1:     "Enseñé lógica de programación, HTML, CSS y Python a alumnos de 8 a 17 años",
    exp1_li2:     "Aprendí que explicar bien es tan difícil como construir bien — y igual de importante",
    exp1_li3:     "Adapté el lenguaje y el enfoque según el perfil de cada alumno",
    exp1_li4:     "La interfaz más importante que tuve que optimizar fue la mente humana",
    exp2_role:    "Fundador",
    exp2_company: "Asociación atlética (creada desde cero)",
    exp2_li1:     "Armé toda la estructura desde cero: equipo, estatutos, eventos y operación",
    exp2_li2:     "Tomé decisiones con impacto real en personas reales — eso es diferente a cualquier ejercicio",
    exp2_li3:     "Aprendí a organizar flujos, comunicar internamente y resolver problemas de improviso",
    exp2_li4:     "Experiencia de liderazgo que la mayoría de los juniors no tiene en el currículum",
    exp3_role:    "Atención al Cliente",
    exp3_others:  "otros",
    exp3_li1:     "Atención directa al cliente en entornos de alta demanda y poco tiempo",
    exp3_li2:     "Aprendí a leer lo que el cliente quiere antes de que termine de hablar",
    exp3_li3:     "Operación bajo presión con foco en resolver, no en explicar por qué no funcionó",
    exp3_li4:     "Aquí nació mi obsesión con la experiencia del usuario",
    diff1_title:  "Visión de producto",
    diff1_desc:   "Entiendo el negocio detrás del código",
    diff2_title:  "SQL avanzado",
    diff2_desc:   "Combo raro: dev que también analiza datos",
    diff3_title:  "Español avanzado",
    diff3_desc:   "Ventaja real para empresas internacionales",
    diff4_title:  "IA en el workflow",
    diff4_desc:   "Uso práctico y productivo todos los días",

    contact_label: "Contacto",
    contact_title: `¿Conversamos?`,
    contact_sub:   "Abierto a pasantías, freelance y oportunidades junior.<br>Mandame un mensaje — respondo rápido.",
  },
};


// TROCA DE IDIOMA
// basicamente pega todos os elementos com data-i18n no HTML,
// busca o texto certo na tabela acima e substitui.
// innerHTML porque alguns textos têm <strong> e <em>.

let currentLang = "pt";

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Atualiza todos os textos
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // marca o botao que ta ativo
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // basicamente da pro lang do <html>  acessibilidade
  document.documentElement.lang =
    lang === "pt" ? "pt-BR" :
    lang === "en" ? "en"    : "es";
}

// Liga os botoes
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});



// só um item fica aberto por vez.
// clicou no mesmo, fecha. clicou em outro , abre aquele.

function toggleExp(header) {
  const body    = header.nextElementSibling;
  const isOpen  = header.classList.contains("open");

  // fecha todos primeiro
  document.querySelectorAll(".exp-header").forEach(h => {
    h.classList.remove("open");
    h.nextElementSibling.classList.remove("open");
  });

  // abre só se estava fechado
  if (!isOpen) {
    header.classList.add("open");
    body.classList.add("open");
  }
}



// basicamente pra dar o efeito de scrool pra revelar


const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1,
  rootMargin: "0px 0px -40px 0px"
});

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 80 + "ms";
  observer.observe(el);
});