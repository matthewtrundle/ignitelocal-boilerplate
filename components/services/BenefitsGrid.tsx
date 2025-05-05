'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedTypography } from '@/components/ui/AnimatedTypography';
import { cn } from '@/lib/utils';

// SVG icon mapping
const iconMap: Record<string, React.ReactNode> = {
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  money: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2"></rect>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M6 12h.01M18 12h.01"></path>
    </svg>
  ),
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  mobile: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2" width="10" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12" y2="18"></line>
    </svg>
  ),
  chart: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"></path>
      <path d="M18 17V9"></path>
      <path d="M13 17V5"></path>
      <path d="M8 17v-3"></path>
    </svg>
  ),
  brain: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8l-5 5 5 5 5-5z"></path>
      <path d="M18 2l-6 6-6-6"></path>
      <path d="M18 22l-6-6-6 6"></path>
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  repeat: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 2l4 4-4 4"></path>
      <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
      <path d="M7 22l-4-4 4-4"></path>
      <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
    </svg>
  ),
  scale: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="15" x2="12" y2="21"></line>
      <path d="M12 3L2 15h20L12 3z"></path>
    </svg>
  ),
  people: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  eye: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  ),
  bell: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  ),
  calendar: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
  heart: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  ),
  message: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  share: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  ),
  map: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
      <line x1="8" y1="2" x2="8" y2="18"></line>
      <line x1="16" y1="6" x2="16" y2="22"></line>
    </svg>
  ),
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  document: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  ),
  globe: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  target: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  ),
  paint: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"></path>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  ),
  // Default icon as fallback
  default: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  )
};

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

