'use client'

import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { queryClient } from '../lib/react-query'


export function QueryClientProvider({ children }: { children: ReactNode }) {
  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  )
}
