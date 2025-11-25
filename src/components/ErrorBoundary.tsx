import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    // You can also log to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            {/* Error Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                Ops! Algo deu errado
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-center mb-8">
                Desculpe, encontramos um erro inesperado. Nossa equipe foi notificada e
                estamos trabalhando para resolver o problema.
              </p>

              {/* Error Details (Only in development) */}
              {import.meta.env.DEV && this.state.error && (
                <div className="mb-8 p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                  <h3 className="text-sm font-semibold text-red-400 mb-2">
                    Detalhes do Erro (Apenas em Desenvolvimento):
                  </h3>
                  <pre className="text-xs text-gray-400 overflow-x-auto whitespace-pre-wrap break-words">
                    {this.state.error.toString()}
                  </pre>
                  {this.state.errorInfo && (
                    <details className="mt-4">
                      <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-400">
                        Stack Trace
                      </summary>
                      <pre className="text-xs text-gray-500 mt-2 overflow-x-auto whitespace-pre-wrap break-words">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleReload}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Recarregar Página</span>
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-700 transition-all duration-300"
                >
                  <Home className="w-5 h-5" />
                  <span>Ir para Home</span>
                </button>
              </div>

              {/* Support Info */}
              <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                <p className="text-sm text-gray-500">
                  Se o problema persistir, entre em contato:
                </p>
                <a
                  href="mailto:contato@ltcloud.com.br"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm mt-2 inline-block"
                >
                  contato@ltcloud.com.br
                </a>
              </div>
            </div>

            {/* LT Cloud Logo/Brand */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                © 2024 LT Cloud - Software House
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
