'use client';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-slate-950 text-gray-300 pt-16 pb-8 overflow-hidden border-t border-slate-900">
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-white">LT</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Cloud</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Transformando ideias em soluções digitais de alto desempenho para empresas que buscam excelência tecnológica.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Serviços */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded"></div>
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-px bg-cyan-500 group-hover:w-4 transition-all duration-300"></span>
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-px bg-cyan-500 group-hover:w-4 transition-all duration-300"></span>
                  Aplicativos Mobile
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-px bg-cyan-500 group-hover:w-4 transition-all duration-300"></span>
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-px bg-cyan-500 group-hover:w-4 transition-all duration-300"></span>
                  Consultoria Tech
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded"></div>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-px bg-cyan-500 group-hover:w-4 transition-all duration-300"></span>
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-px bg-cyan-500 group-hover:w-4 transition-all duration-300"></span>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-px bg-cyan-500 group-hover:w-4 transition-all duration-300"></span>
                  Clientes
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-px bg-cyan-500 group-hover:w-4 transition-all duration-300"></span>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded"></div>
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-all duration-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:contato@ltcloud.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    contato@ltcloud.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-all duration-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Telefone</p>
                  <a href="tel:+5511999999999" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    +55 (11) 99999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Localização</p>
                  <p className="text-gray-300">São Paulo, SP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {currentYear} <span className="text-cyan-400 font-semibold">LT Cloud</span>. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </div> 
    </footer>
  );
} 