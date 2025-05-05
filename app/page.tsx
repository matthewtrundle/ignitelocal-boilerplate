import { Hero } from '@/components/layout/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { BenefitsGrid } from '@/components/services/BenefitsGrid';
import { ModularSolutions } from '@/components/features/ModularSolutions';
import { moduleSolutionsServices, moduleSolutionsRelations } from '@/lib/data/moduleSolutionsData';

// Example data for homepage
const homeHeroData = {
  title: "AI Automation for Local Business",
  subtitle: "Unlock the power of AI to transform your local business operations",
  description: "We help small businesses leverage cutting-edge AI technology to automate workflows, enhance customer experiences, and drive growth.",
};

const homeStepsData = [
  {
    title: "Book a Consultation",
    description: "Schedule a free discovery call to discuss your business goals and challenges."
  },
  {
    title: "Receive Custom Solution",
    description: "We'll design a tailored AI automation strategy specifically for your business needs."
  },
  {
    title: "Watch Your Business Scale",
    description: "Implement our solutions and see your efficiency and revenue grow."
  }
];

const homeBenefitsData = [
  {
    title: "Save Time",
    description: "Automate repetitive tasks and free up hours every day for strategic growth activities.",
    icon: "clock"
  },
  {
    title: "Cut Costs",
    description: "Reduce operational expenses by up to 40% through intelligent automation.",
    icon: "money"
  },
  {
    title: "Boost Revenue",
    description: "Reach more customers and convert at higher rates with AI-powered solutions.",
    icon: "chart"
  },
  {
    title: "Scale Effortlessly",
    description: "Grow your business without proportionally increasing headcount or complexity.",
    icon: "scale"
  }
];

export default function Home() {
  return (
    <>
      <Hero 
        title={homeHeroData.title}
        subtitle={homeHeroData.subtitle}
        description={homeHeroData.description}
        useGradient={true}
        ctaLink="/contact"
        ctaText="Get Started"
        secondaryCtaLink="/services"
        secondaryCtaText="Explore Services"
      />
      
      <HowItWorks 
        steps={homeStepsData} 
      />
      
      <ModularSolutions
        title="A fully integrated suite of AI services"
        subtitle="Reduce manual work, supercharge analytics, and launch new revenue streams for your local business."
        services={moduleSolutionsServices}
        relatedServices={moduleSolutionsRelations}
      />
      
      <BenefitsGrid 
        benefits={homeBenefitsData} 
      />

      <section className="py-20 bg-gradient-to-tr from-primary via-accent/50 to-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/10 opacity-30"></div>
        <div className="container-xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Ignite Your Business Growth?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join hundreds of local businesses that have transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-8 py-4 text-lg font-medium shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl hover:translate-y-[-2px]"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent text-white px-8 py-4 text-lg font-medium transition-all hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
