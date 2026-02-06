'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const announcements = [
    'AI-powered solutions tailored for your business',
    'Global delivery across USA, India, Australia & Middle East',
    'Hire top tech talent with our Staffing Solutions',
    'Transform your ideas with TecVerse Innovation',
];

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About', hasDropdown: true },
    { href: '/services', label: 'Services', hasDropdown: true },
    { href: '/development-services', label: 'Development' },
    { href: '/offshoring-solutions', label: 'Offshoring' },
    { href: '/staffing-solutions', label: 'Staffing' },
    { href: '/ai-solutions', label: 'AI Solutions' },
    { href: '/contact', label: 'Contact' },
];


const countryOptions = [
    {
        code: 'au',
        name: 'Australia',
        flag: 'https://flagcdn.com/w40/au.png',
    },
    {
        code: 'us',
        name: 'USA',
        flag: 'https://flagcdn.com/w40/us.png',
    },
    {
        code: 'in',
        name: 'India',
        flag: 'https://flagcdn.com/w40/in.png',
    },
    {
        code: 'eu',
        name: 'European Union',
        flag: 'https://flagcdn.com/w40/eu.png',
    },
    {
        code: 'sa',
        name: 'Middle East',
        flag: 'https://flagcdn.com/w40/sa.png',
    },
];


