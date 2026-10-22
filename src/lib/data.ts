/**
 * Fuente única de todo el texto del sitio.
 * Viene del perfil de LinkedIn (public/Katherin-Barrera-Lopez-CV.pdf) y de los README de github.com/KathBarrera.
 * Los componentes solo leen de este archivo: para actualizar la web, edita aquí.
 */

/* ───────────────────────── Perfil ───────────────────────── */

export const PROFILE = {
  name: "Katherin Barrera López",
  firstName: "Katherin",
  initials: "KB",
  role: "Científica de Datos",
  /** Línea corta bajo el título del hero. */
  roles: ["Python", "R", "Machine Learning", "MLOps", "Riesgo crediticio", "Visualización de datos"],
  email: "kathbarreracontacto@gmail.com",
  location: "Barranquilla, Colombia",
  github: "https://github.com/KathBarrera",
  linkedin: "https://www.linkedin.com/in/katherin-barrera-lopez-454b47392/",
  resume: "/Katherin-Barrera-Lopez-CV.pdf",
  summary:
    "Soy estudiante de sexto semestre de Ciencia de Datos en la Universidad del Norte (grado previsto: 2028), entre Santa Marta y Barranquilla. Me gusta tomar un conjunto de datos desordenado y convertirlo en algo que ayude a decidir: limpiarlo, explorarlo, probar hipótesis y construir modelos que se puedan explicar.",
  aboutLine: "En mis proyectos he trabajado sobre todo en riesgo crediticio y salud.",
  quote: "Convertir datos desordenados en algo que ayude a decidir.",
  openTo: "Abierta a prácticas en análisis de datos y ciencia de datos",
  current: { title: "Directora de Logística", org: "Singularity" },
  card: { id: "KBL-2028", dept: "Ciencia de Datos", semester: "6.º semestre" },
} as const;

/* ───────────────────────── Navegación ───────────────────────── */

export type NavItem = { id: string; label: string };

export const NAV: NavItem[] = [
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Herramientas" },
  { id: "work", label: "Proyectos" },
  { id: "experience", label: "Trayectoria" },
  { id: "contact", label: "Contacto" },
];

/* ───────────────────────── Herramientas ───────────────────────── */

export type Skill = {
  /** Id estable: también es la clave en BRAND / CONCEPT de TechLogo. */
  id: string;
  name: string;
  symbol: string;
};

export type SkillGroup = { family: string; short: string; skills: Skill[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    family: "Lenguajes y entorno",
    short: "Lenguajes",
    skills: [
      { id: "python", name: "Python", symbol: "Py" },
      { id: "r", name: "R", symbol: "R" },
      { id: "jupyter", name: "Jupyter", symbol: "Jp" },
      { id: "rstudio", name: "RStudio", symbol: "Rs" },
      { id: "latex", name: "LaTeX", symbol: "Lx" },
      { id: "git", name: "Git", symbol: "Gt" },
    ],
  },
  {
    family: "Análisis y visualización",
    short: "Análisis",
    skills: [
      { id: "pandas", name: "pandas", symbol: "Pd" },
      { id: "numpy", name: "NumPy", symbol: "Np" },
      { id: "tidyverse", name: "tidyverse", symbol: "Tv" },
      { id: "plotly", name: "Plotly", symbol: "Pl" },
      { id: "dash", name: "Dash", symbol: "Ds" },
      { id: "powerbi", name: "Power BI", symbol: "Pb" },
      { id: "bookdown", name: "bookdown", symbol: "Bd" },
    ],
  },
  {
    family: "Estadística y Machine Learning",
    short: "ML",
    skills: [
      { id: "scikitlearn", name: "scikit-learn", symbol: "Sk" },
      { id: "hypothesis", name: "Pruebas de hipótesis", symbol: "Ph" },
      { id: "vif", name: "VIF / multicolinealidad", symbol: "Vf" },
      { id: "randomforest", name: "Random Forest", symbol: "Rf" },
      { id: "shap", name: "SHAP", symbol: "Sh" },
      { id: "kaggle", name: "Kaggle", symbol: "Kg" },
    ],
  },
  {
    family: "MLOps",
    short: "MLOps",
    skills: [
      { id: "fastapi", name: "FastAPI", symbol: "Fa" },
      { id: "docker", name: "Docker", symbol: "Dk" },
      { id: "kubernetes", name: "Kubernetes", symbol: "K8" },
      { id: "githubactions", name: "GitHub Actions", symbol: "Ga" },
      { id: "drift", name: "Monitoreo de deriva", symbol: "Dr" },
    ],
  },
  {
    family: "Liderazgo",
    short: "Liderazgo",
    skills: [{ id: "events", name: "Organización de eventos", symbol: "Ev" }],
  },
];

