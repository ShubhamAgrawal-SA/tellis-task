"use client"
import React from 'react'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

import Home from '@/componets/Home'


const page = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Home/>
    </QueryClientProvider>
  )
}

export default page
