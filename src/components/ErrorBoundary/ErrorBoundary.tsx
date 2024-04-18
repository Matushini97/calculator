import React, { ErrorInfo, ReactNode, Suspense } from 'react';

type ErrorBoundaryProps = {
    children: ReactNode
}
type ErrorBoundaryState = {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log('Error Boundary', error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback=""><div>Something went wrong...</div></Suspense>
            );
        }
        return children;
    }
}
export default ErrorBoundary;