// Use benefit-specific vibrant colors based on the icon type
const getBenefitCardStyle = (icon: string, index: number) => {
  // Map specific benefit icons to their dedicated color schemes
  const specialBenefitMappings: Record<string, { 
    bg: string, 
    iconBg: string, 
    border: string, 
    textGradient: string,
    pattern: string,
    iconColor: string,
    hoverBg: string
  }> = {
    // Save Time - Electric blue
    clock: {
      bg: "from-benefit-time-from/10 to-benefit-time-to/15",
      iconBg: "from-benefit-time-from to-benefit-time-to",
      border: "border-benefit-time-from/40",
      textGradient: "from-benefit-time-from to-benefit-time-to",
      pattern: "0066FF",
      iconColor: "benefit-time-icon",
      hoverBg: "from-benefit-time-from/20 to-benefit-time-to/25"
    },
    // Cut Costs - Emerald green
    money: {
      bg: "from-benefit-cost-from/10 to-benefit-cost-to/15",
      iconBg: "from-benefit-cost-from to-benefit-cost-to",
      border: "border-benefit-cost-from/40",
      textGradient: "from-benefit-cost-from to-benefit-cost-to",
      pattern: "00CC66",
      iconColor: "benefit-cost-icon",
      hoverBg: "from-benefit-cost-from/20 to-benefit-cost-to/25"
    },
    // Boost Revenue - Gold
    chart: {
      bg: "from-benefit-revenue-from/10 to-benefit-revenue-to/15",
      iconBg: "from-benefit-revenue-from to-benefit-revenue-to",
      border: "border-benefit-revenue-from/40",
      textGradient: "from-benefit-revenue-from to-benefit-revenue-to",
      pattern: "FFD700",
      iconColor: "benefit-revenue-icon",
      hoverBg: "from-benefit-revenue-from/20 to-benefit-revenue-to/25"
    },
    // Scale Effortlessly - Purple/Magenta
    scale: {
      bg: "from-benefit-scale-from/10 to-benefit-scale-to/15",
      iconBg: "from-benefit-scale-from to-benefit-scale-to",
      border: "border-benefit-scale-from/40",
      textGradient: "from-benefit-scale-from to-benefit-scale-to",
      pattern: "8A2BE2",
      iconColor: "benefit-scale-icon",
      hoverBg: "from-benefit-scale-from/20 to-benefit-scale-to/25"
    }
  };
  
  // Fallback to service colors if no specific benefit mapping exists
  if (!specialBenefitMappings[icon]) {
    const serviceMappings: Record<string, { 
      bg: string, 
      iconBg: string, 
      border: string, 
      textGradient: string,
      pattern: string,
      iconColor: string,
      hoverBg: string
    }> = {
      brain: {
        bg: "from-service-purple-from/15 to-service-purple-to/20",
        iconBg: "from-service-purple-from to-service-purple-to",
        border: "border-service-purple-to/40",
        textGradient: "from-service-purple-from to-service-purple-to",
        pattern: "8A2BE2",
        iconColor: "service-purple-from",
        hoverBg: "from-service-purple-from/25 to-service-purple-to/30"
      },
      search: {
        bg: "from-service-orange-from/15 to-service-orange-to/20",
        iconBg: "from-service-orange-from to-service-orange-to",
        border: "border-service-orange-to/40",
        textGradient: "from-service-orange-from to-service-orange-to",
        pattern: "FF4500",
        iconColor: "service-orange-from",
        hoverBg: "from-service-orange-from/25 to-service-orange-to/30"
      },
      eye: {
        bg: "from-service-pink-from/15 to-service-pink-to/20",
        iconBg: "from-service-pink-from to-service-pink-to",
        border: "border-service-pink-to/40",
        textGradient: "from-service-pink-from to-service-pink-to",
        pattern: "FF00FF",
        iconColor: "service-pink-from",
        hoverBg: "from-service-pink-from/25 to-service-pink-to/30"
      },
      globe: {
        bg: "from-service-blue-from/15 to-service-blue-to/20",
        iconBg: "from-service-blue-from to-service-blue-to",
        border: "border-service-blue-to/40",
        textGradient: "from-service-blue-from to-service-blue-to",
        pattern: "0066FF",
        iconColor: "service-blue-from",
        hoverBg: "from-service-blue-from/25 to-service-blue-to/30"
      },
      target: {
        bg: "from-service-pink-from/15 to-service-pink-to/20",
        iconBg: "from-service-pink-from to-service-pink-to",
        border: "border-service-pink-to/40",
        textGradient: "from-service-pink-from to-service-pink-to",
        pattern: "FF3366",
        iconColor: "service-pink-from",
        hoverBg: "from-service-pink-from/25 to-service-pink-to/30"
      }
    };

    if (serviceMappings[icon]) {
      return serviceMappings[icon];
    }
    
    // Ultimate fallback - cycle through vibrant colors
    const fallbackColors = [
      {
        bg: "from-service-blue-from/15 to-service-blue-to/20",
        iconBg: "from-service-blue-from to-service-blue-to",
        border: "border-service-blue-to/40",
        textGradient: "from-service-blue-from to-service-blue-to",
        pattern: "0066FF",
        iconColor: "service-blue-from",
        hoverBg: "from-service-blue-from/25 to-service-blue-to/30"
      },
      {
        bg: "from-service-purple-from/15 to-service-purple-to/20",
        iconBg: "from-service-purple-from to-service-purple-to",
        border: "border-service-purple-to/40",
        textGradient: "from-service-purple-from to-service-purple-to",
        pattern: "8A2BE2",
        iconColor: "service-purple-from",
        hoverBg: "from-service-purple-from/25 to-service-purple-to/30"
      },
      {
        bg: "from-service-green-from/15 to-service-green-to/20",
        iconBg: "from-service-green-from to-service-green-to",
        border: "border-service-green-to/40",
        textGradient: "from-service-green-from to-service-green-to",
        pattern: "00CC66",
        iconColor: "service-green-from",
        hoverBg: "from-service-green-from/25 to-service-green-to/30"
      },
      {
        bg: "from-service-amber-from/15 to-service-amber-to/20",
        iconBg: "from-service-amber-from to-service-amber-to",
        border: "border-service-amber-to/40",
        textGradient: "from-service-amber-from to-service-amber-to",
        pattern: "FFD700",
        iconColor: "service-amber-from",
        hoverBg: "from-service-amber-from/25 to-service-amber-to/30"
      }
    ];
    
    const fallbackIndex = index % fallbackColors.length;
    return fallbackColors[fallbackIndex];
  }
  
  return specialBenefitMappings[icon];
};

