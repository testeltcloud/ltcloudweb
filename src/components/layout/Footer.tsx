import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            LT<span className="text-blue-500">Cloud</span>
                        </h2>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            Software house para negócios de futuro. Especialistas em apps, sistemas, plataformas de pagamento e soluções com IA.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://instagram.com/ltcloud" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="https://linkedin.com/company/ltcloud" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://github.com/ltcloud" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Serviços</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">Desenvolvimento Mobile</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">Aplicações Web</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">Soluções Cloud</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">Sistemas de Gestão</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">APIs e Integrações</a></li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">Sobre Nós</a></li>
                            <li><a href="#faq" className="text-slate-400 hover:text-blue-400 transition-colors">FAQ</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contato</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Política de Privacidade</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Termos de Uso</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Contato</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-400">Campinas - SP, Brasil</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                <a href="mailto:contato@ltcloud.com.br" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    contato@ltcloud.com.br
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                <a href="tel:+5518997279999" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    (18) 99727-9999
                                </a>
                            </li>
                        </ul>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/5518997279999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full transition-colors"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            Fale pelo WhatsApp
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} LT Cloud. Todos os direitos reservados.</p>
                    <p className="mt-2 md:mt-0">Feito com 💙 em Campinas, SP</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
