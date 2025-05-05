'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedTypography } from '@/components/ui/AnimatedTypography';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface CaseStudyTeaserProps {
  caseStudy: {
    title: string;
    description: string;
    result: string;
    image: string;
  };
  className?: string;
}

export const CaseStudyTeaser: FC<CaseStudyTeaserProps> = ({ caseStudy, className }) => {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <AnimatedTypography 
          variant="h2" 
          animation="reveal" 
          className="text-center mb-16"
        >
          Success Story
        </AnimatedTypography>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative bg-white dark:bg-ignite/10 p-6 md:p-8 rounded-xl shadow-md">
              <div className="absolute -top-4 -left-4 bg-ignite-accent text-ignite font-bold py-2 px-4 rounded-md">
                Case Study
              </div>
              <h3 className="text-2xl font-semibold mb-4">{caseStudy.title}</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">{caseStudy.description}</p>
              
              <div className="border-l-4 border-ignite-accent pl-4 mb-6">
                <p className="text-lg font-medium">Result</p>
                <p className="text-gray-600 dark:text-gray-300">{caseStudy.result}</p>
              </div>
              
              <Button asChild variant="outline">
                <span>Read Full Case Study</span>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 h-[350px] md:h-[400px]"
          >
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover rounded-lg"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ignite/40 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
