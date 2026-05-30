// --- ၁။ FRONTEND (UI) ၏ HTML CODE များ ---
const UI_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wedding Guest Management</title>
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#5c4e3c">
    
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:wght@300;400;500;600;700;800&family=Noto+Sans+Myanmar:wght@400;500;700;900&display=swap" rel="stylesheet">
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
                        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(255, 255, 255, 0.5) inset',
                        'luxury-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 20px 0 rgba(255, 255, 255, 0.05) inset',
                    },
                    animation: {
                        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'spin-slow': 'spin 1.5s linear infinite',
                    },
                    keyframes: {
                        pulseGlow: { 
                            '0%, 100%': { opacity: 0.3, transform: 'scale(1)' }, 
                            '50%': { opacity: 0.6, transform: 'scale(1.05)' } 
                        },
                        float: { 
                            '0%, 100%': { transform: 'translateY(0)' }, 
                            '50%': { transform: 'translateY(-10px)' } 
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
            font-family: 'Montserrat', 'MiSans Myanmar', 'Noto Sans Myanmar', 'Pyidaungsu', sans-serif; 
            line-height: 1.7; 
        }
        
        p, span, div, a, th, td { font-family: inherit; }
        
        h1, h2, h3, h4, .font-serif {
            font-family: 'Playfair Display', 'MiSans Myanmar', serif;
            letter-spacing: -0.01em;
        }

        .luxury-wedding-font, .luxury-wedding-font span {
            font-family: 'Playfair Display', serif !important;
            font-style: italic !important;
            font-weight: 600 !important;
            letter-spacing: 0.02em !important;
            padding: 0 2px;
        }
        
        .font-numbers { font-family: 'Montserrat', sans-serif !important; letter-spacing: -0.02em; }
        
        body { background-color: #f8f7f5; position: relative; min-height: 100vh; overflow-x: hidden; }
        .dark body { background-color: #09090b; color: #f3f4f6; }
        
        .site-bg-pattern { position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.04; mix-blend-mode: multiply; }
        .dark .site-bg-pattern { opacity: 0.1; mix-blend-mode: overlay; }

        .glass-luxury { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.9); box-shadow: 0 20px 40px -15px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(255,255,255,0.5); }
        .dark .glass-luxury { background: rgba(24, 24, 27, 0.65); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.02); }

        @keyframes luxuryFloat { 0% { transform: translateY(110vh) translateX(0px) scale(0.5); opacity: 0; } 10% { opacity: 0.9; } 50% { transform: translateY(50vh) translateX(20px) scale(1.1); } 90% { opacity: 0.9; } 100% { transform: translateY(-10vh) translateX(-20px) scale(1.5); opacity: 0; } }
        .luxury-particle { position: absolute; border-radius: 50%; background-color: var(--w-500); box-shadow: 0 0 15px 4px var(--w-500), inset 0 0 4px 1px rgba(255,255,255,0.5); animation: luxuryFloat linear infinite; opacity: 0; pointer-events: none; }
        .dark .luxury-particle { background-color: var(--w-100); box-shadow: 0 0 15px 4px var(--w-500); }

        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 10px; }
        .dark ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); }
        
        @media print { .no-print { display: none !important; } .glass-luxury { border: none; box-shadow: none; background: transparent !important; } body { background: white !important; color: black !important; } .page-break-inside-avoid { page-break-inside: avoid; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;} }
    </style>
