'use client';

import { FC, useState } from 'react';
import * as Form from '@radix-ui/react-form';
import { Button } from '@/components/ui/Button';
import { AnimatedTypography } from '@/components/ui/AnimatedTypography';
import { services } from '@/lib/data/services';

export const ContactForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      companyName: formData.get('companyName') as string,
      service: formData.get('service') as string,
    };
    
    // This would normally send a request to your API endpoint
    // For now, we'll simulate a successful submission
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // If we had an API endpoint:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      
      // if (!response.ok) {
      //   throw new Error('Failed to submit form');
      // }
      
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-ignite-accent/10 p-8 text-center">
        <AnimatedTypography 
          variant="h3" 
          color="accent" 
          animation="reveal" 
          className="mb-4"
        >
          Thank you for your message!
        </AnimatedTypography>
        <AnimatedTypography 
          animation="fade"
          delay={0.3}
          className="text-lg"
        >
          We'll be in touch shortly.
        </AnimatedTypography>
      </div>
    );
  }
  
  return (
    <Form.Root className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Form.Field name="name" className="space-y-2">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-sm font-medium">Name</Form.Label>
            <Form.Message className="text-red-500 text-xs" match="valueMissing">
              Please enter your name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-ignite-accent focus:border-transparent"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        
        <Form.Field name="email" className="space-y-2">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-sm font-medium">Email</Form.Label>
            <Form.Message className="text-red-500 text-xs" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="text-red-500 text-xs" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-ignite-accent focus:border-transparent"
              type="email"
              required
            />
          </Form.Control>
        </Form.Field>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Form.Field name="companyName" className="space-y-2">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-sm font-medium">Company Name</Form.Label>
          </div>
          <Form.Control asChild>
            <input
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-ignite-accent focus:border-transparent"
              type="text"
            />
          </Form.Control>
        </Form.Field>
        
        <Form.Field name="service" className="space-y-2">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-sm font-medium">Service Interested In</Form.Label>
          </div>
          <Form.Control asChild>
            <select
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-ignite-accent focus:border-transparent"
            >
              <option value="">Select a service</option>
              {Object.values(services).map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </Form.Control>
        </Form.Field>
      </div>
      
      <Form.Field name="message" className="space-y-2">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-sm font-medium">Message</Form.Label>
          <Form.Message className="text-red-500 text-xs" match="valueMissing">
            Please enter your message
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-ignite-accent focus:border-transparent min-h-[120px]"
            rows={5}
            required
          />
        </Form.Control>
      </Form.Field>
      
      {error && (
        <div className="bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 p-3 rounded-md">
          {error}
        </div>
      )}
      
      <Button 
        type="submit" 
        variant="primary"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </Form.Root>
  );
};
