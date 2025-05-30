import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './shared/routing/AppRoutes';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