</head>
<body class="text-gray-800 transition-colors duration-500">
    <div id="root">
        <div style="display:flex; justify-content:center; align-items:center; height:100vh; flex-direction:column; background-color:#f8f7f5;" class="dark:bg-zinc-950 transition-colors">
            <div style="width:50px; height:50px; border:4px solid rgba(194,163,125,0.3); border-top-color:#c2a37d; border-radius:50%; animation:spin 1s linear infinite;"></div>
            <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
            <p style="margin-top:24px; font-family:'Playfair Display', serif; color:#c2a37d; font-size:18px; letter-spacing:1px; font-style:italic;">Preparing Ever After...</p>
        </div>
    </div>

    <script type="text/babel">
        const { useState, useEffect, useMemo, useRef, useCallback } = React;

        const THEMES = {
            gold: { 50: '#faf7f2', 100: '#f0e8d9', 500: '#c2a37d', 800: '#5c4e3c', 900: '#3d3428' },
            rose: { 50: '#fff1f2', 100: '#ffe4e6', 500: '#fb7185', 800: '#be123c', 900: '#881337' },
            emerald: { 50: '#ecfdf5', 100: '#d1fae5', 500: '#34d399', 800: '#047857', 900: '#064e3b' },
            blue: { 50: '#eff6ff', 100: '#dbeafe', 500: '#60a5fa', 800: '#1d4ed8', 900: '#1e3a8a' }
        };

        const PATTERNS = { 
            floral: 'https://www.transparenttextures.com/patterns/floral-motif.png', 
            dots: 'https://www.transparenttextures.com/patterns/stardust.png', 
            geo: 'https://www.transparenttextures.com/patterns/cubes.png', 
            none: '' 
        };

        const convertToEnglishDigits = (str) => {
            if(!str) return '';
            const myNumbers = { '\u1040':'0', '\u1041':'1', '\u1042':'2', '\u1043':'3', '\u1044':'4', '\u1045':'5', '\u1046':'6', '\u1047':'7', '\u1048':'8', '\u1049':'9' };
            return str.toString().replace(/[\u1040-\u1049]/g, m => myNumbers[m]);
        };

        // [UX PERFECTED] Search Normalize now completely removes spaces for exact matching
        const normalizeMyanmarText = (str) => {
            if (!str) return '';
            return str.trim().replace(/\\u1040/g, 'ဝ').replace(/\\s+/g, '').toLowerCase();
        };

        const apiCall = async (url, options = {}) => {
            if (!navigator.onLine) throw new Error("Offline");
            const res = await fetch(url, { ...options, headers: { 'Content-Type': 'application/json', ...options.headers } });
            if (res.status === 401) window.location.hash = '#login';
            return res.json();
        };

        function AmbientBackground({ effect_on }) {
            return (
                <React.Fragment>
                    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-wedding-500/10 dark:bg-wedding-500/5 rounded-full blur-[100px] animate-pulse-glow"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
                    </div>
                    {effect_on === 1 && (
                        <div className="fixed inset-0 overflow-hidden pointer-events-none z-40">
                            {[...Array(25)].map((_, i) => (
                                <div key={i} className="luxury-particle" style={{ left: Math.random() * 100 + '%', width: Math.random() * 5 + 3 + 'px', height: Math.random() * 5 + 3 + 'px', animationDelay: Math.random() * 10 + 's', animationDuration: Math.random() * 10 + 15 + 's' }}></div>
                            ))}
                        </div>
                    )}
                </React.Fragment>
            );
        }

        function App() {
            const [view, setView] = useState('dashboard');
            const [isAuth, setIsAuth] = useState(false);
            const [darkMode, setDarkMode] = useState(false);
            const [toast, setToast] = useState(null);
            const [appSettings, setAppSettings] = useState({ theme_color: 'gold', bg_pattern: 'floral', effect_on: 1 });
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
                        if (res.auth) setIsAuth(true); else window.location.hash = '#login';
                    } catch (error) { window.location.hash = '#login'; }
                    
                    setIsInitialLoad(false);
                };
                initAuthAndSettings();

                const hash = window.location.hash.replace('#', '') || 'dashboard';
                setView(hash);
                window.addEventListener('hashchange', () => setView(window.location.hash.replace('#', '') || 'dashboard'));

                if (localStorage.getItem('weddingDarkMode') === 'true') { setDarkMode(true); document.documentElement.classList.add('dark'); }
            }, []);

            const showToast = (msg, type = 'success') => { setToast({ msg, type }); setTimeout(() => setToast(null), 3500); };
            const toggleDark = () => {
                const newDark = !darkMode; setDarkMode(newDark); localStorage.setItem('weddingDarkMode', newDark);
                if (newDark) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark');
            };

            const themeColors = THEMES[appSettings.theme_color || 'gold'];
            const cssVars = \`:root { --w-50: \${themeColors[50]}; --w-100: \${themeColors[100]}; --w-500: \${themeColors[500]}; --w-800: \${themeColors[800]}; --w-900: \${themeColors[900]}; }\`;
            
            if (isInitialLoad) return null; 
            if (!isAuth && view === 'login') return <React.Fragment><style>{cssVars}</style><Login onLogin={() => { setIsAuth(true); window.location.hash = '#dashboard'; window.location.reload(); }} appSettings={appSettings} /></React.Fragment>;
            if (!isAuth) return <div className="flex h-screen items-center justify-center bg-[#f8f7f5] dark:bg-zinc-950"><div className="w-12 h-12 border-4 border-wedding-100 border-t-wedding-500 rounded-full animate-spin"></div></div>;

            return (
                <div className="min-h-screen flex flex-col relative">
                    <style>{cssVars}</style>
                    {PATTERNS[appSettings.bg_pattern] && <div className="site-bg-pattern no-print" style={{ backgroundImage: \`url('\${PATTERNS[appSettings.bg_pattern]}')\` }}></div>}
                    <AmbientBackground effect_on={appSettings.effect_on} />
                    
                    <nav className="glass-luxury sticky top-0 z-50 px-4 sm:px-8 py-3 sm:py-4 mb-8 flex justify-between items-center no-print mx-0 sm:mx-6 sm:mt-6 rounded-b-3xl sm:rounded-[2rem]">
                        <div className="flex items-center gap-3">
                            {appSettings.logo_url ? (
                                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full p-[2px] bg-gradient-to-tr from-wedding-500 to-wedding-100 shadow-md flex-shrink-0">
                                    <img src={appSettings.logo_url} className="w-full h-full rounded-full object-cover border-[1.5px] border-white dark:border-gray-900" />
                                </div>
                            ) : (
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-wedding-500 to-wedding-100 rounded-full flex items-center justify-center shadow-md border-2 border-white dark:border-gray-800 flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="12" r="6"></circle><circle cx="15.5" cy="12" r="6"></circle></svg>
                                </div>
                            )}
                        </div>

                        <div className="hidden md:flex gap-2 sm:gap-6 items-center p-1.5 bg-gray-100/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                            {['dashboard', 'guests', 'settings'].map(tab => (
                                <a key={tab} href={\`#\${tab}\`} className={\`px-4 py-2 rounded-xl text-sm sm:text-base font-bold capitalize transition-all duration-300 \${view === tab ? 'bg-white dark:bg-gray-700 text-wedding-500 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-wedding-500'}\`}>
                                    {tab}
                                </a>
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                            <div className="flex md:hidden gap-1 mr-2">
                                <a href="#dashboard" className={\`p-2 rounded-lg \${view === 'dashboard' ? 'text-wedding-500 bg-wedding-50 dark:bg-wedding-900/20' : 'text-gray-400'}\`}><i className="ph-fill ph-squares-four text-xl"></i></a>
                                <a href="#guests" className={\`p-2 rounded-lg \${view === 'guests' ? 'text-wedding-500 bg-wedding-50 dark:bg-wedding-900/20' : 'text-gray-400'}\`}><i className="ph-fill ph-users text-xl"></i></a>
                                <a href="#settings" className={\`p-2 rounded-lg \${view === 'settings' ? 'text-wedding-500 bg-wedding-50 dark:bg-wedding-900/20' : 'text-gray-400'}\`}><i className="ph-fill ph-gear text-xl"></i></a>
                            </div>
                            <button onClick={toggleDark} className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-wedding-500 shadow-sm border border-gray-200/50 dark:border-gray-700/50 transition-all"><i className={\`ph-fill \${darkMode ? 'ph-sun' : 'ph-moon'} text-lg sm:text-xl\`}></i></button>
                            <button onClick={async () => { await fetch('/api/logout', { method: 'POST' }); setIsAuth(false); window.location.hash = '#login'; }} className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-red-50 dark:bg-red-900/20 text-red-500 hover:bg-red-500 hover:text-white shadow-sm border border-red-100 dark:border-red-900/30 transition-all"><i className="ph-bold ph-power text-lg sm:text-xl"></i></button>
                        </div>
                    </nav>

                    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pb-16">
                        {view === 'dashboard' && <Dashboard />}
                        {view === 'guests' && <GuestManagement showToast={showToast} />}
                        {view === 'settings' && <Settings showToast={showToast} appSettings={appSettings} setAppSettings={setAppSettings} />}
                    </main>

                    <footer className="mt-auto py-8 text-center no-print relative z-10 border-t border-gray-200/50 dark:border-gray-800/50">
                        <p className="font-serif italic text-sm sm:text-base tracking-wider text-gray-400 flex items-center justify-center flex-wrap gap-2">
                            Crafted with elegance by <span className="luxury-wedding-font text-wedding-500 text-lg sm:text-xl drop-shadow-sm ml-1" style={{transform: 'translateY(-1px)'}}>Thiha Aung (Yone Man)</span>
                        </p>
                    </footer>

                    {toast && (
                        <div className={"fixed bottom-8 right-8 px-6 py-4 rounded-2xl shadow-luxury text-white animate-float z-50 font-bold flex items-center gap-3 border border-white/20 backdrop-blur-md " + (toast.type === 'error' ? 'bg-red-500/90' : toast.type === 'warn' ? 'bg-amber-500/90' : 'bg-wedding-800/90')}>
                            <i className={"ph-fill text-2xl " + (toast.type === 'error' ? 'ph-warning' : toast.type === 'warn' ? 'ph-warning-circle' : 'ph-check-circle')}></i>
                            {toast.msg}
                        </div>
                    )}
                </div>
            );
        }

        function Login({ onLogin, appSettings }) {
            const [username, setUsername] = useState(''); const [password, setPassword] = useState(''); const [errorMsg, setErrorMsg] = useState(''); const [isLoading, setIsLoading] = useState(false);
            const handleLogin = async (e) => {
                e.preventDefault(); setErrorMsg(''); setIsLoading(true);
                try {
                    const res = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }), headers: { 'Content-Type': 'application/json' }});
                    setIsLoading(false); if (res.ok) onLogin(); else setErrorMsg('Username သို့မဟုတ် Password မှားယွင်းနေပါသည်');
                } catch(e) { setIsLoading(false); setErrorMsg('Network ချိတ်ဆက်မှု အဆင်မပြေပါ'); }
            };

            return (
                <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&bg=80')] bg-cover bg-center relative">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
                    <div className="glass-luxury p-10 sm:p-14 rounded-[2.5rem] w-full max-w-md relative z-10 text-center shadow-2xl border border-white/20">
                        {appSettings?.logo_url ? (
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-tr from-wedding-500 to-wedding-100 shadow-luxury">
                                <img src={appSettings.logo_url} className="w-full h-full rounded-full object-cover border-2 border-white dark:border-gray-900" />
                            </div>
                        ) : (
                            <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-wedding-500 to-wedding-100 rounded-full flex items-center justify-center shadow-luxury border-4 border-white">
                                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="12" r="6"></circle><circle cx="15.5" cy="12" r="6"></circle></svg>
                            </div>
                        )}
                        <h1 className="text-4xl font-serif text-gray-900 dark:text-white mb-2 font-bold tracking-tight">Welcome Back</h1>
                        <p className="font-serif italic text-gray-500 dark:text-gray-300 mb-10 text-lg tracking-wide">Sign in to manage your special day</p>
                        <form onSubmit={handleLogin} className="space-y-5">
                            <div className="relative group">
                                <i className="ph-fill ph-user absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-wedding-500 text-xl transition-colors"></i>
                                <input type="text" placeholder="Username" className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-wedding-500 focus:bg-white dark:focus:bg-gray-800 font-bold text-gray-900 dark:text-white transition-all" value={username} onChange={e => setUsername(e.target.value)} required />
                            </div>
                            <div className="relative group">
                                <i className="ph-fill ph-lock-key absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-wedding-500 text-xl transition-colors"></i>
                                <input type="password" placeholder="Password" className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-wedding-500 focus:bg-white dark:focus:bg-gray-800 font-bold text-gray-900 dark:text-white transition-all" value={password} onChange={e => setPassword(e.target.value)} required />
                            </div>
                            {errorMsg && <div className="bg-red-500/10 text-red-600 dark:text-red-400 text-sm py-3 px-4 rounded-2xl border border-red-500/20 flex items-center justify-center gap-2 font-bold"><i className="ph-fill ph-warning-circle text-xl"></i>{errorMsg}</div>}
                            <button disabled={isLoading} className="w-full bg-wedding-800 text-white font-bold py-4 rounded-2xl hover:bg-wedding-900 transition-all duration-300 disabled:opacity-70 mt-2">
                                {isLoading ? <span className="flex items-center justify-center gap-2"><i className="ph-bold ph-spinner animate-spin text-xl"></i> Authenticating...</span> : 'Secure Sign In'}
                            </button>
                        </form>
                    </div>
                </div>
            );
        }

        function Dashboard() {
            const [stats, setStats] = useState({ total: 0, pending: 0, written: 0, invited: 0, attended: 0, total_gifts: 0, gift_items_count: 0, groomSide: 0, brideSide: 0, bothSide: 0 });
            const [settings, setSettings] = useState({});

            const loadData = useCallback(async () => {
                try {
                    const data = await apiCall('/api/guests');
                    if(!data.guests) return;
                    const guests = data.guests;
                    const totalGifts = guests.reduce((sum, g) => {
                        if (!g.gift_amount) return sum;
                        const amtStr = convertToEnglishDigits(g.gift_amount).replace(/,/g, '');
                        const amt = parseFloat(amtStr); return sum + (isNaN(amt) ? 0 : amt);
                    }, 0);
                    const giftItemsCount = guests.filter(g => g.gift_item && g.gift_item.trim() !== '').length;

                    setStats({
                        total: guests.length, pending: guests.filter(g => g.status === 'Pending').length,
                        written: guests.filter(g => g.status === 'Written').length, invited: guests.filter(g => g.status === 'Invited').length,
                        attended: guests.filter(g => g.attended === 1).length, total_gifts: totalGifts, gift_items_count: giftItemsCount,
                        groomSide: guests.filter(g => g.side === 'Groom').length, brideSide: guests.filter(g => g.side === 'Bride').length, bothSide: guests.filter(g => g.side === 'Both').length 
                    });
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
                                        <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">မင်္ဂလာအချိန်</span>
                                        <span className="tracking-wide text-lg sm:text-xl text-gray-900 dark:text-white font-black font-numbers">{settings.wedding_date || 'Date TBD'}</span>
                                    </div>
                                </div>
                                
                                <div className="w-full sm:w-px h-px sm:h-20 bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent opacity-70 shrink-0"></div>
                                
                                <div className="flex items-center gap-5 text-gray-800 dark:text-gray-100 font-bold w-full sm:w-1/2 justify-center sm:justify-start">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center text-rose-500 shadow-sm border border-rose-100 dark:border-rose-800/50 shrink-0">
                                        <i className="ph-fill ph-map-pin text-2xl sm:text-3xl drop-shadow-sm"></i>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">မင်္ဂလာနေရာ</span>
                                        <span className="tracking-wide leading-relaxed text-lg sm:text-xl text-gray-900 dark:text-white font-black">{settings.venue || 'Venue TBD'}</span>
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
                                <i className="ph-fill ph-wallet text-4xl sm:text-5xl drop-shadow-sm"></i>
                            </div>
                            <div className="relative z-10 w-full overflow-hidden">
                                <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Gift Amount</p>
                                <div className="flex items-baseline gap-2 overflow-hidden">
                                    <h2 className="text-2xl sm:text-3xl font-bold font-numbers text-gray-900 dark:text-white tracking-tight truncate">
                                        {formatMoney(stats.total_gifts)}
                                    </h2>
                                    <span className="text-sm font-bold text-gray-400">Ks</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="glass-luxury rounded-[2rem] p-8 flex items-center gap-6 group overflow-hidden">
                            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-[1.25rem] bg-purple-50 dark:bg-purple-900/20 text-purple-500 border border-purple-100 dark:border-purple-800/30 flex items-center justify-center shrink-0 shadow-sm transform group-hover:scale-110 transition-transform duration-500">
                                <i className="ph-fill ph-gift text-4xl sm:text-5xl drop-shadow-sm"></i>
                            </div>
                            <div className="relative z-10 w-full overflow-hidden">
                                <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Gift Items Count</p>
                                <div className="flex items-baseline gap-2 overflow-hidden">
                                    <h2 className="text-2xl sm:text-3xl font-bold font-numbers text-gray-900 dark:text-white tracking-tight truncate">
                                        {stats.gift_items_count}
                                    </h2>
                                    <span className="text-sm font-bold text-gray-400">မျိုး</span>
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
                                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Invited</span>
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
                                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Attended</span>
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
                                    <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1 z-10 text-center">သတို့သားဖက်</p>
                                </div>
                                
                                <div className="flex flex-col items-center p-4 rounded-2xl bg-pink-50/50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-900/30 relative overflow-hidden group">
                                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center mb-2 text-pink-500 shadow-sm z-10 group-hover:scale-110 transition-transform">
                                        <i className="ph-fill ph-user-circle text-xl"></i>
                                    </div>
                                    <p className="text-2xl font-bold font-numbers text-pink-600 dark:text-pink-400 z-10">{stats.brideSide}</p>
                                    <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1 z-10 text-center">သတို့သမီးဖက်</p>
                                </div>
                                
                                <div className="flex flex-col items-center p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 relative overflow-hidden group">
                                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center mb-2 text-emerald-500 shadow-sm z-10 group-hover:scale-110 transition-transform">
                                        <i className="ph-fill ph-users-three text-xl"></i>
                                    </div>
                                    <p className="text-2xl font-bold font-numbers text-emerald-600 dark:text-emerald-400 z-10">{stats.bothSide}</p>
                                    <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1 z-10 text-center">နှစ်ဖက်မိတ်ဆွေ</p>
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
                    <p className="text-[9px] sm:text-[10px] font-bold opacity-70 uppercase tracking-widest mb-1.5">{title}</p>
                    <p className="text-2xl sm:text-3xl font-bold font-numbers tracking-tight">{value}</p>
                </div>
            );
        }

        function GuestManagement({ showToast }) {
            const [guests, setGuests] = useState([]); const [loading, setLoading] = useState(true); const [search, setSearch] = useState(''); const [filter, setFilter] = useState('All Status'); const [sideFilter, setSideFilter] = useState('All'); const [locationFilter, setLocationFilter] = useState('All Locations'); 
            const [formData, setFormData] = useState({ id: null, name: '', address: '', note: '', status: 'Pending', side: 'Groom', attended: 0, gift_amount: '', gift_item: '' }); const [isModalOpen, setModalOpen] = useState(false); const [settings, setSettings] = useState({});
            const [isEditMode, setIsEditMode] = useState(false); const [selectedIds, setSelectedIds] = useState([]); const [showBulkDeleteModal, setShowBulkDeleteModal] = useState(false); const [deletePassword, setDeletePassword] = useState(''); const [isDeleting, setIsDeleting] = useState(false); const [isSaving, setIsSaving] = useState(false); const [pageCount, setPageCount] = useState(1); 

            const fetchGuests = useCallback(async (showLoad = false) => {
                if(showLoad) setLoading(true);
                try { const data = await apiCall('/api/guests'); if(data && data.guests) setGuests(data.guests); } 
                catch (e) { if(showLoad) showToast("စာရင်းများ ပြန်လည်ရယူရန် အင်တာနက်ချိတ်ဆက်မှု လိုအပ်ပါသည်", "error"); } 
                finally { if(showLoad) setLoading(false); }
            }, []);

            useEffect(() => { fetchGuests(true); apiCall('/api/settings').then(data => { if(data && data.settings) setSettings(data.settings); }).catch(e=>console.log(e)); const interval = setInterval(() => { fetchGuests(false); }, 60000); return () => clearInterval(interval); }, [fetchGuests]);

            const formatDateTime = (isoString) => {
                if (!isoString) return '-'; const date = new Date(isoString); return date.toLocaleString('en-US', { timeZone: 'Asia/Yangon', hour12: true, year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            };

            const exportExcel = () => {
                const ws = XLSX.utils.json_to_sheet(guests.map(g => ({ 'Side (ဖက်)': g.side === 'Groom' ? 'သတို့သားဖက်' : g.side === 'Bride' ? 'သတို့သမီးဖက်' : 'နှစ်ဖက်မိတ်ဆွေ', 'Guest Name (နာမည်)': g.name, 'Group City (လိပ်စာ)': g.address, 'Status': g.status, 'Attended (ရောက်ရှိ)': g.attended ? 'Yes' : 'No', 'Gift Amount (လက်ဖွဲ့ငွေ)': g.gift_amount ? convertToEnglishDigits(g.gift_amount) : '-', 'Gift Item (လက်ဖွဲ့ပစ္စည်း)': g.gift_item || '-', 'Note (မှတ်ချက်)': g.note || '-', 'Last Updated (နောက်ဆုံးပြင်ဆင်ချိန်)': formatDateTime(g.updated_at) })));
                const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, "Guests"); XLSX.writeFile(wb, "Wedding_Guest_List_With_Gifts.xlsx"); showToast("Exported to Excel");
            };

            const handleImportExcel = async (e) => {
                const file = e.target.files[0]; if (!file) return; const reader = new FileReader();
                reader.onload = async (evt) => {
                    setLoading(true); const bstr = evt.target.result; const wb = XLSX.read(bstr, {type:'binary'}); const wsname = wb.SheetNames[0]; const ws = wb.Sheets[wsname]; const data = XLSX.utils.sheet_to_json(ws);
                    const newGuests = [];
                    const existingSet = new Set(guests.map(g => g.name.trim().toLowerCase() + '|' + g.address.trim().toLowerCase()));

                    for (let row of data) {
                        const guestName = row['Name'] || row['Guest Name'] || row['Guest'] || ''; if (!guestName) continue;
                        const sideStr = (row['Side'] || row['Category'] || '').toString(); let parsedSide = 'Groom'; if (sideStr.includes('သမီး')) parsedSide = 'Bride'; else if (sideStr.includes('နှစ်')) parsedSide = 'Both';
                        const guest = { name: guestName.toString().trim(), address: (row['Address'] || row['Group City'] || row['City'] || 'General').toString().trim(), side: parsedSide, note: (row['Note'] || row['Remark'] || '').toString().trim(), status: row['Status'] || 'Pending', attended: 0, gift_amount: '', gift_item: '' };
                        
                        const key = guest.name.toLowerCase() + '|' + guest.address.toLowerCase();
                        if (!existingSet.has(key)) { newGuests.push(guest); existingSet.add(key); }
                    }
                    if (newGuests.length > 0) {
                        showToast("ဧည့်သည် (" + newGuests.length + ") ဦး စတင်ထည့်သွင်းနေပါသည်...", 'warn');
                        try { 
                            const chunkSize = 500;
                            for (let i = 0; i < newGuests.length; i += chunkSize) {
                                const chunk = newGuests.slice(i, i + chunkSize);
                                await apiCall('/api/guests/bulk', { method: 'POST', body: JSON.stringify({ guests: chunk }) });
                            }
                            showToast("Excel မှ ဧည့်သည် အားလုံး အောင်မြင်စွာ ထည့်သွင်းပြီးပါပြီ။", 'success'); 
                        } 
                        catch (err) { showToast("ကွန်ရက်ချိတ်ဆက်မှု အဆင်မပြေပါ၊ ပြန်စမ်းကြည့်ပါ", 'error'); }
                    } else { showToast("အသစ်ထည့်သွင်းရန် ဧည့်သည် မရှိပါ (သို့) ထပ်နေပါသည်", 'warn'); }
                    fetchGuests(true);
                }; reader.readAsBinaryString(file); e.target.value = null; 
            };

            const saveGuest = async (e) => {
                e.preventDefault();
                if (!formData.id && guests.some(g => g.name.trim().toLowerCase() === formData.name.trim().toLowerCase() && g.address.trim().toLowerCase() === formData.address.trim().toLowerCase())) { showToast('ဤဧည့်သည်အမည်မှာ စာရင်းထဲတွင် ရှိပြီးသားဖြစ်နေပါသည်!', 'error'); return; }
                setIsSaving(true); 
                try { const method = formData.id ? 'PUT' : 'POST'; const url = formData.id ? "/api/guests/" + formData.id : '/api/guests'; await apiCall(url, { method, body: JSON.stringify(formData) }); showToast("Guest saved successfully"); setModalOpen(false); fetchGuests(false); } 
                catch (error) { showToast("ချိတ်ဆက်မှု အဆင်မပြေပါ၊ အင်တာနက်ကို စစ်ဆေးပါ", "error"); } finally { setIsSaving(false); }
            };

            const deleteGuest = async (id) => { if(!confirm("ဖျက်မှာ သေချာပြီလား?")) return; try { await apiCall("/api/guests/" + id, { method: 'DELETE' }); showToast('Guest deleted'); fetchGuests(false); } catch (error) { showToast("ဖျက်၍မရပါ၊ အင်တာနက်ကို စစ်ဆေးပါ", "error"); } };

            const confirmBulkDelete = async (e) => {
                e.preventDefault(); setIsDeleting(true);
                try {
                    const res = await fetch('/api/guests/bulk-delete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ids: selectedIds, password: deletePassword }) });
                    if (res.ok) { showToast("ဧည့်သည် (" + selectedIds.length + ") ဦးကို စာရင်းမှ ဖျက်ပစ်လိုက်ပါပြီ"); setShowBulkDeleteModal(false); setIsEditMode(false); setSelectedIds([]); setDeletePassword(''); fetchGuests(false); } 
                    else { showToast('Admin Password မှားယွင်းနေပါသည်', 'error'); }
                } catch (error) { showToast("ကွန်ရက်ချိတ်ဆက်မှု အဆင်မပြေပါ", "error"); } finally { setIsDeleting(false); }
            };

            const locationsList = useMemo(() => { const locs = new Set(guests.map(g => g.address.trim())); return Array.from(locs).sort(); }, [guests]);
            const filteredGuests = guests.filter(g => {
                const normSearch = normalizeMyanmarText(search); const normName = normalizeMyanmarText(g.name); const normAddress = normalizeMyanmarText(g.address); const normNote = normalizeMyanmarText(g.note); const normGift = normalizeMyanmarText(g.gift_item);
                return (filter === 'All Status' || g.status === filter) && (sideFilter === 'All' || g.side === sideFilter) && (locationFilter === 'All Locations' || g.address.trim() === locationFilter) && (normName.includes(normSearch) || normAddress.includes(normSearch) || normNote.includes(normSearch) || (normGift && normGift.includes(normSearch)));
            });
            const paginatedGuests = filteredGuests.slice(0, pageCount * 50);
            const grouped = useMemo(() => { const groups = {}; paginatedGuests.forEach(g => { const k = g.address.trim() || 'No Address'; if (!groups[k]) groups[k] = []; groups[k].push(g); }); return groups; }, [paginatedGuests]);

            return (
                <div className="space-y-6 relative z-10 w-full max-w-6xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 no-print mb-8">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">Guest Roster</h2>
                        
                        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                            <button onClick={() => { setFormData({id:null, name:'', address:'', note:'', status:'Pending', side:'Groom', attended: 0, gift_amount:'', gift_item:''}); setModalOpen(true); }} className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-xl flex-1 sm:flex-none flex justify-center items-center gap-2 hover:shadow-lg transition-all font-bold text-sm"><i className="ph-bold ph-plus text-lg"></i> Add</button>
                            <button onClick={() => { setIsEditMode(!isEditMode); setSelectedIds([]); }} className={"px-5 py-2.5 rounded-xl font-bold flex justify-center items-center gap-2 transition-all text-sm " + (isEditMode ? 'bg-red-500 text-white shadow-md' : 'glass-luxury text-gray-700 dark:text-gray-300')}>
                                <i className={"ph-bold " + (isEditMode ? 'ph-x-circle' : 'ph-check-square-offset') + " text-lg"}></i> {isEditMode ? 'Cancel' : 'Select'}
                            </button>
                            <label className="glass-luxury px-5 py-2.5 rounded-xl flex justify-center items-center gap-2 font-bold cursor-pointer transition-all hover:bg-white/50 text-sm">
                                <i className="ph-bold ph-upload-simple text-blue-600 text-lg"></i> Import
                                <input type="file" accept=".xlsx, .xls" className="hidden" onChange={handleImportExcel} />
                            </label>
                            <button onClick={exportExcel} className="glass-luxury px-5 py-2.5 rounded-xl flex justify-center items-center gap-2 font-bold transition-all hover:bg-white/50 text-sm"><i className="ph-bold ph-download-simple text-emerald-600 text-lg"></i> Export</button>
                            <button onClick={() => window.print()} className="glass-luxury px-5 py-2.5 rounded-xl flex justify-center items-center gap-2 font-bold transition-all hover:bg-white/50 text-sm">
                                <i className="ph-bold ph-printer text-purple-600 text-lg"></i> Print
                            </button>
                            <button onClick={() => fetchGuests(true)} title="Refresh Data" className="glass-luxury px-4 py-2.5 rounded-xl font-bold flex justify-center items-center hover:bg-white/50 transition-all text-gray-700 dark:text-gray-300">
                                <i className={"ph-bold ph-arrows-clockwise text-xl " + (loading ? "animate-spin text-wedding-500" : "")}></i>
                            </button>
                        </div>
                    </div>

                    <div className="glass-luxury p-6 rounded-[2rem] flex flex-col gap-4 no-print border border-gray-200/60 dark:border-gray-800/60 shadow-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="relative w-full">
                                <i className="ph-bold ph-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                                <input type="text" placeholder="Search guests..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-wedding-500 font-bold text-gray-900 dark:text-white" value={search} onChange={e=>{setSearch(e.target.value); setPageCount(1);}} />
                            </div>
                            <select className="px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300 w-full focus:outline-none focus:border-wedding-500" value={locationFilter} onChange={e=>{setLocationFilter(e.target.value); setPageCount(1);}}><option>All Locations</option>{locationsList.map(loc => <option key={loc} value={loc}>{loc}</option>)}</select>
                            <select className="px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300 w-full focus:outline-none focus:border-wedding-500" value={filter} onChange={e=>{setFilter(e.target.value); setPageCount(1);}}><option>All Status</option><option>Pending</option><option>Written</option><option>Invited</option></select>
                        </div>
                        <div className="flex bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-xl w-full flex-wrap sm:flex-nowrap gap-1 border border-gray-200/50 dark:border-gray-700/50">
                            <button onClick={() => {setSideFilter('All'); setPageCount(1);}} className={"flex-1 min-w-[70px] py-2.5 text-[11px] sm:text-xs rounded-lg font-bold transition-all " + (sideFilter === 'All' ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700')}>အားလုံး</button>
                            <button onClick={() => {setSideFilter('Groom'); setPageCount(1);}} className={"flex-1 min-w-[70px] py-2.5 text-[11px] sm:text-xs rounded-lg font-bold transition-all " + (sideFilter === 'Groom' ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 shadow-sm border border-indigo-100 dark:border-indigo-800' : 'text-gray-500 hover:text-gray-700')}>သတို့သားဖက်</button>
                            <button onClick={() => {setSideFilter('Bride'); setPageCount(1);}} className={"flex-1 min-w-[70px] py-2.5 text-[11px] sm:text-xs rounded-lg font-bold transition-all " + (sideFilter === 'Bride' ? 'bg-pink-50 dark:bg-pink-900/40 text-pink-700 dark:text-pink-400 shadow-sm border border-pink-100 dark:border-pink-800' : 'text-gray-500 hover:text-gray-700')}>သတို့သမီးဖက်</button>
                            <button onClick={() => {setSideFilter('Both'); setPageCount(1);}} className={"flex-1 min-w-[70px] py-2.5 text-[11px] sm:text-xs rounded-lg font-bold transition-all " + (sideFilter === 'Both' ? 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 shadow-sm border border-emerald-100 dark:border-emerald-800' : 'text-gray-500 hover:text-gray-700')}>နှစ်ဖက်မိတ်ဆွေ</button>
                        </div>
                    </div>

                    {isEditMode && (
                        <div className="glass-luxury !bg-red-50/80 dark:!bg-red-900/20 flex justify-between items-center p-4 rounded-xl border border-red-200 dark:border-red-800/50 no-print animate-fade-in">
                            <label className="flex items-center gap-3 cursor-pointer font-bold text-sm text-red-900 dark:text-red-200 select-none">
                                <input type="checkbox" className="w-5 h-5 accent-red-600 rounded cursor-pointer" checked={filteredGuests.length > 0 && selectedIds.length === filteredGuests.length} onChange={(e) => { if(e.target.checked) setSelectedIds(filteredGuests.map(g => g.id)); else setSelectedIds([]); }} />
                                အားလုံးရွေးရန်
                            </label>
                            {selectedIds.length > 0 && (
                                <button onClick={() => setShowBulkDeleteModal(true)} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all shadow-md">
                                    <i className="ph-bold ph-trash-simple text-base"></i> ဖျက်မည် ({selectedIds.length})
                                </button>
                            )}
                        </div>
                    )}

                    {loading && filteredGuests.length === 0 && search === '' ? (
                        <div className="space-y-4">{[1,2,3].map(i => <div key={i} className="h-20 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl animate-pulse"></div>)}</div>
                    ) : Object.keys(grouped).length === 0 ? (
                        <div className="text-center py-20 glass-luxury rounded-[2rem]">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                                <i className="ph-fill ph-users text-3xl text-gray-400"></i>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 font-bold">
                                {search !== '' ? 'ဧည့်သည်စာရင်း မတွေ့ပါ၊ နာမည် သို့မဟုတ် လိပ်စာကို ပြန်လည်စစ်ဆေးပေးပါ။' : 'No guests found.'}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {Object.entries(grouped).map(([address, groupGuests]) => (
                                <div key={address} className="glass-luxury rounded-2xl overflow-hidden page-break-inside-avoid">
                                    <div className="bg-gray-50/50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center backdrop-blur-md">
                                        <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2"><i className="ph-fill ph-map-pin text-wedding-500 text-xl no-print"></i> {address}</h3>
                                        <span className="bg-white dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700 text-xs px-3 py-1 rounded-full font-bold shadow-sm">{groupGuests.length} Guests</span>
                                    </div>
                                    <div className="divide-y divide-gray-100 dark:divide-gray-800/50">
                                        {groupGuests.map(g => (
                                            <div key={g.id} className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                                                <div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
                                                    {isEditMode && <input type="checkbox" className="w-5 h-5 mt-1 sm:mt-0 accent-red-600 rounded cursor-pointer no-print flex-shrink-0" checked={selectedIds.includes(g.id)} onChange={() => { if (selectedIds.includes(g.id)) setSelectedIds(selectedIds.filter(id => id !== g.id)); else setSelectedIds([...selectedIds, g.id]); }} />}
                                                    <div>
                                                        <p className={"font-serif font-bold text-lg flex flex-wrap items-center gap-2 " + (g.attended ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-900 dark:text-white')}>
                                                            {g.attended === 1 && <i className="ph-fill ph-check-circle text-emerald-500 text-xl drop-shadow-sm" title="ရောက်ရှိပြီး"></i>}
                                                            {g.name}
                                                            <span className={"font-sans px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap border " + (g.side === 'Groom' ? 'bg-indigo-50/50 text-indigo-600 border-indigo-200' : g.side === 'Bride' ? 'bg-pink-50/50 text-pink-600 border-pink-200' : 'bg-emerald-50/50 text-emerald-600 border-emerald-200')}>
                                                                {g.side === 'Groom' ? 'သတို့သားဖက်' : g.side === 'Bride' ? 'သတို့သမီးဖက်' : 'နှစ်ဖက်မိတ်ဆွေ'}
                                                            </span>
                                                        </p>
                                                        {g.note && <p className="text-sm text-gray-500 mt-1 font-bold flex items-center gap-1.5"><i className="ph-bold ph-note-pencil text-gray-400 no-print text-base"></i>{g.note}</p>}
                                                        
                                                        {(g.gift_amount || g.gift_item) && (
                                                            <div className="mt-2 inline-flex items-center gap-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg shadow-sm">
                                                                <div className="w-5 h-5 rounded-full bg-wedding-100 dark:bg-wedding-900/40 flex items-center justify-center text-wedding-600"><i className="ph-fill ph-gift text-xs"></i></div>
                                                                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                                                    {g.gift_amount && <span><span className="font-black font-numbers text-sm">{g.gift_amount}</span> <span className="text-gray-400 font-sans">Ks</span></span>}
                                                                    {g.gift_amount && g.gift_item && <span className="w-1 h-1 rounded-full bg-gray-300"></span>}
                                                                    {g.gift_item && <span className="font-sans">{g.gift_item}</span>}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className={"flex items-center gap-3 justify-end w-full sm:w-auto mt-2 sm:mt-0 " + (isEditMode ? 'pl-9' : 'pl-0') + " sm:pl-0"}>
                                                    <span className={"px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-sm border " + (g.status==='Invited'?'bg-emerald-50 text-emerald-700 border-emerald-200':g.status==='Written'?'bg-purple-50 text-purple-700 border-purple-200':'bg-amber-50 text-amber-700 border-amber-200')}>
                                                        {g.status}
                                                    </span>
                                                    <div className="flex gap-2 no-print ml-auto">
                                                        <button onClick={() => { setFormData(g); setModalOpen(true); }} className="w-9 h-9 flex items-center justify-center bg-white dark:bg-gray-800 text-blue-600 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-blue-50 shadow-sm transition-all hover:-translate-y-0.5"><i className="ph-bold ph-pencil-simple text-lg"></i></button>
                                                        <button onClick={() => deleteGuest(g.id)} className="w-9 h-9 flex items-center justify-center bg-white dark:bg-gray-800 text-red-500 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-red-50 shadow-sm transition-all hover:-translate-y-0.5"><i className="ph-bold ph-trash text-lg"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {filteredGuests.length > pageCount * 50 && (
                                <div className="text-center pt-4 pb-8 no-print">
                                    <button onClick={() => setPageCount(p => p + 1)} className="glass-luxury px-8 py-3 rounded-full font-bold text-gray-800 dark:text-gray-200 hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto">
                                        <i className="ph-bold ph-caret-down text-wedding-500 text-lg"></i> နောက်ထပ် ဧည့်သည်များ ပြရန်
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4 no-print">
                            <div className="glass-luxury p-8 sm:p-10 w-full max-w-xl shadow-2xl relative animate-fade-in max-h-[90vh] overflow-y-auto !bg-white dark:!bg-gray-900 rounded-[2.5rem]">
                                <button onClick={() => setModalOpen(false)} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><i className="ph-bold ph-x text-lg"></i></button>
                                <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">{formData.id ? 'Edit Guest Details' : 'Add New Guest'}</h3>
                                <form onSubmit={saveGuest} className="space-y-5">
                                    <div className="grid grid-cols-3 gap-3">
                                        <label className={"cursor-pointer border-2 rounded-xl p-3 text-[11px] sm:text-sm text-center font-bold uppercase tracking-wider transition-all " + (formData.side === 'Groom' ? 'border-indigo-500 bg-indigo-50/50 text-indigo-700 shadow-sm' : 'border-gray-100 dark:border-gray-800 text-gray-400')}>
                                            <input type="radio" name="side" className="hidden" checked={formData.side === 'Groom'} onChange={() => setFormData({...formData, side: 'Groom'})} />
                                            သတို့သားဖက်
                                        </label>
                                        <label className={"cursor-pointer border-2 rounded-xl p-3 text-[11px] sm:text-sm text-center font-bold uppercase tracking-wider transition-all " + (formData.side === 'Bride' ? 'border-pink-500 bg-pink-50/50 text-pink-700 shadow-sm' : 'border-gray-100 dark:border-gray-800 text-gray-400')}>
                                            <input type="radio" name="side" className="hidden" checked={formData.side === 'Bride'} onChange={() => setFormData({...formData, side: 'Bride'})} />
                                            သတို့သမီးဖက်
                                        </label>
                                        <label className={"cursor-pointer border-2 rounded-xl p-3 text-[11px] sm:text-sm text-center font-bold uppercase tracking-wider transition-all " + (formData.side === 'Both' ? 'border-emerald-500 bg-emerald-50/50 text-emerald-700 shadow-sm' : 'border-gray-100 dark:border-gray-800 text-gray-400')}>
                                            <input type="radio" name="side" className="hidden" checked={formData.side === 'Both'} onChange={() => setFormData({...formData, side: 'Both'})} />
                                            နှစ်ဖက်မိတ်ဆွေ
                                        </label>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 text-gray-400">Guest Name</label>
                                        <input type="text" required className="w-full px-5 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-wedding-500 font-bold text-gray-900 dark:text-white text-base transition-all" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 text-gray-400">Address / City</label>
                                        <input type="text" required placeholder="e.g. Yangon" className="w-full px-5 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-wedding-500 font-bold text-gray-900 dark:text-white text-base transition-all" value={formData.address} onChange={e=>setFormData({...formData, address: e.target.value})} />
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                                        <div className="col-span-2">
                                            <h4 className="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2"><i className="ph-fill ph-gift text-wedding-500 text-xl"></i> လက်ဖွဲ့မှတ်တမ်း</h4>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 text-gray-400">Amount (ငွေ)</label>
                                            <input type="text" placeholder="50000" className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg font-black font-numbers text-sm text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500" value={formData.gift_amount} onChange={e=>setFormData({...formData, gift_amount: convertToEnglishDigits(e.target.value)})} />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 text-gray-400">Item (ပစ္စည်း)</label>
                                            <input type="text" placeholder="e.g. ရွှေဆွဲကြိုး" className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg font-bold text-sm text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500" value={formData.gift_item} onChange={e=>setFormData({...formData, gift_item: e.target.value})} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 text-gray-400">Status</label>
                                            <select className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-wedding-500 font-bold text-gray-900 dark:text-white shadow-sm" value={formData.status} onChange={e=>setFormData({...formData, status: e.target.value})}><option>Pending</option><option>Written</option><option>Invited</option></select>
                                        </div>
                                        <div className="flex items-end h-full">
                                            <label className={"w-full min-h-[50px] flex items-center justify-center gap-2 cursor-pointer px-3 rounded-xl border transition-all shadow-sm " + (formData.attended === 1 ? 'bg-emerald-50 border-emerald-300 dark:bg-emerald-900/20' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700')}>
                                                <input type="checkbox" className="w-5 h-5 accent-emerald-500 rounded cursor-pointer" checked={formData.attended === 1} onChange={(e) => setFormData({...formData, attended: e.target.checked ? 1 : 0})} />
                                                <span className={"font-bold text-sm " + (formData.attended === 1 ? 'text-emerald-700 dark:text-emerald-400' : 'text-gray-500')}>ရောက်ရှိ (Attended)</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 text-gray-400">Note (Optional)</label>
                                        <input type="text" className="w-full px-5 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-wedding-500 font-bold text-gray-900 dark:text-white text-base transition-all" value={formData.note} onChange={e=>setFormData({...formData, note: e.target.value})} />
                                    </div>
                                    
                                    <button disabled={isSaving} className={"w-full text-white py-3.5 rounded-xl mt-2 font-bold text-base tracking-wide transition-all flex items-center justify-center gap-2 " + (isSaving ? 'bg-gray-400' : 'bg-wedding-800 hover:bg-wedding-900 shadow-luxury hover:-translate-y-0.5')}>
                                        {isSaving ? <React.Fragment><i className="ph-bold ph-spinner animate-spin text-xl"></i> Saving...</React.Fragment> : 'Save Guest Details'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {showBulkDeleteModal && (
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 no-print">
                            <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 w-full max-w-sm text-center relative animate-fade-in shadow-luxury border border-white/20">
                                <button onClick={() => { setShowBulkDeleteModal(false); setDeletePassword(''); }} className="absolute top-5 right-5 text-gray-400 hover:text-gray-800"><i className="ph-bold ph-x text-xl"></i></button>
                                <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-red-100 dark:border-red-900/50 shadow-sm">
                                    <i className="ph-fill ph-warning-circle text-3xl"></i>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2">ဖျက်မှာ သေချာပြီလား?</h3>
                                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-6">ရွေးချယ်ထားသော ဧည့်သည် <span className="text-red-500 text-base">({selectedIds.length})</span> ဦးကို စာရင်းမှ အပြီးတိုင် ဖျက်ပစ်ပါမည်။</p>
                                <form onSubmit={confirmBulkDelete} className="text-left space-y-4">
                                    <input type="password" placeholder="Admin Password" required className="w-full px-5 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-bold focus:outline-none focus:border-red-500" value={deletePassword} onChange={e=>setDeletePassword(e.target.value)} />
                                    <div className="flex gap-3">
                                        <button type="button" onClick={() => { setShowBulkDeleteModal(false); setDeletePassword(''); }} className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-200">Cancel</button>
                                        <button disabled={isDeleting} className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md">
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

        function Settings({ showToast, appSettings, setAppSettings }) {
            const [settings, setSettings] = useState({ groom_name: '', bride_name: '', wedding_date: '', venue: '', footer_text: '', logo_url: '', theme_color: 'gold', effect_on: 1 });
            const [creds, setCreds] = useState({ username: '', password: '' });
            const [isUpdating, setIsUpdating] = useState(false);
            
            const [srcImage, setSrcImage] = useState(null);
            const [cropData, setCropData] = useState({ x: 50, y: 50, size: 80 }); 
            const canvasRef = useRef(null); const imageRef = useRef(null);

            useEffect(() => { apiCall('/api/settings').then(data => { if(data.settings) setSettings(prev => ({...prev, ...data.settings})); }); }, []);
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
                e.preventDefault(); await fetch('/api/settings', { method: 'PUT', body: JSON.stringify(settings), headers: { 'Content-Type': 'application/json' } });
                setAppSettings(settings); showToast('Settings saved successfully'); setTimeout(() => window.location.reload(), 800); 
            };
            const handleUpdateCreds = async (e) => {
                e.preventDefault(); setIsUpdating(true);
                const res = await fetch('/api/change-credentials', { method: 'POST', body: JSON.stringify({ newUsername: creds.username, newPassword: creds.password }), headers: { 'Content-Type': 'application/json' } });
                setIsUpdating(false); if (res.ok) { showToast('Login အချက်အလက်များ အောင်မြင်စွာ ပြောင်းလဲပြီးပါပြီ'); setCreds({ username: '', password: '' }); } else { showToast('ပြောင်းလဲခြင်း မအောင်မြင်ပါ၊ ပြန်လည်ကြိုးစားပါ', 'error'); }
            };
            const handleFileSelect = (e) => {
                const file = e.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => setSrcImage(reader.result); reader.readAsDataURL(file);
            };
            const handleApplyCrop = async () => {
                if (!canvasRef.current) return; const base64Data = canvasRef.current.toDataURL('image/png').split(',')[1];
                const res = await fetch('/api/uploads', { method: 'POST', body: JSON.stringify({ mime_type: 'image/png', base64_data: base64Data }), headers: { 'Content-Type': 'application/json' } });
                const data = await res.json(); setSettings({ ...settings, logo_url: data.url }); setSrcImage(null); showToast('Monogram အား စိတ်ကြိုက်အဝိုင်းပုံစံ ဖြတ်ညှပ်ပြီးပါပြီ', 'success');
            };

            return (
                <div className="max-w-3xl mx-auto space-y-8 relative z-10 pb-10">
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
                                    {Object.entries({ gold: 'Classic Gold', rose: 'Rose Pink', emerald: 'Emerald', blue: 'Navy Blue' }).map(([key, label]) => (
                                        <label key={key} className={"cursor-pointer border-2 rounded-xl p-3 text-center font-bold transition-all transform hover:-translate-y-0.5 " + (settings.theme_color === key ? 'border-wedding-500 bg-wedding-50/50 text-wedding-800 shadow-md' : 'border-gray-100 dark:border-gray-800 text-gray-500 bg-white/50 dark:bg-gray-900/50 hover:bg-white')}>
                                            <input type="radio" className="hidden" checked={settings.theme_color === key} onChange={() => setSettings({...settings, theme_color: key})} />
                                            <div className="w-8 h-8 rounded-full mx-auto mb-2 shadow-inner border border-black/5" style={{ backgroundColor: key==='gold'?'#c2a37d':key==='rose'?'#fb7185':key==='emerald'?'#34d399':'#60a5fa' }}></div>
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
                                        <input type="checkbox" className="hidden" checked={settings.effect_on === 1} onChange={(e) => setSettings({...settings, effect_on: e.target.checked ? 1 : 0})} />
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
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 shadow-sm transition-all" value={settings.groom_name} onChange={e=>setSettings({...settings, groom_name: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">Bride's Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 shadow-sm transition-all" value={settings.bride_name} onChange={e=>setSettings({...settings, bride_name: e.target.value})} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">Wedding Date</label>
                                    <input type="date" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 shadow-sm transition-all" value={settings.wedding_date} onChange={e=>setSettings({...settings, wedding_date: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">Venue</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 shadow-sm transition-all" value={settings.venue} onChange={e=>setSettings({...settings, venue: e.target.value})} />
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
                                                <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Horizontal (X)</label><input type="range" min="0" max="100" className="w-full accent-wedding-800" value={cropData.x} onChange={e => setCropData({...cropData, x: parseInt(e.target.value)})} /></div>
                                                <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Vertical (Y)</label><input type="range" min="0" max="100" className="w-full accent-wedding-800" value={cropData.y} onChange={e => setCropData({...cropData, y: parseInt(e.target.value)})} /></div>
                                                <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Zoom (Scale)</label><input type="range" min="20" max="100" className="w-full accent-wedding-800" value={cropData.size} onChange={e => setCropData({...cropData, size: parseInt(e.target.value)})} /></div>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 justify-end pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <button type="button" onClick={() => setSrcImage(null)} className="px-6 py-3 text-sm font-bold bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 transition-colors">Cancel</button>
                                            <button type="button" onClick={handleApplyCrop} className="px-6 py-3 text-sm font-bold bg-gradient-to-r from-wedding-900 to-wedding-800 text-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">Apply Monogram</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                                        <label className="cursor-pointer bg-white dark:bg-gray-800 px-8 py-4 rounded-2xl text-sm font-bold shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all flex items-center gap-3">
                                            <svg className="w-6 h-6 mr-2 text-wedding-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="12" r="6"></circle><circle cx="15.5" cy="12" r="6"></circle></svg> Upload Couple's Monogram
                                            <input type="file" accept="image/*,image/svg+xml" className="hidden" onChange={handleFileSelect} />
                                        </label>
                                        {settings.logo_url && (
                                            <button type="button" onClick={() => setSettings({...settings, logo_url: ''})} className="px-8 py-4 rounded-2xl text-sm font-bold transition-all text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 hover:bg-red-100">Remove Monogram</button>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">Footer Quote</label>
                                <textarea rows="2" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 italic text-base text-center text-gray-900 dark:text-white focus:outline-none focus:border-wedding-500 shadow-sm transition-all" value={settings.footer_text} onChange={e=>setSettings({...settings, footer_text: e.target.value})}></textarea>
                            </div>
                            <button className="w-full bg-gradient-to-r from-wedding-900 to-wedding-800 text-white font-bold text-base tracking-wide py-3.5 rounded-xl shadow-luxury transition-all transform hover:-translate-y-0.5 mt-2">Save All Configurations</button>
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
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">New Username</label>
                                <input type="text" placeholder="Enter new username" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-red-500 font-bold shadow-sm transition-all" value={creds.username} onChange={e => setCreds({...creds, username: e.target.value})} required />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500">New Password</label>
                                <input type="password" placeholder="Enter new password" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-red-500 font-bold shadow-sm transition-all" value={creds.password} onChange={e => setCreds({...creds, password: e.target.value})} required />
                            </div>
                            <button disabled={isUpdating} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-base py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 mt-2">Update Secure Credentials</button>
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
// [SECURITY UPDATE] Added Secret Salt to prevent Rainbow Table attacks
async function hashPassword(password) {
    const salt = "YoneMan_EverAfter_Secure_Salt_2026_";
	const msgBuffer = new TextEncoder().encode(salt + password);
	const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ⚠️ သတိပြုရန်: Database Setup အတွက် /api/setup ကို Browser ကနေ ခေါ်ပေးရပါမယ်။
async function runMigrations(env) {
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY, groom_name TEXT, bride_name TEXT, wedding_date TEXT, venue TEXT, footer_text TEXT, logo_url TEXT, theme_color TEXT, effect_on INTEGER)").run();
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password_hash TEXT)").run();
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS guests (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address TEXT, note TEXT, status TEXT, side TEXT DEFAULT 'Groom', attended INTEGER DEFAULT 0, gift_amount TEXT, gift_item TEXT, updated_at TEXT)").run();
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS sessions (session_id TEXT PRIMARY KEY, created_at TEXT)").run();
    
    // [FIXED] Database table required if R2 Storage is not attached
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS uploads (id TEXT PRIMARY KEY, mime_type TEXT, base64_data TEXT)").run();
    
    // [PERFORMANCE UPDATE] Indexing for blazing fast search and sorting
    await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_guests_address_name ON guests(address, name)").run();

    // [DATA INTEGRITY UPDATE] Ensure exact uniqueness to prevent duplicates at the database level
    try {
        await env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_guest ON guests(name, address)").run();
    } catch(e) {
        // Ignores if index already exists or if there's conflicting data during dev
    }

    // Insert default setting if empty
    const s = await env.DB.prepare("SELECT id FROM settings WHERE id = 1").first();
    if(!s) await env.DB.prepare("INSERT INTO settings (id, theme_color, effect_on) VALUES (1, 'gold', 1)").run();

    // Insert default user if empty
    const u = await env.DB.prepare("SELECT id FROM users WHERE id = 1").first();
    if(!u) {
        const h = await hashPassword('admin123'); // Default password
        await env.DB.prepare("INSERT INTO users (id, username, password_hash) VALUES (1, 'admin', ?)").bind(h).run();
    }

    return "Database Schema & Indexes Updated Successfully! You can now log in.";
}

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname;
		const method = request.method;

        // [OPTIMIZATION] Setup Route - Database စတင်တည်ဆောက်ရန် လင့်ခ်
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

        // [SECURITY UPDATE] Clean up Expired Sessions in background so D1 memory is freed
        try {
            ctx.waitUntil(env.DB.prepare("DELETE FROM sessions WHERE datetime(created_at) < datetime('now', '-1 day')").run());
        } catch(e) {}

        // Secure Session Check
        const cookieHeader = request.headers.get('Cookie');
        let isValidSession = false;
        if (cookieHeader) {
            const match = cookieHeader.match(/session_id=([^;]+)/);
            if (match) {
                const sessionId = match[1];
                const sessionRecord = await env.DB.prepare('SELECT * FROM sessions WHERE session_id = ?').bind(sessionId).first();
                if (sessionRecord) isValidSession = true;
            }
        }

        // Settings နဲ့ Uploads တွေကို Login မဝင်ခင် ခေါ်ခွင့်ပြုရမယ် (Logo ပေါ်အောင်)
        if (path === '/api/settings' && method === 'GET') {
			const settings = await env.DB.prepare('SELECT * FROM settings WHERE id = 1').first();
			return Response.json({ settings });
		}

        // [FIXED] Uploads Fetching properly handling MIME types from R2 and D1
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
            
            // D1 Fallback
            const img = await env.DB.prepare('SELECT * FROM uploads WHERE id = ?').bind(id.replace(/\.[^/.]+$/, "")).first();
            if (img) {
                const binaryData = atob(img.base64_data);
                const arrayBuffer = new Uint8Array(binaryData.length);
                for (let i = 0; i < binaryData.length; i++) arrayBuffer[i] = binaryData.charCodeAt(i);
                return new Response(arrayBuffer, { headers: { 'Content-Type': img.mime_type, 'Cache-Control': 'public, max-age=31536000, immutable' }});
            }

            return new Response('Not found', { status: 404 });
		}

        // --- PUBLIC ROUTES (No Login Required) ---
		if (path === '/api/login' && method === 'POST') {
			const { username, password } = await request.json();
			const hashedInput = await hashPassword(password);
			const user = await env.DB.prepare('SELECT * FROM users WHERE username = ? AND password_hash = ?').bind(username, hashedInput).first();

			if (user) {
                // Secure Random Session ID ဖန်တီးခြင်း
                const sessionId = crypto.randomUUID();
                await env.DB.prepare('INSERT INTO sessions (session_id, created_at) VALUES (?, ?)').bind(sessionId, new Date().toISOString()).run();
                
				return new Response(JSON.stringify({ success: true }), {
					headers: { 
						'Content-Type': 'application/json',
						'Set-Cookie': `session_id=${sessionId}; HttpOnly; Secure; SameSite=Strict; Max-Age=86400; Path=/`
					}
				});
			}
			return new Response('Unauthorized', { status: 401 });
		}

        // --- PROTECTED ROUTES (Login Required) ---
        const isProtected = path.startsWith('/api/') 
            && path !== '/api/login' 
            && path !== '/api/setup'
            && !(path === '/api/settings' && method === 'GET') 
            && !path.startsWith('/api/uploads/');

        if (isProtected && !isValidSession) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
        }

        if (path === '/api/auth/check' && method === 'GET') {
			return new Response(JSON.stringify({ auth: true }), { headers: { 'Content-Type': 'application/json' }});
		}

		if (path === '/api/logout' && method === 'POST') {
             if (cookieHeader) {
                const match = cookieHeader.match(/session_id=([^;]+)/);
                if (match) await env.DB.prepare('DELETE FROM sessions WHERE session_id = ?').bind(match[1]).run();
            }
			return new Response('Logged out', {
				headers: { 'Set-Cookie': 'session_id=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/' }
			});
		}

        // GUESTS API
		if (path === '/api/guests') {
			if (method === 'GET') {
				const { results } = await env.DB.prepare('SELECT * FROM guests ORDER BY address, name').all();
				return new Response(JSON.stringify({ guests: results }), { headers: { 'Content-Type': 'application/json' } });
			}
			if (method === 'POST') {
				const data = await request.json();
                try {
				    await env.DB.prepare('INSERT INTO guests (name, address, note, status, side, attended, gift_amount, gift_item, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)')
					    .bind(data.name, data.address, data.note || '', data.status, data.side, data.attended || 0, data.gift_amount || '', data.gift_item || '', new Date().toISOString()).run();
				    return Response.json({ success: true });
                } catch (e) {
                    // [DATA INTEGRITY] Catch UNIQUE constraint failure from DB
                    return Response.json({ success: false, error: 'Duplicate entry' }, { status: 400 });
                }
			}
		}

        if (path === '/api/guests/bulk-delete' && method === 'POST') {
            const { ids, password } = await request.json();
            const hashedInput = await hashPassword(password);
            // Default user check (id=1)
            const user = await env.DB.prepare('SELECT * FROM users WHERE id = 1 AND password_hash = ?').bind(hashedInput).first();
            
            if (!user) return new Response(JSON.stringify({ error: 'Incorrect password' }), { status: 403 });

            if (ids && ids.length > 0) {
                const placeholders = ids.map(() => '?').join(',');
                await env.DB.prepare(`DELETE FROM guests WHERE id IN (${placeholders})`).bind(...ids).run();
            }
            return Response.json({ success: true });
        }

        // [PERFECTED] Handling exactly batch by batch for large Excel Imports
        if (path === '/api/guests/bulk' && method === 'POST') {
            const { guests } = await request.json();
            if (!guests || !Array.isArray(guests)) return Response.json({ success: false, error: 'Invalid data' }, { status: 400 });

            // Using OR IGNORE to prevent bulk import crash if a duplicate sneaks in
            const statements = guests.map(g => {
                return env.DB.prepare('INSERT OR IGNORE INTO guests (name, address, note, status, side, attended, gift_amount, gift_item, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)')
                    .bind(g.name, g.address, g.note || '', g.status, g.side, g.attended || 0, g.gift_amount || '', g.gift_item || '', new Date().toISOString());
            });

            const batchSize = 100; // Optimal speed to prevent Worker Timeout
            for (let i = 0; i < statements.length; i += batchSize) {
                const batch = statements.slice(i, i + batchSize);
                await env.DB.batch(batch);
            }
            return Response.json({ success: true, count: guests.length });
        }

		if (path.startsWith('/api/guests/') && method === 'PUT') {
			const id = path.split('/').pop();
			const data = await request.json();
			await env.DB.prepare('UPDATE guests SET name = ?, address = ?, note = ?, status = ?, side = ?, attended = ?, gift_amount = ?, gift_item = ?, updated_at = ? WHERE id = ?')
				.bind(data.name, data.address, data.note || '', data.status, data.side, data.attended || 0, data.gift_amount || '', data.gift_item || '', new Date().toISOString(), id).run();
			return Response.json({ success: true });
		}

		if (path.startsWith('/api/guests/') && method === 'DELETE') {
			const id = path.split('/').pop();
			await env.DB.prepare('DELETE FROM guests WHERE id = ?').bind(id).run();
			return Response.json({ success: true });
		}

		if (path === '/api/settings' && method === 'PUT') {
			const d = await request.json();
			await env.DB.prepare('UPDATE settings SET groom_name = ?, bride_name = ?, wedding_date = ?, venue = ?, footer_text = ?, logo_url = ?, theme_color = ?, effect_on = ? WHERE id = 1')
				.bind(d.groom_name, d.bride_name, d.wedding_date, d.venue, d.footer_text, d.logo_url, d.theme_color || 'gold', d.effect_on !== undefined ? d.effect_on : 1).run();
			return Response.json({ success: true }); 
		}

        if (path === '/api/change-credentials' && method === 'POST') {
			const { newUsername, newPassword } = await request.json();
			const newHash = await hashPassword(newPassword);
			await env.DB.prepare('UPDATE users SET username = ?, password_hash = ? WHERE id = 1').bind(newUsername, newHash).run();
			return Response.json({ success: true });
		}

        // [FIXED] UPLOADS API handles dynamic MIME types correctly
		if (path === '/api/uploads' && method === 'POST') {
            const contentLength = request.headers.get('content-length');
            if (contentLength && parseInt(contentLength) > 5 * 1024 * 1024) {
                return Response.json({ error: 'File too large. Maximum size is 5MB.' }, { status: 413 });
            }

			const { mime_type, base64_data } = await request.json();
			const id = crypto.randomUUID();
            const protocol = url.protocol;
			const host = url.host;
            
            // Extract correct extension
            let ext = '.png';
            if (mime_type === 'image/jpeg') ext = '.jpg';
            else if (mime_type === 'image/webp') ext = '.webp';
            else if (mime_type === 'image/svg+xml') ext = '.svg';
            
            if (env.BUCKET) {
                const binaryData = atob(base64_data);
                const arrayBuffer = new Uint8Array(binaryData.length);
                for (let i = 0; i < binaryData.length; i++) { arrayBuffer[i] = binaryData.charCodeAt(i); }
                
                // Keep MIME type in R2 Metadata
                await env.BUCKET.put(id + ext, arrayBuffer, { httpMetadata: { contentType: mime_type } });
                return Response.json({ url: protocol + "//" + host + "/api/uploads/" + id + ext });
            } else {
                // Save to D1 Fallback
                await env.DB.prepare('INSERT INTO uploads (id, mime_type, base64_data) VALUES (?, ?, ?)')
				    .bind(id, mime_type, base64_data).run();
                return Response.json({ url: protocol + "//" + host + "/api/uploads/" + id });
            }
		}

		return new Response('Not Found', { status: 404 });
	}
};
