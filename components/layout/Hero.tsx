'use client';

import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedTypography } from '@/components/ui/AnimatedTypography';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  useGradient?: boolean;
  ctaLink?: string;
  ctaText?: string;
  secondaryCtaLink?: string;
  secondaryCtaText?: string;
}

export const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  useGradient = true,
  ctaLink = '/contact',
  ctaText = 'Get Started',
  secondaryCtaLink = '/services',
  secondaryCtaText = 'Explore Services',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Particles animation
  useEffect(() => {
    if (!canvasRef.current || !useGradient) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }> = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor(canvas.width * canvas.height / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          color: (() => {
            // use a 4-color "ignite" palette with random alpha
            const PARTICLE_PALETTE = [
              'rgba(255,106,0,',   // Ember Orange
              'rgba(255,214,0,',   // Spark Yellow
              'rgba(230,57,70,',   // Flame Red
              'rgba(198,40,40,'    // Lava Red
            ];
            return `${
              PARTICLE_PALETTE[
                Math.floor(Math.random() * PARTICLE_PALETTE.length)
              ]
            }${(Math.random() * 0.5 + 0.1).toFixed(2)})`;
          })(),
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        particle.x += particle.dx;
        particle.y += particle.dy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });
      
      requestAnimationFrame(drawParticles);
    };
    
    resize();
    window.addEventListener('resize', resize);
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [useGradient]);
  
  return (
    <section className="relative overflow-hidden py-24 min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-ignite-gradient z-0" />
      
      {backgroundImage && (
        <Image 
          src={backgroundImage} 
          fill 
          className="object-cover opacity-10 z-0" 
          alt="" 
          priority
          quality={90}
        />
      )}
      
      {useGradient && (
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 z-0"
        />
      )}
      
      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <AnimatedTypography variant="h1" className="text-5xl lg:text-6xl font-extrabold text-white">
              {title}
            </AnimatedTypography>
            
            {subtitle && (
              <h2 className="mt-6 text-2xl text-white/90 max-w-xl">
                {subtitle}
              </h2>
            )}
            
            {description && (
              <p className="mt-6 text-lg text-white/80 max-w-xl">
                {description}
              </p>
            )}
            
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild variant="default" size="lg">
                  <Link href={ctaLink}>
                    {ctaText}
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild variant="gradient-animated" size="lg">
                  <Link href={secondaryCtaLink}>
                    {secondaryCtaText}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Visual Element (Dashboard/Illustration) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="relative">
            {/* Main Illustration */}
            <div className="relative bg-surface rounded-lg shadow-lg border border-border p-4 overflow-hidden">
              <Image 
                src="/images/rtificial_intelligence_circuit_patterns.png" 
                width={500} 
                height={400} 
                alt="AI Dashboard" 
                className="rounded"
                unoptimized
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-accent/90 p-3 rounded-lg shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 16V21M12 21H7M12 21H17M17 12H12M12 12H7M12 12V7M12 3V7M12 7H17M12 7L7.5 4.5" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.div>
              
              <motion.div
                className="absolute bottom-12 -right-3 bg-surface p-2 rounded-lg shadow-lg border border-border"
                animate={{ 
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                  <path d="M9 17L15 17M12 6V13M12 13L15.5 9.5M12 13L8.5 9.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -bottom-4 -left-4 h-40 w-40 rounded-full bg-gradient-to-br from-accent to-teal-300 opacity-20 blur-2xl" />
          </div>
        </motion.div>
      </div>
      
      {/* Subtle scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-0 right-0 flex justify-center"
        animate={{ 
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary opacity-60">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </section>
  );
};
