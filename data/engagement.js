// Engagement models page data (Arbisoft-style), adapted for TAG Solutions.
// Three models aligned to the comparison table: Software Outsourcing,
// Dedicated Teams, Staff Augmentation.

export const models = [
  {
    key: "outsourcing",
    title: "Software Outsourcing",
    price: "Fixed Scope",
    tagline: "Hand us the problem — we deliver the product.",
    description:
      "End-to-end delivery of a defined project: discovery, design, development, QA, and deployment. We own project management and execution so you can focus on your core business.",
    features: [
      "Full project ownership by TAG Solutions",
      "Fixed scope, timeline & budget",
      "Design → development → QA → launch",
      "Milestone-based delivery & reporting",
      "30-day post-launch warranty",
    ],
    bestFor: [
      "SMEs that want a partner to handle complete project development.",
      "Companies with limited in-house technical expertise.",
      "Large, complex projects that need a full solution and lower overhead.",
    ],
    featured: false,
  },
  {
    key: "dedicated",
    title: "Dedicated Teams",
    price: "Monthly",
    tagline: "A full squad, embedded in your mission.",
    description:
      "A cross-functional team of engineers, designers, and a delivery lead who work exclusively on your product as a seamless extension of your organisation — without the overhead of hiring.",
    features: [
      "Hand-picked, full-time team",
      "Dedicated delivery manager",
      "Agile sprints & weekly demos",
      "Scale the team up or down as you grow",
      "Direct communication channels",
    ],
    bestFor: [
      "Growing companies that need full-time teams to build and maintain products.",
      "Long-term projects with evolving requirements.",
      "Teams that want direct collaboration without HR & admin overhead.",
    ],
    featured: true,
  },
  {
    key: "augmentation",
    title: "Staff Augmentation",
    price: "Flexible",
    tagline: "Plug vetted talent into your team.",
    description:
      "Add senior engineers to your existing team on demand. They follow your process, your stack, and your standards — with no ramp-up overhead and no long-term lock-in.",
    features: [
      "Vetted senior engineers",
      "Integrates with your workflow",
      "Fast onboarding (1–2 weeks)",
      "No recruitment overhead",
      "Monthly rolling contracts",
    ],
    bestFor: [
      "Companies that need extra tech staff for a short period.",
      "Teams scaling up without committing to full-time employment.",
      "In-house teams that need specialists for specific tasks.",
    ],
    featured: false,
  },
];

// Animated SVG that visually explains how each model works.
// Used on both the home page teaser and the /engagement cards.
export const modelArt = {
  outsourcing: "/img/engagement/outsourcing.svg",
  dedicated: "/img/engagement/dedicated.svg",
  augmentation: "/img/engagement/augmentation.svg",
};

export const factorStats = [
  { value: "4+", label: "Years building custom solutions and applications" },
  { value: "215+", label: "Projects delivered across industries" },
  { value: "50+", label: "Specialists across engineering, data & design" },
];

export const technologies = [
  "React", "Next.js", "Node.js", "Python", "Django", ".NET",
  "Flutter", "React Native", "AWS", "Azure", "Google Cloud",
  "PostgreSQL", "MongoDB", "TensorFlow", "PyTorch", "Docker", "Kubernetes",
];

