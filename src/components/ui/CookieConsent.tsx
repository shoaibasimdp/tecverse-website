
// 'use client';

// import { useState, useEffect, useCallback, useRef } from 'react';
// import Link from 'next/link';
// import { X, Shield, ChevronDown, Settings } from 'lucide-react';
// import { Button } from '@/components/ui/Button';

// const COOKIE_CATEGORIES = {
//     necessary: {
//         id: 'necessary',
//         name: 'Essential Cookies',
//         description: 'These cookies are required for the website to function and cannot be switched off.',
//         required: true,
//         cookies: ['session_id', 'csrf_token', 'auth_token'],
//     },
//     analytics: {
//         id: 'analytics',
//         name: 'Analytics Cookies',
//         description: 'These cookies help us understand how visitors interact with the website.',
//         required: false,
//         cookies: ['_ga', '_gid', '_gat'],
//     },
//     functional: {
//         id: 'functional',
//         name: 'Functional Cookies',
//         description: 'Enable enhanced functionality and personalization.',
//         required: false,
//         cookies: ['user_preferences', 'timezone'],
//     },
//     advertising: {
//         id: 'advertising',
//         name: 'Advertising Cookies',
//         description: 'Used to deliver relevant advertisements.',
//         required: false,
//         cookies: ['ad_id', 'conversion_pixel'],
//     },
// };

// export function CookieConsent() {
//     const [isVisible, setIsVisible] = useState(false);
//     const [shouldRender, setShouldRender] = useState(false);
//     const [showDetails, setShowDetails] = useState(false);
//     const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({});
//     const [isSaving, setIsSaving] = useState(false);
//     const consentRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         const existingConsent = localStorage.getItem('cookieConsent');
//         const version = localStorage.getItem('cookieConsentVersion');

//         if (!existingConsent || version !== process.env.NEXT_PUBLIC_COOKIE_CONSENT_VERSION) {
//             const timer = setTimeout(() => {
//                 setShouldRender(true);
//                 requestAnimationFrame(() => setIsVisible(true));
//             }, 800);
//             return () => clearTimeout(timer);
//         }
//     }, []);

//     const handleCategoryToggle = useCallback((id: string) => {
//         if (COOKIE_CATEGORIES[id as keyof typeof COOKIE_CATEGORIES].required) return;
//         setSelectedCategories(prev => ({ ...prev, [id]: !prev[id] }));
//     }, []);

//     const saveConsent = useCallback((categories: Record<string, boolean>) => {
//         setIsSaving(true);

//         localStorage.setItem(
//             'cookieConsent',
//             JSON.stringify({
//                 categories,
//                 version: process.env.NEXT_PUBLIC_COOKIE_CONSENT_VERSION || '1.0',
//                 timestamp: new Date().toISOString(),
//             })
//         );

//         localStorage.setItem(
//             'cookieConsentVersion',
//             process.env.NEXT_PUBLIC_COOKIE_CONSENT_VERSION || '1.0'
//         );

//         setIsVisible(false);
//         setTimeout(() => {
//             setShouldRender(false);
//             setIsSaving(false);
//         }, 400);
//     }, []);

//     const handleAcceptAll = () => {
//         const all: Record<string, boolean> = {};
//         Object.keys(COOKIE_CATEGORIES).forEach(k => (all[k] = true));
//         saveConsent(all);
//     };

//     const handleRejectAll = () => {
//         const essential: Record<string, boolean> = {};
//         Object.keys(COOKIE_CATEGORIES).forEach(
//             k => (essential[k] = COOKIE_CATEGORIES[k as keyof typeof COOKIE_CATEGORIES].required)
//         );
//         saveConsent(essential);
//     };

//     if (!shouldRender) return null;

//     return (
//         <div
//             className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//                 }`}
//         >
//             <div
//                 ref={consentRef}
//                 className="bg-white border border-slate-200 rounded-t-md shadow-xl overflow-hidden"
//             >
//                 {/* Header */}
//                 <div className="p-4 border-b border-slate-200 flex justify-between gap-4">
//                     <div>
//                         <h3 className="font-light text-slate-900">
//                             We value your privacy
//                         </h3>
//                         <p className="mt-1 text-sm text-slate-600">
//                             We use cookies to enhance your experience and analyze traffic.
//                             <Link
//                                 href="/cookie-policy"
//                                 className="ml-1 text-red-600 underline hover:text-red-700"
//                             >
//                                 Read our policy
//                             </Link>
//                             .
//                         </p>
//                     </div>
//                     <button
//                         onClick={() => setIsVisible(false)}
//                         className="text-slate-400 hover:text-slate-900"
//                         aria-label="Close"
//                     >
//                         <X className="w-5 h-5" />
//                     </button>
//                 </div>

