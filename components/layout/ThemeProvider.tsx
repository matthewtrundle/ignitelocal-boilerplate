'use client';

import { createContext, useContext, useEffect } from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: 'light';
};

const initialState: ThemeProviderState = {
  theme: 'light',
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  // Apply the Stripe-inspired light theme colors
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove any previous theme classes
    root.classList.remove('dark');
    root.classList.add('light');
    
    // Apply Stripe-inspired color scheme
    const colors = {
      '--background': '#F6F9FC',
      '--surface': '#FFFFFF',
      '--primary': '#0A2540',
      '--secondary': '#334E68',
      '--muted': '#627D98',
      '--accent': '#1AD6E6',
      '--accent-hover': '#17BECF',
      '--border': '#E6E8EB'
    };
    
    // Apply the color scheme variables
    Object.entries(colors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }, []);

  // Always return light theme
  const value = {
    theme: 'light',
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