/* ───────────────────────── Experiencia y formación ───────────────────────── */

export type Experience = {
  id: string;
  org: string;
  mode?: string;
  title: string;
  start: string; // "AAAA-MM"
  end: string | null; // null = actualidad
  period: string;
  status?: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: "singularity-logistica",
    org: "Singularity | Grupo de Ciencia de Datos e IA",
    mode: "Universidad del Norte",
    title: "Directora de Logística",
    start: "2026-08",
    end: null,
    period: "ago. 2026 – actualidad",
    status: "Rol actual",
    bullets: [
      "A cargo de la planeación y coordinación logística de las actividades y eventos del grupo.",
      "Singularity es el grupo estudiantil de Ciencia de Datos e IA de Uninorte: proyectos aplicados, workshops, bootcamps y networking entre academia e industria.",
    ],
  },
  {
    id: "singularity-embajadora",
    org: "Singularity | Grupo de Ciencia de Datos e IA",
    mode: "Universidad del Norte",
    title: "Embajadora",
    start: "2025-08",
    end: "2026-05",
    period: "ago. 2025 – may. 2026",
    bullets: [
      "Representé al grupo dentro de la comunidad universitaria.",
      "Apoyé la difusión de sus workshops, bootcamps y espacios de discusión sobre IA.",
    ],
  },
];

export type Education = {
  id: string;
  school: string;
  place: string;
  degree: string;
  start: string;
  end: string;
  period: string;
  bullets: string[];
};

export const EDUCATION: Education[] = [
  {
    id: "uninorte",
    school: "Universidad del Norte",
    place: "Barranquilla",
    degree: "Pregrado en Ciencia de Datos",
    start: "2024-01",
    end: "2028-12",
    period: "2024 – 2028",
    bullets: [
      "Actualmente en sexto semestre; grado previsto en 2028.",
      "Proyectos de curso en riesgo crediticio, salud, estadística y MLOps.",
    ],
  },
];

/* ───────────────────────── Proyectos ───────────────────────── */

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  features: string[];
  /** Ids de herramientas (ver SKILL_GROUPS). */
  tech: string[];
  links: ProjectLink[];
};

export const PROJECTS: Project[] = [
  {
    id: "credit-dash",
    index: "01",
    title: "Riesgo de incumplimiento en tarjetas de crédito",
    kicker: "Dashboard · Dash + Plotly · en equipo",
    description:
      "Dashboard interactivo sobre 30.000 clientes del dataset Default of Credit Card Clients (UCI) para entender qué perfiles y comportamientos anticipan el incumplimiento. Cada gráfico trae una lectura cotidiana y una técnica.",
    features: [
      "EDA univariado y multivariado",
      "Correlación de Spearman",
      "χ² con V de Cramér, Mann-Whitney, Kruskal-Wallis",
      "Multicolinealidad (VIF) en facturación",
      "Análisis del desbalance de clases",
      "Desplegado en la web, modo claro y oscuro",
    ],
    tech: ["python", "dash", "plotly", "pandas", "vif", "hypothesis"],
    links: [
      { label: "Ver dashboard", href: "https://dash-credit-kv.onrender.com/" },
      { label: "Código", href: "https://github.com/KathBarrera/dash_credit_kv" },
    ],
  },
  {
    id: "heart-mlops",
    index: "02",
    title: "Heart Disease MLOps",
    kicker: "MLOps · salud · en equipo",
    description:
      "Proyecto integrador para predecir falla cardíaca: del pipeline de ML a una API en producción, con despliegue automatizado y monitoreo del modelo.",
    features: [
      "Pipeline de ML con control de data leakage",
      "API de predicción con FastAPI",
      "Contenerización con Docker",
      "Despliegue en Kubernetes",
      "CI/CD con GitHub Actions",
      "Monitoreo de deriva de datos (Evidently)",
    ],
    tech: ["python", "scikitlearn", "fastapi", "docker", "kubernetes", "githubactions", "drift"],
    links: [
      { label: "Sitio del proyecto", href: "https://valeriaflorezs.github.io/heart-disease-mlops/" },
      { label: "Código", href: "https://github.com/valeriaflorezs/heart-disease-mlops" },
    ],
  },
  {
    id: "give-me-credit",
    index: "03",
    title: "Give Me Some Credit en Python y R",
    kicker: "Riesgo crediticio · Kaggle · en equipo",
    description:
      "Análisis exploratorio del dataset Give Me Some Credit para entender la morosidad grave a dos años, hecho dos veces: en Python (Jupyter Book y artículo en LaTeX) y en R (libro en bookdown).",
    features: [
      "Pruebas de hipótesis",
      "Diagnóstico de multicolinealidad (VIF)",
      "Random Forest",
      "Interpretabilidad con SHAP",
      "tidyverse, plotly y reactable en R",
      "Artículo escrito en LaTeX",
    ],
    tech: ["python", "r", "tidyverse", "bookdown", "randomforest", "shap", "latex", "kaggle"],
    links: [
      { label: "Libro en R", href: "https://valeriaflorezs.github.io/GiveMeSomeCredit_R/" },
      { label: "Código Python", href: "https://github.com/valeriaflorezs/GiveMeSomeCredit" },
    ],
  },
  {
    id: "stats-book",
    index: "04",
    title: "Métodos Estadísticos en R",
    kicker: "Libro web · bookdown · en construcción",
    description:
      "Libro web construido con R y bookdown para el curso de Métodos Estadísticos de la carrera, publicado en GitHub Pages. Ya tiene la estructura base: capítulos, referencias cruzadas, figuras, ecuaciones y citas.",
    features: ["R + bookdown", "Formato gitbook (HTML)", "Ecuaciones y citas", "Publicado en GitHub Pages"],
    tech: ["r", "bookdown", "rstudio"],
    links: [{ label: "Código", href: "https://github.com/KathBarrera/jupiter_book_R" }],
  },
  {
    id: "python-basics",
    index: "05",
    title: "Fundamentos de Python para Ciencia de Datos",
    kicker: "Notebook de estudio · Uninorte",
    description:
      "Notebook del Módulo 1 de programación: desde la sintaxis básica hasta una primera manipulación de datos tabulares.",
    features: [
      "Condicionales, ciclos y funciones",
      "Listas, matrices y diccionarios",
      "Números aleatorios y semillas con NumPy",
      "Tablas con pandas",
    ],
    tech: ["python", "numpy", "pandas", "jupyter"],
    links: [{ label: "Código", href: "https://github.com/KathBarrera/repo_uno" }],
  },
];