//                 {/* Details */}
//                 {showDetails && (
//                     <div className="p-4 bg-[#f7f7f7] border-b border-slate-200">
//                         <h4 className="text-sm font-light text-slate-900 mb-3 flex items-center gap-2">
//                             <Settings className="w-4 h-4" />
//                             Cookie Preferences
//                         </h4>

//                         <div className="grid gap-3 md:grid-cols-2">
//                             {Object.values(COOKIE_CATEGORIES).map(category => (
//                                 <div
//                                     key={category.id}
//                                     className="bg-white border border-slate-200 rounded-md p-3"
//                                 >
//                                     <div className="flex gap-3">
//                                         <button
//                                             disabled={category.required}
//                                             onClick={() => handleCategoryToggle(category.id)}
//                                             className={`relative mt-1 h-6 w-11 rounded-full transition ${category.required
//                                                 ? 'bg-slate-300'
//                                                 : selectedCategories[category.id]
//                                                     ? 'bg-green-600'
//                                                     : 'bg-slate-300'
//                                                 }`}
//                                         >
//                                             <span
//                                                 className={`absolute top-1 h-4 w-4 bg-white rounded-full transition ${category.required || selectedCategories[category.id]
//                                                     ? 'translate-x-6'
//                                                     : 'translate-x-1'
//                                                     }`}
//                                             />
//                                         </button>

//                                         <div>
//                                             <h5 className="text-sm font-medium text-slate-900">
//                                                 {category.name}
//                                             </h5>
//                                             <p className="text-xs text-slate-600 mt-1">
//                                                 {category.description}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {/* Actions */}
//                 <div className="p-4 bg-[#f7f7f7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                     {/* Left */}
//                     <p className="text-sm text-slate-600 max-w-xl">
//                         You can accept all cookies for the best experience, or manage your
//                         preferences by customizing which cookies are allowed.
//                     </p>

//                     {/* Right */}
//                     <div className="flex gap-3 shrink-0">
//                         <Button
//                             variant="outline"
//                             onClick={handleRejectAll}
//                             className="border-slate-300 text-slate-700 hover:bg-slate-100"
//                         >
//                             Reject All
//                         </Button>

//                         <Button
//                             onClick={handleAcceptAll}
//                             className="bg-green-600 hover:bg-green-700 text-white px-8"
//                         >
//                             {isSaving ? 'Saving…' : 'Accept All'}
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="px-3 py-2 bg-[#f7f7f7] border-t border-slate-200 flex justify-between text-xs text-slate-500">
//                     <span className="flex items-center gap-1">
//                         <Shield className="w-3 h-3" />
//                         GDPR & CCPA compliant
//                     </span>
//                     <span>
//                         Version {process.env.NEXT_PUBLIC_COOKIE_CONSENT_VERSION || '1.0'}
//                     </span>
//                 </div>

//                 {/* Customize Toggle */}
//                 <div className="px-4 py-2 border-t border-slate-200">
//                     <Button
//                         variant="ghost"
//                         onClick={() => setShowDetails(!showDetails)}
//                         className="text-red-600 hover:bg-slate-100 text-sm"
//                     >
//                         <ChevronDown className="w-4 h-4 mr-1" />
//                         {showDetails ? 'Hide Settings' : 'Customize Cookies'}
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }


'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { X, Shield, ChevronDown, Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Type definitions for window objects
declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

const COOKIE_CATEGORIES = {
    necessary: {
        id: 'necessary',
        name: 'Essential Cookies',
        description: 'These cookies are required for the website to function and cannot be switched off.',
        required: true,
        cookies: ['session_id', 'csrf_token', 'auth_token'],
    },
    analytics: {
        id: 'analytics',
        name: 'Analytics Cookies',
        description: 'These cookies help us understand how visitors interact with the website.',
        required: false,
        cookies: ['_ga', '_gid', '_gat'],
    },
    functional: {
        id: 'functional',
        name: 'Functional Cookies',
        description: 'Enable enhanced functionality and personalization.',
        required: false,
        cookies: ['user_preferences', 'timezone'],
    },
    advertising: {
        id: 'advertising',
        name: 'Advertising Cookies',
        description: 'Used to deliver relevant advertisements.',
        required: false,
        cookies: ['ad_id', 'conversion_pixel'],
    },
};

// Function to set a cookie
const setCookie = (name: string, value: string, days: number = 365) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
};

// Function to delete a cookie
const deleteCookie = (name: string) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

// Function to load Google Analytics
const loadGoogleAnalytics = () => {
    // Only load if not already loaded
    if (!window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
        });
    }
};

