export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  summary: string;
  benefits: string[];
  features: string[];
  whoItsFor: string;
  timeline: string;
  faqs: { q: string; a: string }[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Custom Website Development",
    shortTitle: "Websites",
    tagline: "Fast, conversion-focused websites for businesses that want to be found.",
    description:
      "WebsCraft builds custom websites for startups, local businesses, and growing companies. From brochure sites to multi-page platforms, every site is built for speed, search visibility, and conversion. We use modern frameworks like Next.js to deliver sites that load instantly, rank well on Google, and work perfectly on every device.",
    summary:
      "Get a custom website built with modern technology that loads fast, ranks on Google, and converts visitors into customers. Typical timeline: 2–4 weeks.",
    benefits: [
      "Fast load times improve Google rankings and user experience",
      "Mobile-first responsive design for all screen sizes",
      "Built on modern tech stack (Next.js, Tailwind CSS) for long-term maintainability",
      "SEO-optimized structure from day one — not bolted on later",
      "Easy to update and scale as your business grows",
    ],
    features: [
      "Responsive design for mobile, tablet, and desktop",
      "SEO metadata, Open Graph, and JSON-LD structured data",
      "Contact forms, WhatsApp integration, or appointment booking",
      "Google Analytics and Search Console setup",
      "Performance optimized for 90+ Lighthouse scores",
      "CMS integration if you want to edit content yourself",
    ],
    whoItsFor:
      "Startups needing a launch-ready site, local businesses (restaurants, clinics, salons, agencies) wanting an online presence, and growing companies redesigning an outdated site.",
    timeline:
      "Simple brochure sites: 1–2 weeks. Multi-page business sites: 2–3 weeks. Custom platforms: 3–5 weeks.",
    faqs: [
      {
        q: "How much does a business website cost?",
        a: "Website costs vary based on complexity. A simple 5-page business site typically ranges from ₹15,000–₹40,000. Custom websites with advanced features start at ₹50,000. Contact us for a free estimate based on your specific requirements.",
      },
      {
        q: "How long does it take to build a website?",
        a: "A standard business website takes 2–3 weeks from design to launch. More complex projects with custom functionality may take 4–6 weeks. We deliver in phases so you can see progress throughout.",
      },
      {
        q: "Do you include SEO when building the website?",
        a: "Yes. Every website we build includes proper meta tags, heading structure, semantic HTML, schema markup, and page speed optimization. These are the technical foundations of SEO. Content strategy and backlink building are separate services.",
      },
      {
        q: "Can I update the website myself after it's built?",
        a: "Yes. We can integrate a headless CMS (like Sanity or Strapi) that lets you edit text, images, and blog posts without touching code. If you prefer, we also offer monthly maintenance packages.",
      },
    ],
    icon: "Globe",
  },
  {
    slug: "ai-automation",
    title: "AI Automation Services",
    shortTitle: "AI Automation",
    tagline: "Replace manual work with AI-powered workflows that run 24/7.",
    description:
      "WebsCraft builds custom AI automation systems for businesses that want to reduce manual work, eliminate repetitive tasks, and scale operations without hiring more people. We create AI chatbots, workflow automation, document processing pipelines, and custom GPT integrations tailored to your business processes.",
    summary:
      "Automate repetitive tasks, customer enquiries, data entry, and document processing with custom AI systems. Reduce manual work by 60–80%. Typical timeline: 2–6 weeks.",
    benefits: [
      "Reduces manual data entry and administrative work significantly",
      "AI chatbots handle customer enquiries 24/7 without extra staff",
      "Workflow automation eliminates bottlenecks in business processes",
      "Document processing turns hours of manual review into seconds",
      "Custom GPT models trained on your business data provide instant answers",
    ],
    features: [
      "AI chatbots trained on your business documentation and FAQs",
      "Workflow automation connecting tools like Google Sheets, email, Slack, and CRM",
      "Document processing and data extraction from PDFs, images, and invoices",
      "WhatsApp and email automation for customer communication",
      "Custom AI agents for specific business tasks",
      "Integration with existing tools via API",
    ],
    whoItsFor:
      "Restaurants wanting to automate order taking, real estate agencies automating enquiry responses, clinics managing appointment scheduling, ecommerce stores automating customer support, and any business with repetitive manual processes.",
    timeline:
      "Simple chatbot or single workflow: 1–2 weeks. Multi-step automation: 3–5 weeks. Complex AI agent systems: 4–8 weeks.",
    faqs: [
      {
        q: "How can AI automation help my small business?",
        a: "AI automation can handle customer enquiries on WhatsApp or your website 24/7, automatically process invoices and documents, send follow-up emails, schedule appointments, and manage repetitive data entry tasks. This frees your team to focus on work that actually grows the business.",
      },
      {
        q: "Do I need technical knowledge to use AI automation?",
        a: "No. We build the system and hand it over ready to use. If you need to make changes, we provide a simple dashboard or handle updates for you. We also offer training sessions for your team.",
      },
      {
        q: "How much does AI automation cost?",
        a: "Cost depends on complexity. A WhatsApp chatbot starts at ₹15,000. Multi-step workflow automation ranges from ₹30,000–₹1,00,000. We provide a fixed-price quote before any work begins.",
      },
      {
        q: "Can AI automation integrate with my existing tools?",
        a: "Yes. We can connect automation systems with Google Sheets, Gmail, Slack, CRMs like Zoho or HubSpot, accounting software, and most tools with an API. If your tool has an API, we can integrate it.",
      },
    ],
    icon: "Bot",
  },
  {
    slug: "dashboard-development",
    title: "Dashboard & Analytics Development",
    shortTitle: "Dashboards",
    tagline: "Turn your business data into clear, actionable dashboards.",
    description:
      "WebsCraft builds custom dashboards and analytics platforms that give you real-time visibility into your business operations. Whether you need an admin panel, a client reporting dashboard, or a data visualization tool, we design and develop dashboards that are both powerful and easy to use.",
    summary:
      "Get a custom dashboard that visualizes your business data in real time. Sales reports, user analytics, operational metrics — all in one place. Typical timeline: 3–6 weeks.",
    benefits: [
      "Real-time visibility into key business metrics",
      "Custom reports and charts tailored to your data",
      "Role-based access — different views for staff, managers, and clients",
      "Data exports in PDF, CSV, or Excel formats",
      "Responsive design works on desktop and mobile",
    ],
    features: [
      "Interactive charts, graphs, and data tables",
      "Filter, search, and date range selection",
      "User authentication and role-based access control",
      "Export reports to PDF and CSV",
      "Real-time data updates via API integration",
      "Custom KPI tracking and goal monitoring",
    ],
    whoItsFor:
      "Businesses that need to track sales, operations, or user data in real time. Agencies wanting client reporting dashboards. SaaS companies needing admin panels. Any business drowning in spreadsheets.",
    timeline:
      "Simple admin dashboard: 2–3 weeks. Analytics dashboard with charts: 3–4 weeks. Complex multi-role dashboard: 4–7 weeks.",
    faqs: [
      {
        q: "What kind of data can be shown on a dashboard?",
        a: "Any data that can be measured: sales revenue, user signups, order volumes, customer enquiries, website traffic, inventory levels, employee performance, financial metrics, and more. If you have the data, we can visualize it.",
      },
      {
        q: "Can the dashboard update in real time?",
        a: "Yes. We can connect your dashboard to your database or API for real-time updates. You'll see new data as it comes in without refreshing the page.",
      },
      {
        q: "Can I give my clients access to their own dashboard?",
        a: "Yes. We build role-based access so each client sees only their own data. This is common for agencies, SaaS companies, and service providers who want to offer client portals.",
      },
    ],
    icon: "BarChart3",
  },
  {
    slug: "saas-development",
    title: "SaaS Platform Development",
    shortTitle: "SaaS",
    tagline: "From idea to subscription platform. We build SaaS products that scale.",
    description:
      "WebsCraft develops custom SaaS (Software as a Service) platforms for startups and businesses. We handle the entire journey from concept and architecture to development, deployment, and launch. Our SaaS platforms include user authentication, subscription billing, dashboards, and all the features needed to run a modern subscription business.",
    summary:
      "Launch your SaaS product with custom development. Includes user accounts, subscription billing, dashboard, and admin panel. Typical timeline: 6–14 weeks for MVP.",
    benefits: [
      "Full ownership — no platform lock-in or revenue sharing",
      "Custom features tailored to your specific market and users",
      "Subscription billing with Stripe or Razorpay integration",
      "Scalable architecture that grows with your user base",
      "Admin panel to manage users, subscriptions, and content",
    ],
    features: [
      "User authentication (email, Google, or social login)",
      "Subscription management with multiple pricing tiers",
      "Payment gateway integration (Razorpay, Stripe)",
      "User dashboard with analytics and settings",
      "Admin panel for managing users, orders, and content",
      "Email notifications and automated communication",
      "API for mobile app or third-party integrations",
    ],
    whoItsFor:
      "Startups building their first SaaS product, businesses transitioning from services to subscription models, and companies needing custom internal tools with SaaS architecture.",
    timeline:
      "MVP with core features: 6–10 weeks. Full-featured platform: 10–16 weeks. Enterprise SaaS with multiple integrations: 12–20 weeks.",
    faqs: [
      {
        q: "How much does it cost to build a SaaS platform?",
        a: "SaaS development costs vary widely based on complexity. An MVP with basic features starts around ₹2,00,000–₹5,00,000. More complex platforms with advanced features range from ₹5,00,000–₹15,00,000. We provide a detailed scope and fixed-price quote before starting.",
      },
      {
        q: "How long does it take to launch a SaaS product?",
        a: "A functional MVP can be launched in 6–10 weeks. We work in weekly sprints with continuous demos so you can see progress and provide feedback throughout.",
      },
      {
        q: "Do you handle payment integration?",
        a: "Yes. We integrate Razorpay (best for India) or Stripe (best for international) for subscription billing. We handle the full payment flow including trials, upgrades, downgrades, and cancellations.",
      },
      {
        q: "Can I add mobile apps later?",
        a: "Yes. We build API-first architectures so you can add React Native or Flutter mobile apps later without rebuilding the backend.",
      },
    ],
    icon: "Cloud",
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Website Development",
    shortTitle: "Ecommerce",
    tagline: "Custom online stores that convert visitors into paying customers.",
    description:
      "WebsCraft builds custom ecommerce websites for businesses that want to sell products or services online. From simple product catalogs with WhatsApp ordering to full-featured online stores with payment gateways, inventory management, and order tracking. We use modern frameworks to deliver fast, mobile-first shopping experiences.",
    summary:
      "Launch a custom online store with product management, cart, checkout, and payment integration. Or a simple catalog with WhatsApp ordering. Typical timeline: 3–6 weeks.",
    benefits: [
      "Custom design matched to your brand — not a generic theme",
      "Mobile-optimized shopping experience for maximum conversions",
      "Integrated with Razorpay, Stripe, or cash-on-delivery options",
      "Inventory and order management built in",
      "SEO-optimized product pages to drive organic traffic",
    ],
    features: [
      "Product catalog with categories, search, and filters",
      "Shopping cart and checkout flow",
      "Payment gateway integration",
      "Order management and tracking",
      "Inventory management",
      "Customer accounts and order history",
      "WhatsApp order notifications",
      "Admin panel for managing products and orders",
    ],
    whoItsFor:
      "Local businesses wanting to sell online (restaurants, bakeries, clothing stores, electronics), D2C brands launching their first online store, and businesses wanting to add ecommerce to an existing website.",
    timeline:
      "Catalog with WhatsApp ordering: 2–3 weeks. Full ecommerce with payments: 4–6 weeks. Complex marketplace: 8–12 weeks.",
    faqs: [
      {
        q: "How much does an ecommerce website cost?",
        a: "A basic online store with product catalog and WhatsApp ordering starts at ₹25,000. Full ecommerce with payment gateway, cart, and order management starts at ₹50,000. Contact us for a free estimate based on your product range and requirements.",
      },
      {
        q: "Can I manage products myself?",
        a: "Yes. We build an admin panel where you can add, edit, or remove products, update prices, manage inventory, and view orders — all without any technical knowledge.",
      },
      {
        q: "Do you integrate with existing payment gateways?",
        a: "Yes. We integrate with Razorpay, Stripe, PhonePe, and other popular payment gateways. We also support cash on delivery and bank transfer options.",
      },
    ],
    icon: "ShoppingCart",
  },
  {
    slug: "restaurant-websites",
    title: "Restaurant Website & Online Ordering",
    shortTitle: "Restaurants",
    tagline: "Restaurant websites with online ordering, menu display, and table reservations.",
    description:
      "WebsCraft builds custom restaurant websites that do more than look good. We create online ordering systems, digital menu displays, table reservation systems, and WhatsApp order integrations specifically for restaurants, cafes, cloud kitchens, and food businesses. Your customers can browse your menu and place orders directly from your website.",
    summary:
      "A complete restaurant website with online ordering, digital menu, table reservations, and WhatsApp order notifications. Typical timeline: 2–4 weeks.",
    benefits: [
      "Customers can order directly — no third-party commission fees",
      "Digital menu with photos, descriptions, and dietary filters",
      "WhatsApp notifications when new orders come in",
      "Table reservation system for dine-in customers",
      "Mobile-optimized — most customers will visit on their phone",
    ],
    features: [
      "Online food ordering system with cart and checkout",
      "Digital menu with categories, photos, and pricing",
      "WhatsApp integration for order confirmations",
      "Table reservation booking system",
      "Restaurant info: location, hours, contact, gallery",
      "Google Maps integration for directions",
      "Customer reviews or testimonial section",
    ],
    whoItsFor:
      "Restaurants, cafes, cloud kitchens, bakeries, fast-food outlets, and any food business that wants to accept direct orders without paying 20–30% commission to Zomato or Swiggy.",
    timeline:
      "Menu website with WhatsApp ordering: 1–2 weeks. Full online ordering system: 3–4 weeks. Multi-location restaurant platform: 5–7 weeks.",
    faqs: [
      {
        q: "Can customers order directly from my website?",
        a: "Yes. We build an online ordering system where customers browse your menu, add items to cart, and place orders for pickup or delivery. You receive instant WhatsApp and email notifications.",
      },
      {
        q: "How is this different from Zomato or Swiggy?",
        a: "Direct orders save you 20–30% commission fees. You own the customer relationship, their contact information, and order history. Your customers also appreciate supporting you directly.",
      },
      {
        q: "Do I need a tablet or POS system to manage orders?",
        a: "No. Orders come to your phone via WhatsApp and email. You can also access an admin dashboard on any device to manage the menu and view order history.",
      },
      {
        q: "How much does a restaurant website cost?",
        a: "A basic restaurant website with menu and WhatsApp ordering starts at ₹15,000. A full online ordering system starts at ₹30,000. Contact us for a free estimate.",
      },
    ],
    icon: "UtensilsCrossed",
  },
  {
    slug: "custom-software",
    title: "Custom Business Software Development",
    shortTitle: "Custom Software",
    tagline: "Tailored software solutions for your unique business processes.",
    description:
      "WebsCraft builds custom business software for companies that need solutions off-the-shelf products can't provide. CRM systems, inventory management, booking platforms, HR tools, internal dashboards, and operational tools — all built to match your exact workflow. If your business has a unique process, we can build the software to manage it.",
    summary:
      "Custom CRM, inventory, booking, or operations software built specifically for your business processes. No more forcing spreadsheets to do what software should. Typical timeline: 4–12 weeks.",
    benefits: [
      "Software that matches your exact workflow — not the other way around",
      "No monthly per-user fees like SaaS tools charge",
      "Integrates with your existing tools and databases",
      "You own the software completely — modify it anytime",
      "Scalable from a single team to enterprise-wide deployment",
    ],
    features: [
      "Custom database design for your specific data",
      "User authentication and role-based permissions",
      "Dashboard with key business metrics",
      "Data import/export (CSV, Excel, PDF)",
      "Email and WhatsApp notifications",
      "Admin panel for configuration",
      "API for integration with other tools",
      "Mobile-responsive web interface",
    ],
    whoItsFor:
      "Businesses with unique processes that generic software can't handle, companies tired of managing operations through spreadsheets, and organizations wanting to digitize manual workflows.",
    timeline:
      "Simple internal tool: 3–5 weeks. CRM or management system: 6–10 weeks. Complex enterprise platform: 10–18 weeks.",
    faqs: [
      {
        q: "Why shouldn't I just use a SaaS tool instead of custom software?",
        a: "If an off-the-shelf tool perfectly matches your needs, use it. Custom software is better when your business has unique processes, when you're paying for features you never use, or when you need integration between multiple systems that don't talk to each other.",
      },
      {
        q: "How much does custom business software cost?",
        a: "Cost depends on complexity and scope. Simple internal tools start at ₹50,000. Full-featured CRM or management systems range from ₹1,00,000–₹5,00,000. We provide a detailed scope and fixed-price quote before development begins.",
      },
      {
        q: "Who owns the software after it's built?",
        a: "You do. Upon full payment, you own all the code, designs, and intellectual property. There are no licensing fees or ongoing payments to us (unless you choose a maintenance contract).",
      },
    ],
    icon: "Code2",
  },
];
