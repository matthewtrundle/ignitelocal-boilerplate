'use client';

import { FC, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import { AnimatedTypography } from '@/components/ui/AnimatedTypography';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
  value: string;
}

const FaqItem: FC<FaqItemProps> = ({ question, answer, value }) => {
  return (
    <Accordion.Item 
      value={value} 
      className="border-b border-gray-200 dark:border-gray-700 last:border-0"
    >
      <Accordion.Trigger className="flex justify-between w-full py-5 text-left">
        <span className="text-lg font-medium">{question}</span>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transform transition-transform duration-300 group-data-[state=open]:rotate-180"
        >
          <path 
            d="M6 9l6 6 6-6" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </Accordion.Trigger>
      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="pb-5 pt-1 text-gray-600 dark:text-gray-300">
          {answer}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

interface FaqAccordionProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  className?: string;
}

export const FaqAccordion: FC<FaqAccordionProps> = ({ faqs, className }) => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);
  
  return (
    <section className={cn("py-20 bg-gray-50 dark:bg-ignite-accent/5", className)}>
      <div className="container mx-auto px-4">
        <AnimatedTypography 
          variant="h2" 
          animation="reveal" 
          className="text-center mb-4"
        >
          Frequently Asked Questions
        </AnimatedTypography>
        
        <AnimatedTypography 
          variant="p" 
          animation="fade" 
          delay={0.2}
          className="text-center mb-16 max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
        >
          Get answers to common questions about our services and solutions.
        </AnimatedTypography>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white dark:bg-ignite-accent/5 rounded-xl shadow-sm p-6 md:p-8"
        >
          <Accordion.Root 
            type="single" 
            collapsible 
            value={openItem}
            onValueChange={setOpenItem}
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                value={`item-${index}`}
              />
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
};