// Function to load advertising scripts
const loadAdvertisingScripts = () => {
    // Example: Load advertising scripts here
    // This is a placeholder for whatever advertising scripts you use
    console.log('Advertising scripts would be loaded here');
};

// Function to apply consent preferences
const applyConsentPreferences = (categories: Record<string, boolean>) => {
    // Apply analytics consent
    if (categories.analytics) {
        loadGoogleAnalytics();
    } else {
        // Remove Google Analytics cookies
        document.cookie.split(";").forEach(function (c) {
            const cookie = c.trim();
            if (cookie.startsWith('_ga') || cookie.startsWith('_gid') || cookie.startsWith('_gat')) {
                const name = cookie.split('=')[0];
                deleteCookie(name);
            }
        });
    }

    // Apply advertising consent
    if (categories.advertising) {
        loadAdvertisingScripts();
    } else {
        // Remove advertising cookies
        document.cookie.split(";").forEach(function (c) {
            const cookie = c.trim();
            if (cookie.startsWith('ad_id') || cookie.startsWith('conversion_pixel')) {
                const name = cookie.split('=')[0];
                deleteCookie(name);
            }
        });
    }

    // Apply functional consent
    if (categories.functional) {
        // Set functional cookies if needed
        setCookie('user_preferences', JSON.stringify({ theme: 'light' }));
    } else {
        // Remove functional cookies
        deleteCookie('user_preferences');
        deleteCookie('timezone');
    }
};

// Function to get current consent status
export const getConsentStatus = () => {
    try {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
            return JSON.parse(consent);
        }
    } catch (e) {
        console.error('Failed to get consent status:', e);
    }
    return null;
};

