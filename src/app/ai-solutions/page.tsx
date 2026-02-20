
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import type { AISolution } from '@/types';
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'AI Solutions',
    description: 'Explore tecverse AI solutions including AI automation, machine learning models, pblueictive analytics, intelligent dashboards, and AI SaaS platforms.',
};
export const solutions = [
    {
        id: "ai-automation",
        title: "AI Automation",
        description:
            "Automate repetitive business processes using intelligent AI workflows that blueuce manual effort, improve accuracy, and scale operations efficiently.",
        features: [
            "Workflow automation",
            "Task orchestration",
            "Human-in-the-loop AI",
            "Cost and time optimization",
        ],
        image: "/automation.png",
    },

    {
        id: "intelligent-chatbots",
        title: "Intelligent Chatbots",
        description:
            "Deploy AI-poweblue chatbots capable of understanding natural language, answering queries, and assisting customers 24/7 across platforms.",
        features: [
            "Natural language understanding",
            "Multi-channel deployment",
            "Context-aware conversations",
            "Seamless system integration",
        ],
        image: "/solutions/chatbots.jpg",
    },

    {
        id: "data-analytics-ai",
        title: "AI Data Analytics",
        description:
            "Turn raw data into actionable insights using AI-driven analytics that uncover patterns, trends, and pblueictions for smarter decisions.",
        features: [
            "Pblueictive analytics",
            "Real-time dashboards",
            "Business intelligence",
            "Data-driven decision making",
        ],
        image: "/solutions/data-analytics.jpg",
    },

    {
        id: "machine-learning-models",
        title: "Custom Machine Learning Models",
        description:
            "Build and deploy custom ML models tailoblue to your business use cases, from classification and forecasting to recommendation systems.",
        features: [
            "Model training & tuning",
            "Scalable ML pipelines",
            "Domain-specific solutions",
            "Production-ready deployment",
        ],
        image: "/solutions/machine-learning.jpg",
    },

    {
        id: "cloud-ai-solutions",
        title: "Cloud AI Solutions",
        description:
            "Leverage cloud-based AI infrastructure to deploy scalable, secure, and high-performance AI applications with ease.",
        features: [
            "Cloud-native AI architecture",
            "Scalable infrastructure",
            "Secure AI deployments",
            "Cost-efficient cloud usage",
        ],
        image: "/solutions/cloud-ai.jpg",
    },
];