/** Nota bajo los proyectos hechos en equipo. */
export const TEAM_NOTE = {
  text: "Los proyectos 01–03 fueron trabajos en equipo con",
  name: "Valeria Flórez",
  href: "https://github.com/valeriaflorezs",
};

/* ───────────────────────── Certificaciones ───────────────────────── */

export const CERTIFICATIONS: { title: string; issuer: string; href?: string }[] = [
  { title: "Análisis de datos con Power BI", issuer: "Universidad del Norte · 2024" },
  { title: "ProducTeam: Producción de eventos", issuer: "Universidad del Norte · 2026" },
];

/* ───────────────────────── En cifras ───────────────────────── */

export type Achievement = {
  id: string;
  icon: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Separador de miles (es-CO). */
  thousands?: boolean;
  label: string;
  caption: string;
  detail: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "clients",
    icon: "plotly",
    value: 30000,
    thousands: true,
    label: "Clientes analizados",
    caption: "Dashboard de riesgo crediticio",
    detail: "Default of Credit Card Clients (UCI), 24 variables",
  },
  {
    id: "projects",
    icon: "github",
    value: 5,
    label: "Proyectos publicados",
    caption: "github.com/KathBarrera",
    detail: "Riesgo crediticio, salud, estadística y fundamentos",
  },
  {
    id: "semester",
    icon: "cap",
    value: 6,
    suffix: ".º",
    label: "Semestre",
    caption: "Ciencia de Datos · Uninorte",
    detail: "Grado previsto en 2028",
  },
  {
    id: "roles",
    icon: "events",
    value: 2,
    label: "Roles en Singularity",
    caption: "Grupo de Ciencia de Datos e IA",
    detail: "Embajadora y Directora de Logística",
  },
  {
    id: "certs",
    icon: "medal",
    value: 2,
    label: "Certificaciones",
    caption: "Universidad del Norte",
    detail: "Power BI y producción de eventos",
  },
];

/* ───────────────────────── Derivados ───────────────────────── */

export const ALL_SKILLS = SKILL_GROUPS.flatMap((g) =>
  g.skills.map((s) => ({ ...s, family: g.family, short: g.short })),
);

export function skillById(id: string) {
  return ALL_SKILLS.find((s) => s.id === id);
}

export function projectsUsing(skillId: string) {
  return PROJECTS.filter((p) => p.tech.includes(skillId));
}

/** Número de sección ("03 — Proyectos"), en el orden de la página. */
export const SECTION_INDEX: Record<string, string> = Object.fromEntries(
  [
    "about",
    "skills",
    ...(PROJECTS.length ? ["work"] : []),
    "experience",
    ...(CERTIFICATIONS.length ? ["certifications"] : []),
    ...(ACHIEVEMENTS.length ? ["achievements"] : []),
    "contact",
  ].map((id, i) => [id, String(i + 1).padStart(2, "0")]),
);
