'use client';

import { ThemeProvider } from '@/app/contexts/ThemeContext';
import { ReactNode } from 'react';

interface ClientThemeWrapperProps {
  children: ReactNode;
}

const ClientThemeWrapper: React.FC<ClientThemeWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default ClientThemeWrapper;