export const Navbar: React.FC = () => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [countryOpen, setCountryOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[1]);
    const [announcementIndex, setAnnouncementIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>

            <div className="w-full bg-red-500 text-white text-sm shadow-lg border-b border-green-500/20">
                <div className="max-w-screen-xl mx-auto h-10 flex items-center justify-center overflow-hidden px-4 relative">


                    <span
                        key={announcementIndex}
                        className="animate-fade-slide font-medium text-center px-8 transition-all duration-500"
                    >
                        {announcements[announcementIndex]}
                    </span>

                    {/* <div className="absolute right-4 flex gap-2">
                        <button
                            onClick={() => setAnnouncementIndex((prev) => (prev - 1 + announcements.length) % announcements.length)}
                            className="w-6 h-6 rounded-full bg-white-500/20 hover:bg-red-500/30 border border-red-500/40 transition-all hover:scale-105 flex items-center justify-center text-red-400"
                            aria-label="Previous announcement"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setAnnouncementIndex((prev) => (prev + 1) % announcements.length)}
                            className="w-6 h-6 rounded-full bg-w-500/20 hover:bg-green-500/30 border border-green-500/40 transition-all hover:scale-105 flex items-center justify-center text-green-400"
                            aria-label="Next announcement"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div> */}

                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {announcements.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setAnnouncementIndex(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === announcementIndex
                                    ? 'bg-green-400 w-4'
                                    : 'bg-[#222831] hover:bg-red-400/60 w-1.5'
                                    }`}
                                aria-label={`Go to announcement ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        <Link href="/" className="flex items-center">
                            <img src="/tecverse.png" alt="TecVerse" className="w-32 h-auto" />
                        </Link>


                        <div className="hidden md:flex items-center space-x-1 h-full">
                            {navLinks.map((link) => (
                                <div
                                    key={link.href}
                                    className="h-full flex items-center"
                                    onMouseEnter={() => {
                                        if (link.label === 'About') setAboutOpen(true);
                                        if (link.label === 'Services') setServicesOpen(true);
                                    }}
                                    onMouseLeave={() => {
                                        if (link.label === 'About') setAboutOpen(false);
                                        if (link.label === 'Services') setServicesOpen(false);
                                    }}
                                >
                                    {link.hasDropdown ? (
                                        <span className="px-4 py-2 rounded-lg text-sm font-medium flex items-center cursor-pointer text-slate-900 hover:text-red-600">
                                            {link.label}
                                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium ${pathname === link.href
                                                ? 'text-red-600'
                                                : 'text-slate-900 hover:text-red-600'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    )}


                                    {link.label === 'About' && aboutOpen && (
                                        <div className="absolute left-0 top-full w-full bg-white shadow-2xl border-t border-slate-200">
                                            <div className="max-w-7xl mx-auto px-6 py-10">
                                                <div className="grid grid-cols-12 gap-8">
                                                    <div className="col-span-3">
                                                        <div className="flex items-center gap-2 mb-6">
                                                            <h3 className="text-sm font-thin-100 text-slate-900 uppercase tracking-wide">Company</h3>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <Link href="/about" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all">

                                                                <div className="flex-1">
                                                                    <div className="font-thin-100 text-slate-900 group-hover:text-blue-600 transition-colors">About TecVerse</div>
                                                                    <div className="text-xs text-slate-500">Our story</div>
                                                                </div>
                                                            </Link>

                                                            <Link href="/about/vision" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all">

                                                                <div className="flex-1">
                                                                    <div className="font-thin-100 text-slate-900 group-hover:text-blue-600 transition-colors">Vision Statement</div>
                                                                    <div className="text-xs text-slate-500">Where we're headed</div>
                                                                </div>
                                                            </Link>

                                                            <Link href="/about/mission" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all">

                                                                <div className="flex-1">
                                                                    <div className="font-thin-100 text-slate-900 group-hover:text-blue-600 transition-colors">Mission Statement</div>
                                                                    <div className="text-xs text-slate-500">Our purpose</div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    {/* People Section */}
                                                    <div className="col-span-3">
                                                        <div className="flex items-center gap-2 mb-6">
                                                            <h3 className="text-sm font-thin-100 text-slate-900 uppercase tracking-wide">People</h3>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <Link href="/about/leadership" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all">

                                                                <div className="flex-1">
                                                                    <div className="font-thin-100 text-slate-900 group-hover:text-blue-600 transition-colors">Leadership Team</div>
                                                                    <div className="text-xs text-slate-500">Meet our leaders</div>
                                                                </div>
                                                            </Link>

                                                            <Link href="/about/careers" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all">

                                                                <div className="flex-1">
                                                                    <div className="font-thin-100 text-slate-900 group-hover:text-blue-600 transition-colors">Careers</div>
                                                                    <div className="text-xs text-slate-500">Join our team</div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    {/* Who We Are - Feature Card */}
                                                    <div className="col-span-6">
                                                        <div className="bg-[#222831] rounded-2xl p-8 h-full text-white relative overflow-hidden">
                                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
                                                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

                                                            <div className="relative z-10">
                                                                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                                                                    <span className="text-sm font-thin-100">Who We Are</span>
                                                                </div>

                                                                <h3 className="text-2xl font-thin-100 mb-4">Global Technology Partner</h3>
                                                                <p className="text-blue-100 leading-relaxed mb-6">
                                                                    TecVerse is a global technology partner helping enterprises scale with innovation, AI, and engineering excellence.
                                                                </p>

                                                                <Link href="/about" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-thin-100 hover:bg-blue-50 transition-all group">
                                                                    Learn More
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* SERVICES – ENTERPRISE MEGA MENU */}
                                    {link.label === 'Services' && servicesOpen && (
                                        <div className="absolute left-0 top-full w-full bg-white shadow-2xl border-t border-slate-200">
                                            <div className="max-w-7xl mx-auto px-6 py-10">
                                                <div className="grid grid-cols-12 gap-8">
                                                    {/* Development Section */}
                                                    <div className="col-span-3">
                                                        <div className="flex items-center gap-2 mb-6">
                                                            <h3 className="text-sm font-thin-100 text-slate-900 uppercase tracking-wide">Development</h3>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <Link href="/services/development" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all">

                                                                <div className="flex-1">
                                                                    <div className="font-thin-100 text-slate-900 group-hover:text-blue-600 transition-colors">Web & App Development</div>
                                                                    <div className="text-xs text-slate-500">Build digital products</div>
                                                                </div>
                                                            </Link>

                                                            <Link href="/services/managed-it" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all">

                                                                <div className="flex-1">
                                                                    <div className="font-thin-100 text-slate-900 group-hover:text-blue-600 transition-colors">Managed IT Services</div>
                                                                    <div className="text-xs text-slate-500">24/7 support</div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    {/* Solutions Section */}
                                                    <div className="col-span-3">
                                                        <div className="flex items-center gap-2 mb-6">
                                                            <h3 className="text-sm font-thin-100 text-slate-900 uppercase tracking-wide">Solutions</h3>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <Link href="/services/offshoring" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all">

                                                                <div className="flex-1">
                                                                    <div className="font-thin-100 text-slate-900 group-hover:text-blue-600 transition-colors">Offshoring Solutions</div>
                                                                    <div className="text-xs text-slate-500">Global talent</div>
                                                                </div>
                                                            </Link>

                                                            <Link href="/services/staffing" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all">

                                                                <div className="flex-1">
                                                                    <div className="font-thin-100 text-slate-900 group-hover:text-blue-600 transition-colors">Staffing Solutions</div>
                                                                    <div className="text-xs text-slate-500">Scale your team</div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    {/* AI & Cloud Section */}
                                                    <div className="col-span-3">
                                                        <div className="flex items-center gap-2 mb-6">
                                                            <h3 className="text-sm font-thin-100 text-slate-900 uppercase tracking-wide">AI & Cloud</h3>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <Link href="/ai-solutions" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all">

                                                                <div className="flex-1">
                                                                    <div className="font-thin-100 text-slate-900 group-hover:text-blue-600 transition-colors">AI Solutions</div>
                                                                    <div className="text-xs text-slate-500">Intelligent systems</div>
                                                                </div>
                                                            </Link>

                                                            <Link href="/development-services" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all">

                                                                <div className="flex-1">
                                                                    <div className="font-thin-100 text-slate-900 group-hover:text-blue-600 transition-colors">Cloud & DevOps</div>
                                                                    <div className="text-xs text-slate-500">Infrastructure</div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    {/* Why TecVerse - Feature Card */}
                                                    <div className="col-span-3">
                                                        <div className="bg-[#222831] rounded-xs p-6 h-full text-white relative overflow-hidden">
                                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full -mr-16 -mt-16"></div>

                                                            <div className="relative z-10">

                                                                <h3 className="text-lg font-thin-100 mb-3">Why TecVerse?</h3>
                                                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                                                    End-to-end digital services designed for enterprise-scale growth and transformation.
                                                                </p>

                                                                <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-thin-100 text-sm group">
                                                                    Discover More
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}



                                </div>
                            ))}

                            <div
                                className="relative ml-4"
                                onMouseEnter={() => setCountryOpen(true)}
                                onMouseLeave={() => setCountryOpen(false)}
                            >
                                <span className="flex items-center px-3 py-2 cursor-pointer">
                                    <img
                                        src={selectedCountry.flag}
                                        alt={selectedCountry.name}
                                        className="w-6 h-4 rounded-sm object-cover"
                                    />

                                </span>

                                {countryOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow border">
                                        {countryOptions.map((country) => (
                                            <button
                                                key={country.code}
                                                onClick={() => {
                                                    setSelectedCountry(country);
                                                    setCountryOpen(false);
                                                }}
                                                className="w-full flex items-center space-x-2 px-4 py-2 text-sm hover:bg-slate-100"
                                            >
                                                <img
                                                    src={country.flag}
                                                    alt={country.name}
                                                    className="w-5 h-3 rounded-sm object-cover"
                                                />
                                                <span>{country.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Mobile Toggle */}
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-xl">
                            {isOpen ? '✖' : '☰'}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2 rounded hover:bg-slate-100"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};
