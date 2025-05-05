'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  type?: 'wave' | 'diagonal' | 'pointed' | 'curve';
  fillColor?: string;
  invert?: boolean;
  height?: number;
  className?: string;
}

export const SectionDivider: FC<SectionDividerProps> = ({
  type = 'diagonal',
  fillColor = 'fill-white',
  invert = false,
  height = 80,
  className
}) => {
  // SVG path generator for different divider types
  const getPath = () => {
    switch (type) {
      case 'wave':
        return invert
          ? 'M0,0 L0,40 C250,120 350,0 500,60 C650,120 700,40 1000,70 L1000,0 Z'
          : 'M0,100 L0,60 C250,0 350,100 500,40 C650,-10 700,70 1000,30 L1000,100 Z';
      case 'pointed':
        return invert
          ? 'M0,0 L0,40 L500,100 L1000,40 L1000,0 Z'
          : 'M0,100 L0,60 L500,0 L1000,60 L1000,100 Z';
      case 'curve':
        return invert
          ? 'M0,0 L0,70 Q500,0 1000,70 L1000,0 Z'
          : 'M0,100 L0,30 Q500,100 1000,30 L1000,100 Z';
      case 'diagonal':
      default:
        return invert
          ? 'M0,0 L0,50 L1000,0 Z'
          : 'M0,100 L0,50 L1000,100 Z';
    }
  };

  const heightStyle = { height: `${height}px` };

  return (
    <div 
      className={cn("w-full overflow-hidden", className)} 
      style={heightStyle}
    >
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full h-full"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d={getPath()}
          className={cn("transition-colors duration-300", fillColor)}
          stroke="none"
        />
      </motion.svg>
    </div>
  );
};
