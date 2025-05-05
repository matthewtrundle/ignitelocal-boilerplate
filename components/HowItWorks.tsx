'use client';

import { FC } from 'react';
import { AnimatedTypography } from '@/components/ui/AnimatedTypography';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Define the steps for How It Works section
const defaultSteps = [
  {
    title: "Book a Consultation",
    description: "Schedule a free discovery call to discuss your business goals and challenges.",
    type: "consultation"
  },
  {
    title: "Receive Custom Solution",
    description: "We'll design a tailored AI automation strategy specifically for your business needs.",
    type: "solution"
  },
  {
    title: "Watch Your Business Scale",
    description: "Implement our solutions and see your efficiency and revenue grow.",
    type: "implementation"
  }
];

interface StepIconProps {
  type: 'consultation' | 'solution' | 'implementation';
}

const StepIcon: FC<StepIconProps> = ({ type }) => {
  // Define SVG icons for each step type with matching colors from ignite palette
  const iconStyles = {
    consultation: "text-ignite-purple",
    solution: "text-ignite-pink",
    implementation: "text-ignite-gold"
  };
  
  const icons = {
    consultation: (
      // ChatBubbleIcon
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    solution: (
      // LockClosedIcon
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    implementation: (
      // TrendingUpIcon
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  };

  return (
    <div className={`${iconStyles[type]}`}>
      {icons[type]}
    </div>
  );
};

interface StepProps {
  title: string;
  description: string;
  type: 'consultation' | 'solution' | 'implementation';
  index: number;
}

const Step: FC<StepProps> = ({ title, description, type, index }) => {
  // Get step-specific colors from ignite palette
  const stepColorClasses = {
    consultation: {
      text: "text-ignite-purple",
      bg: "bg-ignite-purple/5",
      border: "border-ignite-purple",
      pattern: "#8A3FFC"
    },
    solution: {
      text: "text-ignite-pink",
      bg: "bg-ignite-pink/5",
      border: "border-ignite-pink",
      pattern: "#FF7EB6"
    },
    implementation: {
      text: "text-ignite-gold",
      bg: "bg-ignite-gold/5",
      border: "border-ignite-gold",
      pattern: "#F1C21B"
    }
  };
  
  const colors = stepColorClasses[type];
  
  return (
    <motion.div 
      className={`group flex flex-col items-center text-center relative p-6 rounded-xl shadow-md ${colors.bg} border-l-4 ${colors.border} hover:shadow-lg transition-all`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* SVG pattern background */}
      <div 
        className={`absolute inset-0 opacity-5 pointer-events-none rounded-xl ${colors.text}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='currentColor' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <StepIcon type={type} />
      <div className="mt-6 px-4 relative z-10">
        <h3 className={`text-xl md:text-2xl font-semibold mb-3 text-ignite-navy group-hover:border-b-2 ${colors.border}`}>{title}</h3>
        <p className={`max-w-xs mx-auto ${colors.text}`}>{description}</p>
      </div>
    </motion.div>
  );
};

interface HowItWorksProps {
  steps?: Array<{
    title: string;
    description: string;
    type?: string;
  }>;
  className?: string;
}

// Floating decorative elements
const FloatingElement: FC<{
  size: number;
  top: string;
  left: string;
  delay: number;
  color: string;
  type?: 'circle' | 'square' | 'triangle';
}> = ({ size, top, left, delay, color, type = 'circle' }) => {
  const renderShape = () => {
    switch(type) {
      case 'square':
        return <div className={`w-${size} h-${size} ${color} rounded-md`}></div>;
      case 'triangle':
        return (
          <div className="relative" style={{ width: `${size * 4}px`, height: `${size * 4}px` }}>
            <div 
              className={`absolute ${color}`}
              style={{ 
                width: '0',
                height: '0',
                borderLeft: `${size * 2}px solid transparent`,
                borderRight: `${size * 2}px solid transparent`,
                borderBottom: `${size * 4}px solid currentColor`
              }}
            ></div>
          </div>
        );
      case 'circle':
      default:
        return <div className={`w-${size} h-${size} ${color} rounded-full`}></div>;
    }
  };
  
  return (
    <motion.div
      className="absolute z-0 opacity-60"
      style={{ top, left }}
      animate={{
        y: ["0%", "20%", "0%"],
        rotate: [0, 15, 0]
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {renderShape()}
    </motion.div>
  );
};

export const HowItWorks: FC<HowItWorksProps> = ({ steps = defaultSteps, className }) => {
  return (
    <section className={cn("relative overflow-hidden py-32", className)} id="how-it-works">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-ignite-purple/5 z-0"></div>
      
      {/* Animated mesh pattern background */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23635FC7' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Floating decorative elements */}
      <FloatingElement size={6} top="15%" left="8%" delay={0} color="text-ignite-purple/20" type="circle" />
      <FloatingElement size={4} top="70%" left="15%" delay={1.5} color="text-ignite-gold/20" type="triangle" />
      <FloatingElement size={8} top="20%" left="85%" delay={2.3} color="text-ignite-cyan/20" type="square" />
      <FloatingElement size={5} top="75%" left="80%" delay={0.8} color="text-ignite-pink/20" type="circle" />

      <div className="container-xl relative z-10">
        <AnimatedTypography 
          variant="h2" 
          animation="reveal" 
          className="text-center mb-6"
        >
          How It Works
        </AnimatedTypography>
        
        <AnimatedTypography
          variant="p"
          animation="fade"
          className="text-center text-lg max-w-2xl mx-auto mb-20"
        >
          Our streamlined process makes it easy to get started with AI-powered solutions for your business.
        </AnimatedTypography>
        
        <div className="flex flex-col md:flex-row justify-between space-y-16 md:space-y-0 md:space-x-6 relative px-4">
          {steps.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              type={(step.type as 'consultation' | 'solution' | 'implementation') || 'consultation'}
              index={index}
            />
          ))}
        </div>
        
        {/* Connecting lines between steps (visible on md+ screens) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 z-0">
          <div className="relative w-full">
            <motion.div 
              className="absolute h-0.5 bg-gradient-to-r from-ignite-purple via-ignite-cyan to-ignite-gold"
              style={{ top: '0px', left: '20%', width: '60%' }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
