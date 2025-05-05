import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data/services';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ignite-navy text-white">
      <div className="container-xl py-12 relative">
        {/* Add semi-transparent pattern background */}
        <div className="absolute inset-0 opacity-10 bg-repeat pointer-events-none -z-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src="/images/LocalIgnite.ai Logo Design.png"
                width={180}
                height={48}
                alt="LocalIgnite.ai"
                unoptimized
              />
            </Link>
            <p className="text-white/80 text-sm mt-4">
              AI-powered automation solutions designed specifically for local businesses.
            </p>
            <div className="mt-6">
              <a 
                href="https://www.linkedin.com/in/allanhenslee/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:text-accent-hover transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-ignite-cyan">Services</h3>
            <ul className="space-y-2">
              {Object.values(services).slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="text-white hover:text-ignite-pink transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-ignite-pink">More Services</h3>
            <ul className="space-y-2">
              {Object.values(services).slice(4, 7).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="text-white hover:text-ignite-cyan transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-ignite-gold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-ignite-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-ignite-gold transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-ignite-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-ignite-purple">Austin, TX Office</h3>
              <address className="text-white not-italic">
                1234 Tech Drive, Suite 500<br />
                Austin, TX 78704<br />
                <a href="tel:+15125550123" className="hover:text-accent transition-colors">
                  (512) 555-0123
                </a>
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gradient-to-r from-ignite-purple/30 to-ignite-cyan/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            &copy; {currentYear} LocalIgnite.ai. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-white text-sm hover:text-ignite-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white text-sm hover:text-ignite-cyan transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
