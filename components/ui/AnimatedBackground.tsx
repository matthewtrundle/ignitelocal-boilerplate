'use client';

import { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
  pattern?: 'dots' | 'circuit' | 'grid' | 'particles';
  colorFrom?: string;
  colorTo?: string;
  speed?: 'slow' | 'medium' | 'fast';
  opacity?: number;
  density?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  fixed?: boolean;
  children?: React.ReactNode;
}

export const AnimatedBackground: FC<AnimatedBackgroundProps> = ({
  className,
  pattern = 'particles',
  colorFrom = 'from-ignite-purple',
  colorTo = 'to-ignite-cyan',
  speed = 'medium',
  opacity = 0.1,
  density = 'medium',
  interactive = false,
  fixed = false,
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Generate background pattern based on type
  const renderPattern = () => {
    // Animation speed based on prop
    const animationSpeed = {
      'slow': 30,
      'medium': 20,
      'fast': 10
    }[speed];
    
    // Density based on prop
    const elementDensity = {
      'low': 15,
      'medium': 30,
      'high': 50
    }[density];
    
    // For SVG pattern backgrounds
    if (pattern === 'dots' || pattern === 'circuit' || pattern === 'grid') {
      const patterns = {
        dots: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${colorFrom.replace('#', '')}' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        circuit: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23${colorFrom.replace('#', '')}' stroke-width='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        grid: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${colorFrom.replace('#', '')}' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`
      };

      return (
        <div 
          className={`absolute inset-0 ${fixed ? 'fixed' : ''}`} 
          style={{ 
            backgroundImage: patterns[pattern], 
            backgroundSize: `${elementDensity * 2}px ${elementDensity * 2}px`,
            opacity 
          }}
        >
          <motion.div 
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0px 0px', `${elementDensity}px ${elementDensity}px`]
            }}
            transition={{
              duration: animationSpeed,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      );
    }
    
    // For particle animation patterns
    if (pattern === 'particles') {
      // Generate random particles
      const particles = Array.from({ length: elementDensity }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: (Math.random() * 20) + animationSpeed
      }));
      
      return (
        <div className={`absolute inset-0 overflow-hidden ${fixed ? 'fixed' : ''}`}>
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className={`absolute rounded-full bg-gradient-to-br ${colorFrom} ${colorTo}`}
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: opacity * (0.2 + Math.random() * 0.5)
              }}
              animate={{
                y: [
                  `${particle.y}%`, 
                  `${particle.y - 10 - Math.random() * 20}%`, 
                  `${particle.y}%`
                ],
                x: [
                  `${particle.x}%`, 
                  `${particle.x + (Math.random() * 10) - 5}%`, 
                  `${particle.x}%`
                ],
                scale: [1, 1 + Math.random() * 0.5, 1]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      );
    }
    
    return null;
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full h-full",
        className
      )}
    >
      {renderPattern()}
      
      {/* Main content with relative positioning */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};
