'use client';

import * as React from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  attribute?: string;
  enableColorScheme?: boolean;
}

interface UseThemeProps {
  theme: Theme | undefined;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light' | undefined;
  systemTheme: 'dark' | 'light' | undefined;
}

const ThemeContext = React.createContext<UseThemeProps | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = false,
  attribute = 'class'
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState<'dark' | 'light'>('light');
  const [mounted, setMounted] = React.useState(false);

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {}
  }, []);

  React.useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (savedTheme) {
        setThemeState(savedTheme);
      }
    } catch (e) {}
  }, []);

  React.useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    if (disableTransitionOnChange) {
      root.classList.add('[&_*]:!transition-none');
    }

    let isDark = theme === 'dark';
    
    if (theme === 'system' && enableSystem) {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    setResolvedTheme(isDark ? 'dark' : 'light');

    if (attribute === 'class') {
      root.classList.remove('light', 'dark');
      root.classList.add(isDark ? 'dark' : 'light');
    }

    if (disableTransitionOnChange) {
      window.setTimeout(() => {
        root.classList.remove('[&_*]:!transition-none');
      }, 0);
    }
  }, [theme, enableSystem, disableTransitionOnChange, attribute, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme, systemTheme: 'light' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

