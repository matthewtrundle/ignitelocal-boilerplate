'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface Related {
  [key: string]: string[];
}

interface ModularSolutionsProps {
  title: string;
  subtitle: string;
  services: Service[];
  relatedServices: Related;
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
    ),
    'email': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <path d="M3 8L10.7348 13.4886C11.2163 13.8195 11.457 13.9849 11.7155 14.0519C11.9408 14.1111 12.1764 14.1111 12.4017 14.0519C12.6602 13.9849 12.9009 13.8195 13.3825 13.4886L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'crm': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <path d="M18 18.7023C18.6275 18.3065 19 17.6288 19 16.8659C19 15.4793 17.6569 14.3493 16 14.3493C14.3431 14.3493 13 15.4793 13 16.8659C13 17.6288 13.3725 18.3065 14 18.7023M18 18.7023C17.4291 19.0172 16.7418 19.1993 16 19.1993C15.2582 19.1993 14.5709 19.0172 14 18.7023M18 18.7023C19.2238 19.3968 20 20.4991 20 21.7329M14 18.7023C12.7762 19.3968 12 20.4991 12 21.7329M10 11.9329C10.5967 11.5517 11 10.8843 11 10.1329C11 8.9283 10.1046 7.9329 9 7.9329C7.89543 7.9329 7 8.9283 7 10.1329C7 10.8843 7.40326 11.5517 8 11.9329M10 11.9329C9.54916 12.1444 9.03237 12.2662 8.49614 12.3051C8.33188 12.3171 8.16615 12.3232 8 12.3232C7.83385 12.3232 7.66812 12.3171 7.50386 12.3051C6.96763 12.2662 6.45084 12.1444 6 11.9329M10 11.9329C11.1411 12.5892 12 13.7537 12 15.1329V16.7329C12 17.129 11.8945 17.5088 11.7028 17.8535M6 11.9329C4.85886 12.5892 4 13.7537 4 15.1329V16.7329C4 18.9421 5.79086 20.7329 8 20.7329H9.8M16 11.1329C17.1046 11.1329 18 10.1375 18 8.9329C18 7.7283 17.1046 6.7329 16 6.7329M14.5 4.7329C15.0523 4.2329 15.4067 3.47959 15.4067 2.7329C15.4067 1.5283 14.5113 0.532898 13.4067 0.532898C12.6431 0.532898 11.989 0.888656 11.6123 1.4412" 
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

