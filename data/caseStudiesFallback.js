// Static fallback for case studies (used when the live API is unavailable).
// Live data comes from `${API_BASE_URL}/case-studies/`; see lib/api.js.
export const caseStudiesFallback = [
  {
    id: "1",
    slug: "ecommerce-platform-revamp",
    title: "E-Commerce Platform Revamp for ShopZone",
    client: "ShopZone",
    industry: "E-Commerce",
    excerpt:
      "Transformed an outdated e-commerce platform into a modern, high-performance shopping experience that boosted conversions by 150%.",
    image: "/tags/case-study-1.jpg",
    tags: ["Web Development", "UI/UX Design", "Cloud"],
    challenge:
      "ShopZone's legacy platform was slow, had poor mobile experience, and couldn't handle growing traffic. Cart abandonment was at 78% and page load times exceeded 8 seconds.",
    solution:
      "We rebuilt the entire platform using React with a headless CMS, implemented progressive web app features, optimized the checkout flow to 3 steps, and deployed on scalable cloud infrastructure.",
    results: [
      { metric: "Conversion Rate Increase", value: "150%" },
      { metric: "Page Load Time", value: "1.2s" },
      { metric: "Cart Abandonment Reduction", value: "45%" },
      { metric: "Mobile Traffic Growth", value: "200%" },
    ],
    content: `## Project Overview

ShopZone approached TAG Solutions with a critical problem: their legacy e-commerce platform was failing to keep up with customer expectations and growing traffic demands.

### The Challenge

The existing platform was built on outdated technology that resulted in:
- Page load times exceeding 8 seconds on mobile devices
- A cart abandonment rate of 78%
- No mobile-responsive design
- Limited scalability during peak seasons

### Our Approach

We conducted a thorough audit of the existing system and designed a phased migration strategy to minimize business disruption.

**Phase 1: Discovery & Design**
We performed user research, competitive analysis, and created a comprehensive design system with mobile-first principles.

**Phase 2: Development**
Built a modern React-based frontend with a headless commerce architecture, enabling lightning-fast page loads and seamless mobile experiences.

**Phase 3: Optimization & Launch**
Implemented A/B testing, performance optimization, and a gradual rollout strategy that ensured zero downtime during migration.

### Results

The new platform delivered exceptional results within the first 3 months of launch, exceeding all projected KPIs and setting a new standard for ShopZone's digital presence.`,
  },
  {
    id: "2",
    slug: "healthcare-mobile-app",
    title: "Healthcare Mobile App for MediCare Plus",
    client: "MediCare Plus",
    industry: "Healthcare",
    excerpt: "Built a HIPAA-compliant mobile app that streamlined patient scheduling and reduced no-show rates by 60%.",
    image: "/tags/case-study-2.jpg",
    tags: ["Mobile Development", "Healthcare", "UI/UX Design"],
    challenge:
      "MediCare Plus struggled with manual appointment scheduling, high no-show rates, and lack of digital patient engagement. Staff spent 40% of their time on phone-based scheduling.",
    solution:
      "We developed a cross-platform mobile app with automated scheduling, push notification reminders, telehealth integration, and a patient portal for medical records access.",
    results: [
      { metric: "No-Show Rate Reduction", value: "60%" },
      { metric: "Staff Time Saved", value: "35hrs/week" },
      { metric: "Patient Satisfaction", value: "4.8/5" },
      { metric: "App Downloads", value: "50K+" },
    ],
    content: `## Project Overview

MediCare Plus needed a modern digital solution to improve patient engagement and operational efficiency across their network of 15 clinics.

### The Challenge

- Manual phone-based scheduling consuming 40% of staff time
- No-show rates averaging 30%, causing significant revenue loss
- No digital patient engagement or communication channel
- Paper-based medical records creating inefficiencies

### Our Approach

**Phase 1: Research & Compliance**
We began with extensive stakeholder interviews and ensured all designs met HIPAA compliance requirements from day one.

**Phase 2: App Development**
Built a React Native app with features including smart scheduling, push notifications, telehealth video calls, and secure document sharing.

**Phase 3: Integration & Training**
Integrated with existing EHR systems and provided comprehensive staff training for the new digital workflow.

### Results

The app transformed how MediCare Plus interacts with patients, leading to dramatic improvements in efficiency and satisfaction scores.`,
  },
  {
    id: "3",
    slug: "fintech-dashboard-solution",
    title: "Fintech Dashboard for PayStream",
    client: "PayStream",
    industry: "Fintech",
    excerpt: "Designed and developed a real-time financial analytics dashboard that processes over 1M transactions daily.",
    image: "/tags/case-study-3.jpg",
    tags: ["Software Development", "Data & AI", "Cloud"],
    challenge:
      "PayStream needed a real-time dashboard to monitor millions of daily transactions, detect fraud patterns, and provide actionable insights to their operations team.",
    solution:
      "We built a high-performance dashboard using React with WebSocket connections for real-time data, integrated ML-based fraud detection, and deployed on a microservices architecture.",
    results: [
      { metric: "Transactions Monitored", value: "1M+/day" },
      { metric: "Fraud Detection Speed", value: "< 2s" },
      { metric: "False Positives Reduced", value: "70%" },
      { metric: "Operational Cost Savings", value: "40%" },
    ],
    content: `## Project Overview

PayStream, a rapidly growing fintech company, needed a robust dashboard to manage their expanding transaction volume and strengthen fraud prevention.

### The Challenge

- Processing over 1 million transactions daily with no real-time visibility
- Fraud detection relied on manual review, causing delays
- Existing reporting tools couldn't handle the data volume
- Operations team lacked actionable insights

### Our Approach

**Phase 1: Architecture Design**
Designed a microservices architecture with event-driven processing to handle high-throughput data streams.

**Phase 2: Dashboard Development**
Built an interactive dashboard with real-time charts, anomaly detection alerts, and drill-down capabilities using React and D3.js.

**Phase 3: ML Integration**
Integrated machine learning models for automated fraud detection with human-in-the-loop verification.

### Results

The dashboard became the central command center for PayStream's operations, dramatically improving their ability to detect and prevent fraudulent transactions.`,
  },
  {
    id: "4",
    slug: "logistics-management-system",
    title: "Supply Chain Platform for LogiTrack",
    client: "LogiTrack",
    industry: "Logistics",
    excerpt:
      "Built an end-to-end supply chain management platform that reduced delivery times by 35% and operational costs by 25%.",
    image: "/tags/case-study-4.jpg",
    tags: ["Enterprise Solutions", "Cloud", "Software Development"],
    challenge:
      "LogiTrack managed logistics across 12 countries with disconnected systems, manual tracking, and no real-time visibility into shipment status.",
    solution:
      "We built a unified platform with GPS tracking, automated routing optimization, warehouse management, and predictive analytics for demand forecasting.",
    results: [
      { metric: "Delivery Time Reduction", value: "35%" },
      { metric: "Operational Cost Savings", value: "25%" },
      { metric: "Real-time Visibility", value: "100%" },
      { metric: "Countries Connected", value: "12" },
    ],
    content: `## Project Overview

LogiTrack needed to unify their fragmented logistics operations across 12 countries into a single, intelligent platform.

### The Challenge

- Disconnected systems across 12 countries with no unified view
- Manual shipment tracking leading to delays and errors
- Inefficient routing costing millions in fuel and time
- No predictive capabilities for demand planning

### Our Approach

**Phase 1: System Audit & Planning**
Mapped all existing workflows across regions and identified integration points and automation opportunities.

**Phase 2: Platform Development**
Built a cloud-native platform with real-time GPS tracking, automated route optimization using ML, and centralized warehouse management.

**Phase 3: Global Rollout**
Phased deployment across all 12 countries with localization, training, and 24/7 support during transition.

### Results

The platform unified LogiTrack's global operations, providing unprecedented visibility and dramatically improving efficiency across the entire supply chain.`,
  },
  {
    id: "5",
    slug: "real-estate-marketplace",
    title: "Property Marketplace for HomeFind",
    client: "HomeFind",
    industry: "Real Estate",
    excerpt: "Created a modern property marketplace with AI-powered recommendations that increased user engagement by 180%.",
    image: "/tags/case-study-5.jpg",
    tags: ["Web Development", "Data & AI", "Marketing"],
    challenge:
      "HomeFind's outdated listing platform had poor search functionality, no personalization, and was losing market share to more modern competitors.",
    solution:
      "We rebuilt the marketplace with advanced search filters, map-based browsing, AI-powered property recommendations, virtual tour integration, and a mobile-first responsive design.",
    results: [
      { metric: "User Engagement", value: "+180%" },
      { metric: "Listing Inquiries", value: "+120%" },
      { metric: "Average Session Duration", value: "8 min" },
      { metric: "Mobile Users", value: "+250%" },
    ],
    content: `## Project Overview

HomeFind wanted to transform their property listing platform into a modern marketplace that could compete with industry leaders.

### The Challenge

- Outdated search with limited filtering options
- No personalization or recommendation engine
- Poor mobile experience losing potential buyers
- Declining market share against modern competitors

### Our Approach

**Phase 1: Market Research & UX Design**
Conducted user interviews and competitive analysis to identify key differentiators and user pain points.

**Phase 2: Platform Rebuild**
Developed a modern web platform with map-based search, virtual tours, and AI-powered property recommendations based on user behavior.

**Phase 3: SEO & Marketing**
Implemented comprehensive SEO strategy and content marketing to drive organic traffic growth.

### Results

The new marketplace quickly became the go-to platform for property seekers in the region, with metrics far exceeding initial targets.`,
  },
  {
    id: "6",
    slug: "edtech-learning-platform",
    title: "Learning Platform for EduSpark",
    client: "EduSpark",
    industry: "Education",
    excerpt:
      "Developed a comprehensive LMS platform serving 100K+ students with interactive courses, live sessions, and AI-powered assessments.",
    image: "/tags/case-study-6.jpg",
    tags: ["Web Development", "Mobile Development", "Cloud"],
    challenge:
      "EduSpark needed to scale from in-person classes to a digital-first learning model that could serve thousands of students simultaneously with engaging, interactive content.",
    solution:
      "We built a full-featured LMS with video streaming, interactive quizzes, live session capabilities, progress tracking, and AI-powered personalized learning paths.",
    results: [
      { metric: "Active Students", value: "100K+" },
      { metric: "Course Completion Rate", value: "85%" },
      { metric: "Student Satisfaction", value: "4.9/5" },
      { metric: "Revenue Growth", value: "300%" },
    ],
    content: `## Project Overview

EduSpark, a growing education company, needed to transition from traditional classroom teaching to a scalable digital learning platform.

### The Challenge

- Limited to in-person classes with no digital presence
- Couldn't scale beyond local geography
- No way to track student progress or outcomes
- Competitors already had established online platforms

### Our Approach

**Phase 1: Platform Design**
Designed an intuitive learning experience with gamification elements, progress tracking, and social learning features.

**Phase 2: Development & Content Tools**
Built the platform with video streaming, interactive assessments, live session capabilities, and a content management system for instructors.

**Phase 3: AI Integration**
Implemented AI-powered personalized learning paths that adapt to each student's pace and performance.

### Results

EduSpark went from serving hundreds of local students to over 100,000 active learners across multiple countries within the first year of launch.`,
  },
];
