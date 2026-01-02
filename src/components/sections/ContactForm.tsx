import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
                    ...formData,
                    subject: 'Novo contato via Site LT Cloud'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error('Falha no envio');
            }
        } catch (err) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Info */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Vamos <span className="text-gradient">Conversar?</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-12">
                            Estamos prontos para transformar sua ideia em realidade. Entre em contato para um orçamento ou consultoria.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-900 rounded-lg text-blue-500 hover:bg-blue-600 hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email</h4>
                                    <a href="mailto:contato@ltcloud.com.br" className="text-slate-400 hover:text-blue-400 transition-colors">
                                        contato@ltcloud.com.br
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-900 rounded-lg text-blue-500 hover:bg-blue-600 hover:text-white transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Telefone</h4>
                                    <a href="tel:+5511999999999" className="text-slate-400 hover:text-blue-400 transition-colors">
                                        +55 (11) 99999-9999
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-900 rounded-lg text-blue-500 hover:bg-blue-600 hover:text-white transition-colors">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Localização</h4>
                                    <p className="text-slate-400">São Paulo, Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600/5 rounded-3xl blur-xl" />
                        <form onSubmit={handleSubmit} className="relative bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-3xl">
                            <div className="mb-6">
                                <label className="block text-slate-300 text-sm font-bold mb-2">Nome</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-slate-300 text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div className="mb-8">
                                <label className="block text-slate-300 text-sm font-bold mb-2">Mensagem</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Como podemos ajudar?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-white shadow-lg shadow-blue-900/20 hover:shadow-blue-500/30 hover:-translate-y-1 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                                {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                            </button>

                            {status === 'success' && (
                                <div className="mt-4 p-4 bg-green-500/10 text-green-400 rounded-lg flex items-center gap-2">
                                    <CheckCircle size={20} />
                                    Mensagem enviada com sucesso!
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="mt-4 p-4 bg-red-500/10 text-red-400 rounded-lg flex items-center gap-2">
                                    <AlertCircle size={20} />
                                    Erro ao enviar. Tente novamente.
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactForm;
