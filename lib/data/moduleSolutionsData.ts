// ModularSolutions data for the interactive grid component

export interface ModularService {
  id: string;
  name: string;
  icon: string; 
  description: string;
}

// Service definitions
export const moduleSolutionsServices: ModularService[] = [
  {
    id: 'site-gen',
    name: 'AI-Powered Website Generation',
    icon: 'site-gen',
    description: 'We spin up blazing-fast Next.js sites in minutes—complete with Tailwind UI, automated content injection, and built-in SEO templates.'
  },
  {
    id: 'chatbot',
    name: 'Custom AI Chatbot Integration',
    icon: 'chatbot',
    description: 'Intelligent, context-aware chatbots trained specifically on your business data to provide 24/7 customer support and lead generation.'
  },
  {
    id: 'workflow',
    name: 'End-to-End Workflow Automation',
    icon: 'workflow',
    description: 'Automate repetitive tasks across your business with custom AI workflows that save time and reduce errors.'
  },
  {
    id: 'analytics',
    name: 'AI-Driven Analytics Dashboards',
    icon: 'analytics',
    description: 'Get actionable insights from your business data with custom analytics dashboards that highlight key trends and opportunities.'
  },
  {
    id: 'social',
    name: 'Social Media Auto-Pilot',
    icon: 'social',
    description: 'Let AI handle your social media presence with automated content generation, scheduling, and engagement monitoring.'
  },
  {
    id: 'seo',
    name: 'Hyper-Targeted SEO Optimization',
    icon: 'seo',
    description: 'Our AI tools analyze search patterns in your local market to optimize your content for maximum visibility and conversion.'
  },
  {
    id: 'ads',
    name: 'Programmatic Ad Campaign Automation',
    icon: 'ads',
    description: 'Leverage AI to dynamically adjust your ad campaigns for optimal performance based on real-time results.'
  },
  {
    id: 'email',
    name: 'Intelligent Email Marketing',
    icon: 'email',
    description: 'Create personalized email campaigns that adapt based on recipient behavior and engagement patterns.'
  },
  {
    id: 'crm',
    name: 'Smart CRM Integration',
    icon: 'crm',
    description: 'Enhance your customer relationship management with AI-powered insights and automation tools.'
  }
];

// Define which services are related to each other for the connector lines
export const moduleSolutionsRelations: { [key: string]: string[] } = {
  'site-gen': ['chatbot', 'seo', 'analytics'],
  'chatbot': ['site-gen', 'crm', 'analytics'],
  'workflow': ['analytics', 'crm', 'email'],
  'analytics': ['site-gen', 'ads', 'seo'],
  'social': ['ads', 'analytics', 'seo'],
  'seo': ['site-gen', 'analytics', 'social'],
  'ads': ['analytics', 'social', 'seo'],
  'email': ['workflow', 'crm', 'analytics'],
  'crm': ['chatbot', 'workflow', 'email']
};
