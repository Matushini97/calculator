import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import './styles/index.scss';
import ThemeProvider from './utils/themeProvider.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