export const ModularSolutions = ({ 
  title, 
  subtitle, 
  services, 
  relatedServices 
}: ModularSolutionsProps) => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Find the active service data
  const activeServiceData = activeService 
    ? services.find(s => s.id === activeService) 
    : null;
  
  // Get related services for the active service
  const relatedServiceIds = activeService && relatedServices[activeService] 
    ? relatedServices[activeService] 
    : [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
            {/* Left panel */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">{title}</h2>
              <p className="text-lg text-[#334E68]">
                {subtitle}
              </p>
              
              {/* Active Service Details */}
              {activeServiceData && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 p-6 bg-white rounded-2xl shadow-xl border-2 border-ignite-cyan/20"
                >
                  <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-ignite-purple to-ignite-cyan">
                    {activeServiceData.name}
                  </h3>
                  <p className="text-[#334E68]">
                    {activeServiceData.description}
                  </p>
                </motion.div>
              )}
            </div>
          
          {/* Right Panel - Interactive Service Grid */}
          <div className="relative">
            {/* 3x3 Grid of Service Icons */}
            <div 
              ref={gridRef}
              className="grid grid-cols-3 gap-6"
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isActive={service.id === activeService}
                  isRelated={relatedServiceIds.includes(service.id)}
                  onHover={() => setActiveService(service.id)}
                  onLeave={() => setActiveService(null)}
                  index={index}
                />
              ))}
            </div>
            
            {/* SVG Connector Lines */}
            {activeService && gridRef.current && (
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-0" 
                style={{ overflow: 'visible' }}
              >
                {relatedServiceIds.map((relatedId) => (
                  <ConnectorLine
                    key={`${activeService}-${relatedId}`}
                    fromId={activeService}
                    toId={relatedId}
                    services={services}
                    gridRef={gridRef}
                  />
                ))}
              </svg>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  isRelated: boolean;
  onHover: () => void;
  onLeave: () => void;
}

// Map service IDs to vibrant color themes
const getServiceColorClass = (serviceId: string) => {
  const colorMap: Record<string, { 
    textColor: string, 
    bgGradient: string, 
    borderColor: string,
    iconGradient: string,
    hoverGradient: string,
    patternColor: string
  }> = {
    'site-gen': {
      textColor: 'from-service-blue-from to-service-blue-to',
      bgGradient: 'from-service-blue-from/15 to-service-blue-to/20',
      borderColor: 'border-service-blue-to/40',
      iconGradient: 'from-service-blue-from to-service-blue-to',
      hoverGradient: 'from-service-blue-from/25 to-service-blue-to/30',
      patternColor: '0066FF'
    },
    'chatbot': {
      textColor: 'from-service-purple-from to-service-purple-to',
      bgGradient: 'from-service-purple-from/15 to-service-purple-to/20',
      borderColor: 'border-service-purple-to/40',
      iconGradient: 'from-service-purple-from to-service-purple-to',
      hoverGradient: 'from-service-purple-from/25 to-service-purple-to/30',
      patternColor: '8A2BE2'
    },
    'workflow': {
      textColor: 'from-service-green-from to-service-green-to',
      bgGradient: 'from-service-green-from/15 to-service-green-to/20',
      borderColor: 'border-service-green-to/40',
      iconGradient: 'from-service-green-from to-service-green-to',
      hoverGradient: 'from-service-green-from/25 to-service-green-to/30',
      patternColor: '00CC66'
    },
    'analytics': {
      textColor: 'from-service-amber-from to-service-amber-to',
      bgGradient: 'from-service-amber-from/15 to-service-amber-to/20',
      borderColor: 'border-service-amber-to/40',
      iconGradient: 'from-service-amber-from to-service-amber-to',
      hoverGradient: 'from-service-amber-from/25 to-service-amber-to/30',
      patternColor: 'FFD700'
    },
    'social': {
      textColor: 'from-service-pink-from to-service-pink-to',
      bgGradient: 'from-service-pink-from/15 to-service-pink-to/20',
      borderColor: 'border-service-pink-to/40',
      iconGradient: 'from-service-pink-from to-service-pink-to',
      hoverGradient: 'from-service-pink-from/25 to-service-pink-to/30',
      patternColor: 'FF00FF'
    },
    'seo': {
      textColor: 'from-service-teal-from to-service-teal-to',
      bgGradient: 'from-service-teal-from/15 to-service-teal-to/20',
      borderColor: 'border-service-teal-to/40',
      iconGradient: 'from-service-teal-from to-service-teal-to',
      hoverGradient: 'from-service-teal-from/25 to-service-teal-to/30',
      patternColor: '00CED1'
    },
    'ads': {
      textColor: 'from-service-orange-from to-service-orange-to',
      bgGradient: 'from-service-orange-from/15 to-service-orange-to/20',
      borderColor: 'border-service-orange-to/40',
      iconGradient: 'from-service-orange-from to-service-orange-to',
      hoverGradient: 'from-service-orange-from/25 to-service-orange-to/30',
      patternColor: 'FF4500'
    }
  };
  
  return colorMap[serviceId] || {
    textColor: 'from-accent to-accent-hover',
    bgGradient: 'from-accent/15 to-accent-hover/20',
    borderColor: 'border-accent/40',
    iconGradient: 'from-accent to-accent-hover',
    hoverGradient: 'from-accent/25 to-accent-hover/30',
    patternColor: '1AD6E6'
  };
};

const ServiceCard = ({ service, isActive, isRelated, onHover, onLeave, index }: ServiceCardProps & { index: number }) => {
  const colors = getServiceColorClass(service.id);
  
  // Get ignite accent color classes based on index
  const getIgniteAccentClass = (index: number) => {
    const accentClasses = [
      {
        background: 'bg-ignite-purple/10',
        border: 'border-ignite-purple',
        text: 'text-ignite-purple',
        hover: 'group-hover:text-ignite-purple'
      },
      {
        background: 'bg-ignite-pink/10',
        border: 'border-ignite-pink',
        text: 'text-ignite-pink',
        hover: 'group-hover:text-ignite-pink'
      },
      {
        background: 'bg-ignite-cyan/10',
        border: 'border-ignite-cyan',
        text: 'text-ignite-cyan',
        hover: 'group-hover:text-ignite-cyan'
      },
      {
        background: 'bg-ignite-gold/10',
        border: 'border-ignite-gold',
        text: 'text-ignite-gold',
        hover: 'group-hover:text-ignite-gold'
      },
      {
        background: 'bg-ignite-navy/10',
        border: 'border-ignite-navy',
        text: 'text-ignite-navy',
        hover: 'group-hover:text-ignite-navy'
      }
    ];
    return accentClasses[index % accentClasses.length];
  };
  
  // Generate dynamic classes based on state and service type
  const cardClasses = cn(
    "relative rounded-xl overflow-hidden transition-all duration-300 group border-2 hover:shadow-lg transition p-8",
    "flex flex-col items-center justify-center h-36",
    isActive 
      ? `bg-gradient-to-br ${colors.bgGradient} border-2 ${colors.borderColor} shadow-lg` 
      : isRelated
        ? `${getIgniteAccentClass(index).background} ${getIgniteAccentClass(index).border} shadow-md`
        : `${getIgniteAccentClass(index).background} ${getIgniteAccentClass(index).border}`,
  );
  
  // Icon color class
  const iconColorClass = isActive || isRelated
    ? `text-gradient bg-gradient-to-r ${colors.textColor}`
    : "text-primary";

  return (
    <motion.div
      className={cardClasses}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17
      }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      <motion.div 
        className="flex justify-center items-center mb-3"
        animate={isActive ? { y: [0, -5, 0] } : {}}
        transition={{ 
          repeat: isActive ? Infinity : 0, 
          repeatType: "reverse", 
          duration: 2
        }}
      >
        <div className={iconColorClass}>
          {getServiceIcon(service.id)}
        </div>
      </motion.div>
      
      <motion.p 
        className={cn(
          "text-sm text-center font-semibold",
          isActive || isRelated
            ? `bg-clip-text text-transparent bg-gradient-to-r ${colors.textColor}`
            : getIgniteAccentClass(index).text
        )}
        animate={isActive ? { opacity: [0.8, 1, 0.8] } : {}}
        transition={{ 
          repeat: isActive ? Infinity : 0, 
          repeatType: "reverse", 
          duration: 3
        }}
      >
        {service.name.split(' ')[0]}
      </motion.p>
      
      {/* Subtle background pattern */}
      {isActive && (
        <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${colors.patternColor}' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
        }}
        />
      )}
    </motion.div>
  );
};

