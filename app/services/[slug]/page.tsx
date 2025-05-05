import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/layout/Hero';
import { ServiceSteps } from '@/components/services/ServiceSteps';
import { BenefitsGrid } from '@/components/services/BenefitsGrid';
import { FaqAccordion } from '@/components/services/FaqAccordion';
import { getAllServiceIds, getServiceData } from '@/lib/data/services';
import { generateServiceSchema } from '@/lib/schema/serviceSchema';

export async function generateStaticParams() {
  const serviceIds = getAllServiceIds();
  
  return serviceIds.map((id) => ({
    slug: id,
  }));
}

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  try {
    const service = getServiceData(params.slug);
    
    if (!service) {
      return {};
    }
    
    return {
      title: service.title,
      description: service.description,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
}

export default async function ServicePage({ params }: { params: any }) {
  const service = getServiceData(params.slug);
  
  if (!service) {
    notFound();
  }

  // Create JSON-LD schema
  const serviceSchema = generateServiceSchema(service);
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title={service.title}
        subtitle={service.description}
        backgroundImage="/images/Hero/hero-coworking-golden-hour.png"
        useGradient={false}
        ctaLink="/contact"
        ctaText="Get Started"
        secondaryCtaLink="#benefits"
        secondaryCtaText="View Benefits"
      />
      
      <ServiceSteps steps={service.steps} />
      
      <BenefitsGrid benefits={service.benefits} />
      
      <FaqAccordion faqs={service.faqs} />
      
      <section className="py-20 bg-ignite text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Take the first step towards revolutionizing your business with our {service.title} solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-ignite-accent text-ignite px-6 py-3 text-lg font-medium transition-colors hover:bg-ignite-accent/90"
            >
              Request a Demo
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white text-white px-6 py-3 text-lg font-medium transition-colors hover:bg-white/10"
            >
              Explore Other Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
