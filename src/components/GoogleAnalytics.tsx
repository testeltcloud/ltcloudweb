import { useEffect } from 'react';

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

export default function GoogleAnalytics() {
    const gaId = import.meta.env.VITE_GA_ID;

    useEffect(() => {
        if (!gaId || gaId === 'G-XXXXXXXXXX') return;

        // Load GA script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script);

        // Initialize GA
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
            window.dataLayer.push(args);
        }
        // @ts-ignore
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', gaId);

        return () => {
            // Optional cleanup if needed
            document.head.removeChild(script);
        };
    }, [gaId]);

    return null;
}
