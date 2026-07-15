// TAG Solutions — services catalog (ported from the current site).
// Images live in /public/tags/. `image` is the detail-hero / card image.
export const services = [
  {
    id: 1,
    slug: "software-development",
    title: "Software Development",
    shortTitle: "Software Development",
    image: "/tags/service-software.jpg",
    art: "/img/services/software-development.svg",
    tags: ["Product Design", "System Architecture", "Quality Assurance"],
    description:
      "We develop custom software solutions designed to solve real business challenges. Our team focuses on performance, security, and scalability to ensure long-term success.",
    heroDescription:
      "We engineer robust, high-performance software tailored to your specific business vision. Our expert team delivers custom solutions that drive growth and efficiency.",
    subServices: [
      {
        title: "Custom Software Development",
        description: "We create unique software solutions built around your specific business goals and processes.",
        features: ["Tailored System Architecture", "Long-Term Scalability Planning", "End-to-End Development"],
      },
      {
        title: "Cloud Solutions & DevOps",
        description: "We design, deploy, and optimize cloud-based systems with automated workflows, ensuring scalability and security.",
        features: ["Cloud Architecture Design", "CI/CD & Deployment Automation", "Monitoring, Security & Optimization"],
      },
      {
        title: "SAAS Development",
        description: "We design and develop robust, cloud-based SaaS products that are secure, scalable, and built for long-term growth.",
        features: ["Scalable cloud-native architecture", "Secure data and user management", "Subscription & billing integration"],
      },
      {
        title: "MVP Development",
        description: "We help startups and businesses bring ideas to life by building functional, market-ready MVPs.",
        features: ["Rapid development and deployment", "Core feature-focused implementation", "Early user and market validation"],
      },
      {
        title: "Software Consulting",
        description: "Our software consulting services guide you through every stage of your digital journey with the right technologies.",
        features: ["Technical strategy and roadmap", "Architecture & tech-stack evaluation", "Cost, performance, and risk optimization"],
      },
    ],
    tools: [
      { category: "Programming Languages", items: ["Python", "Java", "C#", "JavaScript", "TypeScript", "Go"] },
      { category: "Frameworks", items: ["React", "Angular", "Node.js", ".NET", "Spring Boot", "Django"] },
      { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "DynamoDB"] },
      { category: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud", "Digital Ocean", "Vercel", "Heroku"] },
    ],
  },
  {
    id: 2,
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    image: "/tags/service-web.jpg",
    art: "/img/services/web-development.svg",
    tags: ["Frontend", "Backend", "Full Stack"],
    description: "Crafting immersive, high-speed digital experiences that drive user engagement and conversions.",
    heroDescription:
      "We build fast, responsive, and visually stunning websites that convert visitors into customers. From landing pages to complex web applications.",
    subServices: [
      {
        title: "Frontend Development",
        description: "Creating pixel-perfect, responsive interfaces with modern frameworks and best practices.",
        features: ["React & Next.js Development", "Responsive Design", "Performance Optimization"],
      },
      {
        title: "Backend Development",
        description: "Building robust server-side solutions with secure APIs and scalable architectures.",
        features: ["RESTful & GraphQL APIs", "Database Design & Optimization", "Authentication & Authorization"],
      },
      {
        title: "E-Commerce Solutions",
        description: "Custom online stores built for conversion with seamless payment integrations.",
        features: ["Custom Shopping Experiences", "Payment Gateway Integration", "Inventory Management Systems"],
      },
      {
        title: "CMS Development",
        description: "Content management solutions that empower your team to manage content effortlessly.",
        features: ["WordPress & Headless CMS", "Custom Admin Panels", "Content Workflow Automation"],
      },
    ],
    tools: [
      { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"] },
      { category: "Backend", items: ["Node.js", "Express", "Django", "Laravel", "Ruby on Rails"] },
      { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"] },
      { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "Vercel", "Netlify"] },
    ],
  },
  {
    id: 3,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    image: "/tags/service-mobile.jpg",
    art: "/img/services/mobile-app-development.svg",
    tags: ["iOS", "Android", "Cross Platform"],
    description: "Building intuitive, high-impact mobile solutions optimized for modern Android and iOS platforms.",
    heroDescription:
      "We create native and cross-platform mobile applications that deliver exceptional user experiences on every device.",
    subServices: [
      {
        title: "iOS App Development",
        description: "Native iOS applications built with Swift for optimal performance on Apple devices.",
        features: ["Swift & SwiftUI", "App Store Optimization", "Apple Ecosystem Integration"],
      },
      {
        title: "Android App Development",
        description: "Powerful Android apps built with Kotlin for seamless performance across devices.",
        features: ["Kotlin & Jetpack Compose", "Google Play Optimization", "Material Design Implementation"],
      },
      {
        title: "Cross-Platform Development",
        description: "Single codebase solutions for both iOS and Android using React Native or Flutter.",
        features: ["React Native & Flutter", "Shared Business Logic", "Platform-Specific Optimizations"],
      },
      {
        title: "App Maintenance & Support",
        description: "Ongoing support to keep your mobile applications running smoothly and up-to-date.",
        features: ["Bug Fixes & Updates", "Performance Monitoring", "Feature Enhancements"],
      },
    ],
    tools: [
      { category: "Native", items: ["Swift", "Kotlin", "SwiftUI", "Jetpack Compose"] },
      { category: "Cross-Platform", items: ["React Native", "Flutter", "Expo", "Ionic"] },
      { category: "Backend", items: ["Firebase", "AWS Amplify", "Supabase", "Node.js"] },
      { category: "Tools", items: ["Xcode", "Android Studio", "Figma", "TestFlight"] },
    ],
  },
  {
    id: 4,
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    image: "/tags/service-marketing.jpg",
    art: "/img/services/digital-marketing.svg",
    tags: ["SEO", "PPC", "Social Media"],
    description: "Accelerating brand growth with data-backed strategies and precise audience targeting.",
    heroDescription:
      "Drive measurable results with our comprehensive digital marketing strategies that combine creativity with data-driven insights.",
    subServices: [
      {
        title: "Performance Marketing",
        description: "Data-driven campaigns that maximize ROI across paid channels.",
        features: ["Google Ads Management", "Meta Ads Campaigns", "Conversion Rate Optimization"],
      },
      {
        title: "Social Media Marketing",
        description: "Building engaged communities and brand presence across social platforms.",
        features: ["Content Strategy & Creation", "Community Management", "Influencer Partnerships"],
      },
      {
        title: "Search Engine Optimization",
        description: "Improving organic visibility and driving sustainable traffic growth.",
        features: ["Technical SEO Audits", "Content Optimization", "Link Building Strategies"],
      },
      {
        title: "Content Marketing",
        description: "Creating valuable content that attracts, engages, and converts your target audience.",
        features: ["Blog & Article Writing", "Video Content Production", "Email Marketing Campaigns"],
      },
    ],
    tools: [
      { category: "Analytics", items: ["Google Analytics", "Semrush", "Ahrefs", "Hotjar"] },
      { category: "Advertising", items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads"] },
      { category: "Social", items: ["Hootsuite", "Buffer", "Canva", "Later"] },
      { category: "Email", items: ["Mailchimp", "SendGrid", "HubSpot", "ActiveCampaign"] },
    ],
  },
  {
    id: 5,
    slug: "data-and-ai",
    title: "Data and AI",
    shortTitle: "Data & AI",
    image: "/tags/service-ai.jpg",
    art: "/img/services/data-and-ai.svg",
    tags: ["Machine Learning", "Analytics", "Automation"],
    description: "Unlocking intelligent growth through predictive AI models and actionable data insights.",
    heroDescription:
      "Transform your business with cutting-edge AI solutions and data analytics that drive smarter decisions and automate complex processes.",
    subServices: [
      {
        title: "Machine Learning Solutions",
        description: "Custom ML models that learn from your data to predict outcomes and automate decisions.",
        features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      },
      {
        title: "Data Engineering",
        description: "Building robust data pipelines and infrastructure for reliable data processing.",
        features: ["ETL Pipeline Development", "Data Warehouse Design", "Real-time Data Processing"],
      },
      {
        title: "Business Intelligence",
        description: "Transforming raw data into actionable insights with interactive dashboards and reports.",
        features: ["Custom Dashboard Development", "KPI Tracking & Reporting", "Data Visualization"],
      },
      {
        title: "AI Automation",
        description: "Automating repetitive tasks and workflows with intelligent AI-powered solutions.",
        features: ["Process Automation", "Chatbot Development", "Document Processing"],
      },
    ],
    tools: [
      { category: "ML Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI"] },
      { category: "Data Tools", items: ["Apache Spark", "Airflow", "dbt", "Pandas"] },
      { category: "Visualization", items: ["Tableau", "Power BI", "D3.js", "Plotly"] },
      { category: "Cloud AI", items: ["AWS SageMaker", "Google AI", "Azure ML", "Vertex AI"] },
    ],
  },
  {
    id: 6,
    slug: "enterprise-softwares",
    title: "Enterprise Softwares",
    shortTitle: "Enterprise",
    image: "/tags/service-enterprise.jpg",
    art: "/img/services/enterprise-softwares.svg",
    tags: ["ERP", "CRM", "Integration"],
    description: "Modernizing complex workflows with unified, secure, and enterprise-grade digital systems.",
    heroDescription:
      "We build and integrate enterprise-grade software systems that streamline operations, improve collaboration, and drive organizational efficiency.",
    subServices: [
      {
        title: "ERP Solutions",
        description: "Comprehensive enterprise resource planning systems tailored to your business processes.",
        features: ["Custom ERP Development", "Module Integration", "Process Automation"],
      },
      {
        title: "CRM Development",
        description: "Customer relationship management systems that improve sales and customer satisfaction.",
        features: ["Sales Pipeline Management", "Customer Data Analytics", "Marketing Automation"],
      },
      {
        title: "System Integration",
        description: "Connecting disparate systems and tools into a unified, efficient ecosystem.",
        features: ["API Integration", "Legacy System Migration", "Data Synchronization"],
      },
      {
        title: "Enterprise Security",
        description: "Implementing robust security measures to protect your business-critical data and systems.",
        features: ["Security Audits", "Compliance Management", "Access Control Systems"],
      },
    ],
    tools: [
      { category: "Platforms", items: ["SAP", "Salesforce", "Microsoft Dynamics", "Oracle"] },
      { category: "Integration", items: ["MuleSoft", "Zapier", "Dell Boomi", "Apache Kafka"] },
      { category: "Security", items: ["OAuth 2.0", "SAML", "Okta", "Auth0"] },
      { category: "Monitoring", items: ["Datadog", "New Relic", "Splunk", "Grafana"] },
    ],
  },
  {
    id: 7,
    slug: "cloud-engineering",
    title: "Cloud Engineering",
    shortTitle: "Cloud Engineering",
    image: "/tags/service-cloud.jpg",
    art: "/img/services/cloud-engineering.svg",
    tags: ["AWS", "Azure", "DevOps"],
    description: "Deploying flexible, resilient cloud architectures to keep your operations seamless and secure.",
    heroDescription:
      "We architect, deploy, and manage cloud infrastructure that scales with your business while maintaining security and cost efficiency.",
    subServices: [
      {
        title: "Cloud Architecture",
        description: "Designing scalable, resilient cloud infrastructure tailored to your workload requirements.",
        features: ["Multi-Cloud Strategy", "Microservices Architecture", "Serverless Computing"],
      },
      {
        title: "Cloud Migration",
        description: "Seamlessly moving your applications and data to the cloud with minimal downtime.",
        features: ["Assessment & Planning", "Data Migration", "Application Refactoring"],
      },
      {
        title: "DevOps & CI/CD",
        description: "Implementing automated deployment pipelines for faster, more reliable releases.",
        features: ["Pipeline Automation", "Infrastructure as Code", "Container Orchestration"],
      },
      {
        title: "Cloud Security & Compliance",
        description: "Ensuring your cloud environment meets security standards and regulatory requirements.",
        features: ["Security Hardening", "Compliance Audits", "Disaster Recovery Planning"],
      },
    ],
    tools: [
      { category: "Cloud Providers", items: ["AWS", "Microsoft Azure", "Google Cloud", "Digital Ocean"] },
      { category: "Containers", items: ["Docker", "Kubernetes", "ECS", "Cloud Run"] },
      { category: "IaC", items: ["Terraform", "Pulumi", "CloudFormation", "Ansible"] },
      { category: "Monitoring", items: ["Prometheus", "Grafana", "CloudWatch", "Datadog"] },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
