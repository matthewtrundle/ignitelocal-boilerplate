import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ignite-cyan focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-white text-ignite-navy hover:bg-gray-50 shadow-sm hover:shadow-md',
        primary: 'bg-ignite-cyan text-white hover:bg-ignite-cyan/90 shadow-md hover:shadow-lg hover:translate-y-[-2px] border border-ignite-cyan/20',
        secondary: 'bg-ignite-purple text-white hover:bg-ignite-purple/90 shadow-md hover:shadow-lg border border-ignite-purple/20',
        outline: 'border-2 border-ignite-cyan text-ignite-cyan hover:bg-ignite-cyan/10 hover:border-ignite-purple hover:shadow-[0_0_10px_rgba(51,177,255,0.4)]',
        ghost: 'text-ignite-navy hover:bg-ignite-cyan/10',
        link: 'text-ignite-cyan underline-offset-4 hover:underline',
        glass: 'bg-white/10 backdrop-blur-lg text-white border border-white/30 hover:bg-white/20 shadow-lg hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]',
        gradient: 'text-white bg-gradient-to-r from-ignite-cyan to-ignite-purple hover:from-ignite-purple hover:to-ignite-cyan shadow-md hover:shadow-[0_8px_25px_-5px_rgba(138,63,252,0.4)]',
        neon: 'bg-ignite-navy/90 text-white border border-ignite-cyan hover:shadow-[0_0_15px_rgba(51,177,255,0.6)] hover:border-ignite-cyan/80 shadow-lg',
        frosted: 'bg-white/5 backdrop-blur-xl text-white border border-white/10 hover:border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)]',
        'gradient-animated': 'text-white bg-gradient-to-br from-ignite-purple via-ignite-pink to-ignite-cyan hover:bg-gradient-to-tl shadow-md hover:shadow-lg border border-white/5 bg-size-200 hover:bg-pos-100 transition-all duration-500',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-6 py-3',
        icon: 'h-10 w-10',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