// Comparison table: one row per criterion, a value per model.
export const comparison = [
  {
    criteria: "Project Scope",
    outsourcing: "Includes everything — design, development, testing, deployment.",
    dedicated: "Ongoing development tasks.",
    augmentation: "Specific tasks that require additional resources.",
  },
  {
    criteria: "Project Size",
    outsourcing: "Medium to Large",
    dedicated: "Medium to Large",
    augmentation: "Small to Medium",
  },
  {
    criteria: "Engagement Duration",
    outsourcing: "Long-term",
    dedicated: "Long-term",
    augmentation: "Short-term / as needed",
  },
  {
    criteria: "Your Involvement",
    outsourcing: "Minimal — we manage all aspects of the project.",
    dedicated: "High — you collaborate closely with the dedicated team.",
    augmentation: "High — you provide direction and oversight.",
  },
  {
    criteria: "Control & Oversight",
    outsourcing: "We fully control operations and update you regularly.",
    dedicated: "Shared control with regular input and direction — you make the decisions.",
    augmentation: "You control everything; we provide the expertise.",
  },
  {
    criteria: "Flexibility",
    outsourcing: "Moderate — scope defined upfront with some room for change.",
    dedicated: "High — team structure and tasks can be adjusted as needed.",
    augmentation: "High — scale resources up or down based on your needs.",
  },
  {
    criteria: "Team Structure",
    outsourcing: "We decide and manage the team structure.",
    dedicated: "We suggest; you decide and manage.",
    augmentation: "You decide and manage the team structure.",
  },
  {
    criteria: "Risk & Responsibility",
    outsourcing: "Low risk — we handle all project management and execution.",
    dedicated: "Medium risk — depends on your in-house technical & managerial expertise.",
    augmentation: "Medium to high — depends on your expertise and project complexity.",
  },
  {
    criteria: "Cost Structure",
    outsourcing: "Fixed — based on the defined, locked project scope.",
    dedicated: "Flexible — based on team size, duration, and expertise required.",
    augmentation: "Flexible — based on the number of resources required.",
  },
];

// Quick-fit questions: true = this model fits the requirement.
export const questions = [
  { q: "I want to scale up my team quickly.", outsourcing: false, dedicated: true, augmentation: true },
  { q: "I want to manage the team myself.", outsourcing: false, dedicated: true, augmentation: true },
  { q: "I prefer a fully managed solution.", outsourcing: true, dedicated: false, augmentation: false },
  { q: "I need full control over the development process.", outsourcing: false, dedicated: true, augmentation: true },
  { q: "I need a long-term commitment.", outsourcing: true, dedicated: true, augmentation: false },
  { q: "I have a short-term project.", outsourcing: false, dedicated: false, augmentation: true },
  { q: "I want to outsource the entire project.", outsourcing: true, dedicated: false, augmentation: false },
  { q: "I want deep integration with my team.", outsourcing: false, dedicated: true, augmentation: true },
  { q: "I need specialized skills for specific tasks.", outsourcing: false, dedicated: false, augmentation: true },
];

export const faqGroups = [
  {
    group: "Outsourcing FAQs",
    items: [
      { q: "Is outsourcing expensive?", a: "Not necessarily. A fixed-scope engagement gives you a locked budget upfront with no hiring, onboarding, or infrastructure overhead. For most SMEs it costs less than building and retaining an equivalent in-house team." },
      { q: "How much control do I have when outsourcing?", a: "You define the goals and sign off at each milestone; we handle day-to-day execution and management, and keep you updated with regular demos and reports. You stay in control of direction without managing the details." },
      { q: "What kind of projects are best suited for outsourcing?", a: "Well-defined initiatives with a clear scope — MVPs, platform builds, integrations, or modernisation — especially when you want a single accountable partner to take it from design to launch." },
      { q: "How do I maintain quality in outsourced projects?", a: "Quality is maintained through clear KPIs, code reviews, automated testing, and QA processes. You get an experienced team that has shipped similar projects, plus adherence to industry standards that reduces the risk of errors and delays." },
    ],
  },
  {
    group: "Dedicated Teams FAQs",
    items: [
      { q: "How is a dedicated team different from outsourcing?", a: "A dedicated team works exclusively on your product as an extension of your organisation, with you collaborating closely and making the decisions — whereas outsourcing hands full project ownership to us." },
      { q: "Can I scale the team up or down?", a: "Yes. Team size and composition can be adjusted as your roadmap changes — add specialists for a push, or scale back between phases." },
      { q: "Who manages the dedicated team?", a: "We provide a delivery manager and suggest the structure; you set priorities and direction. It's a shared model built around close collaboration." },
    ],
  },
  {
    group: "Staff Augmentation FAQs",
    items: [
      { q: "How fast can augmented engineers start?", a: "Typically within 1–2 weeks. Vetted engineers integrate directly into your existing workflow, tools, and standards with minimal ramp-up." },
      { q: "Do I manage the augmented staff?", a: "Yes — you direct and manage them like your own team members. We provide the talent and handle contracts; you provide the roadmap and oversight." },
      { q: "Is there a long-term commitment?", a: "No. Staff augmentation runs on flexible, monthly rolling contracts, so you can scale resources up or down based on your needs." },
    ],
  },
];