interface ConnectorLineProps {
  fromId: string;
  toId: string;
  services: Service[];
  gridRef: React.RefObject<HTMLDivElement | null>;
}

const ConnectorLine = ({ fromId, toId, services, gridRef }: ConnectorLineProps) => {
  const [path, setPath] = useState<string>("");
  
  useEffect(() => {
    if (!gridRef.current) return;
    
    // Calculate positions for the elements
    const fromIndex = services.findIndex(s => s.id === fromId);
    const toIndex = services.findIndex(s => s.id === toId);
    
    if (fromIndex === -1 || toIndex === -1) return;
    
    const grid = gridRef.current;
    const children = Array.from(grid.children);
    
    if (!children[fromIndex] || !children[toIndex]) return;
    
    const fromRect = children[fromIndex].getBoundingClientRect();
    const toRect = children[toIndex].getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    
    // Calculate center points relative to the grid
    const fromX = fromRect.left + fromRect.width / 2 - gridRect.left;
    const fromY = fromRect.top + fromRect.height / 2 - gridRect.top;
    const toX = toRect.left + toRect.width / 2 - gridRect.left;
    const toY = toRect.top + toRect.height / 2 - gridRect.top;
    
    // Create curved path
    const pathData = `M${fromX},${fromY} Q${(fromX + toX) / 2},${fromY} ${(fromX + toX) / 2},${(fromY + toY) / 2} T${toX},${toY}`;
    setPath(pathData);
  }, [fromId, toId, services, gridRef]);
  
  if (!path) return null;
  
  return (
    <motion.path
      d={path}
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
      className="connector-line"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};
