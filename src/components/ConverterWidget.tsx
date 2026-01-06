import { useState } from 'react';

interface Props {
    lang?: string;
}

const translations: Record<string, Record<string, string>> = {
    en: {
        placeholder: 'Paste YouTube link here...',
        start: 'Start',
        processing: 'Analyzing Video...',
        downloadMp3: 'Download MP3',
        downloadMp4: 'Download MP4',
        paste: 'Paste',
        quality: 'Quality',
        std: 'Standard',
        hd: 'High Quality',
    },
    es: {
        placeholder: 'Pega el enlace de YouTube aquí...',
        start: 'Iniciar',
        processing: 'Analizando Video...',
        downloadMp3: 'Descargar MP3',
        downloadMp4: 'Descargar MP4',
        paste: 'Pegar',
        quality: 'Calidad',
        std: 'Estándar',
        hd: 'Alta Calidad',
    },
    de: {
        placeholder: 'YouTube-Link hier einfügen...',
        start: 'Starten',
        processing: 'Video wird analysiert...',
        downloadMp3: 'MP3 herunterladen',
        downloadMp4: 'MP4 herunterladen',
        paste: 'Einfügen',
        quality: 'Qualität',
        std: 'Standard',
        hd: 'Hohe Qualität',
    },
    fr: {
        placeholder: 'Collez le lien YouTube ici...',
        start: 'Démarrer',
        processing: 'Analyse de la vidéo...',
        downloadMp3: 'Télécharger MP3',
        downloadMp4: 'Télécharger MP4',
        paste: 'Coller',
        quality: 'Qualité',
        std: 'Standard',
        hd: 'Haute Qualité',
    },
    pt: {
        placeholder: 'Cole o link do YouTube aqui...',
        start: 'Iniciar',
        processing: 'Analisando Vídeo...',
        downloadMp3: 'Baixar MP3',
        downloadMp4: 'Baixar MP4',
        paste: 'Colar',
        quality: 'Qualidade',
        std: 'Padrão',
        hd: 'Alta Qualidade',
    },
    it: {
        placeholder: 'Incolla qui il link YouTube...',
        start: 'Convertire',
        processing: 'Analisi...',
        downloadMp3: 'Scarica MP3',
        downloadMp4: 'Scarica MP4',
        paste: 'Incolla',
        quality: 'Qualità',
        std: 'Standard',
        hd: 'Alta Qualità',
    },
    nl: { placeholder: 'Plak hier de YouTube-link...', start: 'Starten', processing: 'Video analyseren...', downloadMp3: 'Download MP3', downloadMp4: 'Download MP4', paste: 'Plakken', quality: 'Kwaliteit', std: 'Standaard', hd: 'Hoge Kwaliteit' },
    pl: { placeholder: 'Wklej link do YouTube tutaj...', start: 'Start', processing: 'Analizowanie wideo...', downloadMp3: 'Pobierz MP3', downloadMp4: 'Pobierz MP4', paste: 'Wklej', quality: 'Jakość', std: 'Standard', hd: 'Wysoka Jakość' },
    ru: { placeholder: 'Вставьте ссылку YouTube сюда...', start: 'Начать', processing: 'Анализ видео...', downloadMp3: 'Скачать MP3', downloadMp4: 'Скачать MP4', paste: 'Вставить', quality: 'Качество', std: 'Стандарт', hd: 'Высокое' },
    ua: { placeholder: 'Вставте посилання YouTube сюди...', start: 'Почати', processing: 'Аналіз відео...', downloadMp3: 'Завантажити MP3', downloadMp4: 'Завантажити MP4', paste: 'Вставити', quality: 'Якість', std: 'Стандарт', hd: 'Висока' },
    ro: { placeholder: 'Lipiți linkul YouTube aici...', start: 'Start', processing: 'Analizare video...', downloadMp3: 'Descarcă MP3', downloadMp4: 'Descarcă MP4', paste: 'Lipește', quality: 'Calitate', std: 'Standard', hd: 'Înaltă Calitate' },
    hu: { placeholder: 'Illessze be a YouTube linket...', start: 'Indítás', processing: 'Videó elemzése...', downloadMp3: 'MP3 letöltése', downloadMp4: 'MP4 letöltése', paste: 'Beillesztés', quality: 'Minőség', std: 'Normál', hd: 'Kiváló' },
    el: { placeholder: 'Επικολλήστε το σύνδεσμο YouTube...', start: 'Έναρξη', processing: 'Ανάλυση βίντεο...', downloadMp3: 'Λήψη MP3', downloadMp4: 'Λήψη MP4', paste: 'Επικόλληση', quality: 'Ποιότητα', std: 'Τυπική', hd: 'Υψηλή' },
    cz: { placeholder: 'Vložte odkaz na YouTube...', start: 'Start', processing: 'Analýza videa...', downloadMp3: 'Stáhnout MP3', downloadMp4: 'Stáhnout MP4', paste: 'Vložit', quality: 'Kvalita', std: 'Standard', hd: 'Vysoká' },
    tr: { placeholder: 'YouTube bağlantısını buraya yapıştırın...', start: 'Başlat', processing: 'Video analiz ediliyor...', downloadMp3: 'MP3 İndir', downloadMp4: 'MP4 İndir', paste: 'Yapıştır', quality: 'Kalite', std: 'Standart', hd: 'Yüksek' },
    id: { placeholder: 'Tempel tautan YouTube di sini...', start: 'Mulai', processing: 'Menganalisis Video...', downloadMp3: 'Unduh MP3', downloadMp4: 'Unduh MP4', paste: 'Tempel', quality: 'Kualitas', std: 'Standar', hd: 'Tinggi' },
    ph: { placeholder: 'I-paste ang link ng YouTube dito...', start: 'Simulan', processing: 'Sinusuri ang Video...', downloadMp3: 'I-download ang MP3', downloadMp4: 'I-download ang MP4', paste: 'I-paste', quality: 'Kalidad', std: 'Karaniwan', hd: 'Mataas' },
    th: { placeholder: 'วางลิงก์ YouTube ที่นี่...', start: 'เริ่ม', processing: 'กำลังวิเคราะห์วิดีโอ...', downloadMp3: 'ดาวน์โหลด MP3', downloadMp4: 'ดาวน์โหลด MP4', paste: 'วาง', quality: 'คุณภาพ', std: 'มาตรฐาน', hd: 'สูง' },
    vi: { placeholder: 'Dán liên kết YouTube tại đây...', start: 'Bắt đầu', processing: 'Đang phân tích video...', downloadMp3: 'Tải xuống MP3', downloadMp4: 'Tải xuống MP4', paste: 'Dán', quality: 'Chất lượng', std: 'Tiêu chuẩn', hd: 'Cao' },
    ko: { placeholder: 'YouTube 링크를 여기에 붙여넣기...', start: '시작', processing: '동영상 분석 중...', downloadMp3: 'MP3 다운로드', downloadMp4: 'MP4 다운로드', paste: '붙여넣기', quality: '품질', std: '표준', hd: '고화질' },
    ar: { placeholder: 'الصق رابط YouTube هنا...', start: 'ابدأ', processing: 'جاري تحليل الفيديو...', downloadMp3: 'تحميل MP3', downloadMp4: 'تحميل MP4', paste: 'لصق', quality: 'جودة', std: 'قياسي', hd: 'عالية' },
    jp: { placeholder: 'YouTubeリンクをここに貼り付け...', start: '開始', processing: '動画を分析中...', downloadMp3: 'MP3をダウンロード', downloadMp4: 'MP4をダウンロード', paste: '貼り付け', quality: '品質', std: '標準', hd: '高画質' },
    cn: { placeholder: '在此粘贴 YouTube 链接...', start: '开始', processing: '正在分析视频...', downloadMp3: '下载 MP3', downloadMp4: '下载 MP4', paste: '粘贴', quality: '质量', std: '标准', hd: '高清' },
};

