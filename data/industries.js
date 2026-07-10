// TAG Solutions — industries with Arbisoft-style tailored solutions.
// Each industry maps a curated set of named solution offerings (linking to the
// closest service page) onto that vertical's real needs.
export const industries = [
  {
    id: "1",
    slug: "agencies",
    title: "Agencies",
    icon: "🎨",
    image: "/tags/industry-agencies.jpg",
    excerpt: "Technology that lets marketing and creative agencies scale creativity, not headcount.",
    heroHeadline: "Scale your agency's creativity, not its headcount",
    heroSubtext:
      "We build the platforms and automations that free marketing and creative agencies from busywork — so your team can focus on clients and craft.",
    intro:
      "Agencies win on creativity and relationships, but they grow on operations. We engineer the tooling that turns manual, repetitive work into automated, scalable systems — without adding overhead.",
    challenges: [
      "Managing multiple client projects simultaneously",
      "Scaling operations without proportional headcount increase",
      "Automating repetitive reporting and campaign tasks",
      "Maintaining consistent brand quality across deliverables",
    ],
    solutions: [
      { title: "Branded Client Portals", description: "A single dashboard where clients track progress, view reports, and communicate — reinforcing your brand at every touchpoint.", href: "/services/web-development" },
      { title: "Automated Reporting Dashboards", description: "Pull data from Google Analytics, social, and ad networks into beautiful, always-current reports that build themselves.", href: "/services/data-and-ai" },
      { title: "AI Content & Campaign Automation", description: "Generate, schedule, and optimize content across channels with AI tuned to each client's voice.", href: "/services/data-and-ai" },
      { title: "Agency Workflow Systems", description: "Custom project tools built around how agencies actually run — from brief to final delivery.", href: "/services/enterprise-softwares" },
      { title: "White-Label Product Delivery", description: "Ship client-facing apps and sites under your own brand, engineered and maintained by us.", href: "/services/software-development" },
    ],
    stats: [
      { metric: "Client Retention Increase", value: "40%" },
      { metric: "Time Saved on Reporting", value: "60%" },
      { metric: "Revenue Growth", value: "85%" },
      { metric: "Projects Managed", value: "500+" },
    ],
  },
  {
    id: "2",
    slug: "consulting",
    title: "Consulting",
    icon: "💼",
    image: "/tags/industry-consulting.jpg",
    excerpt: "Turn consulting expertise into platforms that book more meetings with decision-makers.",
    heroHeadline: "Make your expertise impossible to ignore — and easy to book",
    heroSubtext:
      "We turn consulting knowledge into digital platforms that generate qualified meetings and streamline every client engagement.",
    intro:
      "Consultants sell trust and outcomes. We build the websites, funnels, and internal systems that communicate your value clearly — and let you deliver it at scale.",
    challenges: [
      "Communicating complex value propositions clearly",
      "Generating qualified leads consistently",
      "Managing client engagements and deliverables",
      "Scaling consulting operations efficiently",
    ],
    solutions: [
      { title: "Authority Websites", description: "Thought-leadership platforms with case studies, insights, and a clear methodology that position you as the expert.", href: "/services/web-development" },
      { title: "Lead-Gen Funnels & Scheduling", description: "Automated funnels that attract, qualify, and book meetings with your ideal decision-makers.", href: "/services/digital-marketing" },
      { title: "Engagement Management Portals", description: "Custom CRM and client portals to manage engagements, share deliverables, and track milestones.", href: "/services/enterprise-softwares" },
      { title: "Proposal & Document Automation", description: "Generate professional proposals in minutes from templates and past project data.", href: "/services/software-development" },
      { title: "Knowledge Management Platforms", description: "Capture and reuse your firm's best thinking across the whole team.", href: "/services/data-and-ai" },
    ],
    stats: [
      { metric: "Meeting Bookings Increase", value: "120%" },
      { metric: "Lead Quality Improvement", value: "75%" },
      { metric: "Client Onboarding Time", value: "-50%" },
      { metric: "Consultants Supported", value: "200+" },
    ],
  },
  {
    id: "3",
    slug: "financial-services",
    title: "Financial Services",
    icon: "🏦",
    image: "/tags/industry-finance.jpg",
    excerpt: "Security-first fintech that meets the strictest regulatory bars and earns customer trust.",
    heroHeadline: "Secure, compliant fintech that earns trust and moves money faster",
    heroSubtext:
      "We build security-first financial platforms that satisfy the strictest regulators while delivering experiences customers love.",
    intro:
      "Financial services demand precision, security, and compliance — with zero room for error. We engineer platforms that satisfy regulators and delight customers at the same time.",
    challenges: [
      "Strict regulatory compliance requirements",
      "Protecting sensitive financial data",
      "Modernizing legacy systems without disruption",
      "Delivering personalized client experiences at scale",
    ],
    solutions: [
      { title: "Secure Client Portals & Onboarding", description: "End-to-end encrypted platforms with KYC/AML digital onboarding, account management, and document exchange.", href: "/services/software-development" },
      { title: "Compliance & Regulatory Automation", description: "Automate regulatory reporting, audit trails, and KYC/AML workflows to cut manual effort.", href: "/services/enterprise-softwares" },
      { title: "Real-Time Risk & Analytics Dashboards", description: "Monitor transactions, exposure, and KPIs in real time with predictive insight.", href: "/services/data-and-ai" },
      { title: "Mobile Banking & Payments", description: "Cross-platform apps with biometric authentication and seamless, secure transactions.", href: "/services/mobile-app-development" },
      { title: "ML-Powered Fraud Detection", description: "Detect and prevent fraudulent activity in under two seconds with human-in-the-loop verification.", href: "/services/data-and-ai" },
    ],
    stats: [
      { metric: "Compliance Automation", value: "90%" },
      { metric: "Processing Speed Increase", value: "300%" },
      { metric: "Security Incidents", value: "Zero" },
      { metric: "Client Satisfaction", value: "4.9/5" },
    ],
  },
  {
    id: "4",
    slug: "healthcare",
    title: "Healthcare",
    icon: "🏥",
    image: "/tags/industry-healthcare.jpg",
    excerpt: "HIPAA-compliant health technology that improves outcomes and engages patients.",
    heroHeadline: "HIPAA-compliant healthcare technology that improves outcomes",
    heroSubtext:
      "We build secure, interoperable digital health solutions that streamline care delivery and keep patients engaged.",
    intro:
      "Healthcare organizations balance quality care, cost, and compliance. We deliver HIPAA-compliant platforms that reduce administrative burden and put better care within reach.",
    challenges: [
      "HIPAA compliance and patient data privacy",
      "Interoperability between healthcare systems",
      "Patient engagement and communication",
      "Operational efficiency in clinical workflows",
    ],
    solutions: [
      { title: "Telehealth Platforms", description: "Secure video consultations with scheduling, e-prescriptions, and follow-up management.", href: "/services/software-development" },
      { title: "Patient Portals & Engagement Apps", description: "Self-service booking, records access, reminders, and messaging that cut no-show rates.", href: "/services/mobile-app-development" },
      { title: "EHR Integration & Interoperability", description: "Connect disparate systems with standards-based data exchange (HL7 / FHIR).", href: "/services/enterprise-softwares" },
      { title: "Clinical Workflow Automation", description: "Automate intake, documentation, and reporting to give clinicians their time back.", href: "/services/software-development" },
      { title: "Health Data Analytics & Decision Support", description: "Population-health analytics and clinical decision support built on your data.", href: "/services/data-and-ai" },
    ],
    stats: [
      { metric: "Patient Satisfaction", value: "95%" },
      { metric: "No-Show Reduction", value: "60%" },
      { metric: "Staff Efficiency Gain", value: "40%" },
      { metric: "Healthcare Clients", value: "50+" },
    ],
  },
  {
    id: "5",
    slug: "information-technologies",
    title: "Information Technologies",
    icon: "💻",
    image: "/tags/industry-it.jpg",
    excerpt: "The engineering firepower and architecture guidance IT companies need to ship and scale.",
    heroHeadline: "A technology partner that helps IT companies ship and scale faster",
    heroSubtext:
      "From product engineering to embedded teams, we give technology companies the talent, tools, and architecture to grow.",
    intro:
      "Technology companies need a partner who speaks their language. We provide the engineering firepower, go-to-market tooling, and architecture guidance to accelerate delivery.",
    challenges: [
      "Standing out in a crowded technology market",
      "Generating qualified leads for complex solutions",
      "Scaling development teams quickly",
      "Keeping up with rapid technology changes",
    ],
    solutions: [
      { title: "Product Design & MVP Development", description: "Take new SaaS ideas from concept to market-ready product, fast.", href: "/services/software-development" },
      { title: "Dedicated Teams & Staff Augmentation", description: "Vetted engineers who integrate seamlessly with your existing team.", href: "/engagement" },
      { title: "Cloud Architecture & DevOps", description: "Scalable, resilient infrastructure with automated CI/CD pipelines.", href: "/services/cloud-engineering" },
      { title: "Sales Enablement & GTM Platforms", description: "Websites, demo environments, and CRM integrations that shorten sales cycles.", href: "/services/digital-marketing" },
      { title: "Architecture Review & Due Diligence", description: "Expert assessment of your stack, scalability, and technical risk.", href: "/services/software-development" },
    ],
    stats: [
      { metric: "Lead Generation Increase", value: "200%" },
      { metric: "Time-to-Market Reduction", value: "45%" },
      { metric: "Tech Partners Served", value: "100+" },
      { metric: "Developer Network", value: "500+" },
    ],
  },
  {
    id: "6",
    slug: "logistics",
    title: "Logistics",
    icon: "🚚",
    image: "/tags/industry-logistics.jpg",
    excerpt: "Tracking, optimization, and integration platforms that make logistics faster and fully visible.",
    heroHeadline: "Supply-chain technology that cuts costs and reveals every shipment",
    heroSubtext:
      "We build the tracking, optimization, and integration platforms that make logistics operations faster and fully visible.",
    intro:
      "Logistics runs on efficiency and visibility. We build end-to-end platforms that connect every link in your supply chain and optimize it with data.",
    challenges: [
      "Real-time tracking and visibility across supply chains",
      "Optimizing routes and reducing delivery costs",
      "Managing complex warehouse operations",
      "Integrating disparate systems and data sources",
    ],
    solutions: [
      { title: "Fleet Management & GPS Tracking", description: "Real-time vehicle tracking, driver management, and maintenance scheduling.", href: "/services/software-development" },
      { title: "AI Route Optimization & Forecasting", description: "Routing that factors in traffic, weather, and capacity — plus demand forecasting.", href: "/services/data-and-ai" },
      { title: "Warehouse Management Systems", description: "Inventory, fulfillment, and warehouse operations with barcode / RFID integration.", href: "/services/enterprise-softwares" },
      { title: "Supply-Chain Visibility Dashboards", description: "Unified dashboards connecting suppliers, warehouses, carriers, and customers.", href: "/services/data-and-ai" },
      { title: "Systems & Carrier Integration", description: "Connect ERP, carrier, and EDI systems into one efficient ecosystem.", href: "/services/cloud-engineering" },
    ],
    stats: [
      { metric: "Delivery Cost Reduction", value: "30%" },
      { metric: "Route Efficiency Gain", value: "40%" },
      { metric: "Real-time Visibility", value: "100%" },
      { metric: "Shipments Managed", value: "1M+" },
    ],
  },
];

export const getIndustry = (slug) => industries.find((i) => i.slug === slug);
