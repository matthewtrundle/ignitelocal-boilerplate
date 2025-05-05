'use client';

import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data/services';
import { Hero } from '@/components/layout/Hero';
import { AnimatedTypography } from '@/components/ui/AnimatedTypography';
import { motion } from 'framer-motion';

// Metadata is in a separate file: app/services/metadata.ts

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="AI-powered automation solutions designed for local businesses"
        backgroundImage="/images/Hero/hero-storefront-ai-overlay.png"
        useGradient={false}
        ctaLink="/contact"
        ctaText="Request a Demo"
        secondaryCtaLink="#services-grid"
        secondaryCtaText="Browse Services"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedTypography
            variant="h2"
            animation="reveal"
            className="text-center mb-4"
          >
            Tailored AI Solutions
          </AnimatedTypography>

          <AnimatedTypography
            variant="p"
            animation="fade"
            delay={0.2}
            className="text-center mb-16 max-w-3xl mx-auto text-black dark:text-gray-300"
          >
            We've designed each of our services to solve specific challenges faced by local businesses. Explore our offerings and discover how we can help you grow.
          </AnimatedTypography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(services).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ignite text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            We can design a tailored package combining our services to meet your specific business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-ignite-accent text-ignite px-6 py-3 text-lg font-medium transition-colors hover:bg-ignite-accent/90"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
  };
  index: number;
}

// Service icon mapping
const getServiceIcon = (serviceId: string) => {
  const icons = {
    'site-gen': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <path d="M3 8L3 16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16V8M3 8V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V8M3 8H21M12 12H16M12 16H16" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'chatbot': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'workflow': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <path d="M9 6H20M9 12H20M9 18H20M4 6V6.01M4 12V12.01M4 18V18.01" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'analytics': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <path d="M8 18H21M8 12H21M8 6H21M3 18V18.01M3 12V12.01M3 6V6.01" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'social': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'seo': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <path d="M8 15H16M10.5858 10.5858L10.5858 10.5858C11.3668 11.3668 12.6332 11.3668 13.4142 10.5858C14.1953 9.80474 14.1953 8.53841 13.4142 7.75736C12.6332 6.9763 11.3668 6.9763 10.5858 7.75736C9.80474 8.53841 9.80474 9.80474 10.5858 10.5858ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'ads': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <path d="M15 15L21 21M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5ZM10 3V1M3 10H1M5.5 5.5L4 4M14.5 5.5L16 4M5.5 14.5L4 16M16 10H19" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return icons[serviceId as keyof typeof icons] || (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
      <path d="M9 3H15M3 9V15M9 21H15M21 9V15M3 12H6M12 3V6M18 12H21M12 18V21M6 12C6 9.79086 7.79086 8 10 8H14C16.2091 8 18 9.79086 18 12C18 14.2091 16.2091 16 14 16H10C7.79086 16 6 14.2091 6 12Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group border-2 hover:shadow-lg transition p-8 rounded-lg overflow-hidden flex flex-col
        ${index % 3 === 0 ? 'bg-ignite-purple/10 border-ignite-purple' : 
          index % 3 === 1 ? 'bg-ignite-pink/10 border-ignite-pink' : 
          'bg-ignite-gold/10 border-ignite-gold'}`}
    >
      <div>
        <div className="text-accent mb-4">
          {getServiceIcon(service.id)}
        </div>
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-black dark:text-gray-300 mb-6">{service.description}</p>
        <div className="mt-auto pt-4">
          <Link 
            href={`/services/${service.id}`}
            className="text-ignite-accent hover:underline font-medium flex items-center"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