export default function ConverterWidget({ lang = 'en' }: Props) {
    const [url, setUrl] = useState('');
    const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'downloading_mp3' | 'downloading_mp4'>('idle');
    const [progress, setProgress] = useState(0);
    const [quality, setQuality] = useState<'standard' | 'high'>('high');
    const [processText, setProcessText] = useState('');

    const t = translations[lang] || translations.en;
    const safeT = (key: string) => t[key] || translations['en'][key];

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setUrl(text);
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
        }
    };

    const handleStart = () => {
        if (!url) return;
        setStatus('processing');
        setProgress(0);
        setProcessText(safeT('processing'));

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setStatus('success');
                    return 100;
                }
                const nextStep = prev + 2;
                if (nextStep > 30 && nextStep < 60) setProcessText('Downloading video stream...');
                if (nextStep > 60 && nextStep < 90) setProcessText(`Converting to ${quality === 'high' ? 'High Quality' : 'Standard'}...`);
                if (nextStep > 90) setProcessText('Finalizing tags...');
                return nextStep;
            });
        }, 50);
    };

    const handleReset = () => {
        setStatus('idle');
        setUrl('');
        setProgress(0);
    };

    const handleDownload = (type: 'mp3' | 'mp4') => {
        if (type === 'mp3') setStatus('downloading_mp3');
        else setStatus('downloading_mp4');

        setTimeout(() => {
            const element = document.createElement('a');
            const qualityLabel = quality === 'high' ? (type === 'mp3' ? '320kbps' : '1080p') : (type === 'mp3' ? '128kbps' : '720p');
            const fileContent = `Fake ${type.toUpperCase()} content for: ${url}\nQuality: ${qualityLabel}`;
            const file = new Blob([fileContent], { type: 'text/plain' });
            element.href = URL.createObjectURL(file);
            element.download = `video_converted_[${qualityLabel}].${type}`;
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

            setStatus('success');
        }, 1500);
    };

    return (
        <div className="w-full max-w-3xl mx-auto bg-brand-card/80 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/50 ring-1 ring-white/5 overflow-hidden relative">
            {/* Status Bar for Processing State */}
            {status === 'processing' && (
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 z-20">
                    <div
                        className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-300 ease-out relative"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundSize: '10px 10px', backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)' }}></div>
                    </div>
                </div>
            )}

            <div className="relative flex flex-col sm:flex-row items-center p-2 gap-2">
                {status === 'idle' || status === 'processing' ? (
                    <>
                        <div className="relative w-full group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 transition-colors ${status === 'processing' ? 'text-violet-400 animate-pulse' : 'text-slate-500'}`}>
                                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={status === 'processing' ? processText : url}
                                readOnly={status === 'processing'}
                                onChange={(e) => setUrl(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleStart()}
                                className={`block w-full rounded-xl bg-slate-950/50 border-0 py-4 pl-12 pr-28 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500 focus:outline-none text-base transition-all duration-300 shadow-inner ${status === 'processing' ? 'opacity-80 cursor-wait text-center italic text-violet-200' : ''}`}
                                placeholder={safeT('placeholder')}
                            />
                            {status === 'idle' && (
                                <div className="absolute inset-y-0 right-2 flex items-center">
                                    <button
                                        onClick={handlePaste}
                                        className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-white/5"
                                    >
                                        {safeT('paste')}
                                    </button>
                                </div>
                            )}
                        </div>

                        {status === 'idle' && (
                            <div className="flex items-center gap-2 w-full sm:w-auto h-[56px] sm:h-auto">
                                {/* Quality Dropdown */}
                                <div className="relative group shrink-0 h-full">
                                    <select
                                        value={quality}
                                        onChange={(e) => setQuality(e.target.value as 'standard' | 'high')}
                                        className="h-full appearance-none bg-slate-800 text-white text-xs font-medium px-4 pr-8 rounded-xl border border-white/5 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer flex items-center"
                                    >
                                        <option value="standard">{safeT('std')}</option>
                                        <option value="high">{safeT('hd')}</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleStart}
                                    className="h-full w-full sm:w-auto inline-flex items-center justify-center gap-x-2 rounded-xl bg-violet-600 px-6 font-bold text-white shadow-lg shadow-violet-900/20 hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group whitespace-nowrap"
                                    disabled={!url}
                                >
                                    <span>{safeT('start')}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="w-full py-2 flex flex-col sm:flex-row items-center justify-between px-2 gap-4">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            {/* Thumbnail Placeholder */}
                            <div className="w-16 h-10 bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center border border-white/5 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-600">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-left overflow-hidden">
                                <h3 className="text-white font-bold text-sm truncate">Rick Astley - Never Gonna...</h3>
                                <p className="text-slate-400 text-xs flex items-center gap-2">
                                    <span>10:25</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                    <span className="text-violet-400">{quality === 'high' ? 'HD' : 'SD'}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                            {/* MP3 Button */}
                            <button
                                onClick={() => handleDownload('mp3')}
                                disabled={status === 'downloading_mp3'}
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 border border-white/5 ${status === 'downloading_mp3'
                                        ? 'bg-slate-800 text-white cursor-wait'
                                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
                                    }`}
                            >
                                {status === 'downloading_mp3' ? (
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <span className="text-xs uppercase tracking-wider">MP3</span>
                                )}
                                <span>{safeT('downloadMp3')}</span>
                            </button>

                            {/* MP4 Button */}
                            <button
                                onClick={() => handleDownload('mp4')}
                                disabled={status === 'downloading_mp4'}
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-lg flex items-center gap-2 ${status === 'downloading_mp4'
                                        ? 'bg-violet-600/50 text-white cursor-wait shadow-none'
                                        : 'bg-violet-600 text-white hover:bg-violet-500 shadow-violet-500/20'
                                    }`}
                            >
                                {status === 'downloading_mp4' ? (
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <span className="text-xs uppercase tracking-wider opacity-80">MP4</span>
                                )}
                                <span>{safeT('downloadMp4')}</span>
                            </button>

                            <button onClick={handleReset} className="p-2 text-slate-500 hover:text-white transition-colors" title="Convert another">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