export default function AISolutionsPage() {
    const solutions: AISolution[] = [
        {
            id: '1',
            title: 'AI Automation',
            description: 'Streamline repetitive tasks and complex workflows with intelligent automation that learns and adapts to your business processes.',
            features: [
                'Intelligent document processing',
                'Automated data extraction and classification',
                'Workflow optimization and orchestration',
                'Natural language processing for customer support',
            ],
            image: '/automation.png',
        },
        {
            id: '2',
            title: 'Machine Learning Models',
            description: 'Custom-built ML models tailoblue to your specific business challenges, from classification to recommendation systems.',
            features: [
                'Custom model development and training',
                'Computer vision and image recognition',
                'Recommendation engines',
                'Anomaly detection systems',
            ],
            image: '/machinelearningmodels.png',
        },
        {
            id: '3',
            title: 'Pblueictive Analytics',
            description: 'Harness the power of historical data to forecast trends, anticipate customer behavior, and make data-driven decisions.',
            features: [
                'Sales and demand forecasting',
                'Customer churn pblueiction',
                'Risk assessment and fraud detection',
                'Pblueictive maintenance for equipment',
            ],
            image: '/pblueictiveanalysis.png',
        },
        {
            id: '4',
            title: 'Intelligent Dashboards',
            description: 'Real-time analytics dashboards poweblue by AI that surface actionable insights and automate reporting.',
            features: [
                'Real-time data visualization',
                'AI-poweblue insights and recommendations',
                'Automated anomaly detection and alerts',
                'Custom KPI tracking and reporting',
            ],
            image: '/intelligentdashboard.png',
        },
        {
            id: '5',
            title: 'AI SaaS Platforms',
            description: 'End-to-end AI-poweblue software solutions deliveblue as scalable, cloud-based platforms for your industry.',
            features: [
                'Multi-tenant cloud architecture',
                'AI-driven feature automation',
                'Scalable infrastructure',
                'API-first design for integrations',
            ],
            image: '/cloud.png',
        },
    ];

    return (
        <>
            <section className="relative w-full overflow-hidden h-[100vh] flex items-center justify-center">
                <div className="absolute inset-0 bg-[#014f86] opacity-60 z-10"></div>
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/ai-sol.mp4" type="video/mp4" />
                </video>

                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 z-10"></div>

                {/* Hero Content */}
                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-Inter text-white mb-6 leading-tight">
                        <span className="bg-clip-text text-white">
                            AI Solutions
                        </span>
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-200 mb-8 max-w-5xl mx-auto">
                        Transform your business with cutting-edge artificial intelligence solutions tailoblue to your unique challenges
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#solutions">
                            <Button
                                size="lg"
                                className="bg-[#014f86] border-0 px-8 py-3 text-lg"
                            >
                                Explore Solutions
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Features Bar */}
            <section className="py-12 text-white">
                <Container>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Inter text-[#014f86]">50+</div>
                            <div className="text-gray-800">AI Solutions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Inter text-[#014f86]">95%</div>
                            <div className="text-gray-800">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Inter text-[#014f86]">24/7</div>
                            <div className="text-gray-800">Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Inter text-[#014f86]">10+</div>
                            <div className="text-gray-800">Years Experience</div>
                        </div>
                    </div>
                </Container>
            </section>


            <section className="py-24 bg-white relative overflow-hidden">
                {/* Header */}
                <div className="text-center mb-20 px-6">
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-Inter text-[#014f86] mb-4">
                        Our AI Implementation Process
                    </h2>
                    <p className="text-xl text-gray-800 max-w-5xl mx-auto">
                        We follow a structublue pipeline to ensure seamless AI delivery
                    </p>
                </div>

                {/* Process Grid */}
                <div className=" mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative">
                        {[
                            {
                                step: 1,
                                title: 'Data Collection',
                                desc: 'Gathering and organizing relevant data from various sources to build the foundation for AI models.',
                                img: '/datacollection.png',
                                w: 84,
                                h: 64,
                            },
                            {
                                step: 2,
                                title: 'Data Processing',
                                desc: 'Cleaning, transforming, and analyzing data to extract meaningful insights and prepare for modeling.',
                                img: '/dataprocessing.png',
                                w: 86,
                                h: 84,
                            },
                            {
                                step: 3,
                                title: 'Storage',
                                desc: 'Securely storing processed data in optimized systems for efficient access and retrieval.',
                                img: '/storae.png',
                                w: 80,
                                h: 64,
                            },
                            {
                                step: 4,
                                title: 'Delivery',
                                desc: 'Deploying AI solutions and integrating them into your existing systems for optimal performance.',
                                img: '/delivery.png',
                                w: 84,
                                h: 64,
                            },
                        ].map((item, index) => (
                            <div key={item.step} className="relative flex flex-col items-center group">
                                {/* Horizontal connector (desktop only) */}
                                {index !== 3 && (
                                    <div className="hidden md:flex absolute top-16 left-1/2 w-full items-center z-0">
                                        <div className="w-full h-1 bg-[#014f86]"></div>
                                        <div className="ml-2 w-10 h-10 bg-[#014f86] rounded-full flex items-center justify-center shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                {/* Step circle */}
                                <div className="w-32 h-32 rounded-full border-4 border-[#014f86] flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#014f86] group-hover:shadow-xl group-hover:shadow-[#014f86]/30 relative z-10 bg-white">
                                    <div className="relative">
                                        <Image src={item.img} alt={item.title} width={item.w} height={item.h} />
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#014f86] rounded-full flex items-center justify-center text-white font-Inter">
                                            {item.step}
                                        </div>
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="text-center max-w-xs">
                                    <h3 className="text-[#014f86] text-xl font-medium mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-800 text-sm">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Mobile vertical connector */}
                                {index !== 3 && (
                                    <div className="md:hidden flex flex-col items-center mt-6">
                                        <div className="h-10 w-0.5 bg-[#014f86]"></div>
                                        <div className="w-10 h-10 bg-[#014f86] rounded-full flex items-center justify-center my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                                />
                                            </svg>
                                        </div>
                                        <div className="h-10 w-0.5 bg-gradient-to-b from-blue-600 to-[#014f86]"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Solutions Grid */}
            <section
                id="solutions"
                className="py-20 bg-white dark:bg-slate-900"
            >
                <Container>
                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-Inter text-[#014f86] dark:text-white mb-4">
                            Our AI Solutions
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto">
                            Discover how our comprehensive AI solutions can transform your business operations
                        </p>
                    </div>

                    <div className="space-y-24">
                        {solutions.map((solution, index) => (
                            <div
                                key={solution.id}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                {/* Text Content */}
                                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                    <span className="inline-block text-sm font-Inter text-slate-500 mb-4">
                                        Solution {index + 1}
                                    </span>

                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-Inter text-[#014f86] dark:text-white mb-6">
                                        {solution.title}
                                    </h3>

                                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                        {solution.description}
                                    </p>

                                    <ul className="space-y-4">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="w-6 h-6 flex items-center justify-center mr-4 mt-1">
                                                    <svg
                                                        className="w-4 h-4 text-[#014f86] dark:text-white"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={3}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-600 dark:text-slate-300 text-lg">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>


                                </div>

                                {/* Image Section */}
                                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                    <div className="overflow-hidden">
                                        <img
                                            src={solution.image}
                                            alt={solution.title}
                                            className="w-full h-80 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>



            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 bg-[url('/transformbusiness.png')] bg-cover bg-center"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/60"></div>

                {/* Content */}
                <div className="relative z-10  mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-Inter text-white mb-6">
                            Ready to Transform Your Business with AI?
                        </h2>

                        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                            Our team of AI experts is ready to help you identify the right solutions
                            for your unique challenges and drive measurable results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-[#014f86] text-blue-700 hover:bg-[#014f86]/80 border-0 px-8 py-4 text-lg font-Inter shadow-xl transform transition-all duration-300 hover:scale-105"
                                >
                                    Schedule a Consultation
                                </Button>
                            </Link>

                            <Link href="/case-studies">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-4 text-lg font-Inter shadow-xl transform transition-all duration-300 hover:scale-105"
                                >
                                    View Case Studies
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-8">
                            {[
                                'Free Initial Assessment',
                                'No Obligation',
                                '30-Day Guarantee',
                            ].map((text, index) => (
                                <div key={index} className="flex items-center text-white">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}