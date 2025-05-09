'use client';

import { FC } from 'react';
import { AnimatedTypography } from '@/components/ui/AnimatedTypography';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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

interface ServiceStepsProps {
  steps: Array<{
    title: string;
    description: string;
  }>;
  className?: string;
}

export const ServiceSteps: FC<ServiceStepsProps> = ({ steps, className }) => {
  // Map step index to step type
  const stepTypes: ('consultation' | 'solution' | 'implementation')[] = [
    'consultation', 
    'solution', 
    'implementation'
  ];

  return (
    <section className={cn("py-24 bg-background", className)} id="how-it-works">
      <div className="container-xl">
        <AnimatedTypography 
          variant="h2" 
          animation="reveal" 
          className="text-center mb-20"
        >
          How It Works
        </AnimatedTypography>
        
        <div className="flex flex-col md:flex-row justify-between space-y-16 md:space-y-0 relative px-4">
          {steps.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              type={stepTypes[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
