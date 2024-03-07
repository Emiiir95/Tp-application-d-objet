import React from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HashRouter } from 'react-router-dom';

import { isProd } from '@/configs/config';
import { AuthProvider } from '@/contexts/auth';

import { ErrorBoundary } from '@/components/bosons/ErrorBoundary';
import { Router } from '@/containers/App/Router';

import './i18n';
import './styles/main.css';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (60 * 1000),
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
});

/** Stateless app */
const Main = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </HashRouter>
        <Toaster />
        {!isProd && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
root.render(<Main />);
