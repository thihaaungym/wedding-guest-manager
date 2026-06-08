// --- ၁။ FRONTEND (UI) ၏ HTML CODE များ ---
const UI_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wedding Guest Management</title>
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#5c4e3c">
    
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Padauk:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:wght@300;400;500;600;700;800&family=Noto+Sans+Myanmar:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"><\/script>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: { 
                        wedding: { 
                            50: 'var(--w-50)', 
                            100: 'var(--w-100)', 
                            500: 'var(--w-500)', 
                            800: 'var(--w-800)', 
                            900: 'var(--w-900)' 
                        } 
                    },
                    boxShadow: {
                        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.05), inset 0 0 0 1.5px rgba(255, 255, 255, 0.6)',
                        'luxury-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.6), inset 0 0 0 1.5px rgba(255, 255, 255, 0.05)',
                        'glow': '0 0 20px 0 var(--w-500)',
                    },
                    animation: {
                        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'spin-slow': 'spin 4s linear infinite',
                        'fade-in': 'fadeIn 0.5s ease-out forwards',
                    },
                    keyframes: {
                        pulseGlow: { 
                            '0%, 100%': { opacity: 0.2, transform: 'scale(1)' }, 
                            '50%': { opacity: 0.5, transform: 'scale(1.05)' } 
                        },
                        float: { 
                            '0%, 100%': { transform: 'translateY(0)' }, 
                            '50%': { transform: 'translateY(-10px)' } 
                        },
                        fadeIn: {
                            '0%': { opacity: 0, transform: 'translateY(10px)' },
                            '100%': { opacity: 1, transform: 'translateY(0)' }
                        }
                    }
                }
            }
        }
    <\/script>
    
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"><\/script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"><\/script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
    <script src="https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js"><\/script>
    
    <style>
        :root { 
            --w-50: #faf7f2; 
            --w-100: #f0e8d9; 
            --w-500: #c2a37d; 
            --w-800: #5c4e3c; 
            --w-900: #3d3428; 
        }
        
        @font-face {
            font-family: 'MiSans Myanmar';
            src: local('MiSans Myanmar'), local('MiSans');
        }
        
        body, input, textarea, select, button { 
            font-family: 'Montserrat', 'Padauk', 'Noto Sans Myanmar', 'Pyidaungsu', sans-serif; 
            line-height: 1.8; 
        }

        .font-mm {
            font-family: 'Padauk', 'Noto Sans Myanmar', 'Pyidaungsu', sans-serif !important;
            letter-spacing: 0.2px !important;
            word-spacing: normal !important;
        }
        .font-cursive { font-family: 'Great Vibes', cursive !important; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .luxury-wedding-font { font-family: 'Playfair Display', serif !important; font-style: italic !important; font-weight: 600 !important; letter-spacing: 0.02em !important; padding: 0 2px; }
        .font-numbers { font-family: 'Montserrat', sans-serif !important; letter-spacing: -0.02em; }
        
        body { background-color: #f8f7f5; position: relative; min-height: 100vh; overflow-x: hidden; }
        .dark body { background-color: #09090b; color: #f3f4f6; }
        
        .site-bg-pattern { position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.04; mix-blend-mode: multiply; }
        .dark .site-bg-pattern { opacity: 0.1; mix-blend-mode: overlay; }

        .glass-luxury { 
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.75) 100%); 
            backdrop-filter: blur(24px); 
            border-top: 1px solid rgba(255, 255, 255, 1); 
            border-left: 1px solid rgba(255, 255, 255, 1);
            border-right: 1px solid rgba(255, 255, 255, 0.4);
            border-bottom: 1px solid rgba(255, 255, 255, 0.4);
            box-shadow: 0 20px 40px -15px rgba(0,0,0,0.05); 
        }
        .dark .glass-luxury { 
            background: linear-gradient(135deg, rgba(24, 24, 27, 0.8) 0%, rgba(24, 24, 27, 0.6) 100%); 
            border-top: 1px solid rgba(255, 255, 255, 0.15); 
            border-left: 1px solid rgba(255, 255, 255, 0.15); 
            border-right: 1px solid rgba(255, 255, 255, 0.02);
            border-bottom: 1px solid rgba(255, 255, 255, 0.02);
            box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5); 
        }

        @keyframes luxuryFloat { 0% { transform: translateY(110vh) translateX(0px) scale(0.5); opacity: 0; } 10% { opacity: 0.9; } 50% { transform: translateY(50vh) translateX(20px) scale(1.1); } 90% { opacity: 0.9; } 100% { transform: translateY(-10vh) translateX(-20px) scale(1.5); opacity: 0; } }
        .luxury-particle { position: absolute; border-radius: 50%; background-color: var(--w-500); box-shadow: 0 0 15px 4px var(--w-500), inset 0 0 4px 1px rgba(255,255,255,0.5); animation: luxuryFloat linear infinite; opacity: 0; pointer-events: none; }
        .dark .luxury-particle { background-color: var(--w-100); box-shadow: 0 0 15px 4px var(--w-500); }

        @keyframes cinematicFade { 0% { opacity: 0; filter: blur(10px); transform: scale(0.95); } 50% { opacity: 1; filter: blur(0px); transform: scale(1); } 100% { opacity: 0; filter: blur(10px); transform: scale(1.05); } }
        .cinematic-intro { animation: cinematicFade 3.5s ease-in-out infinite; }

        .envelope-container { perspective: 1200px; }
        .envelope-wrapper { position: relative; width: 320px; height: 220px; background: linear-gradient(135deg, #f5f0e6, #e6dac3); border-radius: 8px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4); transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); transform-style: preserve-3d; cursor: pointer; }
        .envelope-wrapper:hover { transform: translateY(-5px) rotateX(5deg); box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); }
        .envelope-flap { position: absolute; top: 0; left: 0; width: 0; height: 0; border-left: 160px solid transparent; border-right: 160px solid transparent; border-top: 135px solid #e8d8c3; transform-origin: top; z-index: 40; transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); border-radius: 8px 8px 0 0; filter: drop-shadow(0 4px 4px rgba(0,0,0,0.1)); }
        .envelope-pocket { position: absolute; bottom: 0; left: 0; width: 0; height: 0; border-left: 160px solid #f0e6d6; border-right: 160px solid #f0e6d6; border-bottom: 125px solid #e3d0b8; z-index: 30; border-radius: 0 0 8px 8px; }
        .envelope-letter { position: absolute; top: 10px; left: 15px; right: 15px; bottom: 10px; background: #fff; border-radius: 8px; z-index: 20; transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s; box-shadow: 0 0 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid #f0e8d9; }
        .wax-seal { position: absolute; top: 135px; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: radial-gradient(circle, #d4af37 0%, #aa7c11 100%); border-radius: 50%; z-index: 50; display: flex; align-items: center; justify-content: center; color: white; font-family: 'Great Vibes', cursive; font-size: 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.3), inset 0 0 10px rgba(255,255,255,0.4); transition: opacity 0.5s ease, transform 0.5s ease; text-shadow: 1px 1px 2px rgba(0,0,0,0.4); border: 2px solid rgba(255,255,255,0.2); }
        
        .is-open .envelope-flap { transform: rotateX(180deg); z-index: 10; }
        .is-open .wax-seal { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        .is-open .envelope-letter { transform: translateY(-120px); z-index: 45; }

        @keyframes pulse-ring { 0% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(194, 163, 125, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(194, 163, 125, 0); } 100% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(194, 163, 125, 0); } }
        .animate-pulse-ring { animation: pulse-ring 2s infinite; }
        .record-spin { animation: spin 4s linear infinite; }

        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 10px; }
        .dark ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); }
        @media print { .no-print { display: none !important; } .glass-luxury { border: none; box-shadow: none; background: transparent !important; } body { background: white !important; color: black !important; } .page-break-inside-avoid { page-break-inside: avoid; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;} }
    </style>
</head>
<body class="text-gray-800 transition-colors duration-500">
    <div id="root">
        <div style="display:flex; justify-content:center; align-items:center; height:100vh; flex-direction:column; background-color:#111111;" class="dark:bg-zinc-950 transition-colors">
            <h1 class="cinematic-intro" style="font-family:'Playfair Display', serif; color:#c2a37d; font-size:42px; font-style:italic; font-weight:600; letter-spacing: 2px;">Ever After</h1>
            <div style="width: 1px; height: 50px; background: linear-gradient(to bottom, transparent, #c2a37d, transparent); margin-top: 24px; animation: pulseGlow 2s infinite;"></div>
        </div>
    </div>

    <script type="text/babel">
        const { useState, useEffect, useMemo, useRef, useCallback } = React;

        const THEMES = {
            gold: { 50: '#faf7f2', 100: '#f0e8d9', 500: '#c2a37d', 800: '#5c4e3c', 900: '#3d3428' },
            rose: { 50: '#fff1f2', 100: '#ffe4e6', 500: '#fb7185', 800: '#be123c', 900: '#881337' },
            emerald: { 50: '#ecfdf5', 100: '#d1fae5', 500: '#34d399', 800: '#047857', 900: '#064e3b' },
            blue: { 50: '#eff6ff', 100: '#dbeafe', 500: '#60a5fa', 800: '#1d4ed8', 900: '#1e3a8a' },
            terracotta: { 50: '#fef6f5', 100: '#fbe8e2', 500: '#d97757', 800: '#9e472d', 900: '#7a341f' },
            sage: { 50: '#f6f7f6', 100: '#e8ebe8', 500: '#8ba38d', 800: '#4a5e4c', 900: '#344536' },
            burgundy: { 50: '#fdf2f4', 100: '#f9e1e5', 500: '#9d2235', 800: '#6b1220', 900: '#4a0a14' },
            lavender: { 50: '#f8f5fc', 100: '#eee6f7', 500: '#a385c6', 800: '#5a4278', 900: '#402e57' }
        };

        const PATTERNS = { 
            floral: 'https://www.transparenttextures.com/patterns/floral-motif.png', 
            dots: 'https://www.transparenttextures.com/patterns/stardust.png', 
            geo: 'https://www.transparenttextures.com/patterns/cubes.png', 
            none: '' 
        };

        const convertToEnglishDigits = (str) => {
            if(!str) return '';
            const myNumbers = { '၀':'0', '၁':'1', '၂':'2', '၃':'3', '၄':'4', '၅':'5', '၆':'6', '၇':'7', '၈':'8', '၉':'9' };
            return str.toString().replace(/[၀-၉]/g, m => myNumbers[m]);
        };

        const toTitleCase = (str) => {
            if (!str) return '';
            return str.toString().trim().replace(/[\\s\\u200B]+/g, ' ').split(' ').map(word => {
                if (word.length === 0) return word;
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ');
        };

        const normalizeMyanmarText = (str) => {
            if (!str) return '';
            let s = str.toString().replace(/၀/g, 'ဝ').toLowerCase(); 
            s = s.replace(/[\\s\\u200B]+/g, ''); 
            s = s.replace(/\\u1025\\u102E/g, '\\u1026'); 
            return s;
        };

        const apiCall = async (url, options = {}) => {
            if (!navigator.onLine) throw new Error("Offline");
            const res = await fetch(url, Object.assign({ headers: { 'Content-Type': 'application/json' } }, options));
            if (res.status === 401) window.location.hash = '#login';
            return res.json();
        };

        function AmbientBackground({ effect_on }) {
            return (
                <React.Fragment>
                    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-wedding-500/10 dark:bg-wedding-500/5 rounded-full blur-[100px] animate-pulse-glow transition-colors duration-500"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] animate-pulse-glow transition-colors duration-500" style={{ animationDelay: '2s' }}></div>
                    </div>
                    {effect_on === 1 && (
                        <div className="fixed inset-0 overflow-hidden pointer-events-none z-40">
                            {[...Array(25)].map((_, i) => (
                                <div key={i} className="luxury-particle transition-colors duration-500" style={{ left: (Math.random() * 100) + '%', width: (Math.random() * 5 + 3) + 'px', height: (Math.random() * 5 + 3) + 'px', animationDelay: (Math.random() * 10) + 's', animationDuration: (Math.random() * 10 + 15) + 's' }}></div>
                            ))}
                        </div>
                    )}
                </React.Fragment>
            );
        }

        function GuestInviteView({ settings }) {
            const [isOpened, setIsOpened] = useState(false);
            const [showEnvelope, setShowEnvelope] = useState(true);
            const [isPlaying, setIsPlaying] = useState(true);
            const audioRef = useRef(null);

            const handleOpen = () => {
                setIsOpened(true);
                if (audioRef.current) {
                    audioRef.current.volume = 0.5;
                    audioRef.current.play().catch(e => console.log("Audio blocked", e));
                    setIsPlaying(true);
                }
                setTimeout(() => setShowEnvelope(false), 2000);
            };

            const toggleMusic = () => {
                if (audioRef.current) {
                    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
                    else { audioRef.current.play(); setIsPlaying(true); }
                }
            };

            const audioElement = settings.music_url ? <audio ref={audioRef} src={settings.music_url} loop /> : null;

            if (showEnvelope) {
                return (
                    <div className="w-full max-w-[420px] min-h-screen bg-[#111] flex flex-col items-center justify-center relative mx-auto shadow-2xl overflow-hidden envelope-container">
                        {audioElement}
                        <div className="absolute inset-0 z-0 bg-black/60" style={{ backgroundImage: "url(" + (settings.bg_image || '') + ")", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(8px) brightness(0.6)' }}></div>
                        
                        <div className="relative z-20 flex flex-col items-center animate-fade-in">
                            <h1 className="font-cursive text-5xl text-white/90 mb-12 drop-shadow-lg text-center leading-tight">
                                {settings.groom_name?.charAt(0)} <span className="text-3xl text-wedding-500">&amp;</span> {settings.bride_name?.charAt(0)}<br/>
                                <span className="font-sans text-[10px] tracking-[0.4em] uppercase font-bold text-gray-300 mt-4 block">You're Invited</span>
                            </h1>

                            <div className={"envelope-wrapper " + (isOpened ? "is-open" : "")} onClick={!isOpened ? handleOpen : undefined}>
                                <div className="envelope-flap"></div>
                                <div className="envelope-letter">
                                     <h2 className="font-cursive text-3xl text-wedding-500">{settings.groom_name} & {settings.bride_name}</h2>
                                     <p className="font-sans text-[8px] uppercase tracking-widest text-gray-400 mt-2 font-bold">{settings.wedding_date}</p>
                                </div>
                                <div className="envelope-pocket"></div>
                                <div className="wax-seal">E</div>
                            </div>
                            
                            <p className={"text-white mt-14 font-sans text-[10px] tracking-[0.3em] uppercase font-bold drop-shadow-md transition-opacity duration-500 " + (isOpened ? "opacity-0" : "opacity-100 animate-pulse")}>Tap the seal to open</p>
                        </div>
                    </div>
                );
            }

            return (
                <div className="w-full max-w-[420px] min-h-screen bg-gradient-to-b from-[#faf8f5] to-[#f2ebe0] relative overflow-hidden flex flex-col pt-12 pb-10 px-6 box-border mx-auto shadow-2xl border border-white/50 animate-fade-in">
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/floral-motif.png')", zIndex: 0 }}></div>
                    {audioElement}
                    
                    <div className="relative z-10 flex flex-col h-full items-center text-center">
                        {settings.music_url && (
                            <button onClick={toggleMusic} className={"absolute top-0 right-0 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-lg text-wedding-600 transition-all z-50 " + (isPlaying ? "record-spin shadow-wedding-500/20" : "opacity-60")}>
                                <i className={"ph-fill " + (isPlaying ? "ph-music-notes" : "ph-speaker-slash") + " text-lg"}></i>
                                {isPlaying && <span className="absolute w-full h-full rounded-full border border-wedding-400/50 animate-pulse-ring"></span>}
                            </button>
                        )}
                        
                        <div className="mt-6 mb-2">
                            <p className="font-sans text-[9px] tracking-[0.4em] font-bold text-gray-400 uppercase mb-4 opacity-80">We Are Getting Married</p>
                            <h1 className="font-cursive text-7xl text-wedding-500 drop-shadow-sm leading-none" style={{ transform: 'translateX(-5px)' }}>{settings.groom_name}</h1>
                            <span className="font-serif italic text-2xl text-gray-300 block my-1">&amp;</span>
                            <h1 className="font-cursive text-7xl text-wedding-500 drop-shadow-sm leading-none" style={{ transform: 'translateX(5px)' }}>{settings.bride_name}</h1>
                        </div>

                        {settings.bg_image && (
                            <div className="w-44 h-44 rounded-full p-[4px] bg-gradient-to-tr from-wedding-500 via-wedding-100 to-wedding-500 shadow-xl my-8 animate-fade-in delay-1 relative">
                                <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse-glow z-0"></div>
                                <img src={settings.bg_image} className="w-full h-full rounded-full object-cover border-[3px] border-white relative z-10" />
                            </div>
                        )}

                        <div className="text-center mb-8 animate-fade-in delay-1 relative">
                            <i className="ph-fill ph-quotes text-wedding-100 text-4xl absolute -top-4 -left-2 -z-10"></i>
                            <p className="font-mm text-[15px] text-gray-700 leading-loose px-4 tracking-wide font-medium">ကျွန်တော်၊ ကျွန်မတို့၏ မင်္ဂလာ<br/>လက်ထပ်ထိမ်းမြားခြင်း အခမ်းအနားသို့<br/>မိတ်ဆွေသင်္ဂဟများအား ရိုသေလေးစားစွာဖြင့်<br/>ဖိတ်ကြားအပ်ပါသည်။</p>
                        </div>

                        <div className="space-y-4 w-full text-left animate-fade-in delay-2 mt-auto pb-4">
                            <div className="glass-luxury p-4 rounded-3xl flex items-center gap-4 transition-transform hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-full bg-wedding-50 flex items-center justify-center text-wedding-500 shrink-0 border border-wedding-100/50 shadow-inner"><i className="ph-fill ph-calendar-blank text-2xl"></i></div>
                                <div>
                                    <p className="font-mm text-[10px] font-bold text-gray-400 mb-0.5 tracking-wider uppercase">မင်္ဂလာရက်</p>
                                    <p className="font-sans font-bold text-gray-800 text-[14px]">{settings.wedding_date}</p>
                                </div>
                            </div>
                            <div className="glass-luxury p-4 rounded-3xl flex items-center gap-4 transition-transform hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-full bg-wedding-50 flex items-center justify-center text-wedding-500 shrink-0 border border-wedding-100/50 shadow-inner"><i className="ph-fill ph-map-pin text-2xl"></i></div>
                                <div>
                                    <p className="font-mm text-[10px] font-bold text-gray-400 mb-0.5 tracking-wider uppercase">နေရာ</p>
                                    <p className="font-mm font-bold text-gray-800 text-[14px] leading-snug">{settings.venue}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        function App() {
            const [view, setView] = useState('dashboard');
            const [isAuth, setIsAuth] = useState(false);
            const [userRole, setUserRole] = useState('admin');
            const [userName, setUserName] = useState('');
            const [darkMode, setDarkMode] = useState(false);
            const [toast, setToast] = useState(null);
            const [appSettings, setAppSettings] = useState({ theme_color: 'gold', bg_pattern: 'floral', effect_on: 1, recovery_key: '' });
            const [isInitialLoad, setIsInitialLoad] = useState(true);

            useEffect(() => {
                const handleOffline = () => showToast('အင်တာနက်လိုင်း ပြတ်တောက်သွားပါပြီ (Offline)', 'error');
                const handleOnline = () => showToast('အင်တာနက် ပြန်လည်ရရှိပါပြီ (Online)', 'success');
                window.addEventListener('offline', handleOffline); 
                window.addEventListener('online', handleOnline);
                return () => { window.removeEventListener('offline', handleOffline); window.removeEventListener('online', handleOnline); };
            }, []);

            useEffect(() => {
                const initAuthAndSettings = async () => {
                    try {
                        const sRes = await fetch('/api/settings');
                        if (sRes.ok) {
                            const sData = await sRes.json();
                            if (sData.settings) setAppSettings(sData.settings);
                        }
                    } catch(e) {}

                    try {
                        const res = await apiCall('/api/auth/check');
                        if (res.auth) {
                            setIsAuth(true);
                            setUserRole(res.role || 'admin');
                            setUserName(res.username || '');
                        } else {
                            if(window.location.hash !== '#view-invite') window.location.hash = '#login';
                        }
                    } catch (error) { if(window.location.hash !== '#view-invite') window.location.hash = '#login'; }
                    
                    setIsInitialLoad(false);
                };
                initAuthAndSettings();

                const hash = window.location.hash.replace('#', '') || 'dashboard';
                setView(hash);
                window.addEventListener('hashchange', () => {
                    setView(window.location.hash.replace('#', '') || 'dashboard');
                });

                if (localStorage.getItem('weddingDarkMode') === 'true') { setDarkMode(true); document.documentElement.classList.add('dark'); }
            }, []);

            const showToast = (msg, type = 'success') => { setToast({ msg, type }); setTimeout(() => setToast(null), type === 'success' ? 3500 : 5500); };
            
            const toggleDark = () => {
                const newDark = !darkMode; setDarkMode(newDark); localStorage.setItem('weddingDarkMode', newDark);
                if (newDark) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark');
            };
            
            const handleThemePreview = (newColor, effectState) => {
                setAppSettings(prev => Object.assign({}, prev, { theme_color: newColor, effect_on: effectState }));
            };

            const themeColors = THEMES[appSettings.theme_color || 'gold'];
            const cssVars = ':root { --w-50: ' + themeColors[50] + '; --w-100: ' + themeColors[100] + '; --w-500: ' + themeColors[500] + '; --w-800: ' + themeColors[800] + '; --w-900: ' + themeColors[900] + '; }';
            
            if (isInitialLoad) return null; 
            if (view === 'view-invite') return <GuestInviteView settings={appSettings} />;
            if (!isAuth && view === 'login') return <React.Fragment><style>{cssVars}</style><Login onLogin={() => { setIsAuth(true); window.location.hash = '#dashboard'; window.location.reload(); }} appSettings={appSettings} /></React.Fragment>;
            if (!isAuth) return <div className="flex h-screen items-center justify-center bg-[#f8f7f5] dark:bg-zinc-950"><div className="w-12 h-12 border-4 border-wedding-100 border-t-wedding-500 rounded-full animate-spin"></div></div>;

            let currentView = view;
            if (userRole === 'staff' && (view === 'settings' || view === 'logs')) {
                currentView = 'dashboard';
                window.location.hash = '#dashboard';
            }

            return (
                <div className="min-h-screen flex flex-col relative font-mm transition-colors duration-500">
                    <style>{cssVars}</style>
                    {PATTERNS[appSettings.bg_pattern] && <div className="site-bg-pattern no-print" style={{ backgroundImage: "url('" + PATTERNS[appSettings.bg_pattern] + "')" }}></div>}
                    <AmbientBackground effect_on={appSettings.effect_on} />
                    
                    <nav className="glass-luxury sticky top-0 z-50 px-4 sm:px-8 py-3 sm:py-4 mb-8 flex justify-between items-center no-print mx-0 sm:mx-6 sm:mt-6 rounded-b-3xl sm:rounded-[2rem]">
                        <div className="flex items-center gap-3">
                            {appSettings.logo_url ? (
                                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full p-[2px] bg-gradient-to-tr from-wedding-500 to-wedding-100 shadow-md flex-shrink-0 transition-all duration-500">
                                    <img src={appSettings.logo_url} className="w-full h-full rounded-full object-cover border-[1.5px] border-white dark:border-gray-900" />
                                </div>
                            ) : (
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-wedding-500 to-wedding-100 rounded-full flex items-center justify-center shadow-md border-2 border-white dark:border-gray-800 flex-shrink-0 transition-all duration-500">
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="12" r="6"></circle><circle cx="15.5" cy="12" r="6"></circle></svg>
                                </div>
                            )}
                            <div className="hidden sm:flex flex-col ml-1">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight font-sans">{userName}</span>
                                <span className={"text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mt-0.5 w-max font-sans transition-colors duration-500 " + (userRole === 'admin' ? 'bg-wedding-100 text-wedding-800' : 'bg-blue-100 text-blue-800')}>{userRole === 'admin' ? 'Admin' : 'Staff'}</span>
                            </div>
                        </div>

                        <div className="hidden md:flex gap-2 sm:gap-6 items-center p-1.5 bg-gray-100/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                            {['dashboard', 'guests'].map(tab => (
                                <a key={tab} href={'#' + tab} className={'px-4 py-2 rounded-xl text-sm sm:text-base font-bold capitalize transition-all duration-300 font-sans ' + (currentView === tab ? 'bg-white dark:bg-gray-700 text-wedding-500 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-wedding-500')}>
                                    {tab}
                                </a>
                            ))}
                            {userRole === 'admin' && ['logs', 'settings'].map(tab => (
                                <a key={tab} href={'#' + tab} className={'px-4 py-2 rounded-xl text-sm sm:text-base font-bold capitalize transition-all duration-300 font-sans ' + (currentView === tab ? 'bg-white dark:bg-gray-700 text-wedding-500 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-wedding-500')}>
                                    {tab}
                                </a>
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                            <div className="flex md:hidden gap-1 mr-2">
                                <a href="#dashboard" className={"p-2 rounded-lg transition-colors " + (currentView === 'dashboard' ? 'text-wedding-500 bg-wedding-50 dark:bg-wedding-900/20' : 'text-gray-400')}><i className="ph-fill ph-squares-four text-xl"></i></a>
                                <a href="#guests" className={"p-2 rounded-lg transition-colors " + (currentView === 'guests' ? 'text-wedding-500 bg-wedding-50 dark:bg-wedding-900/20' : 'text-gray-400')}><i className="ph-fill ph-users text-xl"></i></a>
                                {userRole === 'admin' && <a href="#logs" className={"p-2 rounded-lg transition-colors " + (currentView === 'logs' ? 'text-wedding-500 bg-wedding-50 dark:bg-wedding-900/20' : 'text-gray-400')}><i className="ph-fill ph-list-bullets text-xl"></i></a>}
                                {userRole === 'admin' && <a href="#settings" className={"p-2 rounded-lg transition-colors " + (currentView === 'settings' ? 'text-wedding-500 bg-wedding-50 dark:bg-wedding-900/20' : 'text-gray-400')}><i className="ph-fill ph-gear text-xl"></i></a>}
                            </div>
                            <button onClick={toggleDark} className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-wedding-500 shadow-sm border border-gray-200/50 dark:border-gray-700/50 transition-all"><i className={"ph-fill text-lg sm:text-xl " + (darkMode ? 'ph-sun' : 'ph-moon')}></i></button>
                            <a href="#view-invite" target="_blank" className="hidden sm:flex bg-wedding-100 text-wedding-900 px-4 py-2 rounded-xl font-bold text-xs items-center gap-2 shadow-sm hover:bg-wedding-200 transition-colors"><i className="ph-bold ph-envelope-open"></i> Preview Card</a>
                            <button onClick={async () => { await fetch('/api/logout', { method: 'POST' }); setIsAuth(false); window.location.hash = '#login'; window.location.reload(); }} className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-red-50 dark:bg-red-900/20 text-red-500 hover:bg-red-500 hover:text-white shadow-sm border border-red-100 dark:border-red-900/30 transition-all"><i className="ph-bold ph-power text-lg sm:text-xl"></i></button>
                        </div>
                    </nav>

                    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pb-16">
                        {currentView === 'dashboard' && <Dashboard userRole={userRole} />}
                        {currentView === 'guests' && <GuestManagement showToast={showToast} userRole={userRole} appSettings={appSettings} />}
                        {currentView === 'logs' && userRole === 'admin' && <AuditLogs showToast={showToast} />}
                        {currentView === 'settings' && userRole === 'admin' && <Settings showToast={showToast} appSettings={appSettings} setAppSettings={setAppSettings} onLivePreview={handleThemePreview} />}
                    </main>

                    <footer className="mt-auto py-8 text-center no-print relative z-10 border-t border-gray-200/50 dark:border-gray-800/50">
                        <p className="font-serif italic text-sm sm:text-base tracking-wider text-gray-400 flex items-center justify-center flex-wrap gap-2">
                            Crafted with elegance by <span className="luxury-wedding-font text-wedding-500 text-lg sm:text-xl drop-shadow-sm ml-1" style={{transform: 'translateY(-1px)'}}>Thiha Aung (Yone Man)</span>
                        </p>
                    </footer>

                    {toast && (
                        <div className={"fixed top-4 left-4 right-4 sm:top-6 sm:left-auto sm:right-8 mx-auto w-auto sm:w-max max-w-[92vw] sm:max-w-md px-5 py-4 rounded-2xl shadow-luxury text-white animate-fade-in z-[100] font-bold flex items-start sm:items-center gap-3 border border-white/20 backdrop-blur-md font-mm " + (toast.type === 'error' ? 'bg-red-500/95' : toast.type === 'warn' ? 'bg-amber-500/95' : 'bg-wedding-800/95')}>
                            <i className={"ph-fill text-2xl shrink-0 mt-0.5 sm:mt-0 " + (toast.type === 'error' ? 'ph-warning' : toast.type === 'warn' ? 'ph-warning-circle' : 'ph-check-circle')}></i>
                            <span className="leading-relaxed text-sm sm:text-base break-words">{toast.msg}</span>
                        </div>
                    )}
                </div>
            );
        }

        function Login({ onLogin, appSettings }) {
            const [username, setUsername] = useState(''); 
            const [password, setPassword] = useState(''); 
            const [errorMsg, setErrorMsg] = useState(''); 
            const [successMsg, setSuccessMsg] = useState('');
            const [isLoading, setIsLoading] = useState(false);
            
            const [showPassword, setShowPassword] = useState(false);
            const [showRecovery, setShowRecovery] = useState(false);
            const [showNewPassword, setShowNewPassword] = useState(false);

            const [view, setView] = useState('login'); 
            const [recoveryKey, setRecoveryKey] = useState('');
            const [newPassword, setNewPassword] = useState('');

            const handleLogin = async (e) => {
                e.preventDefault(); setErrorMsg(''); setSuccessMsg(''); setIsLoading(true);
                try {
                    const res = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }), headers: { 'Content-Type': 'application/json' }});
                    setIsLoading(false); if (res.ok) onLogin(); else setErrorMsg('Username သို့မဟုတ် Password မှားယွင်းနေပါသည်');
                } catch(e) { setIsLoading(false); setErrorMsg('Network ချိတ်ဆက်မှု အဆင်မပြေပါ'); }
            };

            const handleReset = async (e) => {
                e.preventDefault(); setErrorMsg(''); setSuccessMsg(''); setIsLoading(true);
                try {
                    const res = await fetch('/api/reset-password', { method: 'POST', body: JSON.stringify({ username, recoveryKey, newPassword }), headers: { 'Content-Type': 'application/json' }});
                    const data = await res.json();
                    setIsLoading(false); 
                    if (res.ok) { 
                        setSuccessMsg('စကားဝှက် အောင်မြင်စွာ ပြောင်းလဲပြီးပါပြီ။ ကျေးဇူးပြု၍ ပြန်လည်ဝင်ရောက်ပါ။'); 
                        setTimeout(() => { setView('login'); setSuccessMsg(''); setPassword(''); }, 2500);
                    } 
                    else setErrorMsg(data.error === 'Invalid Recovery Key' ? 'Recovery Key မှားယွင်းနေပါသည်' : 'Username ရှာမတွေ့ပါ');
                } catch(e) { setIsLoading(false); setErrorMsg('Network ချိတ်ဆက်မှု အဆင်မပြေပါ'); }
            };

            return (
                <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&bg=80')] bg-cover bg-center relative">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
                    
                    <div className="glass-luxury p-10 sm:p-14 rounded-[2.5rem] w-full max-w-md relative z-10 text-center shadow-2xl border border-white/20 transition-all duration-500 overflow-hidden font-sans">
                        
                        {appSettings?.logo_url ? (
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-tr from-wedding-500 to-wedding-100 shadow-luxury">
                                <img src={appSettings.logo_url} className="w-full h-full rounded-full object-cover border-2 border-white dark:border-gray-900" />
                            </div>
                        ) : (
                            <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-wedding-500 to-wedding-100 rounded-full flex items-center justify-center shadow-luxury border-4 border-white mb-6">
                                {view === 'login' ? <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="12" r="6"></circle><circle cx="15.5" cy="12" r="6"></circle></svg> : <i className="ph-fill ph-shield-check text-5xl text-white"></i>}
                            </div>
                        )}

                        {view === 'login' ? (
                            <div className="animate-fade-in">
                                <h1 className="text-4xl font-serif text-gray-900 dark:text-white mb-2 font-bold tracking-tight">Welcome Back</h1>
                                <p className="font-serif italic text-gray-500 dark:text-gray-300 mb-8 text-lg tracking-wide">Sign in to manage your special day</p>
                                
                                <form onSubmit={handleLogin} className="space-y-5 text-left">
                                    <div className="relative group">
                                        <i className="ph-fill ph-user absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-wedding-500 text-xl transition-colors"></i>
                                        <input type="text" placeholder="Username" className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-wedding-500 focus:bg-white dark:focus:bg-gray-800 font-bold text-gray-900 dark:text-white transition-all" value={username} onChange={e => setUsername(e.target.value)} required />
                                    </div>
                                    <div className="relative group">
                                        <i className="ph-fill ph-lock-key absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-wedding-500 text-xl transition-colors"></i>
                                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-wedding-500 focus:bg-white dark:focus:bg-gray-800 font-bold text-gray-900 dark:text-white transition-all" value={password} onChange={e => setPassword(e.target.value)} required />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none transition-colors">
                                            <i className={"ph-fill text-xl " + (showPassword ? "ph-eye-slash" : "ph-eye")}></i>
                                        </button>
                                    </div>
                                    
                                    <div className="flex justify-end mt-2">
                                        <button type="button" onClick={() => { setView('reset'); setErrorMsg(''); setSuccessMsg(''); }} className="text-xs font-bold text-wedding-800 dark:text-wedding-500 hover:underline">Forgot Password?</button>
                                    </div>

                                    {errorMsg && <div className="bg-red-500/10 text-red-600 dark:text-red-400 text-sm py-3 px-4 rounded-2xl border border-red-500/20 flex items-center justify-center gap-2 font-bold font-mm tracking-normal"><i className="ph-fill ph-warning-circle text-xl"></i>{errorMsg}</div>}
                                    {successMsg && <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm py-3 px-4 rounded-2xl border border-emerald-500/20 flex items-center justify-center gap-2 font-bold font-mm tracking-normal"><i className="ph-fill ph-check-circle text-xl"></i>{successMsg}</div>}
                                    
                                    <button disabled={isLoading} className="w-full bg-wedding-800 text-white font-bold py-4 rounded-2xl hover:bg-wedding-900 transition-all duration-300 disabled:opacity-70 mt-2 shadow-luxury">
                                        {isLoading ? <span className="flex items-center justify-center gap-2"><i className="ph-bold ph-spinner animate-spin text-xl"></i> Authenticating...</span> : 'Secure Sign In'}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="animate-fade-in">
                                <h1 className="text-3xl font-serif text-gray-900 dark:text-white mb-2 font-bold tracking-tight">Reset Password</h1>
                                <p className="font-serif italic text-gray-500 dark:text-gray-300 mb-6 text-sm tracking-wide">Enter Master Recovery Key to reset access</p>
                                
                                <form onSubmit={handleReset} className="space-y-4 text-left">
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 text-gray-500 ml-1">Account Username</label>
                                        <div className="relative group">
                                            <i className="ph-fill ph-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-wedding-500 text-lg transition-colors"></i>
                                            <input type="text" placeholder="e.g. admin" className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-wedding-500 focus:bg-white dark:focus:bg-gray-800 font-bold text-gray-900 dark:text-white transition-all text-sm" value={username} onChange={e => setUsername(e.target.value)} required />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 text-gray-500 ml-1">Recovery Key</label>
                                        <div className="relative group">
                                            <i className="ph-fill ph-key absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-wedding-500 text-lg transition-colors"></i>
                                            <input type={showRecovery ? "text" : "password"} placeholder="Enter secret recovery key" className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-wedding-500 focus:bg-white dark:focus:bg-gray-800 font-bold text-gray-900 dark:text-white transition-all text-sm" value={recoveryKey} onChange={e => setRecoveryKey(e.target.value)} required />
                                            <button type="button" onClick={() => setShowRecovery(!showRecovery)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none transition-colors">
                                                <i className={"ph-fill text-lg " + (showRecovery ? "ph-eye-slash" : "ph-eye")}></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 text-gray-500 ml-1">New Password</label>
                                        <div className="relative group">
                                            <i className="ph-fill ph-lock-key absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-wedding-500 text-lg transition-colors"></i>
                                            <input type={showNewPassword ? "text" : "password"} placeholder="Enter new password" className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-wedding-500 focus:bg-white dark:focus:bg-gray-800 font-bold text-gray-900 dark:text-white transition-all text-sm" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
                                            <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none transition-colors">
                                                <i className={"ph-fill text-lg " + (showNewPassword ? "ph-eye-slash" : "ph-eye")}></i>
                                            </button>
                                        </div>
                                    </div>

                                    {errorMsg && <div className="bg-red-500/10 text-red-600 dark:text-red-400 text-xs py-3 px-4 rounded-xl border border-red-500/20 flex items-center justify-center gap-2 font-bold mt-2 font-mm tracking-normal"><i className="ph-fill ph-warning-circle text-lg"></i>{errorMsg}</div>}
                                    {successMsg && <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs py-3 px-4 rounded-xl border border-emerald-500/20 flex items-center justify-center gap-2 font-bold mt-2 font-mm tracking-normal"><i className="ph-fill ph-check-circle text-lg"></i>{successMsg}</div>}
                                    
                                    <button disabled={isLoading} className="w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold py-3.5 rounded-xl hover:bg-gray-800 dark:hover:bg-white transition-all duration-300 disabled:opacity-70 mt-4 shadow-md">
                                        {isLoading ? <span className="flex items-center justify-center gap-2"><i className="ph-bold ph-spinner animate-spin text-lg"></i> Resetting...</span> : 'Reset Password'}
                                    </button>
                                    
                                    <button type="button" onClick={() => { setView('login'); setErrorMsg(''); setSuccessMsg(''); }} className="w-full bg-transparent text-gray-500 dark:text-gray-400 font-bold py-3.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-sm mt-2 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 flex items-center justify-center">
                                        <i className="ph-bold ph-arrow-left mr-2"></i> Back to Sign In
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        function Dashboard({ userRole }) {
            const [stats, setStats] = useState({ total: 0, pending: 0, written: 0, invited: 0, attended: 0, total_gifts: 0, gift_items_count: 0, groomSide: 0, brideSide: 0, bothSide: 0 });
            const [settings, setSettings] = useState({});

            const loadData = useCallback(async () => {
                try {
                    const data = await apiCall('/api/stats');
                    if (data && data.stats) {
                        const counts = data.stats;
                        const giftList = counts.gifts || [];
                        const totalGifts = giftList.reduce((sum, g) => {
                            if (!g.gift_amount) return sum;
                            const amtStr = convertToEnglishDigits(g.gift_amount).replace(/,/g, '');
                            const amt = parseFloat(amtStr); return sum + (isNaN(amt) ? 0 : amt);
                        }, 0);
                        const giftItemsCount = giftList.filter(g => g.gift_item && (g.gift_item||'').toString().trim() !== '').length;

                        setStats({
                            total: counts.total || 0, pending: counts.pending || 0,
                            written: counts.written || 0, invited: counts.invited || 0,
                            attended: counts.attended || 0, total_gifts: totalGifts, gift_items_count: giftItemsCount,
                            groomSide: counts.groomSide || 0, brideSide: counts.brideSide || 0, bothSide: counts.bothSide || 0 
                        });
                    }
                } catch (e) {}
            }, []);

            useEffect(() => { loadData(); apiCall('/api/settings').then(data => setSettings(data.settings || {})); const interval = setInterval(() => { loadData(); }, 60000); return () => clearInterval(interval); }, [loadData]);

            const total = stats.total || 1; 
            const invitedPercent = Math.min(Math.round((stats.invited / total) * 100) || 0, 100);
            const attendedPercent = Math.min(stats.invited > 0 ? Math.round((stats.attended / stats.invited) * 100) : 0, 100);
            const groomPercent = Math.round((stats.groomSide / total) * 100) || 0;
            const bridePercent = Math.round((stats.brideSide / total) * 100) || 0;
            const bothPercent = Math.round((stats.bothSide / total) * 100) || 0;
            const formatMoney = (num) => new Intl.NumberFormat('en-US').format(num);

            return (
                <div className="space-y-8 animate-fade-in relative z-10 w-full max-w-6xl mx-auto">
                    
                    <div className="glass-luxury rounded-[2.5rem] py-14 px-4 sm:px-14 text-center relative flex flex-col items-center justify-center w-full overflow-hidden">
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-wedding-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-wedding-100/30 dark:bg-wedding-900/20 rounded-full blur-3xl"></div>
                        
                        <div className="w-full flex justify-center items-center mb-8 relative z-10 px-1 sm:px-4 overflow-visible">
                            <h1 style={{ whiteSpace: 'nowrap' }} className="flex items-center justify-center flex-nowrap gap-x-1 sm:gap-x-4 text-gray-900 dark:text-white">
                                <span className="luxury-wedding-font drop-shadow-sm" style={{ fontSize: 'clamp(18px, 4vw, 46px)' }}>{settings.groom_name || 'Groom'}</span>
                                <span className="text-wedding-500 flex-shrink-0" style={{fontSize: 'clamp(16px, 3vw, 36px)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic'}}>&amp;</span> 
                                <span className="luxury-wedding-font drop-shadow-sm" style={{ fontSize: 'clamp(18px, 4vw, 46px)' }}>{settings.bride_name || 'Bride'}</span>
                            </h1>
                        </div>
                        
                        <div className="flex justify-center mt-2 mb-6 relative z-10 w-full px-2">
                            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl px-6 sm:px-10 py-6 rounded-[2rem] sm:rounded-[3rem] border-[1.5px] border-wedding-200/60 dark:border-wedding-800/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 w-full max-w-4xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-400 via-wedding-400 to-rose-400 opacity-80"></div>
                                
                                <div className="flex items-center gap-5 text-gray-800 dark:text-gray-100 font-bold w-full sm:w-1/2 justify-center sm:justify-start">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 shadow-sm border border-blue-100 dark:border-blue-800/50 shrink-0">
                                        <i className="ph-fill ph-calendar-blank text-2xl sm:text-3xl drop-shadow-sm"></i>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[12px] font-bold text-gray-400 font-mm mb-0.5">မင်္ဂလာအချိန်</span>
                                        <span className="tracking-wide text-lg sm:text-xl text-gray-900 dark:text-white font-black font-numbers">{settings.wedding_date || 'Date TBD'}</span>
                                    </div>
                                </div>
                                
                                <div className="w-full sm:w-px h-px sm:h-20 bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent opacity-70 shrink-0"></div>
                                
                                <div className="flex items-center gap-5 text-gray-800 dark:text-gray-100 font-bold w-full sm:w-1/2 justify-center sm:justify-start">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center text-rose-500 shadow-sm border border-rose-100 dark:border-rose-800/50 shrink-0">
                                        <i className="ph-fill ph-map-pin text-2xl sm:text-3xl drop-shadow-sm"></i>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[12px] font-bold text-gray-400 font-mm mb-0.5">မင်္ဂလာနေရာ</span>
                                        <span className="tracking-wide leading-relaxed text-lg sm:text-xl text-gray-900 dark:text-white font-black font-mm">{settings.venue || 'Venue TBD'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {settings.footer_text && (
                            <div className="w-full max-w-2xl mx-auto pt-10 relative z-10">
                                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-wedding-500 to-transparent mx-auto mb-6"></div>
                                <p className="font-serif italic text-gray-500 dark:text-gray-400 tracking-wider text-center text-base sm:text-lg">"{settings.footer_text}"</p>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
                        <StatWidget icon="users" title="Total Guests" value={stats.total} themeClass="text-blue-500 bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30" iconBg="bg-blue-100 dark:bg-blue-900/40" />
                        <StatWidget icon="envelope-open" title="Invited" value={stats.invited} themeClass="text-amber-500 bg-amber-50/50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/30" iconBg="bg-amber-100 dark:bg-amber-900/40" />
                        <StatWidget icon="check-circle" title="Attended" value={stats.attended} themeClass="text-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/30" iconBg="bg-emerald-100 dark:bg-emerald-900/40" />
                        <StatWidget icon="pen-nib" title="Written" value={stats.written} themeClass="text-purple-500 bg-purple-50/50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-900/30" iconBg="bg-purple-100 dark:bg-purple-900/40" />
                        <StatWidget icon="hourglass-high" title="Pending" value={stats.pending} themeClass="text-stone-500 bg-stone-50/50 dark:bg-stone-900/10 border-stone-100 dark:border-stone-900/30" iconBg="bg-stone-100 dark:bg-stone-900/40" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 no-print">
                        <div className="glass-luxury rounded-[2rem] p-8 flex items-center gap-6 group overflow-hidden">
                            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-[1.25rem] bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 border border-emerald-100 dark:border-emerald-800/30 flex items-center justify-center shrink-0 shadow-sm transform group-hover:scale-110 transition-transform duration-500">
                                {userRole === 'admin' ? <i className="ph-fill ph-wallet text-4xl sm:text-5xl drop-shadow-sm"></i> : <i className="ph-fill ph-lock-key text-4xl sm:text-5xl drop-shadow-sm"></i>}
                            </div>
                            <div className="relative z-10 w-full overflow-hidden">
                                <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-sans">Total Gift Amount</p>
                                <div className="flex items-baseline gap-2 overflow-hidden">
                                    <h2 className="text-2xl sm:text-3xl font-bold font-numbers text-gray-900 dark:text-white tracking-tight truncate">
                                        {userRole === 'admin' ? formatMoney(stats.total_gifts) : '***'}
                                    </h2>
                                    <span className="text-sm font-bold text-gray-400 font-sans">Ks</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="glass-luxury rounded-[2rem] p-8 flex items-center gap-6 group overflow-hidden">
                            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-[1.25rem] bg-purple-50 dark:bg-purple-900/20 text-purple-500 border border-purple-100 dark:border-purple-800/30 flex items-center justify-center shrink-0 shadow-sm transform group-hover:scale-110 transition-transform duration-500">
                                {userRole === 'admin' ? <i className="ph-fill ph-gift text-4xl sm:text-5xl drop-shadow-sm"></i> : <i className="ph-fill ph-lock-key text-4xl sm:text-5xl drop-shadow-sm"></i>}
                            </div>
                            <div className="relative z-10 w-full overflow-hidden">
                                <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-sans">Gift Items Count</p>
                                <div className="flex items-baseline gap-2 overflow-hidden">
                                    <h2 className="text-2xl sm:text-3xl font-bold font-numbers text-gray-900 dark:text-white tracking-tight truncate">
                                        {userRole === 'admin' ? stats.gift_items_count : '***'}
                                    </h2>
                                    <span className="text-sm font-bold text-gray-400 font-mm">မျိုး</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 no-print">
                        <div className="glass-luxury p-8 sm:p-10 rounded-[2rem]">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/20 text-amber-500 flex items-center justify-center border border-amber-100 dark:border-amber-800/30 shadow-sm shrink-0">
                                    <i className="ph-fill ph-chart-bar text-3xl sm:text-4xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">Invitation Tracking</h3>
                                </div>
                            </div>
                            
                            <div className="space-y-10">
                                <div className="relative">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-1 font-sans">Invited</span>
                                            <span className="text-2xl font-bold font-numbers text-amber-500">{stats.invited} <span className="text-xs text-gray-400">/ {stats.total}</span></span>
                                        </div>
                                        <div className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg text-xs font-bold font-numbers shadow-sm">{invitedPercent}%</div>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3 relative shadow-inner overflow-hidden">
                                        <div className="absolute top-0 left-0 bottom-0 bg-amber-400 rounded-full transition-all duration-1000 ease-out" style={{ width: Math.max(invitedPercent, 2) + '%' }}></div>
                                    </div>
                                </div>
                                
                                <div className="relative">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-1 font-sans">Attended</span>
                                            <span className="text-2xl font-bold font-numbers text-emerald-500">{stats.attended} <span className="text-xs text-gray-400">/ {stats.invited}</span></span>
                                        </div>
                                        <div className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-xs font-bold font-numbers shadow-sm">{attendedPercent}%</div>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3 relative shadow-inner overflow-hidden">
                                        <div className="absolute top-0 left-0 bottom-0 bg-emerald-500 rounded-full transition-all duration-1000 ease-out" style={{ width: Math.max(attendedPercent, 2) + '%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-luxury p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 flex items-center justify-center border border-indigo-100 dark:border-indigo-800/30 shadow-sm shrink-0">
                                    <i className="ph-fill ph-chart-pie-slice text-3xl sm:text-4xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">Guest Composition</h3>
                                </div>
                            </div>
                            
                            <div className="w-full flex h-5 rounded-full overflow-hidden mb-10 bg-gray-100 dark:bg-gray-800 shadow-inner p-[3px] gap-[3px]">
                                <div className="bg-indigo-500 transition-all duration-1000 h-full rounded-full shadow-sm" style={{ width: groomPercent + '%' }}></div>
                                <div className="bg-pink-500 transition-all duration-1000 h-full rounded-full shadow-sm" style={{ width: bridePercent + '%' }}></div>
                                <div className="bg-emerald-500 transition-all duration-1000 h-full rounded-full shadow-sm" style={{ width: bothPercent + '%' }}></div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                <div className="flex flex-col items-center p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 relative overflow-hidden group">
                                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center mb-2 text-indigo-500 shadow-sm z-10 group-hover:scale-110 transition-transform">
                                        <i className="ph-fill ph-user text-xl"></i>
                                    </div>
                                    <p className="text-2xl font-bold font-numbers text-indigo-600 dark:text-indigo-400 z-10">{stats.groomSide}</p>
                                    <p className="text-[11px] sm:text-[12px] font-bold text-gray-500 mt-1 z-10 text-center font-mm">သတို့သားဖက်</p>
                                </div>
                                
                                <div className="flex flex-col items-center p-4 rounded-2xl bg-pink-50/50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-900/30 relative overflow-hidden group">
                                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center mb-2 text-pink-500 shadow-sm z-10 group-hover:scale-110 transition-transform">
                                        <i className="ph-fill ph-user-circle text-xl"></i>
                                    </div>
                                    <p className="text-2xl font-bold font-numbers text-pink-600 dark:text-pink-400 z-10">{stats.brideSide}</p>
                                    <p className="text-[11px] sm:text-[12px] font-bold text-gray-500 mt-1 z-10 text-center font-mm">သတို့သမီးဖက်</p>
                                </div>
                                
                                <div className="flex flex-col items-center p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 relative overflow-hidden group">
                                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center mb-2 text-emerald-500 shadow-sm z-10 group-hover:scale-110 transition-transform">
                                        <i className="ph-fill ph-users-three text-xl"></i>
                                    </div>
                                    <p className="text-2xl font-bold font-numbers text-emerald-600 dark:text-emerald-400 z-10">{stats.bothSide}</p>
                                    <p className="text-[11px] sm:text-[12px] font-bold text-gray-500 mt-1 z-10 text-center font-mm">နှစ်ဖက်မိတ်ဆွေ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        function StatWidget({ icon, title, value, themeClass, iconBg }) {
            return (
                <div className={"glass-luxury rounded-[1.5rem] p-5 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:-translate-y-1 " + themeClass}>
                    <div className={"w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-110 shadow-sm border border-white/40 " + iconBg}>
                        <i className={"ph-fill ph-" + icon + " text-2xl sm:text-3xl"}></i>
                    </div>
                    <p className="text-[9px] sm:text-[10px] font-bold opacity-70 uppercase tracking-widest mb-1.5 font-sans">{title}</p>
                    <p className="text-2xl sm:text-3xl font-bold font-numbers tracking-tight">{value}</p>
                </div>
            );
        }

        function GuestManagement({ showToast, userRole, appSettings }) {
            const [guests, setGuests] = useState([]); const [loading, setLoading] = useState(true); const [search, setSearch] = useState(''); const [debouncedSearch, setDebouncedSearch] = useState(''); const [filter, setFilter] = useState('All Status'); const [sideFilter, setSideFilter] = useState('All'); const [locationFilter, setLocationFilter] = useState('All Locations'); 
            const [formData, setFormData] = useState({ id: null, name: '', address: '', note: '', status: 'Pending', side: 'Groom', attended: 0, gift_amount: '', gift_item: '' }); const [isModalOpen, setModalOpen] = useState(false);
            const [isEditMode, setIsEditMode] = useState(false); const [selectedIds, setSelectedIds] = useState([]); const [showBulkDeleteModal, setShowBulkDeleteModal] = useState(false); const [deletePassword, setDeletePassword] = useState(''); const [isDeleting, setIsDeleting] = useState(false); const [isSaving, setIsSaving] = useState(false); const [pageCount, setPageCount] = useState(1); 
            const [hasMore, setHasMore] = useState(false);
            const [locationsList, setLocationsList] = useState([]);
            
            const [showDeletePwd, setShowDeletePwd] = useState(false);

            useEffect(() => {
                const timer = setTimeout(() => setDebouncedSearch(search), 500);
                return () => clearTimeout(timer);
            }, [search]);

            const fetchGuests = useCallback(async (showLoad = false, page = 1) => {
                if(showLoad) setLoading(true);
                try { 
                    const query = 'search=' + encodeURIComponent(normalizeMyanmarText(debouncedSearch)) + '&location=' + encodeURIComponent(locationFilter) + '&status=' + encodeURIComponent(filter) + '&side=' + encodeURIComponent(sideFilter) + '&page=' + page;
                    const data = await apiCall('/api/guests?' + query); 
                    if(data && data.guests) {
                        if (page === 1) setGuests(data.guests);
                        else setGuests(prev => [...prev, ...data.guests]);
                        setHasMore(data.guests.length === 50);
                    }
                    if (page === 1 && data && data.locations) setLocationsList(data.locations);
                } 
                catch (e) { if(showLoad) showToast("စာရင်းများ ပြန်လည်ရယူရန် အင်တာနက်ချိတ်ဆက်မှု လိုအပ်ပါသည်", "error"); } 
                finally { if(showLoad) setLoading(false); }
            }, [debouncedSearch, locationFilter, filter, sideFilter]);

            useEffect(() => { setPageCount(1); fetchGuests(true, 1); }, [debouncedSearch, locationFilter, filter, sideFilter]);
            useEffect(() => { if (pageCount > 1) fetchGuests(false, pageCount); }, [pageCount]);

            const formatDateTime = (isoString) => {
                if (!isoString) return '-'; const date = new Date(isoString); return date.toLocaleString('en-US', { timeZone: 'Asia/Yangon', hour12: true, year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            };

            const exportExcel = async () => {
                try {
                    const data = await apiCall('/api/guests/all');
                    if (data && data.guests) {
                        const ws = XLSX.utils.json_to_sheet(data.guests.map(g => ({ 'Side (ဖက်)': g.side === 'Groom' ? 'သတို့သားဖက်' : g.side === 'Bride' ? 'သတို့သမီးဖက်' : 'နှစ်ဖက်မိတ်ဆွေ', 'Guest Name (နာမည်)': g.name, 'Group City (လိပ်စာ)': g.address, 'Status': g.status, 'Attended (ရောက်ရှိ)': g.attended ? 'Yes' : 'No', 'Gift Amount (လက်ဖွဲ့ငွေ)': g.gift_amount ? convertToEnglishDigits(g.gift_amount) : '-', 'Gift Item (လက်ဖွဲ့ပစ္စည်း)': g.gift_item || '-', 'Note (မှတ်ချက်)': g.note || '-', 'Last Updated (နောက်ဆုံးပြင်ဆင်ချိန်)': formatDateTime(g.updated_at) })));
                        const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, "Guests"); XLSX.writeFile(wb, "Wedding_Guest_List_With_Gifts.xlsx"); showToast("Exported to Excel");
                    }
                } catch(e) { showToast("Export လုပ်ရာတွင် အဆင်မပြေပါ", "error"); }
            };

            const handleImportExcel = async (e) => {
                const file = e.target.files[0]; if (!file) return; const reader = new FileReader();
                reader.onload = async (evt) => {
                    setLoading(true); const bstr = evt.target.result; const wb = XLSX.read(bstr, {type:'binary'}); const wsname = wb.SheetNames[0]; const ws = wb.Sheets[wsname]; const data = XLSX.utils.sheet_to_json(ws);
                    const newGuests = [];
                    
                    for (let row of data) {
                        const guestName = row['Name'] || row['Guest Name'] || row['Guest'] || ''; if (!guestName) continue;
                        const sideStr = (row['Side'] || row['Category'] || '').toString(); let parsedSide = 'Groom'; if (sideStr.includes('သမီး')) parsedSide = 'Bride'; else if (sideStr.includes('နှစ်')) parsedSide = 'Both';
                        
                        const guest = { 
                            name: guestName.toString().trim(), 
                            address: (row['Address'] || row['Group City'] || row['City'] || 'General').toString().trim(), 
                            side: parsedSide, 
                            note: (row['Note'] || row['Remark'] || '').toString().trim(), 
                            status: row['Status'] || 'Pending', 
                            attended: (row['Attended'] === 'Yes' || row['Attended'] === 'yes' || row['Attended'] === 1 || row['Attended'] === 'TRUE' || row['Attended'] === true) ? 1 : 0, 
                            gift_amount: row['Gift Amount'] ? row['Gift Amount'].toString().trim() : '', 
                            gift_item: row['Gift Item'] ? row['Gift Item'].toString().trim() : '' 
                        };
                        newGuests.push(guest);
                    }
                    if (newGuests.length > 0) {
                        showToast("ဧည့်သည် (" + newGuests.length + ") ဦး စတင်စစ်ဆေး ထည့်သွင်းနေပါသည်...", 'warn');
                        try { 
                            const chunkSize = 500;
                            let totalImported = 0;
                            for (let i = 0; i < newGuests.length; i += chunkSize) {
                                const chunk = newGuests.slice(i, i + chunkSize);
                                const res = await apiCall('/api/guests/bulk', { method: 'POST', body: JSON.stringify({ guests: chunk }) });
                                if (res && res.count !== undefined) totalImported += res.count;
                            }
                            
                            if (totalImported === 0) {
                                showToast("ဖိုင်ထဲမှ ဧည့်သည်အားလုံးမှာ စာရင်းထဲတွင် ရှိပြီးသားဖြစ်နေသဖြင့် အသစ်ထပ်မံထည့်သွင်းခြင်း မရှိပါ။", 'error'); 
                            } else if (totalImported < newGuests.length) {
                                showToast("ဧည့်သည်အသစ် " + totalImported + " ဦး ထည့်သွင်းပြီးပါပြီ။ (ထပ်နေသော " + (newGuests.length - totalImported) + " ဦးကို ချန်လှပ်ထားပါသည်)", 'warn');
                            } else {
                                showToast("Excel မှ ဧည့်သည်အားလုံး (" + totalImported + " ဦး) အောင်မြင်စွာ ထည့်သွင်းပြီးပါပြီ။", 'success'); 
                            }
                        } 
                        catch (err) { showToast("ကွန်ရက်ချိတ်ဆက်မှု အဆင်မပြေပါ၊ ပြန်စမ်းကြည့်ပါ", 'error'); }
                    } else { showToast("ဖိုင်ထဲတွင် ထည့်သွင်းရန် ဧည့်သည်စာရင်း မတွေ့ပါ", 'warn'); }
                    fetchGuests(true, 1);
                }; reader.readAsBinaryString(file); e.target.value = null; 
            };

            const saveGuest = async (e) => {
                e.preventDefault();
                setIsSaving(true); 
                try { 
                    const method = formData.id ? 'PUT' : 'POST'; const url = formData.id ? "/api/guests/" + formData.id : '/api/guests'; 
                    
                    const formattedName = toTitleCase(formData.name);
                    const formattedAddress = toTitleCase(formData.address);
                    const payload = Object.assign({}, formData, { name: formattedName, address: formattedAddress });

                    const normName = normalizeMyanmarText(payload.name);
                    const normAddress = normalizeMyanmarText(payload.address);

                    const existingGuest = guests.find(g => 
                        g.id !== payload.id && 
                        normalizeMyanmarText(g.name) === normName && 
                        normalizeMyanmarText(g.address) === normAddress
                    );

                    if (existingGuest) {
                        const sideNameMM = existingGuest.side === 'Groom' ? 'သတို့သားဖက်' : (existingGuest.side === 'Bride' ? 'သတို့သမီးဖက်' : 'နှစ်ဖက်မိတ်ဆွေ');
                        showToast(\`ဒီနာမည်နဲ့ လိပ်စာက \${sideNameMM}က ဖိတ်မလို့ စာရင်းသွင်းထားပြီးသားဖြစ်လို့ ထပ်ရေးဖို့မလိုပါဘူး။\`, 'error'); 
                        setIsSaving(false); 
                        return;
                    }

                    const res = await fetch(url, { method, body: JSON.stringify(payload), headers: { 'Content-Type': 'application/json' } }); 
                    const data = await res.json();
                    
                    if (!res.ok) {
                        if (data.error === 'Duplicate entry' && data.side) {
                            const sideNameMM = data.side === 'Groom' ? 'သတို့သားဖက်' : (data.side === 'Bride' ? 'သတို့သမီးဖက်' : 'နှစ်ဖက်မိတ်ဆွေ');
                            showToast(\`ဒီနာမည်နဲ့ လိပ်စာက \${sideNameMM}က ဖိတ်မလို့ စာရင်းသွင်းထားပြီးသားဖြစ်လို့ ထပ်ရေးဖို့မလိုပါဘူး။\`, 'error');
                        } else {
                            showToast("အမှားအယွင်းဖြစ်ပွားပါသည်", 'error');
                        }
                    } else {
                        showToast("Guest saved successfully"); setModalOpen(false); fetchGuests(false, 1); 
                    }
                } 
                catch (error) { showToast("ချိတ်ဆက်မှု အဆင်မပြေပါ၊ အင်တာနက်ကို စစ်ဆေးပါ", "error"); } finally { setIsSaving(false); }
            };

            const confirmBulkDelete = async (e) => {
                e.preventDefault(); setIsDeleting(true);
                try {
                    const res = await fetch('/api/guests/bulk-delete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ids: selectedIds, password: deletePassword }) });
                    if (res.ok) { showToast("ဧည့်သည် (" + selectedIds.length + ") ဦးကို စာရင်းမှ ဖျက်ပစ်လိုက်ပါပြီ"); setShowBulkDeleteModal(false); setIsEditMode(false); setSelectedIds([]); setDeletePassword(''); fetchGuests(false, 1); } 
                    else { showToast('Admin Password မှားယွင်းနေပါသည်', 'error'); }
                } catch (error) { showToast("ကွန်ရက်ချိတ်ဆက်မှု အဆင်မပြေပါ", "error"); } finally { setIsDeleting(false); }
            };

            const grouped = useMemo(() => { 
                const groups = {}; 
                guests.forEach(g => { 
                    const rawAddr = (g.address || '').toString().trim() || 'No Address'; 
                    const lowerAddr = rawAddr.toLowerCase();
                    const existingKey = Object.keys(groups).find(k => k.toLowerCase() === lowerAddr);
                    const k = existingKey || toTitleCase(rawAddr);
                    
                    if (!groups[k]) groups[k] = []; 
                    groups[k].push(g); 
                }); 
                
                const sortedGroups = {};
                Object.keys(groups).sort().forEach(key => {
                    sortedGroups[key] = groups[key];
                });
                return sortedGroups; 
            }, [guests]);

            return (
                <div className="space-y-6 relative z-10 w-full max-w-6xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 no-print mb-8">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">Guest Roster</h2>
                        
                        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                            <button onClick={() => { setFormData({id:null, name:'', address:'', note:'', status:'Pending', side:'Groom', attended: 0, gift_amount:'', gift_item:''}); setModalOpen(true); }} className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-xl flex-1 sm:flex-none flex justify-center items-center gap-2 hover:shadow-lg transition-all font-bold text-sm font-sans"><i className="ph-bold ph-plus text-lg"></i> Add</button>
                            {userRole === 'admin' && <button onClick={() => { setIsEditMode(!isEditMode); setSelectedIds([]); }} className={"px-5 py-2.5 rounded-xl font-bold flex justify-center items-center gap-2 transition-all text-sm font-sans " + (isEditMode ? 'bg-red-500 text-white shadow-md' : 'glass-luxury text-gray-700 dark:text-gray-300')}>
                                <i className={"ph-bold " + (isEditMode ? 'ph-x-circle' : 'ph-check-square-offset') + " text-lg"}></i> {isEditMode ? 'Cancel' : 'Select'}
                            </button>}
                            {userRole === 'admin' && <label className="glass-luxury px-5 py-2.5 rounded-xl flex justify-center items-center gap-2 font-bold cursor-pointer transition-all hover:bg-white/50 text-sm font-sans">
                                <i className="ph-bold ph-upload-simple text-blue-600 text-lg"></i> Import
                                <input type="file" accept=".xlsx, .xls, .csv" className="hidden" onChange={handleImportExcel} />
                            </label>}
                            {userRole === 'admin' && <button onClick={exportExcel} className="glass-luxury px-5 py-2.5 rounded-xl flex justify-center items-center gap-2 font-bold transition-all hover:bg-white/50 text-sm font-sans"><i className="ph-bold ph-download-simple text-emerald-600 text-lg"></i> Export</button>}
                            <button onClick={() => window.print()} className="glass-luxury px-5 py-2.5 rounded-xl flex justify-center items-center gap-2 font-bold transition-all hover:bg-white/50 text-sm font-sans">
                                <i className="ph-bold ph-printer text-purple-600 text-lg"></i> Print
                            </button>
                            <button onClick={() => { setPageCount(1); fetchGuests(true, 1); }} title="Refresh Data" className="glass-luxury px-4 py-2.5 rounded-xl font-bold flex justify-center items-center hover:bg-white/50 transition-all text-gray-700 dark:text-gray-300 font-sans">
                                <i className={"ph-bold ph-arrows-clockwise text-xl " + (loading ? "animate-spin text-wedding-500" : "")}></i>
                            </button>
                        </div>
                    </div>

                    <div className="glass-luxury p-6 rounded-[2rem] flex flex-col gap-4 no-print border border-gray-200/60 dark:border-gray-800/60 shadow-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* [FIX]: Search Box တွင် 'X' clear button ထည့်သွင်းထားပါသည် */}
                            <div className="relative w-full">
                                <i className="ph-bold ph-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                                <input type="text" placeholder="Search guests..." className="w-full pl-12 pr-10 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-wedding-500 font-bold text-gray-900 dark:text-white font-mm" value={search} onChange={e=>{setSearch(e.target.value); setPageCount(1);}} />
                                {search && (
                                    <button onClick={() => { setSearch(''); setPageCount(1); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-wedding-500 p-1">
                                        <i className="ph-bold ph-x text-base"></i>
                                    </button>
                                )}
                            </div>
                            <select className="px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300 w-full focus:outline-none focus:border-wedding-500 font-mm" value={locationFilter} onChange={e=>{setLocationFilter(e.target.value); setPageCount(1);}}><option>All Locations</option>{locationsList.map(loc => <option key={loc} value={loc}>{loc}</option>)}</select>
                            <select className="px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300 w-full focus:outline-none focus:border-wedding-500 font-sans" value={filter} onChange={e=>{setFilter(e.target.value); setPageCount(1);}}><option>All Status</option><option>Pending</option><option>Written</option><option>Invited</option></select>
                        </div>
                        <div className="flex bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-xl w-full flex-wrap sm:flex-nowrap gap-1 border border-gray-200/50 dark:border-gray-700/50">
                            <button onClick={() => {setSideFilter('All'); setPageCount(1);}} className={"flex-1 min-w-[70px] py-2.5 text-[12px] sm:text-sm rounded-lg font-bold transition-all font-mm " + (sideFilter === 'All' ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700')}>အားလုံး</button>
                            <button onClick={() => {setSideFilter('Groom'); setPageCount(1);}} className={"flex-1 min-w-[70px] py-2.5 text-[12px] sm:text-sm rounded-lg font-bold transition-all font-mm " + (sideFilter === 'Groom' ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 shadow-sm border border-indigo-100 dark:border-indigo-800' : 'text-gray-500 hover:text-gray-700')}>သတို့သားဖက်</button>
                            <button onClick={() => {setSideFilter('Bride'); setPageCount(1);}} className={"flex-1 min-w-[70px] py-2.5 text-[12px] sm:text-sm rounded-lg font-bold transition-all font-mm " + (sideFilter === 'Bride' ? 'bg-pink-50 dark:bg-pink-900/40 text-pink-700 dark:text-pink-400 shadow-sm border border-pink-100 dark:border-pink-800' : 'text-gray-500 hover:text-gray-700')}>သတို့သမီးဖက်</button>
                            <button onClick={() => {setSideFilter('Both'); setPageCount(1);}} className={"flex-1 min-w-[70px] py-2.5 text-[12px] sm:text-sm rounded-lg font-bold transition-all font-mm " + (sideFilter === 'Both' ? 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 shadow-sm border border-emerald-100 dark:border-emerald-800' : 'text-gray-500 hover:text-gray-700')}>နှစ်ဖက်မိတ်ဆွေ</button>
                        </div>
                    </div>

                    {isEditMode && userRole === 'admin' && (
                        <div className="glass-luxury !bg-red-50/80 dark:!bg-red-900/20 flex justify-between items-center p-4 rounded-xl border border-red-200 dark:border-red-800/50 no-print animate-fade-in">
                            <label className="flex items-center gap-3 cursor-pointer font-bold text-sm text-red-900 dark:text-red-200 select-none font-mm">
                                <input type="checkbox" className="w-5 h-5 accent-red-600 rounded cursor-pointer" checked={guests.length > 0 && selectedIds.length === guests.length} onChange={(e) => { if(e.target.checked) setSelectedIds(guests.map(g => g.id)); else setSelectedIds([]); }} />
                                လက်ရှိမျက်နှာပြင်မှ အားလုံးရွေးရန်
                            </label>
                            {selectedIds.length > 0 && (
                                <button onClick={() => setShowBulkDeleteModal(true)} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all shadow-md font-mm">
                                    <i className="ph-bold ph-trash-simple text-base"></i> ဖျက်မည် ({selectedIds.length})
                                </button>
                            )}
                        </div>
                    )}

                    {loading && guests.length === 0 && debouncedSearch === '' ? (
                        <div className="space-y-4">{[1,2,3].map(i => <div key={i} className="h-20 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl animate-pulse"></div>)}</div>
                    ) : Object.keys(grouped).length === 0 ? (
                        <div className="text-center py-20 glass-luxury rounded-[2rem]">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                                <i className="ph-fill ph-users text-3xl text-gray-400"></i>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 font-bold font-mm">
                                {search !== '' ? 'ဧည့်သည်စာရင်း မတွေ့ပါ၊ နာမည် သို့မဟုတ် လိပ်စာကို ပြန်လည်စစ်ဆေးပေးပါ။' : 'No guests found.'}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {Object.entries(grouped).map(([address, groupGuests]) => (
                                <div key={address} className="glass-luxury rounded-2xl overflow-hidden page-break-inside-avoid">
                                    <div className="bg-gray-50/50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center backdrop-blur-md">
                                        <h3 className="font-bold text-base sm:text-[17px] text-gray-900 dark:text-white flex items-center gap-2 font-mm"><i className="ph-fill ph-map-pin text-wedding-500 text-xl no-print"></i> {address}</h3>
                                        <span className="bg-white dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700 text-xs px-3 py-1 rounded-full font-bold shadow-sm font-sans">{groupGuests.length} Guests</span>
                                    </div>
                                    <div className="divide-y divide-gray-100 dark:divide-gray-800/50">
                                        {groupGuests.map(g => (
                                            <div key={g.id} className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                                                <div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
                                                    {isEditMode && userRole === 'admin' && <input type="checkbox" className="w-5 h-5 mt-1 sm:mt-0 accent-red-600 rounded cursor-pointer no-print flex-shrink-0" checked={selectedIds.includes(g.id)} onChange={() => { if (selectedIds.includes(g.id)) setSelectedIds(selectedIds.filter(id => id !== g.id)); else setSelectedIds([...selectedIds, g.id]); }} />}
                                                    <div>
                                                        <p className={"font-bold text-base flex flex-wrap items-center gap-2 font-mm " + (g.attended ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-900 dark:text-white')}>
                                                            {g.attended === 1 && <i className="ph-fill ph-check-circle text-emerald-500 text-xl drop-shadow-sm" title="ရောက်ရှိပြီး"></i>}
                                                            {g.name}
                                                            <span className={"px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold border font-mm " + (g.side === 'Groom' ? 'bg-indigo-50/50 text-indigo-600 border-indigo-200' : g.side === 'Bride' ? 'bg-pink-50/50 text-pink-600 border-pink-200' : 'bg-emerald-50/50 text-emerald-600 border-emerald-200')}>
                                                                {g.side === 'Groom' ? 'သတို့သားဖက်' : g.side === 'Bride' ? 'သတို့သမီးဖက်' : 'နှစ်ဖက်မိတ်ဆွေ'}
                                                            </span>
                                                        </p>
                                                        {g.note && <p className="text-sm text-gray-500 mt-1 font-bold flex items-center gap-1.5 font-mm"><i className="ph-bold ph-note-pencil text-gray-400 no-print text-base"></i>{g.note}</p>}
                                                        
                                                        {userRole === 'admin' && (g.gift_amount || g.gift_item) && (
                                                            <div className="mt-2 inline-flex items-center gap-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg shadow-sm">
                                                                <div className="w-5 h-5 rounded-full bg-wedding-100 dark:bg-wedding-900/40 flex items-center justify-center text-wedding-600"><i className="ph-fill ph-gift text-xs"></i></div>
                                                                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2 font-mm">
                                                                    {g.gift_amount && <span><span className="font-black font-numbers text-sm font-sans">{g.gift_amount}</span> <span className="text-gray-400 font-mm">Ks</span></span>}
                                                                    {g.gift_amount && g.gift_item && <span className="w-1 h-1 rounded-full bg-gray-300"></span>}
                                                                    {g.gift_item && <span className="font-mm">{g.gift_item}</span>}
                                                                </p>
                                                            </div>
                                                        )}
                                                        {userRole === 'staff' && (g.gift_amount || g.gift_item) && (
                                                            <div className="mt-2 inline-flex items-center gap-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg shadow-sm opacity-60">
                                                                <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500"><i className="ph-fill ph-lock-key text-xs"></i></div>
                                                                <p className="text-[10px] font-bold text-gray-500 uppercase font-sans">Gift Logged (Hidden)</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className={"flex items-center gap-3 justify-end w-full sm:w-auto mt-2 sm:mt-0 " + (isEditMode ? 'pl-9' : 'pl-0') + " sm:pl-0"}>
                                                    <span className={"px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase whitespace-nowrap shadow-sm border font-sans " + (g.status==='Invited'?'bg-emerald-50 text-emerald-700 border-emerald-200':g.status==='Written'?'bg-purple-50 text-purple-700 border-purple-200':'bg-amber-50 text-amber-700 border-amber-200')}>
                                                        {g.status}
                                                    </span>
                                                    <div className="flex gap-2 no-print ml-auto">
                                                        <button onClick={() => { setFormData(g); setModalOpen(true); }} className="w-9 h-9 flex items-center justify-center bg-white dark:bg-gray-800 text-blue-600 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-blue-50 shadow-sm transition-all hover:-translate-y-0.5" title="Edit Guest"><i className="ph-bold ph-pencil-simple text-lg"></i></button>
                                                        {userRole === 'admin' && <button onClick={() => { setSelectedIds([g.id]); setShowBulkDeleteModal(true); }} className="w-9 h-9 flex items-center justify-center bg-white dark:bg-gray-800 text-red-500 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-red-50 shadow-sm transition-all hover:-translate-y-0.5" title="Delete Guest"><i className="ph-bold ph-trash text-lg"></i></button>}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {hasMore && (
                                <div className="text-center pt-4 pb-8 no-print">
                                    <button onClick={() => setPageCount(p => p + 1)} className="glass-luxury px-8 py-3 rounded-full font-bold text-gray-800 dark:text-gray-200 hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto text-sm font-mm">
                                        <i className="ph-bold ph-caret-down text-wedding-500 text-lg"></i> နောက်ထပ် ဧည့်သည်များ ပြရန်
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* EDIT / ADD MODAL */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4 no-print">
                            <div className="glass-luxury p-8 sm:p-10 w-full max-w-xl shadow-2xl relative animate-fade-in max-h-[90vh] overflow-y-auto !bg-white dark:!bg-gray-900 rounded-[2.5rem]">
                                <button onClick={() => setModalOpen(false)} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><i className="ph-bold ph-x text-lg"></i></button>
                                <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white font-sans">{formData.id ? 'Edit Guest Details' : 'Add New Guest'}</h3>
                                <form onSubmit={saveGuest} className="space-y-5">
                                    <div className="grid grid-cols-3 gap-3">
                                        <label className={"cursor-pointer border-2 rounded-xl p-3 text-[12px] sm:text-sm text-center font-bold font-mm transition-all " + (formData.side === 'Groom' ? 'border-indigo-500 bg-indigo-50/50 text-indigo-700 shadow-sm' : 'border-gray-100 dark:border-gray-800 text-gray-500')}>
                                            <input type="radio" name="side" className="hidden" checked={formData.side === 'Groom'} onChange={() => setFormData(Object.assign({}, formData, { side: 'Groom' }))} />
                                            သတို့သားဖက်
                                        </label>
                                        <label className={"cursor-pointer border-2 rounded-xl p-3 text-[12px] sm:text-sm text-center font-bold font-mm transition-all " + (formData.side === 'Bride' ? 'border-pink-500 bg-pink-50/50 text-pink-700 shadow-sm' : 'border-gray-100 dark:border-gray-800 text-gray-500')}>
                                            <input type="radio" name="side" className="hidden" checked={formData.side === 'Bride'} onChange={() => setFormData(Object.assign({}, formData, { side: 'Bride' }))} />
                                            သတို့သမီးဖက်
                                        </label>
                                        <label className={"cursor-pointer border-2 rounded-xl p-3 text-[12px] sm:text-sm text-center font-bold font-mm transition-all " + (formData.side === 'Both' ? 'border-emerald-500 bg-emerald-50/50 text-emerald-700 shadow-sm' : 'border-gray-100 dark:border-gray-800 text-gray-400')}>
                                            <input type="radio" name="side" className="hidden" checked={formData.side === 'Both'} onChange={() => setFormData(Object.assign({}, formData, { side: 'Both' }))} />
                                            နှစ်ဖက်မိတ်ဆွေ
                                        </label>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase mb-1.5 text-gray-400 font-sans">Guest Name</label>
                                        <input type="text" required className="w-full px-5 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-wedding-500 font-bold text-gray-900 dark:text-white text-base transition-all font-mm" value={formData.name} onChange={e=>setFormData(Object.assign({}, formData, { name: e.target.value }))} />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase mb-1.5 text-gray-400 font-sans">Address / City</label>
                                        <input type="text" required placeholder="e.g. Yangon" className="w-full px-5 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-wedding-500 font-bold text-gray-900 dark:text-white text-base transition-all font-mm" value={formData.address} onChange={e=>setFormData(Object.assign({}, formData, { address: e.target.value }))} />
                                    </div>
                                    
                                    {userRole === 'admin' && (
                                        <div className="grid grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                                            <div className="col-span-2 mb-1">
                                                <div className="text-[16px] font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2 font-mm">
                                                    <i className="ph-fill ph-gift text-wedding-500 text-[22px]"></i> လက်ဖွဲ့မှတ်တမ်း
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[11px] font-bold mb-1.5 text-gray-400">
                                                    <span className="uppercase text-[10px] font-sans">Amount</span> <span className="font-mm">(ငွေ)</span>
                                                </label>
                                                <input type="text" placeholder="50000" className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg font-black font-numbers text-sm text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 font-sans" value={formData.gift_amount} onChange={e=>setFormData(Object.assign({}, formData, { gift_amount: convertToEnglishDigits(e.target.value) }))} />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] font-bold mb-1.5 text-gray-400">
                                                    <span className="uppercase text-[10px] font-sans">Item</span> <span className="font-mm">(ပစ္စည်း)</span>
                                                </label>
                                                <input type="text" placeholder="e.g. ရွှေဆွဲကြိုး" className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg font-bold text-sm text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 font-mm" value={formData.gift_item} onChange={e=>setFormData(Object.assign({}, formData, { gift_item: e.target.value }))} />
                                            </div>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase mb-1.5 text-gray-400 font-sans">Status</label>
                                            <select className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-wedding-500 font-bold text-gray-900 dark:text-white shadow-sm font-sans" value={formData.status} onChange={e=>setFormData(Object.assign({}, formData, { status: e.target.value }))}><option>Pending</option><option>Written</option><option>Invited</option></select>
                                        </div>
                                        <div className="flex items-end h-full">
                                            <label className={"w-full min-h-[50px] flex items-center justify-center gap-2 cursor-pointer px-3 rounded-xl border transition-all shadow-sm " + (formData.attended === 1 ? 'bg-emerald-50 border-emerald-300 dark:bg-emerald-900/20' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700')}>
                                                <input type="checkbox" className="w-5 h-5 accent-emerald-500 rounded cursor-pointer" checked={formData.attended === 1} onChange={(e) => setFormData(Object.assign({}, formData, { attended: e.target.checked ? 1 : 0 }))} />
                                                <span className={"font-bold text-sm font-mm " + (formData.attended === 1 ? 'text-emerald-700 dark:text-emerald-400' : 'text-gray-500')}>ရောက်ရှိ <span className="font-sans text-[11px] uppercase">(Attended)</span></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-bold uppercase mb-1.5 text-gray-400 font-sans">Note (Optional)</label>
                                        <input type="text" className="w-full px-5 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-wedding-500 font-bold text-gray-900 dark:text-white text-base transition-all font-mm" value={formData.note} onChange={e=>setFormData(Object.assign({}, formData, { note: e.target.value }))} />
                                    </div>
                                    
                                    <button disabled={isSaving} className={"w-full text-white py-3.5 rounded-xl mt-2 font-bold text-base transition-all flex items-center justify-center gap-2 font-sans " + (isSaving ? 'bg-gray-400' : 'bg-wedding-800 hover:bg-wedding-900 shadow-luxury hover:-translate-y-0.5')}>
                                        {isSaving ? <React.Fragment><i className="ph-bold ph-spinner animate-spin text-xl"></i> Saving...</React.Fragment> : 'Save Guest Details'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {showBulkDeleteModal && userRole === 'admin' && (
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 no-print">
                            <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 w-full max-w-sm text-center relative animate-fade-in shadow-luxury border border-white/20">
                                <button onClick={() => { setShowBulkDeleteModal(false); setDeletePassword(''); }} className="absolute top-5 right-5 text-gray-400 hover:text-gray-800"><i className="ph-bold ph-x text-xl"></i></button>
                                <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-red-100 dark:border-red-900/50 shadow-sm">
                                    <i className="ph-fill ph-warning-circle text-3xl"></i>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2 font-mm">ဖျက်မှာ သေချာပြီလား?</h3>
                                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-6 font-mm">ရွေးချယ်ထားသော ဧည့်သည် <span className="text-red-500 text-base font-sans">({selectedIds.length})</span> ဦးကို စာရင်းမှ အပြီးတိုင် ဖျက်ပစ်ပါမည်။</p>
                                <form onSubmit={confirmBulkDelete} className="text-left space-y-4">
                                    <div className="relative">
                                        <input type={showDeletePwd ? "text" : "password"} placeholder="Admin Password" required className="w-full pl-5 pr-12 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-bold focus:outline-none focus:border-red-500 text-gray-900 dark:text-white transition-all font-sans" value={deletePassword} onChange={e=>setDeletePassword(e.target.value)} />
                                        <button type="button" onClick={() => setShowDeletePwd(!showDeletePwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none transition-colors">
                                            <i className={"ph-fill text-lg " + (showDeletePwd ? "ph-eye-slash" : "ph-eye")}></i>
                                        </button>
                                    </div>
                                    <div className="flex gap-3 mt-4">
                                        <button type="button" onClick={() => { setShowBulkDeleteModal(false); setDeletePassword(''); }} className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-200 font-sans">Cancel</button>
                                        <button disabled={isDeleting} className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md font-mm">
                                            {isDeleting ? <React.Fragment><i className="ph-bold ph-spinner animate-spin"></i> ဖျက်နေသည်</React.Fragment> : 'ဖျက်မည်'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        function AuditLogs({ showToast }) {
            const [logs, setLogs] = useState([]);
            const [loading, setLoading] = useState(true);

            const fetchLogs = useCallback(() => {
                setLoading(true);
                apiCall('/api/logs')
                    .then(data => { if (data && data.logs) setLogs(data.logs); })
                    .catch(() => showToast('မှတ်တမ်းများ ရယူ၍မရပါ', 'error'))
                    .finally(() => setLoading(false));
            }, []);

            useEffect(() => {
                fetchLogs();
            }, [fetchLogs]);

            const handleDeleteLog = async (id) => {
                try {
                    const res = await fetch('/api/logs/' + id, { method: 'DELETE' });
                    if (res.ok) { 
                        setLogs(prev => prev.filter(l => l.id !== id)); 
                        showToast('မှတ်တမ်းတစ်ခု ဖျက်ပစ်ပါပြီ'); 
                    }
                } catch(e) { showToast('ဖျက်၍မရပါ', 'error'); }
            };

            const handleClearAll = async () => {
                if(window.confirm('မှတ်တမ်းများအားလုံးကို အပြီးတိုင် ဖျက်ပစ်ရန် သေချာပြီလား?')) {
                    try {
                        const res = await fetch('/api/logs', { method: 'DELETE' });
                        if (res.ok) { 
                            setLogs([]); 
                            showToast('မှတ်တမ်းအားလုံး ဖျက်ပစ်ပါပြီ'); 
                        }
                    } catch(e) { showToast('ဖျက်၍မရပါ', 'error'); }
                }
            };

            const formatDateTime = (isoString) => {
                if (!isoString) return '-'; const date = new Date(isoString); return date.toLocaleString('en-US', { timeZone: 'Asia/Yangon', hour12: true, year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
            };

            return (
                <div className="max-w-4xl mx-auto space-y-6 relative z-10 font-sans">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-sm">
                                <i className="ph-fill ph-list-bullets text-2xl"></i>
                            </div> 
                            Activity Logs
                        </h2>
                        {logs.length > 0 && (
                            <button onClick={handleClearAll} className="glass-luxury px-4 py-2.5 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 font-bold text-sm flex items-center gap-2 transition-all shadow-sm font-mm">
                                <i className="ph-bold ph-trash text-lg"></i> အားလုံးဖျက်မည်
                            </button>
                        )}
                    </div>

                    <div className="glass-luxury rounded-[2rem] overflow-hidden">
                        {loading ? (
                            <div className="p-10 text-center text-gray-500"><i className="ph-bold ph-spinner animate-spin text-3xl mb-2"></i><p>Loading records...</p></div>
                        ) : logs.length === 0 ? (
                            <div className="p-10 text-center text-gray-500 font-mm">မှတ်တမ်း မရှိသေးပါ</div>
                        ) : (
                            <div className="divide-y divide-gray-100 dark:divide-gray-800/50">
                                {logs.map((log) => (
                                    <div key={log.id} className="p-5 sm:p-6 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 shadow-inner">
                                            {(log.action || '') === 'ADD' ? <i className="ph-bold ph-user-plus text-emerald-500 text-xl"></i> :
                                             (log.action || '') === 'UPDATE' ? <i className="ph-bold ph-pencil-simple text-blue-500 text-xl"></i> :
                                             (log.action || '').indexOf('DELETE') !== -1 ? <i className="ph-bold ph-trash text-red-500 text-xl"></i> :
                                             (log.action || '') === 'IMPORT' ? <i className="ph-bold ph-upload-simple text-purple-500 text-xl"></i> :
                                             <i className="ph-bold ph-info text-xl"></i>}
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-sm font-bold text-gray-900 dark:text-white leading-relaxed font-mm">{log.details}</p>
                                            <div className="flex items-center gap-3 mt-1.5">
                                                <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1 font-sans"><i className="ph-bold ph-clock"></i> {formatDateTime(log.created_at)}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                <span className={"text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md font-sans " + (log.username === 'admin' ? 'bg-wedding-100 text-wedding-800' : 'bg-blue-100 text-blue-800')}>{log.username}</span>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDeleteLog(log.id)} className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all flex-shrink-0 shadow-sm border border-transparent hover:border-red-100 dark:hover:border-red-800/50" title="Delete Log">
                                            <i className="ph-bold ph-trash text-lg"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        function Settings({ showToast, appSettings, setAppSettings, onLivePreview }) {
            const [settings, setSettings] = useState({ groom_name: '', bride_name: '', wedding_date: '', venue: '', footer_text: '', logo_url: '', theme_color: 'gold', effect_on: 1, recovery_key: '' });
            const [creds, setCreds] = useState({ target: 'admin', username: '', password: '' });
            const [isUpdating, setIsUpdating] = useState(false);
            const [isSavingSettings, setIsSavingSettings] = useState(false);
            
            const [showRecoveryKey, setShowRecoveryKey] = useState(false);
            const [showSettingsPwd, setShowSettingsPwd] = useState(false);
            const [showKeyUpdate, setShowKeyUpdate] = useState(false);

            const [srcImage, setSrcImage] = useState(null);
            const [cropData, setCropData] = useState({ x: 50, y: 50, size: 80 }); 
            const canvasRef = useRef(null); const imageRef = useRef(null);

            useEffect(() => { apiCall('/api/settings').then(data => { if(data.settings) setSettings(prev => Object.assign({}, prev, data.settings)); }); }, []);
            useEffect(() => {
                if (!srcImage || !canvasRef.current || !imageRef.current) return;
                const canvas = canvasRef.current; const ctx = canvas.getContext('2d'); const img = imageRef.current;
                const draw = () => {
                    const natW = img.naturalWidth; const natH = img.naturalHeight; const minDimension = Math.min(natW, natH);
                    const cropPxSize = (cropData.size / 100) * minDimension; const sourceX = (cropData.x / 100) * (natW - cropPxSize); const sourceY = (cropData.y / 100) * (natH - cropPxSize);
                    ctx.clearRect(0, 0, 300, 300); ctx.drawImage(img, sourceX, sourceY, cropPxSize, cropPxSize, 0, 0, 300, 300);
                };
                if (img.complete) draw(); else img.onload = draw;
            }, [srcImage, cropData]);

            const handleSave = async (e) => {
                e.preventDefault(); setIsSavingSettings(true);
                const res = await fetch('/api/settings', { method: 'PUT', body: JSON.stringify(settings), headers: { 'Content-Type': 'application/json' } });
                if (!res.ok) {
                    showToast('Save မအောင်မြင်ပါ။ ကျေးဇူးပြု၍ /api/setup သို့ဝင်ပြီး DB အသစ်တိုးပါ', 'error');
                    setIsSavingSettings(false);
                    return;
                }
                setAppSettings(settings); showToast('App Settings များကို အောင်မြင်စွာ သိမ်းဆည်းပြီးပါပြီ'); setIsSavingSettings(false); 
                setShowKeyUpdate(false); 
                setTimeout(() => window.location.reload(), 800); 
            };
            
            const handleUpdateCreds = async (e) => {
                e.preventDefault(); setIsUpdating(true);
                const res = await fetch('/api/change-credentials', { method: 'POST', body: JSON.stringify({ target: creds.target, newUsername: creds.username, newPassword: creds.password }), headers: { 'Content-Type': 'application/json' } });
                setIsUpdating(false); if (res.ok) { showToast(creds.target + ' account အချက်အလက်များ ပြောင်းလဲပြီးပါပြီ'); setCreds({ target: 'admin', username: '', password: '' }); } else { showToast('ပြောင်းလဲခြင်း မအောင်မြင်ပါ', 'error'); }
            };

            const handleFileSelect = (e) => {
                const file = e.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => setSrcImage(reader.result); reader.readAsDataURL(file);
            };
            
            const handleApplyCrop = async () => {
                if (!canvasRef.current) return; 
                const base64Data = canvasRef.current.toDataURL('image/png').split(',')[1];
                const res = await fetch('/api/uploads', { method: 'POST', body: JSON.stringify({ mime_type: 'image/png', base64_data: base64Data }), headers: { 'Content-Type': 'application/json' } });
                const data = await res.json(); 
                if (data.url) {
                    setSettings(Object.assign({}, settings, { logo_url: data.url })); setSrcImage(null); showToast('Monogram အား စိတ်ကြိုက်အဝိုင်းပုံစံ ဖြတ်ညှပ်ပြီးပါပြီ', 'success');
                } else {
                    showToast('Upload failed', 'error');
                }
            };

            return (
                <div className="max-w-3xl mx-auto space-y-8 relative z-10 pb-10 font-sans">
                    <div className="glass-luxury p-8 sm:p-12 rounded-[2.5rem]">
                        <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 shadow-sm border-2 border-white dark:border-blue-800/50 flex items-center justify-center flex-shrink-0">
                                <i className="ph-fill ph-palette text-3xl"></i>
                            </div> 
                            App Customization
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-3 text-gray-500">Theme Color</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {Object.entries({ 
                                        gold: 'Classic Gold', 
                                        rose: 'Rose Pink', 
                                        emerald: 'Emerald', 
                                        blue: 'Navy Blue',
                                        terracotta: 'Terracotta',
                                        sage: 'Sage Garden',
                                        burgundy: 'Royal Wine',
                                        lavender: 'Dusty Lavender'
                                    }).map(([key, label]) => (
                                        <label key={key} className={"cursor-pointer border-2 rounded-xl p-3 text-center font-bold transition-all transform hover:-translate-y-1 relative " + (settings.theme_color === key ? 'border-wedding-500 bg-white dark:bg-gray-800 text-wedding-800 dark:text-wedding-400 shadow-glow' : 'border-gray-100 dark:border-gray-800 text-gray-500 bg-white/50 dark:bg-gray-900/50 hover:bg-white')}>
                                            <input type="radio" className="hidden" checked={settings.theme_color === key} onChange={() => { 
                                                setSettings(Object.assign({}, settings, { theme_color: key }));
                                                if(onLivePreview) onLivePreview(key, settings.effect_on);
                                            }} />
                                            <div className="w-8 h-8 rounded-full mx-auto mb-2 shadow-inner border border-black/5" style={{ backgroundColor: key==='gold'?'#c2a37d':key==='rose'?'#fb7185':key==='emerald'?'#34d399':key==='blue'?'#60a5fa':key==='terracotta'?'#d97757':key==='sage'?'#8ba38d':key==='burgundy'?'#9d2235':'#a385c6' }}></div>
                                            <span className="text-[10px] uppercase tracking-wider">{label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-2">
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-3 text-gray-500">Ambient Effects</label>
                                <label className="flex items-center justify-between cursor-pointer bg-gray-50/80 dark:bg-gray-900/80 px-6 py-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
                                    <span className="font-bold text-gray-800 dark:text-gray-200">Floating Particles & Glow</span>
                                    <div className={"w-12 h-6 rounded-full transition-colors relative shadow-inner " + (settings.effect_on === 1 ? 'bg-wedding-500' : 'bg-gray-300 dark:bg-gray-700')}>
                                        <div className={"absolute top-1 w-4 h-4 rounded-full bg-white transition-transform shadow-sm " + (settings.effect_on === 1 ? 'left-7' : 'left-1')}></div>
                                        <input type="checkbox" className="hidden" checked={settings.effect_on === 1} onChange={(e) => {
                                            const val = e.target.checked ? 1 : 0;
                                            setSettings(Object.assign({}, settings, { effect_on: val }));
                                            if(onLivePreview) onLivePreview(settings.theme_color, val);
                                        }} />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="glass-luxury p-8 sm:p-12 rounded-[2.5rem]">
                        <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                            <div className="w-14 h-14 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 shadow-sm border-2 border-white dark:border-rose-800/50 flex items-center justify-center flex-shrink-0">
                                <i className="ph-fill ph-cards text-3xl"></i>
                            </div> 
                            Wedding Details
                        </h2>
                        <form onSubmit={handleSave} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">Groom's Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 shadow-sm transition-all font-mm" value={settings.groom_name} onChange={e=>setSettings(Object.assign({}, settings, { groom_name: e.target.value }))} />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">Bride's Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 shadow-sm transition-all font-mm" value={settings.bride_name} onChange={e=>setSettings(Object.assign({}, settings, { bride_name: e.target.value }))} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">Wedding Date</label>
                                    <input type="date" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 shadow-sm transition-all" value={settings.wedding_date} onChange={e=>setSettings(Object.assign({}, settings, { wedding_date: e.target.value }))} />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">Venue</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 shadow-sm transition-all font-mm" value={settings.venue} onChange={e=>setSettings(Object.assign({}, settings, { venue: e.target.value }))} />
                                </div>
                            </div>
                            
                            <div className="border-[1.5px] border-dashed border-wedding-200 dark:border-gray-700 rounded-[2rem] p-8 text-center bg-wedding-50/30 dark:bg-gray-900/30 mt-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 pointer-events-none"></div>
                                {settings.logo_url && !srcImage && (
                                    <div className="mb-6 relative inline-block">
                                        <div className="absolute inset-0 bg-wedding-500/20 blur-2xl rounded-full"></div>
                                        <img src={settings.logo_url} className="h-32 w-32 rounded-full shadow-lg border-[3px] border-white dark:border-gray-800 object-cover relative z-10" />
                                    </div>
                                )}

                                {srcImage ? (
                                    <div className="space-y-6 my-2 p-6 bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-luxury relative z-10">
                                        <h4 className="font-serif font-bold text-gray-800 dark:text-white text-xl">Adjust Monogram Position</h4>
                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                            <img ref={imageRef} src={srcImage} className="hidden" />
                                            <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden border-4 border-wedding-500 shadow-inner bg-gray-100 flex-shrink-0">
                                                <canvas ref={canvasRef} width="300" height="300" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="w-full space-y-4 text-left">
                                                <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Horizontal (X)</label><input type="range" min="0" max="100" className="w-full accent-wedding-800" value={cropData.x} onChange={e => setCropData(Object.assign({}, cropData, { x: parseInt(e.target.value) }))} /></div>
                                                <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Vertical (Y)</label><input type="range" min="0" max="100" className="w-full accent-wedding-800" value={cropData.y} onChange={e => setCropData(Object.assign({}, cropData, { y: parseInt(e.target.value) }))} /></div>
                                                <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Zoom (Scale)</label><input type="range" min="20" max="100" className="w-full accent-wedding-800" value={cropData.size} onChange={e => setCropData(Object.assign({}, cropData, { size: parseInt(e.target.value) }))} /></div>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 justify-end pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <button type="button" onClick={() => setSrcImage(null)} className="px-6 py-3 text-sm font-bold bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 transition-colors">Cancel</button>
                                            <button type="button" onClick={handleApplyCrop} className="px-6 py-3 text-sm font-bold bg-gradient-to-r from-wedding-900 to-wedding-800 text-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">Apply Monogram</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                                        <label className="cursor-pointer bg-white dark:bg-gray-800 px-8 py-4 rounded-2xl text-sm font-bold shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-wedding-500">
                                            <i className="ph-fill ph-circles-three-plus text-xl text-wedding-500"></i> Upload Couple's Monogram
                                            <input type="file" accept="image/*,image/svg+xml" className="hidden" onChange={handleFileSelect} />
                                        </label>
                                        {settings.logo_url && (
                                            <button type="button" onClick={() => setSettings(Object.assign({}, settings, { logo_url: '' }))} className="px-8 py-4 rounded-2xl text-sm font-bold transition-all text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 hover:bg-red-100">Remove Monogram</button>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">Footer Quote</label>
                                <textarea rows="2" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 italic text-base text-center text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 shadow-sm transition-all font-mm" value={settings.footer_text} onChange={e=>setSettings(Object.assign({}, settings, { footer_text: e.target.value }))}></textarea>
                            </div>
                            
                            {!showKeyUpdate ? (
                                <div className="mt-8 border-t border-gray-200/50 dark:border-gray-800/50 pt-8">
                                    <button type="button" onClick={() => setShowKeyUpdate(true)} className="text-[13px] font-bold text-gray-400 hover:text-red-500 flex items-center gap-2 transition-colors w-max">
                                        <i className="ph-bold ph-key"></i> Change Master Recovery Key
                                    </button>
                                </div>
                            ) : (
                                <div className="mt-8 border-t border-gray-200/50 dark:border-gray-800/50 pt-8 relative animate-fade-in">
                                    <div className="bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-[1.5rem] p-6 relative">
                                        <button type="button" onClick={() => setShowKeyUpdate(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors"><i className="ph-bold ph-x"></i></button>
                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                            <i className="ph-fill ph-key text-red-500 text-lg"></i> Update Master Recovery Key
                                        </h3>
                                        <p className="text-[11px] text-gray-500 mb-4 font-bold leading-relaxed font-mm">Password မေ့သွားပါက ပြန်လည်ရယူရန် (Reset) အတွက် အသုံးပြုရမည့် အရေးကြီးသော လျှို့ဝှက်စာသားဖြစ်ပါသည်။ သေချာစွာ မှတ်သားထားပါ။</p>
                                        
                                        <div className="relative">
                                            <input type={showRecoveryKey ? "text" : "password"} placeholder="Enter New Master Recovery Key" className="w-full pl-5 pr-12 py-3.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 font-bold focus:outline-none focus:border-red-500 shadow-sm transition-all text-sm" value={settings.recovery_key || ''} onChange={e=>setSettings(Object.assign({}, settings, { recovery_key: e.target.value }))} />
                                            <button type="button" onClick={() => setShowRecoveryKey(!showRecoveryKey)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none transition-colors">
                                                <i className={"ph-fill text-lg " + (showRecoveryKey ? "ph-eye-slash" : "ph-eye")}></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button disabled={isSavingSettings} className="w-full bg-gradient-to-r from-wedding-900 to-wedding-800 text-white font-bold text-base tracking-wide py-4 rounded-xl shadow-luxury transition-all transform hover:-translate-y-1 mt-4 uppercase hover:shadow-glow">
                                {isSavingSettings ? 'Saving Configurations...' : 'Save All Configurations'}
                            </button>
                        </form>
                    </div>

                    <div className="glass-luxury p-8 sm:p-12 rounded-[2.5rem] border border-red-100 dark:border-red-900/30">
                        <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                            <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 shadow-sm border-2 border-white dark:border-red-800/50 flex items-center justify-center flex-shrink-0">
                                <i className="ph-fill ph-shield-check text-3xl"></i>
                            </div> 
                            Account Security
                        </h2>
                        <form onSubmit={handleUpdateCreds} className="space-y-5">
                            <div className="flex gap-4 mb-4">
                                <label className={"flex-1 cursor-pointer border-2 rounded-xl p-3 text-center font-bold transition-all " + (creds.target === 'admin' ? 'border-red-500 bg-red-50/50 text-red-700 shadow-sm' : 'border-gray-100 dark:border-gray-800 text-gray-500')}>
                                    <input type="radio" name="target" className="hidden" checked={creds.target === 'admin'} onChange={() => setCreds(Object.assign({}, creds, { target: 'admin' }))} />
                                    Admin Account
                                </label>
                                <label className={"flex-1 cursor-pointer border-2 rounded-xl p-3 text-center font-bold transition-all " + (creds.target === 'staff' ? 'border-blue-500 bg-blue-50/50 text-blue-700 shadow-sm' : 'border-gray-100 dark:border-gray-800 text-gray-500')}>
                                    <input type="radio" name="target" className="hidden" checked={creds.target === 'staff'} onChange={() => setCreds(Object.assign({}, creds, { target: 'staff' }))} />
                                    Staff Account
                                </label>
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">New Username</label>
                                <input type="text" placeholder="Enter new username" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-red-500 font-bold shadow-sm transition-all" value={creds.username} onChange={e => setCreds(Object.assign({}, creds, { username: e.target.value }))} required />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">New Password</label>
                                <div className="relative">
                                    <input type={showSettingsPwd ? "text" : "password"} placeholder="Enter new password" className="w-full pl-4 pr-12 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-red-500 font-bold shadow-sm transition-all" value={creds.password} onChange={e => setCreds(Object.assign({}, creds, { password: e.target.value }))} required />
                                    <button type="button" onClick={() => setShowSettingsPwd(!showSettingsPwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none transition-colors">
                                        <i className={"ph-fill text-lg " + (showSettingsPwd ? "ph-eye-slash" : "ph-eye")}></i>
                                    </button>
                                </div>
                            </div>
                            <button disabled={isUpdating} className={"w-full text-white font-bold text-base py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 mt-2 uppercase " + (creds.target === 'admin' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700')}>Update Credentials</button>
                        </form>
                    </div>
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App/>);
    <\/script>
</body>
</html>`;

// --- ၂။ BACKEND (API & DATABASE) ၏ CODE များ ---
async function hashPassword(password) {
    const salt = "YoneMan_EverAfter_Secure_Salt_2026_";
	const msgBuffer = new TextEncoder().encode(salt + password);
	const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function logAction(env, username, action, details) {
    try {
        await env.DB.prepare('INSERT INTO logs (action, details, username, created_at) VALUES (?, ?, ?, ?)')
            .bind(action, details, username || 'system', new Date().toISOString()).run();
    } catch(e) { console.error("Logging error", e) }
}

async function runMigrations(env) {
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY, groom_name TEXT, bride_name TEXT, wedding_date TEXT, venue TEXT)").run();
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password_hash TEXT, role TEXT DEFAULT 'admin')").run();
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS guests (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address TEXT, note TEXT, status TEXT, side TEXT DEFAULT 'Groom', attended INTEGER DEFAULT 0, gift_amount TEXT, gift_item TEXT, updated_at TEXT)").run();
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS sessions (session_id TEXT PRIMARY KEY, username TEXT, role TEXT, created_at TEXT)").run();
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS uploads (id TEXT PRIMARY KEY, mime_type TEXT, base64_data TEXT)").run();
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT, action TEXT, details TEXT, username TEXT, created_at TEXT)").run();
    
    await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_guests_address_name ON guests(address, name)").run();

    try { await env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_guest ON guests(name, address)").run(); } catch(e) {}
    try { await env.DB.prepare("ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'admin'").run(); } catch(e) {}
    try { await env.DB.prepare("ALTER TABLE sessions ADD COLUMN role TEXT DEFAULT 'admin'").run(); } catch(e) {}
    try { await env.DB.prepare("ALTER TABLE sessions ADD COLUMN username TEXT").run(); } catch(e) {}
    try { await env.DB.prepare("ALTER TABLE settings ADD COLUMN recovery_key TEXT DEFAULT 'EverAfter2026'").run(); } catch(e) {}
    try { await env.DB.prepare("ALTER TABLE settings ADD COLUMN footer_text TEXT").run(); } catch(e) {}
    try { await env.DB.prepare("ALTER TABLE settings ADD COLUMN logo_url TEXT").run(); } catch(e) {}
    try { await env.DB.prepare("ALTER TABLE settings ADD COLUMN theme_color TEXT DEFAULT 'gold'").run(); } catch(e) {}
    try { await env.DB.prepare("ALTER TABLE settings ADD COLUMN effect_on INTEGER DEFAULT 1").run(); } catch(e) {}

    const s = await env.DB.prepare("SELECT id FROM settings WHERE id = 1").first();
    if(!s) await env.DB.prepare("INSERT INTO settings (id, theme_color, effect_on, recovery_key) VALUES (1, 'gold', 1, 'EverAfter2026')").run();

    const u1 = await env.DB.prepare("SELECT id FROM users WHERE id = 1").first();
    if(!u1) {
        const h = await hashPassword('admin123'); 
        await env.DB.prepare("INSERT INTO users (id, username, password_hash, role) VALUES (1, 'admin', ?, 'admin')").bind(h).run();
    }
    const u2 = await env.DB.prepare("SELECT id FROM users WHERE id = 2").first();
    if(!u2) {
        const h = await hashPassword('staff123'); 
        await env.DB.prepare("INSERT INTO users (id, username, password_hash, role) VALUES (2, 'staff', ?, 'staff')").bind(h).run();
    }

    return "Database Schema & Indexes Updated Successfully!";
}

const toTitleCaseDB = (str) => {
    if (!str) return '';
    return String(str).trim().replace(/[\\s\\u200B]+/g, ' ').split(' ').map(w => {
        if (w.length === 0) return w;
        return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }).join(' ');
};

const normalizeTextForDB = (str) => {
    if (!str) return '';
    let s = String(str).replace(/၀/g, 'ဝ').toLowerCase();
    s = s.replace(/[\\s\\u200B]+/g, ''); 
    s = s.replace(/\\u1025\\u102E/g, '\\u1026'); 
    return s;
};

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname;
		const method = request.method;

        if (path === '/api/setup') {
            const msg = await runMigrations(env);
            return new Response(msg, { status: 200 });
        }

		if (path === '/manifest.json') {
			let iconUrl = 'https://cdn-icons-png.flaticon.com/512/3656/3656847.png';
			try {
				const s = await env.DB.prepare('SELECT logo_url FROM settings WHERE id = 1').first();
				if (s && s.logo_url) iconUrl = s.logo_url;
			} catch(e) {}
			return new Response(JSON.stringify({
				name: "Wedding Guest List",
				short_name: "Ever After",
				start_url: "/",
				display: "standalone",
				background_color: "#f8f7f5",
				theme_color: "#5c4e3c",
				icons: [{ src: iconUrl, sizes: "512x512", type: "image/png" }]
			}), { headers: { 'Content-Type': 'application/json' }});
		}

		if (path === '/sw.js') {
			return new Response("self.addEventListener('install', (e) => { self.skipWaiting(); }); self.addEventListener('fetch', (e) => { });", { headers: { 'Content-Type': 'application/javascript' }});
		}

		if (path === '/') return new Response(UI_HTML, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });

        const cookieHeader = request.headers.get('Cookie');
        let sessionUser = null;
        if (cookieHeader) {
            const match = cookieHeader.match(/session_id=([^;]+)/);
            if (match) {
                sessionUser = await env.DB.prepare('SELECT * FROM sessions WHERE session_id = ?').bind(match[1]).first();
            }
        }

        const isProtected = path.startsWith('/api/') && path !== '/api/login' && path !== '/api/reset-password' && path !== '/api/setup' && !(path === '/api/settings' && method === 'GET') && !path.startsWith('/api/uploads/');
        
        if (isProtected && !sessionUser) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
        }

        const isAdmin = sessionUser ? sessionUser.role === 'admin' : false;
        const currentUsername = sessionUser ? sessionUser.username : '';

        if (path === '/api/settings' && method === 'GET') {
			const settings = await env.DB.prepare('SELECT * FROM settings WHERE id = 1').first();
            if (!sessionUser || sessionUser.role !== 'admin') {
                if (settings) delete settings.recovery_key;
            }
			return Response.json({ settings });
		}

        if (path.startsWith('/api/uploads/') && method === 'GET') {
			const id = path.split('/').pop();
            if (env.BUCKET) {
                const object = await env.BUCKET.get(id);
                if (object) {
                    const headers = new Headers();
                    object.writeHttpMetadata(headers);
                    headers.set('etag', object.httpEtag);
                    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
                    return new Response(object.body, { headers });
                }
            } 
            const img = await env.DB.prepare('SELECT * FROM uploads WHERE id = ?').bind(id.replace(/\.[^/.]+$/, "")).first();
            if (img) {
                const binaryData = atob(img.base64_data);
                const arrayBuffer = new Uint8Array(binaryData.length);
                for (let i = 0; i < binaryData.length; i++) arrayBuffer[i] = binaryData.charCodeAt(i);
                return new Response(arrayBuffer, { headers: { 'Content-Type': img.mime_type, 'Cache-Control': 'public, max-age=31536000, immutable' }});
            }
            return new Response('Not found', { status: 404 });
		}

		if (path === '/api/login' && method === 'POST') {
            try { await env.DB.prepare("DELETE FROM sessions WHERE datetime(created_at) < datetime('now', '-1 day')").run(); } catch(e) {}
			const { username, password } = await request.json();
			const hashedInput = await hashPassword(password);
			const user = await env.DB.prepare('SELECT * FROM users WHERE username = ? AND password_hash = ?').bind(username, hashedInput).first();

			if (user) {
                const sessionId = crypto.randomUUID();
                await env.DB.prepare('INSERT INTO sessions (session_id, username, role, created_at) VALUES (?, ?, ?, ?)')
                    .bind(sessionId, user.username, user.role || 'admin', new Date().toISOString()).run();
                await logAction(env, user.username, 'LOGIN', 'User logged in successfully');
				return new Response(JSON.stringify({ success: true }), {
					headers: { 'Content-Type': 'application/json', 'Set-Cookie': "session_id=" + sessionId + "; HttpOnly; Secure; SameSite=Strict; Max-Age=86400; Path=/" }
				});
			}
			return new Response('Unauthorized', { status: 401 });
		}

        if (path === '/api/reset-password' && method === 'POST') {
            const { username, recoveryKey, newPassword } = await request.json();
            const settings = await env.DB.prepare('SELECT recovery_key FROM settings WHERE id = 1').first();
            
            if (settings && settings.recovery_key === recoveryKey) {
                const newHash = await hashPassword(newPassword);
                const user = await env.DB.prepare('SELECT id FROM users WHERE username = ?').bind(username).first();
                if (!user) return Response.json({ error: 'Username not found' }, { status: 404 });
                
                await env.DB.prepare('UPDATE users SET password_hash = ? WHERE username = ?').bind(newHash, username).run();
                await logAction(env, username, 'SECURITY', 'Password reset successfully using Master Recovery Key');
                return Response.json({ success: true });
            }
            return Response.json({ error: 'Invalid Recovery Key' }, { status: 403 });
        }

        if (path === '/api/auth/check' && method === 'GET') {
			return new Response(JSON.stringify({ auth: true, role: sessionUser.role, username: sessionUser.username }), { headers: { 'Content-Type': 'application/json' }});
		}

		if (path === '/api/logout' && method === 'POST') {
             if (cookieHeader) {
                const match = cookieHeader.match(/session_id=([^;]+)/);
                if (match) await env.DB.prepare('DELETE FROM sessions WHERE session_id = ?').bind(match[1]).run();
            }
            await logAction(env, currentUsername, 'LOGOUT', 'User logged out');
			return new Response('Logged out', { headers: { 'Set-Cookie': 'session_id=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/' } });
		}

        if (path === '/api/stats' && method === 'GET') {
            const counts = await env.DB.prepare("SELECT COUNT(*) as total, SUM(CASE WHEN status='Pending' THEN 1 ELSE 0 END) as pending, SUM(CASE WHEN status='Written' THEN 1 ELSE 0 END) as written, SUM(CASE WHEN status='Invited' THEN 1 ELSE 0 END) as invited, SUM(CASE WHEN attended=1 THEN 1 ELSE 0 END) as attended, SUM(CASE WHEN side='Groom' THEN 1 ELSE 0 END) as groomSide, SUM(CASE WHEN side='Bride' THEN 1 ELSE 0 END) as brideSide, SUM(CASE WHEN side='Both' THEN 1 ELSE 0 END) as bothSide FROM guests").first();
            const gifts = await env.DB.prepare("SELECT gift_amount, gift_item FROM guests WHERE (gift_amount != '' AND gift_amount IS NOT NULL) OR (gift_item != '' AND gift_item IS NOT NULL)").all();
            
            return Response.json({ stats: Object.assign({}, counts, { gifts: gifts.results }) });
        }

		if (path === '/api/guests' && method === 'GET') {
            const searchParams = url.searchParams;
            const search = searchParams.get('search') || '';
            const location = searchParams.get('location') || 'All Locations';
            const status = searchParams.get('status') || 'All Status';
            const side = searchParams.get('side') || 'All';
            const page = parseInt(searchParams.get('page')) || 1;
            const limit = 50; const offset = (page - 1) * limit;

            let query = "SELECT * FROM guests WHERE 1=1"; let params = [];
            
            if (search) { 
                const cleanSearch = String(search).replace(/[\\s\\u200B]+/g, '');
                const s1 = cleanSearch;
                const s2 = cleanSearch.replace(/\\u1026/g, '\\u1025\\u102E'); 
                const s3 = cleanSearch.replace(/\\u1025\\u102E/g, '\\u1026'); 

                query += " AND (" +
                    "REPLACE(name, ' ', '') COLLATE NOCASE LIKE ? OR REPLACE(name, ' ', '') COLLATE NOCASE LIKE ? OR REPLACE(name, ' ', '') COLLATE NOCASE LIKE ? OR " +
                    "REPLACE(address, ' ', '') COLLATE NOCASE LIKE ? OR REPLACE(address, ' ', '') COLLATE NOCASE LIKE ? OR REPLACE(address, ' ', '') COLLATE NOCASE LIKE ? OR " +
                    "note COLLATE NOCASE LIKE ? OR gift_item COLLATE NOCASE LIKE ?" +
                ")"; 
                const lk1 = "%" + s1 + "%"; 
                const lk2 = "%" + s2 + "%"; 
                const lk3 = "%" + s3 + "%";
                params.push(lk1, lk2, lk3, lk1, lk2, lk3, "%" + search + "%", "%" + search + "%"); 
            }
            
            if (location !== 'All Locations') { query += " AND address COLLATE NOCASE = ?"; params.push(location); }
            if (status !== 'All Status') { query += " AND status = ?"; params.push(status); }
            if (side !== 'All') { query += " AND side = ?"; params.push(side); }
            
            query += " ORDER BY address, name LIMIT ? OFFSET ?"; params.push(limit, offset);
            const { results } = await env.DB.prepare(query).bind(...params).all();
            
            let locations = [];
            if (page === 1) {
                const locData = await env.DB.prepare("SELECT address FROM guests WHERE address != '' AND address IS NOT NULL").all();
                const uniqueLocs = new Set();
                locData.results.forEach(r => {
                    if(r.address) {
                        const formatted = toTitleCaseDB(r.address);
                        uniqueLocs.add(formatted);
                    }
                });
                locations = Array.from(uniqueLocs).sort();
            }
            return Response.json({ guests: results, locations });
		}

        if (path === '/api/guests/all' && method === 'GET') {
            if (!isAdmin) return new Response('Forbidden', { status: 403 });
            const { results } = await env.DB.prepare("SELECT * FROM guests ORDER BY address, name").all();
            return Response.json({ guests: results });
        }

		if (path === '/api/guests' && method === 'POST') {
            const data = await request.json();
            
            const allGuests = await env.DB.prepare("SELECT id, name, address, side FROM guests").all();
            const normName = normalizeTextForDB(data.name);
            const normAddr = normalizeTextForDB(data.address);
            
            const dup = allGuests.results.find(g => 
                normalizeTextForDB(g.name) === normName && 
                normalizeTextForDB(g.address) === normAddr
            );

            if (dup) {
                return Response.json({ success: false, error: 'Duplicate entry', side: dup.side }, { status: 400 });
            }

            try {
                const payloadName = toTitleCaseDB(data.name);
                const payloadAddr = toTitleCaseDB(data.address);

                await env.DB.prepare('INSERT INTO guests (name, address, note, status, side, attended, gift_amount, gift_item, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)')
                    .bind(payloadName, payloadAddr, data.note || '', data.status, data.side, data.attended || 0, data.gift_amount || '', data.gift_item || '', new Date().toISOString()).run();
                await logAction(env, currentUsername, 'ADD', "Added " + payloadName + " (" + payloadAddr + ")");
                return Response.json({ success: true });
            } catch (e) {
                return Response.json({ success: false, error: 'Duplicate entry' }, { status: 400 });
            }
		}

        if (path === '/api/guests/bulk-delete' && method === 'POST') {
            if (!isAdmin) return new Response('Forbidden', { status: 403 });
            const { ids, password } = await request.json();
            const hashedInput = await hashPassword(password);
            const user = await env.DB.prepare('SELECT * FROM users WHERE id = 1 AND password_hash = ?').bind(hashedInput).first();
            if (!user) return new Response(JSON.stringify({ error: 'Incorrect password' }), { status: 403 });

            if (ids && ids.length > 0) {
                const placeholders = ids.map(() => '?').join(',');
                await env.DB.prepare("DELETE FROM guests WHERE id IN (" + placeholders + ")").bind(...ids).run();
                await logAction(env, currentUsername, 'BULK_DELETE', "Deleted " + ids.length + " guests securely");
            }
            return Response.json({ success: true });
        }

        if (path === '/api/guests/bulk' && method === 'POST') {
            if (!isAdmin) return new Response('Forbidden', { status: 403 });
            const { guests } = await request.json();
            if (!guests || !Array.isArray(guests)) return Response.json({ success: false, error: 'Invalid data' }, { status: 400 });
            
            const allGuests = await env.DB.prepare("SELECT id, name, address FROM guests").all();
            const existingSet = new Set(allGuests.results.map(g => normalizeTextForDB(g.name) + '|' + normalizeTextForDB(g.address)));

            const validGuests = [];
            for (let g of guests) {
                if (!g.name) continue;
                const key = normalizeTextForDB(g.name) + '|' + normalizeTextForDB(g.address || 'General');
                if (!existingSet.has(key)) {
                    g.name = toTitleCaseDB(g.name);
                    g.address = toTitleCaseDB(g.address || 'General');
                    validGuests.push(g);
                    existingSet.add(key); 
                }
            }

            if (validGuests.length === 0) return Response.json({ success: true, count: 0 });

            const statements = validGuests.map(g => {
                return env.DB.prepare('INSERT INTO guests (name, address, note, status, side, attended, gift_amount, gift_item, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)')
                    .bind(g.name, g.address, g.note || '', g.status || 'Pending', g.side || 'Groom', g.attended || 0, g.gift_amount || '', g.gift_item || '', new Date().toISOString());
            });
            const batchSize = 100;
            for (let i = 0; i < statements.length; i += batchSize) {
                const batch = statements.slice(i, i + batchSize);
                await env.DB.batch(batch);
            }
            await logAction(env, currentUsername, 'IMPORT', "Imported " + validGuests.length + " guests via Excel");
            return Response.json({ success: true, count: validGuests.length });
        }

		if (path.startsWith('/api/guests/') && method === 'PUT') {
			const id = path.split('/').pop();
			const data = await request.json();
			
            const allGuests = await env.DB.prepare("SELECT id, name, address, side FROM guests").all();
            const normName = normalizeTextForDB(data.name);
            const normAddr = normalizeTextForDB(data.address);
            
            const dup = allGuests.results.find(g => 
                g.id.toString() !== id.toString() &&
                normalizeTextForDB(g.name) === normName && 
                normalizeTextForDB(g.address) === normAddr
            );

            if (dup) {
                return Response.json({ success: false, error: 'Duplicate entry', side: dup.side }, { status: 400 });
            }

            const payloadName = toTitleCaseDB(data.name);
            const payloadAddr = toTitleCaseDB(data.address);

			await env.DB.prepare('UPDATE guests SET name = ?, address = ?, note = ?, status = ?, side = ?, attended = ?, gift_amount = ?, gift_item = ?, updated_at = ? WHERE id = ?')
				.bind(payloadName, payloadAddr, data.note || '', data.status, data.side, data.attended || 0, data.gift_amount || '', data.gift_item || '', new Date().toISOString(), id).run();
			await logAction(env, currentUsername, 'UPDATE', "Updated " + payloadName);
            return Response.json({ success: true });
		}

		if (path.startsWith('/api/guests/') && method === 'DELETE') {
            if (!isAdmin) return new Response('Forbidden', { status: 403 });
			const id = path.split('/').pop();
			await env.DB.prepare('DELETE FROM guests WHERE id = ?').bind(id).run();
            await logAction(env, currentUsername, 'DELETE', "Deleted guest ID: " + id);
			return Response.json({ success: true });
		}

        if (path === '/api/logs' && method === 'GET') {
            if (!isAdmin) return new Response('Forbidden', { status: 403 });
            const { results } = await env.DB.prepare("SELECT * FROM logs ORDER BY id DESC LIMIT 100").all();
            return Response.json({ logs: results });
        }

        if (path === '/api/logs' && method === 'DELETE') {
            if (!isAdmin) return new Response('Forbidden', { status: 403 });
            await env.DB.prepare("DELETE FROM logs").run();
            await logAction(env, currentUsername, 'SYSTEM', "Cleared all activity logs");
            return Response.json({ success: true });
        }

        if (path.startsWith('/api/logs/') && method === 'DELETE') {
            if (!isAdmin) return new Response('Forbidden', { status: 403 });
            const id = path.split('/').pop();
            await env.DB.prepare("DELETE FROM logs WHERE id = ?").bind(id).run();
            return Response.json({ success: true });
        }

		if (path === '/api/settings' && method === 'PUT') {
            if (!isAdmin) return new Response('Forbidden', { status: 403 });
			const d = await request.json();
			await env.DB.prepare('UPDATE settings SET groom_name = ?, bride_name = ?, wedding_date = ?, venue = ?, footer_text = ?, logo_url = ?, theme_color = ?, effect_on = ?, recovery_key = ? WHERE id = 1')
				.bind(d.groom_name, d.bride_name, d.wedding_date, d.venue, d.footer_text, d.logo_url, d.theme_color || 'gold', d.effect_on !== undefined ? d.effect_on : 1, d.recovery_key || 'EverAfter2026').run();
			await logAction(env, currentUsername, 'SETTINGS', "Updated App Configurations & Recovery Key");
            return Response.json({ success: true }); 
		}

        if (path === '/api/change-credentials' && method === 'POST') {
            if (!isAdmin) return new Response('Forbidden', { status: 403 });
			const { target, newUsername, newPassword } = await request.json();
			const newHash = await hashPassword(newPassword);
            const targetId = target === 'staff' ? 2 : 1;
			await env.DB.prepare('UPDATE users SET username = ?, password_hash = ? WHERE id = ?').bind(newUsername, newHash, targetId).run();
			await logAction(env, currentUsername, 'SECURITY', "Changed credentials for " + target);
            return Response.json({ success: true });
		}

		if (path === '/api/uploads' && method === 'POST') {
            if (!isAdmin) return new Response('Forbidden', { status: 403 });
            const contentLength = request.headers.get('content-length');
            if (contentLength && parseInt(contentLength) > 5 * 1024 * 1024) return Response.json({ error: 'File too large. (Max 5MB)' }, { status: 413 });

			const { mime_type, base64_data } = await request.json();
			const id = crypto.randomUUID(); const protocol = url.protocol; const host = url.host;
            let ext = '.png';
            if (mime_type === 'image/jpeg') ext = '.jpg'; else if (mime_type === 'image/webp') ext = '.webp'; else if (mime_type === 'image/svg+xml') ext = '.svg';
            
            if (env.BUCKET) {
                const binaryData = atob(base64_data); const arrayBuffer = new Uint8Array(binaryData.length);
                for (let i = 0; i < binaryData.length; i++) { arrayBuffer[i] = binaryData.charCodeAt(i); }
                await env.BUCKET.put(id + ext, arrayBuffer, { 
                    httpMetadata: { contentType: mime_type },
                    customMetadata: { uploaded_by: currentUsername, app: 'EverAfter' }
                });
                return Response.json({ url: protocol + "//" + host + "/api/uploads/" + id + ext });
            } else {
                await env.DB.prepare('INSERT INTO uploads (id, mime_type, base64_data) VALUES (?, ?, ?)').bind(id, mime_type, base64_data).run();
                return Response.json({ url: protocol + "//" + host + "/api/uploads/" + id });
            }
		}

		return new Response('Not Found', { status: 404 });
	}
};
