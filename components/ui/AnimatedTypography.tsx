'use client';

import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
      h2: 'text-3xl md:text-4xl font-bold',
      h3: 'text-2xl md:text-3xl font-semibold',
      h4: 'text-xl font-semibold',
      p: 'text-base md:text-lg',
      small: 'text-sm',
    },
    color: {
      default: 'text-foreground',
      accent: 'text-ignite-accent',
      muted: 'text-foreground/70',
    },
  },
  defaultVariants: {
    variant: 'p',
    color: 'default',
  },
});

interface AnimatedTypographyProps extends VariantProps<typeof typographyVariants> {
  children: ReactNode;
  className?: string;
  animation?: 'reveal' | 'fade' | 'typing' | 'slide-up' | 'slide-down' | 'scale' | 'none';
  delay?: number;
  as?: React.ElementType;
}

export const AnimatedTypography: FC<AnimatedTypographyProps> = ({
  children,
  className,
  variant,
  color,
  animation = 'none',
  delay = 0,
  as: Component = 'div',
}) => {
  const textClasses = cn(typographyVariants({ variant, color }), className);
  
  if (animation === 'none') {
    return <Component className={textClasses}>{children}</Component>;
  }
  
  const animationVariants = {
    reveal: {
      hidden: { y: 100, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1,
        transition: { 
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay 
        }
      }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration: 0.5,
          delay
        }
      }
    },
    typing: {
      hidden: { width: 0, opacity: 0 },
      visible: { 
        width: '100%',
        opacity: 1,
        transition: { 
          duration: 1,
          delay
        }
      }
    },
    'slide-up': {
      hidden: { y: 20, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1,
        transition: { 
          type: 'spring',
          stiffness: 80,
          damping: 20,
          delay 
        }
      }
    },
    'slide-down': {
      hidden: { y: -20, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1,
        transition: { 
          type: 'spring',
          stiffness: 80,
          damping: 20,
          delay 
        }
      }
    },
    'scale': {
      hidden: { scale: 0.95, opacity: 0 },
      visible: { 
        scale: 1, 
        opacity: 1,
        transition: { 
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay 
        }
      }
    }
  };
  
  return (
    <motion.div
      className={`overflow-hidden ${animation === 'typing' ? 'whitespace-nowrap' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animationVariants[animation]}
    >
      <Component className={textClasses}>
        {children}
      </Component>
    </motion.div>
  );
};
