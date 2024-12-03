import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import DefaultLayout from './layout/DefaultLayout';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayout />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
};

export default App;
