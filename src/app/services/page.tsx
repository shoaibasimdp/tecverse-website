


import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
    title: 'Services',
    description:
        'Comprehensive technology services from tecverse including development, offshoring, staffing, AI solutions, and managed IT services.',
};

export default function ServicesPage() {
    const services = [
        {
            id: '1',
            title: 'Development Services',
            description:
                'Custom software solutions tailoblue to your business needs, including web, mobile, and enterprise software.',
            link: '/development-services',
            image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
        },
        {
            id: '2',
            title: 'Offshoring Solutions',
            description:
                'Access skilled professionals worldwide with cost efficiency and scalability for offshore teams.',
            link: '/offshoring-solutions',
            image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
        },
        {
            id: '3',
            title: 'Staffing Solutions',
            description:
                'Strategic recruitment, contractor management, and job seeker assistance to build exceptional teams.',
            link: '/staffing-solutions',
            image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
        },
        {
            id: '4',
            title: 'AI Solutions',
            description:
                'Intelligent automation and predictive analytics that transform business operations.',
            link: '/ai-solutions',
            image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
        },


        {
            id: '5',
            title: 'Managed IT Services',
            description:
                'Proactive IT infrastructure management, 24/7 support, and cybersecurity solutions.',
            link: '/services/managed-it',
            image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
        },
    ];

    return (
        <>
            {/* Hero Section with Background Image */}
            <section className="relative min-h-[70vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                        alt="Technology Services"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/60"></div>
                </div>

                <Container className="relative z-10">
                    <div className="max-w-5xl">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-Inter text-white mb-6">
                            Our Services
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
                            Modern technology solutions designed to scale your business,
                            accelerate innovation, and drive real results.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Services Section */}
            <section className="py-20 lg:py-32">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={service.link}
                                className="group"
                            >
                                <div className="bg-white dark:bg-slate-800  overflow-hidden">
                                    {/* Large Image */}
                                    <div className="relative h-64 sm:h-72 w-full">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="text-3xl font-Inter text-[#014f86] dark:text-white mb-4">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        <span className="inline-flex items-center text-[#014f86] dark:text-[#014f86] font-medium">
                                            Learn more
                                            <svg
                                                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
