


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
                'Custom software solutions tailored to your business needs, including web, mobile, and enterprise software.',
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
            image: 'data:image/jpeg;base64,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',
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
                        <h1 className="text-4xl sm:text-7xl md:text-6xl font-light text-white mb-6">
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
                                        <h3 className="text-3xl font-light text-slate-900 dark:text-white mb-4">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        <span className="inline-flex items-center text-red-600 dark:text-red-400 font-medium">
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
