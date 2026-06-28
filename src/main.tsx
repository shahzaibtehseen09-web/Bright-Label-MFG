// Safeguard to prevent "Cannot set property fetch of #<Window> which has only a getter" errors in sandboxed iframes/environments
try {
  if (typeof window !== 'undefined') {
    const originalFetch = window.fetch;
    let customFetch = originalFetch;
    Object.defineProperty(window, 'fetch', {
      get() {
        return customFetch;
      },
      set(value) {
        customFetch = value;
      },
      configurable: true,
      enumerable: true
    });
  }
} catch (e) {
  console.warn("Could not redefine window.fetch:", e);
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
