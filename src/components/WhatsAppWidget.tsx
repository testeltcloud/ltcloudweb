import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Substitua pelo número de WhatsApp real (formato: 5511999999999)
  const whatsappNumber = '5511999999999';
  const message = 'Olá! Gostaria de saber mais sobre os serviços da LT Cloud.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
          aria-label="Abrir WhatsApp"
        >
          {/* Button */}
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-green-500/70">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-7 h-7 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="message"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-7 h-7 text-white" fill="currentColor" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pulse Animation */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
          )}

          {/* Notification Badge */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-bounce">
              1
            </span>
          )}
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ delay: 3 }}
              className="absolute bottom-0 right-20 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-medium"
            >
              Fale conosco!
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="fixed bottom-28 right-6 z-50 w-80 sm:w-96"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">LT Cloud</h3>
                  <p className="text-green-100 text-sm">Online - Respondemos rápido!</p>
                </div>
              </div>

              {/* Messages */}
              <div className="bg-gray-50 p-6 space-y-4 max-h-96 overflow-y-auto">
                {/* Bot Message 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-2"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-md max-w-[80%]">
                    <p className="text-gray-800 text-sm">
                      Olá! 👋 Bem-vindo à LT Cloud!
                    </p>
                  </div>
                </motion.div>

                {/* Bot Message 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-2"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-md max-w-[80%]">
                    <p className="text-gray-800 text-sm mb-2">
                      Como podemos ajudar você hoje?
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>💻 Desenvolvimento de Apps</li>
                      <li>☁️ Soluções Cloud</li>
                      <li>🤖 Inteligência Artificial</li>
                      <li>📱 Sistemas Web & Mobile</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Bot Message 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-2"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-md max-w-[80%]">
                    <p className="text-gray-800 text-sm">
                      Clique no botão abaixo para iniciar uma conversa no WhatsApp! 💬
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Footer with CTA */}
              <div className="p-4 bg-white border-t border-gray-200">
                <motion.button
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Iniciar Conversa</span>
                </motion.button>

                <p className="text-center text-xs text-gray-500 mt-2">
                  Horário de atendimento: Seg-Sex, 9h-18h
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;
