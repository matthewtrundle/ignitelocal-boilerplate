import { Metadata } from 'next';
import { Hero } from '@/components/layout/Hero';
import { ContactForm } from '@/components/forms/ContactForm';
import { AnimatedTypography } from '@/components/ui/AnimatedTypography';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with LocalIgnite.ai for AI-powered solutions for your local business.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Let's discuss how we can help your business grow"
        backgroundImage="/images/Hero/lifestyle-dev-workspace.png"
        useGradient={false}
        ctaLink="#contact-form"
        ctaText="Send Message"
        secondaryCtaLink="tel:+15125550123"
        secondaryCtaText="Call Us"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <AnimatedTypography
                variant="h2"
                animation="reveal"
                className="mb-6"
              >
                Get in Touch
              </AnimatedTypography>
              
              <AnimatedTypography
                animation="fade"
                delay={0.2}
                className="mb-10 text-gray-600 dark:text-gray-300"
              >
                Have questions about our services or want to discuss your specific business needs? Fill out the form and our team will get back to you within 24 hours.
              </AnimatedTypography>
              
              <div className="bg-white dark:bg-ignite-accent/5 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 mb-8">
                <h3 className="text-xl font-semibold mb-4">Austin Office</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p className="flex items-start">
                    <svg className="mr-3 mt-1 w-5 h-5 text-ignite-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>1234 Tech Drive, Suite 500<br />Austin, TX 78704</span>
                  </p>
                  <p className="flex items-center">
                    <svg className="mr-3 w-5 h-5 text-ignite-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                    </svg>
                    <a href="tel:+15125550123" className="hover:text-ignite-accent">(512) 555-0123</a>
                  </p>
                  <p className="flex items-center">
                    <svg className="mr-3 w-5 h-5 text-ignite-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href="mailto:info@localignite.ai" className="hover:text-ignite-accent">info@localignite.ai</a>
                  </p>
                </div>
              </div>
              
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27569.79471471!2d-97.75351242089841!3d30.264903099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b503e351961f%3A0x122c69794f51787!2sDowntown%20Austin%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1651356868135!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LocalIgnite.ai Office Location"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-white dark:bg-ignite/5 p-6 md:p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-ignite to-ignite/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Connect With Us on LinkedIn</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Follow our journey and stay updated with the latest innovations in AI automation for local businesses.
          </p>
          <a
            href="https://www.linkedin.com/in/allanhenslee/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white text-ignite px-6 py-3 text-lg font-medium transition-colors hover:bg-gray-100"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Visit Our LinkedIn Profile
          </a>
        </div>
      </section>
    </>
  );
}
