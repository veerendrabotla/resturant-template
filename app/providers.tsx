'use client';

import React from 'react';
import { AppProvider } from '@/lib/context';
import { RouterProvider } from '@/lib/router-shim';

export function Providers({ children }: { children?: React.ReactNode }) {
  return (
    <RouterProvider>
      <AppProvider>
        {children}
      </AppProvider>
    </RouterProvider>
  );
}