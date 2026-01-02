

const PromoBanner = () => {
    return (
        <section className="py-12 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800 reveal group">
                    <img
                        src="https://media.licdn.com/dms/image/v2/C4D1BAQHrvnlA_cHM8w/company-background_10000/company-background_10000/0/1625767599736/ltcloudapps_cover?e=2147483647&v=beta&t=lJOgnn1_5ntTQkS2hxpBgUvQZcE04cISAEp0mLV6CtY"
                        alt="LT Cloud Promo"
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;
