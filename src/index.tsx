import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import './styles/index.scss';
import ThemeProvider from './providers/themeProvider/themeProvider.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import CalculatorProvider from './providers/calculatorProvider/calculatorProvider.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <CalculatorProvider>
            <App />
        </CalculatorProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
