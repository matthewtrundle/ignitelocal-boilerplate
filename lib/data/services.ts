export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  caseStudy: {
    title: string;
    description: string;
    result: string;
    image: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: Record<string, Service> = {
  'site-gen': {
    id: 'site-gen',
    title: 'AI-Powered Website Generation',
    description: 'We spin up blazing-fast Next.js sites in minutes—complete with Tailwind UI, automated content injection, and built-in SEO templates.',
    icon: 'website',
    steps: [
      {
        title: 'Input Your Brand Details',
        description: 'Provide your brand colors, logo, and basic business information through our intuitive onboarding form.'
      },
      {
        title: 'AI Content Generation',
        description: 'Our system analyzes your business and automatically generates professional copy tailored to your industry and audience.'
      },
      {
        title: 'Instant Deployment',
        description: 'Your fully-responsive, SEO-optimized website is deployed to a global CDN with a custom domain in under 30 minutes.'
      }
    ],
    benefits: [
      {
        title: 'Time Efficiency',
        description: 'Save weeks of development time with AI-powered site generation.',
        icon: 'clock'
      },
      {
        title: 'Cost Savings',
        description: 'Reduce development costs by up to 80% compared to traditional agencies.',
        icon: 'money'
      },
      {
        title: 'SEO Ready',
        description: 'Built-in schema markup and SEO best practices ensure optimal visibility.',
        icon: 'search'
      },
      {
        title: 'Mobile Responsive',
        description: 'Looks perfect on every device with responsive design baked in.',
        icon: 'mobile'
      }
    ],
    caseStudy: {
      title: 'Austin Bakery Sees 300% Traffic Increase',
      description: 'Sweet Treats Bakery needed a website refresh but lacked technical resources. Our AI-powered platform generated a conversion-focused site in under an hour.',
      result: 'Within 3 months, organic traffic increased by 300% and online orders grew by 250%.',
      image: '/images/Hero/ShopFront.png'
    },
    faqs: [
      {
        question: 'How long does it take to generate a website?',
        answer: 'Most websites are fully generated and deployed within 30 minutes after submitting your information through our onboarding form.'
      },
      {
        question: 'Can I make changes to the generated website?',
        answer: 'Absolutely! You\'ll have access to an intuitive content management system to update text, images, and other content without any coding knowledge.'
      },
      {
        question: 'Do I need to provide my own hosting?',
        answer: 'No, hosting is included with our service. Your website is deployed to a global CDN for fast loading times worldwide.'
      },
      {
        question: 'Is e-commerce functionality included?',
        answer: 'Basic e-commerce functionality is available with our standard package, with options to upgrade for more advanced selling features.'
      }
    ]
  },
  'chatbot': {
    id: 'chatbot',
    title: 'Custom AI Chatbot Integration',
    description: 'Intelligent, context-aware chatbots trained specifically on your business data to provide 24/7 customer support and lead generation.',
    icon: 'chat',
    steps: [
      {
        title: 'Data Collection',
        description: 'We gather your company knowledge base, FAQs, and customer interaction history to train your custom AI model.'
      },
      {
        title: 'Chatbot Training',
        description: 'Your data is processed through our specialized AI training pipeline to create a chatbot that speaks in your brand voice.'
      },
      {
        title: 'Seamless Integration',
        description: 'We deploy the chatbot to your website, mobile app, or social media platforms with minimal technical requirements.'
      }
    ],
    benefits: [
      {
        title: '24/7 Availability',
        description: 'Provide instant customer support around the clock without staffing concerns.',
        icon: 'clock'
      },
      {
        title: 'Reduced Support Costs',
        description: 'Decrease customer service expenses by up to 70% with automated first-line support.',
        icon: 'money'
      },
      {
        title: 'Increased Conversion',
        description: 'Convert more visitors by providing immediate answers to sales questions.',
        icon: 'chart'
      },
      {
        title: 'Continuous Learning',
        description: 'The AI improves over time, learning from each customer interaction.',
        icon: 'brain'
      }
    ],
    caseStudy: {
      title: 'Law Firm Automates Client Intake',
      description: 'Johnson & Partners were spending hours on initial client consultations. Our AI chatbot now handles preliminary case information gathering and qualification.',
      result: 'Attorney time spent on intake reduced by 65%, while qualified leads increased by 40%.',
      image: '/images/Hero/team-pair-programming.png'
    },
    faqs: [
      {
        question: 'How accurate is the AI chatbot?',
        answer: 'Our chatbots typically achieve 92-96% accuracy for domain-specific questions after initial training, and continuously improve through ongoing learning.'
      },
      {
        question: 'Can the chatbot handle complex conversations?',
        answer: 'Yes, our chatbots maintain context throughout conversations and can handle multi-turn interactions with clarifying questions when needed.'
      },
      {
        question: 'What languages are supported?',
        answer: 'Our chatbots support English by default, with options to add Spanish, French, German, and 20+ additional languages.'
      },
      {
        question: 'How is sensitive customer data handled?',
        answer: 'All data is encrypted in transit and at rest, with SOC 2 compliance and optional PII anonymization features.'
      }
    ]
  },
  'workflow': {
    id: 'workflow',
    title: 'End-to-End Workflow Automation',
    description: 'Streamline your business operations by automating repetitive tasks, approvals, data entry, and cross-platform workflows.',
    icon: 'workflow',
    steps: [
      {
        title: 'Process Mapping',
        description: 'Our consultants analyze your current workflows and identify high-impact automation opportunities.'
      },
      {
        title: 'Custom Automation Setup',
        description: 'We build tailored automation solutions that connect your existing tools and platforms.'
      },
      {
        title: 'Test and Optimize',
        description: 'Thorough testing ensures reliability, with continuous optimization to improve efficiency over time.'
      }
    ],
    benefits: [
      {
        title: 'Time Reclaimed',
        description: 'Eliminate manual tasks and free up to 30+ hours per employee each month.',
        icon: 'clock'
      },
      {
        title: 'Error Reduction',
        description: 'Minimize human error in data entry and processing by up to 95%.',
        icon: 'shield'
      },
      {
        title: 'Improved Consistency',
        description: 'Ensure every process follows the same steps with perfect consistency.',
        icon: 'repeat'
      },
      {
        title: 'Scalable Operations',
        description: 'Handle increased workloads without proportional increases in staffing.',
        icon: 'scale'
      }
    ],
    caseStudy: {
      title: 'Property Management Firm Saves 120+ Hours Monthly',
      description: 'Austin Rental Properties was drowning in paperwork for tenant applications, maintenance requests, and owner reporting. Our workflow automation transformed their operations.',
      result: 'Monthly administrative hours reduced from 160 to 40, with tenant satisfaction scores improving by 35%.',
      image: '/images/Hero/lifestyle-dev-workspace.png'
    },
    faqs: [
      {
        question: 'Which systems can you integrate with?',
        answer: 'We support 200+ popular business applications including Salesforce, QuickBooks, Google Workspace, Microsoft 365, Slack, Asana, and many more through direct APIs and Zapier connections.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Basic automation workflows can be implemented in 1-2 weeks, while complex enterprise solutions typically take 4-8 weeks depending on scope.'
      },
      {
        question: 'Do we need coding expertise on our team?',
        answer: 'No coding knowledge is required. We handle all technical aspects of implementation, and provide a user-friendly dashboard for monitoring and basic adjustments.'
      },
      {
        question: 'How secure is the automation platform?',
        answer: 'Our platform uses bank-level encryption, role-based access controls, and regular security audits to ensure your data remains protected.'
      }
    ]
  },
  'analytics': {
    id: 'analytics',
    title: 'AI-Driven Analytics Dashboards',
    description: 'Transform raw data into actionable insights with custom analytics dashboards that automatically surface opportunities and trends.',
    icon: 'analytics',
    steps: [
      {
        title: 'Data Source Integration',
        description: 'We connect to your existing data sources, from spreadsheets to enterprise databases and third-party platforms.'
      },
      {
        title: 'Custom Dashboard Creation',
        description: 'Our team designs intuitive, real-time dashboards focused on your most important business metrics.'
      },
      {
        title: 'AI Insight Generation',
        description: 'Proprietary AI algorithms continuously analyze your data to identify trends, anomalies, and actionable recommendations.'
      }
    ],
    benefits: [
      {
        title: 'Data Democracy',
        description: 'Make data accessible to everyone in your organization with easy-to-understand visualizations.',
        icon: 'people'
      },
      {
        title: 'Predictive Power',
        description: 'Anticipate market changes and customer behavior with AI-powered forecasting.',
        icon: 'chart'
      },
      {
        title: 'Unified View',
        description: 'Consolidate data from multiple sources into single-pane-of-glass dashboards.',
        icon: 'eye'
      },
      {
        title: 'Time-Sensitive Alerts',
        description: 'Receive notifications when metrics hit critical thresholds requiring attention.',
        icon: 'bell'
      }
    ],
    caseStudy: {
      title: 'E-commerce Brand Increases Margin by 22%',
      description: 'Sunset Apparel was struggling to identify their most profitable marketing channels and products. Our analytics platform unified their advertising, web, and sales data.',
      result: 'Within 3 months, they reallocated their marketing budget based on AI insights, increasing overall profit margin from 15% to 37%.',
      image: '/images/Hero/AIMesh.png'
    },
    faqs: [
      {
        question: 'What data sources can you integrate with?',
        answer: 'We support connections to Google Analytics, Facebook Ads, Google Ads, Shopify, Amazon Seller Central, QuickBooks, Xero, Salesforce, HubSpot, and dozens more platforms, plus custom database connections.'
      },
      {
        question: 'How are the dashboards accessed?',
        answer: 'Dashboards are available through a secure web portal accessible on any device, with optional mobile apps for iOS and Android. Data can also be exported to PDF or scheduled email reports.'
      },
      {
        question: 'Is historical data analysis included?',
        answer: 'Yes, we import and analyze your historical data during setup to establish baselines and identify long-term trends, typically going back 12-24 months.'
      },
      {
        question: 'How often is data refreshed?',
        answer: 'Standard dashboards refresh data every 6 hours, with options for hourly or real-time updates available for time-sensitive metrics.'
      }
    ]
  },
  'social': {
    id: 'social',
    title: 'Social Media Auto-Pilot',
    description: 'Put your social media marketing on autopilot with AI-generated content, intelligent posting schedules, and automated engagement management.',
    icon: 'social',
    steps: [
      {
        title: 'Content Strategy Development',
        description: 'We analyze your brand voice and audience to create a custom content strategy across platforms.'
      },
      {
        title: 'AI Content Creation',
        description: 'Our AI generates platform-specific posts, including text, image concepts, and hashtag strategies.'
      },
      {
        title: 'Automated Scheduling & Engagement',
        description: 'Content is automatically posted at optimal times, with AI handling routine comment responses and engagement.'
      }
    ],
    benefits: [
      {
        title: 'Consistent Presence',
        description: 'Maintain an active social media presence without daily manual effort.',
        icon: 'calendar'
      },
      {
        title: 'Higher Engagement',
        description: 'AI-optimized posting times increase visibility and engagement rates by up to 43%.',
        icon: 'heart'
      },
      {
        title: 'Brand Voice Consistency',
        description: 'Ensure all content maintains your exact brand voice and messaging standards.',
        icon: 'message'
      },
      {
        title: 'Multi-Platform Reach',
        description: 'Manage Facebook, Instagram, Twitter, LinkedIn, and TikTok from one unified system.',
        icon: 'share'
      }
    ],
    caseStudy: {
      title: 'Local Restaurant Chain Doubles Instagram Following',
      description: 'Taco Traditions had an inconsistent social media presence with sporadic posting. Our system created a content calendar with AI-generated posts and optimal scheduling.',
      result: 'Instagram following grew from 2,500 to 10,000+ in 6 months, with a 215% increase in social media-driven reservations.',
      image: '/images/Hero/ambient-particle-overlay.png'
    },
    faqs: [
      {
        question: 'How does the AI know our brand voice?',
        answer: 'We conduct a comprehensive onboarding process that includes analyzing your existing content, competitor research, and a brand voice questionnaire to calibrate the AI to your specific style and tone.'
      },
      {
        question: 'Can we review content before it posts?',
        answer: 'Yes, you can choose between fully automated posting or a review workflow where your team approves content before it goes live.'
      },
      {
        question: 'What types of content does the AI create?',
        answer: 'The AI generates text posts, image concepts with direction for your designer or our design team, carousel concepts, poll ideas, and hashtag strategies customized for each platform.'
      },
      {
        question: 'How does automated engagement work?',
        answer: 'The AI categorizes incoming comments and messages, automatically responding to common questions, thank-you notes, and simple inquiries while flagging more complex issues for human review.'
      }
    ]
  },
  'seo': {
    id: 'seo',
    title: 'Hyper-Targeted SEO Optimization',
    description: 'Dominate local search results with AI-powered SEO strategies tailored specifically to your business, location, and customer base.',
    icon: 'seo',
    steps: [
      {
        title: 'Comprehensive Site Audit',
        description: 'Our AI analyzes your entire web presence to identify technical issues, content gaps, and ranking opportunities.'
      },
      {
        title: 'Local Keyword Intelligence',
        description: 'We research and prioritize high-value local keywords with the perfect balance of volume and competition.'
      },
      {
        title: 'Implementation & Monitoring',
        description: 'Our team implements optimizations and continuously monitors performance, adjusting strategy based on results.'
      }
    ],
    benefits: [
      {
        title: 'Local Dominance',
        description: 'Capture the most valuable searches in your geographic service area.',
        icon: 'map'
      },
      {
        title: 'Technical Excellence',
        description: 'Fix hidden technical issues that may be hurting your rankings and user experience.',
        icon: 'code'
      },
      {
        title: 'Content Strategy',
        description: 'Develop ongoing content plans that target exactly what your customers are searching for.',
        icon: 'document'
      },
      {
        title: 'ROI-Focused',
        description: 'Focus exclusively on keywords and strategies that drive revenue, not vanity metrics.',
        icon: 'money'
      }
    ],
    caseStudy: {
      title: 'Local Plumber Captures 70% of Emergency Searches',
      description: 'Austin Emergency Plumbing was virtually invisible in Google search results despite 15 years in business. Our hyper-local SEO strategy transformed their online presence.',
      result: 'Now appearing in the top 3 results for 70% of emergency plumbing searches in their service area, resulting in a 340% increase in new customer calls.',
      image: '/images/Hero/bg-teal-bokeh.png'
    },
    faqs: [
      {
        question: 'How long before we see SEO results?',
        answer: 'Initial improvements typically appear within 30-60 days, with significant ranking changes in 3-6 months. Local SEO often shows faster results than national campaigns.'
      },
      {
        question: 'Do you handle Google Business Profile optimization?',
        answer: 'Yes, our local SEO packages include complete Google Business Profile optimization, including category selection, attributes, Q&A, review management, and regular posting.'
      },
      {
        question: 'What about link building?',
        answer: 'Our approach includes ethical link building focused on local relevance, including local business directories, chambers of commerce, industry associations, and earned media opportunities.'
      },
      {
        question: 'How do you track SEO performance?',
        answer: 'We provide a real-time dashboard showing your ranking positions, traffic, conversion rates, and return on investment, with monthly strategy calls to review performance and adjustments.'
      }
    ]
  },
  'ads': {
    id: 'ads',
    title: 'Programmatic Ad Campaign Automation',
    description: 'Maximize your advertising ROI with AI-managed campaigns that continuously optimize targeting, creative, and bidding across multiple platforms.',
    icon: 'ads',
    steps: [
      {
        title: 'Campaign Strategy Design',
        description: 'We develop a multi-platform advertising strategy based on your business goals, target audience, and budget.'
      },
      {
        title: 'Creative Development',
        description: 'Our team creates high-converting ad creative variants for testing and optimization.'
      },
      {
        title: 'AI Optimization Engine',
        description: 'Proprietary algorithms continuously monitor performance, adjusting targeting, bids, and creative to maximize ROI.'
      }
    ],
    benefits: [
      {
        title: 'Cross-Platform Management',
        description: 'Unified management of Google, Facebook, Instagram, LinkedIn, and programmatic display campaigns.',
        icon: 'globe'
      },
      {
        title: 'Dynamic Budget Allocation',
        description: 'AI automatically shifts budget to the best-performing channels and campaigns in real-time.',
        icon: 'money'
      },
      {
        title: 'Micro-Targeting',
        description: 'Reach exactly the right audience segments with precision targeting beyond manual capabilities.',
        icon: 'target'
      },
      {
        title: 'Creative Optimization',
        description: 'Continuous A/B testing of headlines, images, and copy to improve conversion rates.',
        icon: 'paint'
      }
    ],
    caseStudy: {
      title: 'Home Services Company Cuts Cost Per Lead by 64%',
      description: 'Austin Home Pros was spending $120 per lead on Google Ads with manual management. Our AI-driven approach transformed their digital advertising strategy.',
      result: 'Cost per lead reduced to $43 across all platforms, with 3.2x more monthly leads within the same overall budget.',
      image: '/images/Hero/Futurisitic_neural.png'
    },
    faqs: [
      {
        question: 'What ad platforms do you work with?',
        answer: 'We support Google Ads (Search, Display, YouTube), Meta (Facebook & Instagram), LinkedIn, TikTok, programmatic display networks, and connected TV advertising platforms.'
      },
      {
        question: 'What\'s the minimum recommended ad budget?',
        answer: 'Our automation platform is most effective with a minimum monthly ad spend of $3,000, though we can accommodate smaller budgets with adjusted service levels.'
      },
      {
        question: 'How often are campaigns optimized?',
        answer: 'The AI evaluates performance and makes micro-adjustments continuously throughout the day, with more significant strategic adjustments implemented weekly.'
      },
      {
        question: 'Do you provide transparent reporting?',
        answer: 'Yes, you receive 24/7 access to a comprehensive dashboard showing all campaign metrics, including impressions, clicks, conversions, costs, and ROAS, with complete visibility into how your budget is being allocated.'
      }
    ]
  }
};

export function getAllServiceIds(): string[] {
  return Object.keys(services);
}

export function getServiceData(id: string): Service {
  return services[id];
}
