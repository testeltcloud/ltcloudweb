import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Shield } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Sempre verdadeiro, não pode ser desativado
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Verificar se o usuário já respondeu
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Mostrar banner após 2 segundos
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    } else {
      // Carregar preferências salvas
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
        // Aplicar preferências (ativar Analytics se aprovado)
        if (saved.analytics && window.gtag) {
          window.gtag('consent', 'update', {
            analytics_storage: 'granted',
          });
        }
      } catch (e) {
        console.error('Erro ao carregar preferências de cookies', e);
      }
    }
  }, []);

  const saveConsent = (prefs: typeof preferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);

    // Atualizar consentimento do Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
      });
    }

    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, type: 'spring' }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
        >
          {/* Settings Modal */}
          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mb-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-2xl mx-auto overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Settings className="w-6 h-6" />
                      <h3 className="text-xl font-bold">Preferências de Cookies</h3>
                    </div>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                      aria-label="Fechar configurações"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-cyan-50">
                    Gerencie suas preferências de cookies e privacidade
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                  {/* Necessary Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="mt-1 w-5 h-5 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 disabled:opacity-50"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Cookies Necessários
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Essenciais para o funcionamento do site. Não podem ser desativados.
                      </p>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="mt-1 w-5 h-5 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Cookies Analíticos
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Nos ajudam a entender como os visitantes usam o site (Google Analytics).
                      </p>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="mt-1 w-5 h-5 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Cookies de Marketing
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Usados para personalizar anúncios e medir a eficácia de campanhas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex gap-3">
                  <button
                    onClick={savePreferences}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  >
                    Salvar Preferências
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Cookie className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-cyan-600" />
                    Seus Dados, Sua Escolha
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Usamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo.
                    Ao clicar em "Aceitar Todos", você concorda com o uso de cookies conforme nossa{' '}
                    <a href="#" className="text-cyan-600 hover:underline font-medium">
                      Política de Privacidade
                    </a>{' '}
                    e{' '}
                    <a href="#" className="text-cyan-600 hover:underline font-medium">
                      Política de Cookies
                    </a>.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 whitespace-nowrap"
                  >
                    Personalizar
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 whitespace-nowrap"
                  >
                    Apenas Necessários
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 whitespace-nowrap"
                  >
                    Aceitar Todos
                  </button>
                </div>
              </div>
            </div>

            {/* LGPD Compliance Notice */}
            <div className="px-6 md:px-8 pb-6">
              <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2">
                <Shield className="w-3 h-3" />
                <span>Em conformidade com a LGPD (Lei Geral de Proteção de Dados)</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

// Adicionar tipo para window.gtag
declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    dataLayer?: any[];
  }
}
