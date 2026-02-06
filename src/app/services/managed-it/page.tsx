import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import {
    Server,
    Shield,
    Cloud,
    Headphones,
    Monitor,
    Activity,
    Lock,
    Zap,
    Clock,
    CheckCircle,
    BarChart3,
    Settings,
    Database,
    Network,
    RefreshCw,
    Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Managed IT Services | Tecverse',
    description:
        'Proactive IT infrastructure management, 24/7 support, cybersecurity, and cloud solutions to keep your business running smoothly.',
};

export default function ManagedITServicesPage() {
    const services = [
        {
            title: 'Infrastructure Management',
            description: 'Proactive monitoring and maintenance of servers, networks, and storage systems. We identify and resolve issues before they impact your business.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
            features: ['24/7 Monitoring', 'Auto-scaling', 'Performance Analytics'],
        },
        {
            title: 'Cybersecurity & Compliance',
            description: 'Enterprise-grade security solutions including threat detection, firewall management, and regular audits to ensure your data stays protected and compliant.',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
            features: ['Threat Detection', 'Compliance Audits', 'Data Encryption'],
        },
        {
            title: 'Cloud Solutions',
            description: 'Expert cloud migration, management, and optimization services for AWS, Azure, and Google Cloud environments.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
            features: ['Multi-Cloud Support', 'Cost Optimization', 'Auto-backup'],
        },
        {
            title: '24/7 Help Desk Support',
            description: 'Round-the-clock technical support for your team. Our dedicated service desk resolves issues quickly to minimize downtime and keep productivity high.',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
            features: ['Instant Response', 'Multi-channel Support', 'Expert Teams'],
        },
        {
            title: 'Network Administration',
            description: 'Design, implementation, and management of secure, high-performance networks tailored to your organizational needs.',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
            features: ['SD-WAN', 'Network Security', 'Traffic Analytics'],
        },
        {
            title: 'Disaster Recovery',
            description: 'Robust backup and disaster recovery planning to ensure business continuity in the face of unexpected events or data loss.',
            image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&h=600&fit=crop',
            features: ['Auto Backup', 'RTO < 4hrs', 'Geo-Redundancy'],
        },
    ];
    const benefits = [
        {
            title: 'Predictable Costs',
            description: 'Replace variable IT expenses with a fixed monthly fee, making budgeting easier and eliminating unexpected repair costs.',
            icon: BarChart3
        },
        {
            title: 'Scalability',
            description: 'Easily scale your IT resources up or down as your business grows, without the need for significant capital investment.',
            icon: Activity
        },
        {
            title: 'Expertise on Demand',
            description: 'Gain access to a team of certified IT professionals with diverse skill sets, without the overhead of hiring in-house staff.',
            icon: CheckCircle
        },
        {
            title: 'Focus on Core Business',
            description: 'Offload the burden of IT management so you can focus on strategic initiatives and growing your business.',
            icon: Zap
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0f172a]">

                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                        alt="Managed IT Services Team"
                        fill
                        priority
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
                </div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">


                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                            Reliable IT. <br />
                            <span className="text-white">
                                Unstoppable Business.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We manage, secure, and optimize your technology infrastructure so you can focus on what matters most—growing your business.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg h-auto">
                                    Schedule a Consultation
                                </Button>
                            </Link>
                            <Link href="#services">
                                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg h-auto">
                                    Explore Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>

            </section>



            <section id="services" className="py-24 dark:bg-slate-900 relative overflow-hidden">


                <Container className="relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">

                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Comprehensive Managed Services
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300">
                            From day-to-day support to strategic planning, we cover every aspect of your IT landscape with cutting-edge technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => {

                            return (
                                <div
                                    key={index}
                                    className="group bg-white dark:bg-slate-800  overflow-hidden  "
                                >
                                    {/* Image Section */}
                                    <div className="relative h-80 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                                        {/* Title on Image */}
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h3 className="text-3xl font-bold text-white mb-3">
                                                {service.title}
                                            </h3>
                                            {/* Features Pills */}
                                            <div className="flex flex-wrap gap-2">
                                                {service.features?.map((feature, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 dark:text-slate-300"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8">
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
                                            {service.description}
                                        </p>


                                    </div>
                                </div>
                            );
                        })}
                    </div>


                </Container>
            </section>
            {/* Our Approach / Process */}
            <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute"></div>
                            <div className="relative overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                                    alt="IT Engineers working"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -bottom-10 -right-10 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block animate-bounce z-10" style={{ animationDuration: '3s' }}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">System Status</p>
                                        <p className="font-bold text-slate-900 dark:text-white">All Systems Operational</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                                A Proactive Approach to IT
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                We don't just fix things when they break. We prevent them from breaking in the first place. Our proactive management model ensures that your technology drives your business forward rather than holding it back.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: 'Assess', text: 'We audit your current infrastructure to identify risks and opportunities.' },
                                    { title: 'Stabilize', text: 'We resolve immediate issues and implement robust security protocols.' },
                                    { title: 'Optimize', text: 'We fine-tune your systems for maximum performance and efficiency.' },
                                    { title: 'Manage', text: 'We provide ongoing monitoring, maintenance, and support.' }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 dark:bg-blue-900/30 text-white dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">{step.title}</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">{step.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            {/* Benefits Section */}
            <section className="py-24 bg-[#222831] text-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Business Benefits
                        </h2>
                        <p className="text-lg text-slate-300">
                            Why leading organizations trust Tecverse with their IT.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="bg-black-800/50 p-6 ">
                                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>
            {/* CTA Section */}
            <section className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
                <div className="absolute inset-0  dark:bg-blue-900/10"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Stop Worrying About IT
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-300 mb-10">
                            Start focusing on your business growth.
                        </h3>

                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                            Get a complimentary IT health check and discover how we can improve your efficiency and security.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 py-5 text-lg h-auto shadow-xl shadow-blue-600/20">
                                    Get Your Free Assessment
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

        </>
    );
}
