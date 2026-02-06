
'use client';

import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export default function OffshoringContent() {
    return (
        <>
            <style jsx global>{`
                /* Fonts are handled globally */
                
                :root {
                    --primary-blue: #1e40af;
                    --primary-blue-dark: #1e3a8a;
                    --accent-purple: #7c3aed;
                    --accent-teal: #14b8a6;
                    --dark-bg: #0f172a;
                    --dark-bg-secondary: #1e293b;
                    --light-bg: #f8fafc;
                    --card-bg: #ffffff;
                    --text-primary: #1e293b;
                    --text-secondary: #64748b;
                    --border-color: #e2e8f0;
                }
                
                .font-display {
                    font-family: var(--font-sans);
                }
                
                .font-body {
                    font-family: var(--font-sans);
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes pulse-glow {
                    0%, 100% {
                        box-shadow: 0 0 20px rgba(30, 64, 175, 0.2);
                    }
                    50% {
                        box-shadow: 0 0 40px rgba(30, 64, 175, 0.4);
                    }
                }
                
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                
                .animate-slideInRight {
                    animation: slideInRight 0.8s ease-out forwards;
                }
                
                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }
                
                .hero-gradient {
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
                    position: relative;
                    overflow: hidden;
                }
                
                .hero-gradient::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at 20% 50%, rgba(30, 64, 175, 0.15) 0%, transparent 50%),
                                radial-gradient(circle at 80% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%);
                    pointer-events: none;
                }
                
                .grid-pattern {
                    background-image: 
                        linear-gradient(rgba(30, 64, 175, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(30, 64, 175, 0.05) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
                
                .benefit-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid var(--border-color);
                    background: var(--card-bg);
                }
                
                
                
                .process-step {
                    transition: all 0.3s ease;
                }
                
                .process-step:hover {
                    transform: scale(1.05);
                }
                
                .stat-card {
                    background: linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .cta-button {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                
                .cta-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s ease;
                }
                
                .cta-button:hover::before {
                    left: 100%;
                }
                
                
                
                .gradient-text {
                    background: linear-gradient(90deg, var(--primary-blue), var(--accent-purple));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .animated-gradient {
                    background: linear-gradient(90deg, var(--primary-blue), var(--accent-purple), var(--accent-teal), var(--primary-blue));
                    background-size: 300% 300%;
                    animation: gradient-shift 8s ease infinite;
                }
            `}</style>

            {/* Hero Section */}
            <section className="relative bg-[#222831] py-20 md:py-32 overflow-hidden">

                {/* RIGHT IMAGE — FULL HALF OF VIEWPORT */}
                <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Global team collaboration"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/40" />
                </div>

                {/* CONTENT */}
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">

                        {/* LEFT CONTENT */}
                        <div className="space-y-8 pr-0 lg:pr-20">


                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-display">
                                <span className="text-white">Build Your</span>
                                <br />
                                <span className="text-white">
                                    Global Workforce
                                </span>
                                <br />
                                <span className="text-white">with Confidence</span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-xl leading-relaxed font-body">
                                Access elite professionals worldwide with our enterprise-grade offshoring platform. Scale rapidly, reduce costs, and accelerate innovation with a trusted partner.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <button className="cta-button px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-green-600 transition shadow-xl ">
                                        Request a Demo
                                    </button>
                                </Link>

                                <Link href="#process">
                                    <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition backdrop-blur-sm">
                                        How It Works
                                    </button>
                                </Link>
                            </div>

                            <div className="flex items-center gap-8 pt-4">
                                <div>
                                    <p className="text-3xl font-bold text-white">98%</p>
                                    <p className="text-sm text-gray-400">Client Satisfaction</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-white">60%</p>
                                    <p className="text-sm text-gray-400">Cost Reduction</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-white">2-4</p>
                                    <p className="text-sm text-gray-400">Weeks to Deploy</p>
                                </div>
                            </div>
                        </div>

                        {/* EMPTY COLUMN — reserves space */}
                        <div className="hidden lg:block" />
                    </div>
                </Container>
            </section>





            {/* Key Benefits */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display" style={{ color: 'var(--text-primary)' }}>
                            Enterprise-Grade Offshoring
                        </h2>
                        <p className="text-lg text-gray-600 font-body">
                            Comprehensive solutions designed for scale, security, and performance.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Benefit 1 */}
                        <div className="benefit-card bg-white p-8 md:p-12 lg:p-16 relative overflow-hidden group ">

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">

                                        <h3 className="text-3xl md:text-4xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>
                                            Elite Talent Pool
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed font-body text-lg mb-8">
                                        Access top-tier professionals from strategic global hubs. Our rigorous vetting process ensures you get only the best talent with proven expertise in your industry.
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium font-body">Expert Engineers</span>
                                        <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium font-body">Certified Pros</span>
                                        <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium font-body">Global Reach</span>
                                    </div>
                                </div>

                                <div className="image-frame h-64 md:h-80 lg:h-96 bg-gray-100 rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                                        alt="Skilled professionals"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="benefit-card bg-white  p-8 md:p-12 lg:p-16 relative overflow-hidden group">

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                                <div className="order-2 lg:order-1">
                                    <div className="image-frame h-64 md:h-80 lg:h-96 bg-gray-100 rounded-xl overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
                                            alt="Cost efficiency"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="order-1 lg:order-2">
                                    <div className="flex items-center gap-4 mb-6">

                                        <h3 className="text-3xl md:text-4xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>
                                            Cost Optimization
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed font-body text-lg mb-8">
                                        Achieve up to 60% cost savings while maintaining quality. Our transparent pricing model and strategic locations deliver maximum ROI for your business.
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium font-body">60% Savings</span>
                                        <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium font-body">No Hidden Fees</span>
                                        <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium font-body">Flexible Plans</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="benefit-card bg-white p-8 md:p-12 lg:p-16 relative overflow-hidden group">

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">

                                        <h3 className="text-3xl md:text-4xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>
                                            Infinite Scalability
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed font-body text-lg mb-8">
                                        Scale your team up or down in days, not months. Our agile infrastructure and vast talent network enable rapid expansion to meet evolving business demands.
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-medium font-body">Rapid Scaling</span>
                                        <span className="px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-medium font-body">Zero Overhead</span>
                                        <span className="px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-medium font-body">24/7 Operations</span>
                                    </div>
                                </div>

                                <div className="image-frame h-64 md:h-80 lg:h-96 bg-gray-100 rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                                        alt="Scalability"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Benefit 4 */}
                        <div className="benefit-card bg-white p-8 md:p-12 lg:p-16 relative overflow-hidden group">

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                                <div className="order-2 lg:order-1">
                                    <div className="image-frame h-64 md:h-80 lg:h-96 bg-gray-100 rounded-xl overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                            alt="Talent retention"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="order-1 lg:order-2">
                                    <div className="flex items-center gap-4 mb-6">

                                        <h3 className="text-3xl md:text-4xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>
                                            Enterprise Security
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed font-body text-lg mb-8">
                                        Bank-grade security with ISO 27001 certification, GDPR compliance, and end-to-end encryption. Your data and intellectual property are always protected.
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium font-body">ISO 27001</span>
                                        <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium font-body">GDPR Compliant</span>
                                        <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium font-body">End-to-End Encryption</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Process Section */}
            <section id="process" className="py-24 relative bg-[#222831] overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/seed/globalteam/1920/1080.jpg')" }}></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 grid-pattern"></div>
                </div>

                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                            Your Journey to Global Excellence
                        </h2>
                        <p className="text-lg text-gray-300 font-body">
                            A proven methodology that transforms your vision into a high-performing offshore reality.
                            Our systematic approach ensures seamless integration and exceptional results from day one.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="process-step text-center group">
                            <div className="relative mb-6">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all rotate-3 group-hover:rotate-6">
                                    <span className="text-white text-4xl font-bold font-display">1</span>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-display">
                                Discovery & Strategy
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed font-body">
                                Deep-dive analysis of your needs, goals, and challenges to craft a bespoke offshoring roadmap. We identify opportunities and design a strategic plan tailored to your unique business objectives.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="process-step text-center group">
                            <div className="relative mb-6">
                                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all -rotate-3 group-hover:-rotate-6">
                                    <span className="text-white text-4xl font-bold font-display">2</span>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-display">
                                Elite Talent Hunt
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed font-body">
                                Rigorous multi-stage recruitment to identify and secure the perfect professionals for your team. Our talent acquisition specialists screen thousands of candidates to find the top 1% that match your culture and requirements.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="process-step text-center group">
                            <div className="relative mb-6">
                                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-all rotate-3 group-hover:rotate-6">
                                    <span className="text-white text-4xl font-bold font-display">3</span>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-display">
                                Infrastructure Launch
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed font-body">
                                Seamless setup of workspace, tools, and systems with comprehensive onboarding for immediate impact. We establish your offshore operations with state-of-the-art facilities and technology stacks.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="process-step text-center group">
                            <div className="relative mb-6">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all -rotate-3 group-hover:-rotate-6">
                                    <span className="text-white text-4xl font-bold font-display">4</span>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-display">
                                Continuous Excellence
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed font-body">
                                Ongoing performance optimization, skill development, and strategic support for sustained growth. We implement continuous improvement processes to ensure your offshore team evolves with your business needs.
                            </p>
                        </div>
                    </div>

                    {/* Process Timeline Connector */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl">
                        <svg className="w-full h-2" viewBox="0 0 1000 2" preserveAspectRatio="none">
                            <path d="M0,1 L1000,1" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="10,5" fill="none" />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>


                </Container>
            </section>

            {/* Features Grid */}
            <section className="py-24">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-[#222831]">
                            Enterprise-Grade Features
                        </h2>
                        <p className="text-lg text-gray-600 font-body">
                            Everything you need to build and manage a world-class offshore team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: 'Data Security',
                                desc: 'ISO 27001 certified with bank-grade encryption',
                                img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                title: 'Rapid Deployment',
                                desc: 'Team operational within 2–4 weeks',
                                img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop'
                            },

                            {
                                title: 'Quality Assurance',
                                desc: 'Regular audits and performance reviews',
                                img: 'https://images.unsplash.com/photo-1600267165477-6d4cc741b379?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                title: 'Direct Communication',
                                desc: 'Seamless collaboration tools and channels',
                                img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                title: 'Real-time Analytics',
                                desc: 'Comprehensive dashboards and reporting',
                                img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                title: 'Global Coverage',
                                desc: 'Teams across multiple time zones',
                                img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop'
                            }
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="group bg-white overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative h-44 w-full overflow-hidden">
                                    <img
                                        src={feature.img}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-3">
                                    <h3 className="text-xl font-bold text-[#222831] font-display">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm font-body leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </Container>
            </section>



            {/* Testimonials Section */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display" style={{ color: 'var(--text-primary)' }}>
                            What Our Clients Say
                        </h2>
                        <p className="text-lg text-gray-600 font-body">
                            Hear from industry leaders who have transformed their business with our solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 font-body">
                                "The offshoring solution has transformed our development capabilities. We've reduced costs by 60% while improving quality."
                            </p>
                            <div className="flex items-center">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-bold font-display">Sarah Johnson</p>
                                    <p className="text-sm text-gray-600">CTO, TechCorp</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 font-body">
                                "Scaling our team was effortless. The talent quality exceeded our expectations, and the onboarding process was seamless."
                            </p>
                            <div className="flex items-center">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-bold font-display">Michael Chen</p>
                                    <p className="text-sm text-gray-600">VP Engineering, InnovateCo</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 font-body">
                                "The security and compliance features gave us confidence to migrate critical operations. Best decision we've made."
                            </p>
                            <div className="flex items-center">
                                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-bold font-display">Emily Rodriguez</p>
                                    <p className="text-sm text-gray-600">CIO, SecureNet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>



            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--dark-bg)' }}>
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                        alt="Team collaboration"
                        className="w-full h-full object-cover opacity-10"
                    />
                </div>

                <div className="absolute inset-0"></div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                            <span className="text-white text-sm font-medium font-body">Ready to Transform Your Business?</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
                            Build Your Dream Team Today
                        </h2>

                        <p className="text-xl text-gray-300 mb-10 leading-relaxed font-body max-w-2xl mx-auto">
                            Join hundreds of enterprises leveraging global talent to drive innovation, reduce costs, and accelerate growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <button className="cta-button px-10 py-5 bg-red-600 text-white font-bold rounded-lg hover:bg-green-600 transition-all font-body text-lg shadow-2xl shadow-blue-600/30">
                                    Schedule a Consultation
                                    <span className="ml-2">→</span>
                                </button>
                            </Link>
                            <Link href="/case-studies">
                                <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all font-body text-lg shadow-2xl">
                                    View Success Stories
                                </button>
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-body text-sm">No setup fees</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-body text-sm">Flexible contracts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-body text-sm">30-day guarantee</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}