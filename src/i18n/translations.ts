export const languages = {
    en: 'English',
    es: 'Español',
    de: 'Deutsch',
    fr: 'Français',
    pt: 'Português',
    ja: '日本語',
    ko: '한국어',
    ar: 'العربية',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const translations = {
    en: {
        // Header
        'nav.home': 'Home',
        'nav.mp3': 'Convert to MP3',
        'nav.features': 'Features',
        'nav.faq': 'FAQ',

        // Hero
        'hero.title': 'Convert Video to',
        'hero.title.highlight': 'MP3',
        'hero.description': 'The fastest and most reliable tool to convert online videos to MP3. No ads, no registration, completely free.',
        'hero.terms': 'By using our service you agree to our',
        'hero.terms.link': 'Terms of Service',

        // Converter
        'converter.placeholder': 'Paste video link here...',
        'converter.start': 'Start',
        'converter.processing': 'Analyzing Video...',
        'converter.download.mp3': 'Download MP3',
        'converter.download.mp4': 'Download MP4',

        // How To Section
        'howto.title': 'How to Convert Video to MP3',
        'howto.step1.title': 'Copy the Video URL',
        'howto.step1.desc': 'Open the video you want to convert and copy the URL.',
        'howto.step2.title': 'Paste the Link',
        'howto.step2.desc': 'Paste the link into the search box above and click "Start".',
        'howto.step3.title': 'Select Format',
        'howto.step3.desc': 'Choose MP3 for audio or MP4 for video.',
        'howto.step4.title': 'Download',
        'howto.step4.desc': 'Click the "Download" button and save the file to your device.',
        'howto.step5.title': 'Enjoy Offline',
        'howto.step5.desc': 'Listen to your converted audio anytime, anywhere.',

        // Why Us Section
        'whyus.title': 'Why Use Convert2MP3?',
        'whyus.unlimited.title': 'Unlimited Conversions',
        'whyus.unlimited.desc': 'Convert as many videos as you want with no daily limits.',
        'whyus.tech.title': 'Latest Technology',
        'whyus.tech.desc': 'We use cutting-edge servers for lightning-fast conversions.',
        'whyus.noreg.title': 'No Registration Required',
        'whyus.noreg.desc': 'Start converting immediately - no sign-up, no personal data.',
        'whyus.formats.title': 'Multiple Formats',
        'whyus.formats.desc': 'Convert to MP3, MP4, and other popular formats.',
        'whyus.hd.title': 'High Quality Audio',
        'whyus.hd.desc': 'Download audio in up to 320kbps quality.',

        // Features
        'features.title': 'Why Choose Convert2MP3?',
        'features.fast.title': 'Fastest Conversion',
        'features.fast.desc': 'Our advanced servers ensure the fastest conversion speeds.',
        'features.easy.title': 'Easy to Use',
        'features.easy.desc': 'Simply paste the URL and click convert. No technical knowledge required.',
        'features.free.title': '100% Free',
        'features.free.desc': 'No hidden fees, no subscriptions, no limits. Completely free forever.',
        'features.noreg.title': 'No Registration',
        'features.noreg.desc': 'Start converting immediately without creating an account or signing up.',
        'features.hd.title': 'High Quality',
        'features.hd.desc': 'Get the best possible audio quality from your videos.',
        'features.devices.title': 'All Devices',
        'features.devices.desc': 'Works on Windows, Mac, iOS, Android, and any device with a browser.',

        // Footer
        'footer.pages': 'Pages',
        'footer.legal': 'Legal',
        'footer.disclaimer': 'Disclaimer',
        'footer.disclaimer.text': 'Convert2MP3 is an independent tool. Please use this service responsibly and respect copyright laws.',
        'footer.copyright': 'All rights reserved.',
    },
    es: {
        // Header
        'nav.home': 'Inicio',
        'nav.mp3': 'Convertir a MP3',
        'nav.features': 'Características',
        'nav.faq': 'Preguntas',

        // Hero
        'hero.title': 'Convierte Video a',
        'hero.title.highlight': 'MP3',
        'hero.description': 'La herramienta más rápida y confiable para convertir videos online a MP3. Sin anuncios, sin registro, completamente gratis.',
        'hero.terms': 'Al usar nuestro servicio aceptas nuestros',
        'hero.terms.link': 'Términos de Servicio',

        // Converter
        'converter.placeholder': 'Pega el enlace del video aquí...',
        'converter.start': 'Iniciar',
        'converter.processing': 'Analizando Video...',
        'converter.download.mp3': 'Descargar MP3',
        'converter.download.mp4': 'Descargar MP4',

        // How To Section
        'howto.title': 'Cómo Convertir Video a MP3',
        'howto.step1.title': 'Copia la URL del Video',
        'howto.step1.desc': 'Abre el video que deseas convertir y copia la URL.',
        'howto.step2.title': 'Pega el Enlace',
        'howto.step2.desc': 'Pega el enlace en el cuadro de búsqueda y haz clic en "Iniciar".',
        'howto.step3.title': 'Selecciona Formato',
        'howto.step3.desc': 'Elige MP3 para audio o MP4 para video.',
        'howto.step4.title': 'Descargar',
        'howto.step4.desc': 'Haz clic en el botón "Descargar" y guarda el archivo en tu dispositivo.',
        'howto.step5.title': 'Disfruta Sin Conexión',
        'howto.step5.desc': 'Escucha tu audio convertido en cualquier momento.',

        // Why Us Section
        'whyus.title': '¿Por Qué Usar Convert2MP3?',
        'whyus.unlimited.title': 'Conversiones Ilimitadas',
        'whyus.unlimited.desc': 'Convierte tantos videos como quieras sin límites diarios.',
        'whyus.tech.title': 'Última Tecnología',
        'whyus.tech.desc': 'Usamos servidores de última generación para conversiones ultra rápidas.',
        'whyus.noreg.title': 'Sin Registro',
        'whyus.noreg.desc': 'Comienza a descargar inmediatamente, sin registrarte ni dar datos personales.',
        'whyus.formats.title': 'Múltiples Formatos',
        'whyus.formats.desc': 'Descarga en MP3, MP4 y otros formatos populares.',
        'whyus.hd.title': 'Audio de Alta Calidad',
        'whyus.hd.desc': 'Descarga audio en calidad de hasta 320kbps.',

        // Features
        'features.title': '¿Por Qué Elegir Convert2MP3?',
        'features.fast.title': 'Conversión Rápida',
        'features.fast.desc': 'Nuestros servidores avanzados garantizan las velocidades de conversión más rápidas.',
        'features.easy.title': 'Fácil de Usar',
        'features.easy.desc': 'Simplemente pega la URL y haz clic en convertir. Sin conocimientos técnicos.',
        'features.free.title': '100% Gratis',
        'features.free.desc': 'Sin tarifas ocultas, sin suscripciones, sin límites. Gratis para siempre.',
        'features.noreg.title': 'Sin Registro',
        'features.noreg.desc': 'Comienza a convertir inmediatamente sin crear una cuenta.',
        'features.hd.title': 'Alta Calidad',
        'features.hd.desc': 'Obtén la mejor calidad de audio posible de tus videos.',
        'features.devices.title': 'Todos los Dispositivos',
        'features.devices.desc': 'Funciona en Windows, Mac, iOS, Android y cualquier dispositivo con navegador.',

        // Footer
        'footer.pages': 'Páginas',
        'footer.legal': 'Legal',
        'footer.disclaimer': 'Aviso Legal',
        'footer.disclaimer.text': 'Convert2MP3 es una herramienta independiente. Por favor usa este servicio responsablemente.',
        'footer.copyright': 'Todos los derechos reservados.',
    },
    de: {
        'nav.home': 'Startseite',
        'nav.mp3': 'In MP3 umwandeln',
        'nav.features': 'Funktionen',
        'nav.faq': 'FAQ',
        'hero.title': 'Video in',
        'hero.title.highlight': 'MP3 umwandeln',
        'hero.description': 'Das schnellste und zuverlässigste Tool zum Umwandeln von Online-Videos in MP3. Keine Werbung, keine Registrierung, völlig kostenlos.',
        'hero.terms': 'Durch die Nutzung unseres Dienstes akzeptieren Sie unsere',
        'hero.terms.link': 'Nutzungsbedingungen',
        'converter.placeholder': 'Video-Link hier einfügen...',
        'converter.start': 'Starten',
        'converter.processing': 'Video wird analysiert...',
        'converter.download.mp3': 'MP3 herunterladen',
        'converter.download.mp4': 'MP4 herunterladen',
        'howto.title': 'So wandeln Sie Videos in MP3 um',
        'features.title': 'Warum Convert2MP3 wählen?',
        'footer.pages': 'Seiten',
        'footer.legal': 'Rechtliches',
        'footer.disclaimer': 'Haftungsausschluss',
        'footer.copyright': 'Alle Rechte vorbehalten.',
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.mp3': 'Convertir en MP3',
        'nav.features': 'Fonctionnalités',
        'nav.faq': 'FAQ',
        'hero.title': 'Convertir une vidéo en',
        'hero.title.highlight': 'MP3',
        'hero.description': "L'outil le plus rapide et le plus fiable pour convertir des vidéos en MP3. Sans publicité, sans inscription, entièrement gratuit.",
        'converter.placeholder': 'Collez le lien vidéo ici...',
        'converter.start': 'Démarrer',
        'features.title': 'Pourquoi choisir Convert2MP3?',
    },
    pt: {
        'nav.home': 'Início',
        'nav.mp3': 'Converter para MP3',
        'nav.features': 'Recursos',
        'nav.faq': 'Perguntas',
        'hero.title': 'Converter Vídeo para',
        'hero.title.highlight': 'MP3',
        'hero.description': 'A ferramenta mais rápida e confiável para converter vídeos online para MP3. Sem anúncios, sem registro, totalmente grátis.',
        'converter.placeholder': 'Cole o link do vídeo aqui...',
        'converter.start': 'Iniciar',
        'features.title': 'Por que escolher Convert2MP3?',
    },
    ja: {
        'nav.home': 'ホーム',
        'nav.mp3': 'MP3に変換',
        'nav.features': '機能',
        'nav.faq': 'よくある質問',
        'hero.title': '動画を',
        'hero.title.highlight': 'MP3に変換',
        'hero.description': 'オンライン動画をMP3に変換する最速かつ最も信頼性の高いツール。広告なし、登録不要、完全無料。',
        'converter.placeholder': '動画リンクをここに貼り付け...',
        'converter.start': '開始',
        'features.title': 'Convert2MP3を選ぶ理由',
    },
    ko: {
        'nav.home': '홈',
        'nav.mp3': 'MP3로 변환',
        'nav.features': '기능',
        'nav.faq': '자주 묻는 질문',
        'hero.title': '동영상을',
        'hero.title.highlight': 'MP3로 변환',
        'hero.description': '온라인 동영상을 MP3로 변환하는 가장 빠르고 안정적인 도구입니다. 광고 없음, 가입 불필요, 완전 무료.',
        'converter.placeholder': '동영상 링크를 여기에 붙여넣기...',
        'converter.start': '시작',
        'features.title': 'Convert2MP3를 선택하는 이유',
    },
    ar: {
        'nav.home': 'الرئيسية',
        'nav.mp3': 'تحويل إلى MP3',
        'nav.features': 'الميزات',
        'nav.faq': 'الأسئلة الشائعة',
        'hero.title': 'تحويل الفيديو إلى',
        'hero.title.highlight': 'MP3',
        'hero.description': 'أسرع وأكثر أداة موثوقة لتحويل مقاطع الفيديو إلى MP3. بدون إعلانات، بدون تسجيل، مجاني تماماً.',
        'converter.placeholder': 'الصق رابط الفيديو هنا...',
        'converter.start': 'ابدأ',
        'features.title': 'لماذا تختار Convert2MP3؟',
    },
} as const;

export function useTranslations(lang: Language) {
    return function t(key: keyof typeof translations.en): string {
        // @ts-ignore
        return translations[lang][key] || translations.en[key] || key;
    }
}

export function getLangFromUrl(url: URL): Language {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as Language;
    return defaultLang;
}