// Global function to show cookie settings
export const showCookieSettings = () => {
    const event = new CustomEvent('showCookieSettings');
    window.dispatchEvent(event);
};

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({});
    const [isSaving, setIsSaving] = useState(false);
    const consentRef = useRef<HTMLDivElement | null>(null);

    // Initialize selected categories based on current consent
    useEffect(() => {
        const existingConsent = localStorage.getItem('cookieConsent');
        const version = localStorage.getItem('cookieConsentVersion');

        if (!existingConsent || version !== process.env.NEXT_PUBLIC_COOKIE_CONSENT_VERSION) {
            const timer = setTimeout(() => {
                setShouldRender(true);
                requestAnimationFrame(() => setIsVisible(true));
            }, 800);
            return () => clearTimeout(timer);
        } else {
            // Apply existing consent preferences
            try {
                const consent = JSON.parse(existingConsent);
                applyConsentPreferences(consent.categories);
            } catch (e) {
                console.error('Failed to parse existing consent:', e);
            }
        }
    }, []);

    // Listen for show cookie settings event
    useEffect(() => {
        const handleShowSettings = () => {
            setShouldRender(true);
            requestAnimationFrame(() => setIsVisible(true));
        };

        window.addEventListener('showCookieSettings', handleShowSettings);
        return () => window.removeEventListener('showCookieSettings', handleShowSettings);
    }, []);

    const handleCategoryToggle = useCallback((id: string) => {
        if (COOKIE_CATEGORIES[id as keyof typeof COOKIE_CATEGORIES].required) return;
        setSelectedCategories(prev => ({ ...prev, [id]: !prev[id] }));
    }, []);

    const saveConsent = useCallback((categories: Record<string, boolean>) => {
        setIsSaving(true);

        try {
            localStorage.setItem(
                'cookieConsent',
                JSON.stringify({
                    categories,
                    version: process.env.NEXT_PUBLIC_COOKIE_CONSENT_VERSION || '1.0',
                    timestamp: new Date().toISOString(),
                })
            );

            localStorage.setItem(
                'cookieConsentVersion',
                process.env.NEXT_PUBLIC_COOKIE_CONSENT_VERSION || '1.0'
            );

            // Apply the consent preferences
            applyConsentPreferences(categories);
        } catch (e) {
            console.error('Failed to save cookie consent:', e);
            // Use a session cookie as fallback
            setCookie('cookieConsent', JSON.stringify({
                categories,
                version: process.env.NEXT_PUBLIC_COOKIE_CONSENT_VERSION || '1.0',
                timestamp: new Date().toISOString(),
            }));
        }

        setIsVisible(false);
        setTimeout(() => {
            setShouldRender(false);
            setIsSaving(false);
        }, 400);
    }, []);

    const handleAcceptAll = () => {
        const all: Record<string, boolean> = {};
        Object.keys(COOKIE_CATEGORIES).forEach(k => (all[k] = true));
        saveConsent(all);
    };

    const handleRejectAll = () => {
        const essential: Record<string, boolean> = {};
        Object.keys(COOKIE_CATEGORIES).forEach(
            k => (essential[k] = COOKIE_CATEGORIES[k as keyof typeof COOKIE_CATEGORIES].required)
        );
        saveConsent(essential);
    };

    const handleSavePreferences = () => {
        // Save with the current selected categories
        const all: Record<string, boolean> = {};
        Object.keys(COOKIE_CATEGORIES).forEach(k => {
            all[k] = selectedCategories[k] || COOKIE_CATEGORIES[k as keyof typeof COOKIE_CATEGORIES].required;
        });
        saveConsent(all);
    };

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
        >
            <div
                ref={consentRef}
                className="bg-white border border-slate-200 rounded-t-md shadow-xl overflow-hidden"
            >
                {/* Header */}
                <div className="p-4 border-b border-slate-200 flex justify-between gap-4">
                    <div>
                        <h3 className="font-light text-slate-900">
                            We value your privacy
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                            We use cookies to enhance your experience and analyze traffic.
                            <Link
                                href="/cookie-policy"
                                className="ml-1 text-red-600 underline hover:text-red-700"
                            >
                                Read our policy
                            </Link>
                            .
                        </p>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-slate-400 hover:text-slate-900"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Details */}
                {showDetails && (
                    <div className="p-4 bg-[#f7f7f7] border-b border-slate-200">
                        <h4 className="text-sm font-light text-slate-900 mb-3 flex items-center gap-2">
                            <Settings className="w-4 h-4" />
                            Cookie Preferences
                        </h4>

                        <div className="grid gap-3 md:grid-cols-2">
                            {Object.values(COOKIE_CATEGORIES).map(category => (
                                <div
                                    key={category.id}
                                    className="bg-white border border-slate-200 rounded-md p-3"
                                >
                                    <div className="flex gap-3">
                                        <button
                                            disabled={category.required}
                                            onClick={() => handleCategoryToggle(category.id)}
                                            className={`relative mt-1 h-6 w-11 rounded-full transition ${category.required
                                                ? 'bg-slate-300'
                                                : selectedCategories[category.id]
                                                    ? 'bg-green-600'
                                                    : 'bg-slate-300'
                                                }`}
                                        >
                                            <span
                                                className={`absolute top-1 h-4 w-4 bg-white rounded-full transition ${category.required || selectedCategories[category.id]
                                                    ? 'translate-x-6'
                                                    : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>

                                        <div>
                                            <h5 className="text-sm font-medium text-slate-900">
                                                {category.name}
                                            </h5>
                                            <p className="text-xs text-slate-600 mt-1">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="p-4 bg-[#f7f7f7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Left */}
                    <p className="text-sm text-slate-600 max-w-xl">
                        You can accept all cookies for the best experience, or manage your
                        preferences by customizing which cookies are allowed.
                    </p>

                    {/* Right */}
                    <div className="flex gap-3 shrink-0">
                        <Button
                            variant="outline"
                            onClick={handleRejectAll}
                            className="border-slate-300 text-slate-700 hover:bg-slate-100"
                        >
                            Reject All
                        </Button>

                        {showDetails && (
                            <Button
                                onClick={handleSavePreferences}
                                className="bg-red-600 hover:bg-red-700 text-white"
                            >
                                {isSaving ? 'Saving…' : 'Save Preferences'}
                            </Button>
                        )}

                        <Button
                            onClick={handleAcceptAll}
                            className="bg-green-600 hover:bg-green-700 text-white px-8"
                        >
                            {isSaving ? 'Saving…' : 'Accept All'}
                        </Button>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-3 py-2 bg-[#f7f7f7] border-t border-slate-200 flex justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        GDPR & CCPA compliant
                    </span>
                    <span>
                        Version {process.env.NEXT_PUBLIC_COOKIE_CONSENT_VERSION || '1.0'}
                    </span>
                </div>

                {/* Customize Toggle */}
                <div className="px-4 py-2 border-t border-slate-200">
                    <Button
                        variant="ghost"
                        onClick={() => setShowDetails(!showDetails)}
                        className="text-red-600 hover:bg-slate-100 text-sm"
                    >
                        <ChevronDown className={`w-4 h-4 mr-1 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                        {showDetails ? 'Hide Settings' : 'Customize Cookies'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

// Component to allow users to change preferences later
export function CookieSettingsButton() {
    return (
        <Button
            onClick={showCookieSettings}
            variant="ghost"
            size="sm"
            className="text-slate-600 hover:text-slate-900"
        >
            <Settings className="w-4 h-4 mr-2" />
            Cookie Settings
        </Button>
    );
}