const BenefitCard: FC<BenefitCardProps> = ({ title, description, icon, index }) => {
  // Get color classes based on index
  const getColorClasses = (index: number) => {
    const colorSets = [
      {
        bg: "bg-ignite-purple/5 border-l-4 border-ignite-purple p-6",
        text: "text-ignite-purple",
        accent: "bg-ignite-purple/10",
        borderHover: "group-hover:border-b-2",
        pattern: "#8A3FFC"
      },
      {
        bg: "bg-ignite-pink/5 border-l-4 border-ignite-pink p-6",
        text: "text-ignite-pink",
        accent: "bg-ignite-pink/10",
        borderHover: "group-hover:border-b-2",
        pattern: "#FF7EB6"
      },
      {
        bg: "bg-ignite-cyan/5 border-l-4 border-ignite-cyan p-6",
        text: "text-ignite-cyan",
        accent: "bg-ignite-cyan/10",
        borderHover: "group-hover:border-b-2",
        pattern: "#33B1FF"
      },
      {
        bg: "bg-ignite-gold/5 border-l-4 border-ignite-gold p-6",
        text: "text-ignite-gold",
        accent: "bg-ignite-gold/10",
        borderHover: "group-hover:border-b-2",
        pattern: "#F1C21B"
      }
    ];
    return colorSets[index % colorSets.length];
  };
  
  const colorClasses = getColorClasses(index);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
      className={cn(
        "group relative flex flex-col rounded-xl transition-all duration-300",
        colorClasses.bg,
        "hover:shadow-xl"
      )}
    >
      {/* Accent colored background strip */}
      <div className={`absolute top-0 right-0 w-1/3 h-full ${colorClasses.accent} opacity-30 rounded-r-xl`}></div>
      {/* Solid white background layer to increase readability */}
      <div className="absolute inset-0 bg-white/90 dark:bg-white/10 rounded-xl pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <div className={cn(
          "w-12 h-12 flex items-center justify-center rounded-lg mb-5",
          colorClasses.text
        )}>
          {iconMap[icon] || iconMap.default}
        </div>
      </div>
      
      <h3 className={cn(
        "text-xl font-bold mb-3 group-hover:border-b-2 relative z-10",
        colorClasses.text, colorClasses.borderHover
      )}>
        {title}
      </h3>
      
      <p className="text-ignite-navy/80 relative z-10 font-medium">{description}</p>
      
      {/* SVG pattern background */}
      <div 
        className={`absolute inset-0 opacity-10 pointer-events-none rounded-xl ${colorClasses.text}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='currentColor' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
    </motion.div>
  );
};

interface BenefitsGridProps {
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  className?: string;
}

export const BenefitsGrid: FC<BenefitsGridProps> = ({ benefits, className }) => {
  return (
    <section className={cn("py-24 relative overflow-hidden", className)}>
      {/* Enhanced gradient background instead of dots */}
      <div className="absolute inset-0 bg-gradient-to-bl from-white via-ignite-gold/10 to-ignite-purple/10"></div>
      
      {/* Very subtle wave pattern instead of dots */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%238A3FFC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 20px'
        }}
      ></div>
      
      {/* Motion elements */}
      <motion.div
        className="absolute top-10 right-[10%] w-40 h-40 rounded-full bg-ignite-cyan/10 filter blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-[15%] w-60 h-60 rounded-full bg-ignite-purple/10 filter blur-3xl"
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ignite-navy to-ignite-purple">Key Benefits</h3>
          
          <AnimatedTypography 
            variant="p" 
            animation="fade" 
            delay={0.2}
            className="text-center mb-6 max-w-3xl mx-auto text-ignite-navy text-lg font-normal"
          >
            Our solution delivers these powerful advantages to help your business thrive in today's competitive market.
          </AnimatedTypography>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
