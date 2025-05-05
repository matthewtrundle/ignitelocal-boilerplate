'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { services } from '@/lib/data/services';

// Service icon mapping
const getServiceIcon = (serviceId: string) => {
  const icons = {
    'site-gen': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-accent">
        <path d="M3 8L3 16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16V8M3 8V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V8M3 8H21M12 12H16M12 16H16" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'chatbot': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-accent">
        <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'workflow': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-accent">
        <path d="M9 6H20M9 12H20M9 18H20M4 6V6.01M4 12V12.01M4 18V18.01" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'analytics': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-accent">
        <path d="M8 18H21M8 12H21M8 6H21M3 18V18.01M3 12V12.01M3 6V6.01" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'social': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-accent">
        <path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'seo': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-accent">
        <path d="M8 15H16M10.5858 10.5858L10.5858 10.5858C11.3668 11.3668 12.6332 11.3668 13.4142 10.5858C14.1953 9.80474 14.1953 8.53841 13.4142 7.75736C12.6332 6.9763 11.3668 6.9763 10.5858 7.75736C9.80474 8.53841 9.80474 9.80474 10.5858 10.5858ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'ads': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-accent">
        <path d="M15 15L21 21M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5ZM10 3V1M3 10H1M5.5 5.5L4 4M14.5 5.5L16 4M5.5 14.5L4 16M16 10H19" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return icons[serviceId as keyof typeof icons] || (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-accent">
      <path d="M9 3H15M3 9V15M9 21H15M21 9V15M3 12H6M12 3V6M18 12H21M12 18V21M6 12C6 9.79086 7.79086 8 10 8H14C16.2091 8 18 9.79086 18 12C18 14.2091 16.2091 16 14 16H10C7.79086 16 6 14.2091 6 12Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-surface/80 backdrop-blur-xl shadow-md py-2 border-b border-white/10' 
        : 'bg-transparent py-4'
    )}>
      <div className="container-xl flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/LocalIgnite.ai Logo Design.png"
            width={150}
            height={40}
            alt="LocalIgnite.ai"
            priority
            unoptimized
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className={cn(
              "font-medium flex items-center border-transparent transition-colors duration-200",
              isScrolled 
                ? 'text-ignite-navy hover:text-ignite-cyan underline' 
                : 'text-white hover:text-white'
            )}>
              Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-lg p-3 rounded-lg shadow-xl border border-ignite-cyan/10">
                <div className="py-1 rounded-md">
                  {Object.values(services).map((service, index) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="flex items-center px-4 py-3 text-sm text-navy hover:bg-gradient-to-r hover:from-ignite-cyan/10 hover:to-ignite-purple/10 hover:text-accent rounded-md transition-all"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {getServiceIcon(service.id)}
                      <span className="font-semibold">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link href="/contact" className="text-white hover:text-ignite-cyan font-medium relative group">
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ignite-cyan group-hover:w-full transition-all duration-300"></span>
            Contact
          </Link>
          <Button asChild variant="gradient-animated" size="sm">
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-primary"
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border shadow-lg">
          <div className="container mx-auto py-4 px-4 space-y-4">
            <div className="border-b border-border pb-2">
              <p className="font-medium text-primary text-sm mb-3">Services</p>
              <div className="space-y-1">
                {Object.values(services).map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="flex items-center py-2 px-2 text-primary hover:text-accent text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {getServiceIcon(service.id)}
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              href="/contact" 
              className="block py-2 text-primary hover:text-accent font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild variant="primary" fullWidth={true}>
              <Link 
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
