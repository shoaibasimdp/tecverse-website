
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { ProcessFlow } from '@/components/ProcessFlow'
import {
    SiTensorflow,
    SiPytorch,
    SiScikitlearn,
    SiHuggingface,
    SiOpenai,
    SiLangchain,
    SiApachespark,
    SiApachekafka,
    SiApacheairflow,
    SiDbt,
    SiSnowflake,
    SiGooglebigquery,
    SiPython,
    SiDjango,
    SiNodedotjs,
    SiGo,
    SiSpring,
    SiPostgresql,
    SiMongodb,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiVuedotjs,

} from "react-icons/si";
import {
    LayoutDashboard,
    Users,
    Database,
    Kanban,
    Boxes,
    UserCog,
    CalendarCheck,
    CreditCard,
    LifeBuoy,
    FileText,
    Wallet,
    Workflow,
} from 'lucide-react';
const techBrandColors: Record<string, string> = {
    tensorflow: 'text-orange-500',
    pytorch: 'text-red-500',
    scikitlearn: 'text-yellow-500',
    huggingface: 'text-yellow-400',
    openai: 'text-emerald-500',
    langchain: 'text-green-600',

    apachespark: 'text-orange-600',
    apachekafka: 'text-gray-800 dark:text-gray-200',
    apacheairflow: 'text-sky-500',
    dbt: 'text-orange-500',
    snowflake: 'text-sky-400',
    googlebigquery: 'text-red-500',

    python: 'text-red-500',
    django: 'text-green-700',
    nodedotjs: 'text-green-600',
    go: 'text-cyan-500',
    spring: 'text-green-500',

    postgresql: 'text-red-700',
    mongodb: 'text-green-600',

    react: 'text-cyan-400',
    nextdotjs: 'text-black dark:text-white',
    typescript: 'text-red-600',
    tailwindcss: 'text-sky-400',
    vuedotjs: 'text-green-500',
    reactnative: 'text-cyan-400',
};

const softwareSolutions = [
    {
        label: 'Custom CRM Systems',
        icon: LayoutDashboard
    },
    {
        label: 'Applicant Tracking System (ATS)',
        icon: Users
    },
    {
        label: 'Enterprise Resource Planning (ERP)',
        icon: Database
    },
    {
        label: 'Project Management Platforms',
        icon: Kanban
    },
    {
        label: 'Inventory Management Systems',
        icon: Boxes
    },
    {
        label: 'HR & Payroll Systems',
        icon: UserCog
    },
    {
        label: 'Booking & Reservation Systems',
        icon: CalendarCheck
    },
    {
        label: 'Point of Sale (POS) Solutions',
        icon: CreditCard
    },
    {
        label: 'Customer Support Ticketing',
        icon: LifeBuoy
    },
    {
        label: 'Content Management Systems (CMS)',
        icon: FileText
    },
    {
        label: 'Payment Processing Integration',
        icon: Wallet
    },
    {
        label: 'Workflow Automation Tools',
        icon: Workflow
    },
];


export const metadata: Metadata = {
    title: 'Development Services - AI, Data & Custom Software Solutions',
    description: 'Enterprise-grade AI solutions, intelligent data systems, and custom software development. Transform your business with cutting-edge technology tailored to your needs.',
};

type TechProps = {
    icon: any;
    label: string;
    name: keyof typeof techBrandColors;
};

const Tech = ({ icon: Icon, label, name }: TechProps) => (
    <li className="flex items-center space-x-3">
        <Icon
            className={`w-5 h-5 ${techBrandColors[name] ?? 'text-gray-500'}`}
        />
        <span className="font-medium text-gray-700 dark:text-gray-300">
            {label}
        </span>
    </li>
);


export default function DevelopmentServicesPage() {
    const aiSolutions = [
        {
            title: 'AI Chatbots & Conversational AI',
            description: 'Deploy intelligent virtual assistants that understand context, learn from interactions, and provide 24/7 customer support. Our chatbots integrate seamlessly with your existing systems, handling everything from simple FAQs to complex multi-step transactions.',
            features: ['Natural language understanding', 'Multi-channel deployment', 'Contextual memory', 'Custom training on your data'],
            image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80' // Conversational AI chatbot interface
        },
        {
            title: 'Predictive Analytics & Forecasting',
            description: 'Anticipate market trends, customer behavior, and business outcomes with machine learning-powered predictive models. We build forecasting systems that analyze historical patterns and external factors to help you make data-driven decisions with confidence.',
            features: ['Time series analysis', 'Demand forecasting', 'Risk assessment', 'Scenario modeling'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' // Predictive analytics graphs
        },
        {
            title: 'Natural Language Processing (NLP)',
            description: 'Extract insights from unstructured text data at scale. Our NLP solutions power sentiment analysis, document classification, entity extraction, and automated content generation, turning raw text into actionable intelligence.',
            features: ['Sentiment analysis', 'Text classification', 'Named entity recognition', 'Text summarization'],
            image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800' // NLP text analysis visualization
        },
        {
            title: 'Computer Vision & Image Recognition',
            description: 'Enable machines to see and understand visual data. From quality control in manufacturing to facial recognition in security systems, our computer vision solutions automate visual inspection and analysis tasks with superhuman accuracy.',
            features: ['Object detection', 'Image classification', 'Facial recognition', 'OCR & document processing'],
            image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800' // Computer vision AI scanning
        },
        {
            title: 'Recommendation Systems',
            description: 'Personalize user experiences with intelligent recommendation engines. Our systems analyze user behavior, preferences, and contextual signals to suggest products, content, or actions that drive engagement and conversion.',
            features: ['Collaborative filtering', 'Content-based recommendations', 'Hybrid approaches', 'Real-time personalization'],
            image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80' // Recommendation engine suggestions
        },
        {
            title: 'AI-Powered Automation',
            description: 'Automate complex workflows with intelligent decision-making. Our AI automation solutions handle repetitive tasks, process approvals, route information, and make contextual decisions, freeing your team to focus on strategic work.',
            features: ['Intelligent document processing', 'Automated decision engines', 'Smart workflow routing', 'Exception handling'],
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80' // AI workflow automation dashboard
        }
    ];

    const dataSolutions = [
        {
            title: 'Business Intelligence Dashboards',
            description: 'Transform raw data into visual insights with interactive, real-time dashboards. We design and build BI platforms that give executives and teams instant access to the metrics that matter, with drill-down capabilities and customizable views.',
            features: ['Real-time data visualization', 'Custom KPI tracking', 'Interactive reports', 'Mobile-responsive design'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' // BI dashboard metrics
        },
        {
            title: 'Data Warehousing & ETL Pipelines',
            description: 'Build a single source of truth for your organization. We architect and implement enterprise data warehouses with robust ETL pipelines that extract, transform, and load data from multiple sources, ensuring data quality and consistency.',
            features: ['Multi-source integration', 'Data quality management', 'Automated pipelines', 'Scalable architecture'],
            image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800' // ETL data flow diagram
        },
        {
            title: 'Real-Time Analytics Systems',
            description: 'Make decisions at the speed of business with real-time data processing. Our streaming analytics platforms process events as they happen, enabling instant alerts, live dashboards, and immediate responses to changing conditions.',
            features: ['Stream processing', 'Event-driven architecture', 'Low-latency analytics', 'Complex event processing'],
            image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80' // Real-time streaming dashboard
        },
        {
            title: 'Customer Behavior Analytics',
            description: 'Understand your customers at a granular level. We build analytics platforms that track user journeys, identify patterns, segment audiences, and uncover opportunities to improve retention, engagement, and lifetime value.',
            features: ['User journey mapping', 'Cohort analysis', 'Behavioral segmentation', 'Churn prediction'],
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' // Customer behavior charts
        },
        {
            title: 'Data Cleaning & Processing',
            description: 'Turn messy, inconsistent data into clean, reliable information. Our data engineering services handle deduplication, validation, normalization, and enrichment, ensuring your analytics and AI models work with high-quality data.',
            features: ['Data validation', 'Deduplication', 'Format standardization', 'Missing data handling'],
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80' // Data cleaning visualization
        },
        {
            title: 'Machine Learning Operations (MLOps)',
            description: 'Operationalize your AI initiatives with robust MLOps infrastructure. We implement end-to-end ML pipelines that handle model training, validation, deployment, monitoring, and retraining, ensuring your AI systems stay accurate and reliable.',
            features: ['Model versioning', 'Automated retraining', 'Performance monitoring', 'A/B testing framework'],
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80' // MLOps pipeline workflow
        }
    ];



    const industries = [
        {
            name: 'Healthcare',
            description: 'HIPAA-compliant AI solutions for patient care, diagnostics, and operational efficiency.',
        },
        {
            name: 'Finance & Banking',
            description: 'Fraud detection, risk assessment, and algorithmic trading systems.',
        },
        {
            name: 'E-commerce',
            description: 'Personalization engines, demand forecasting, and inventory optimization.',
        },
        {
            name: 'Manufacturing',
            description: 'Predictive maintenance, quality control, and supply chain optimization.',
        },
        {
            name: 'Retail',
            description: 'Customer analytics, dynamic pricing, and smart inventory management.',
        },
        {
            name: 'Technology',
            description: 'Product analytics, user behavior modeling, and performance optimization.',
        },
    ];

    const processSteps = [
        {
            number: '01',
            title: 'Discovery & Strategy',
            description: 'We start by understanding your business objectives, data landscape, and technical requirements. This phase includes stakeholder interviews, data audits, and feasibility assessments.',
        },
        {
            number: '02',
            title: 'Architecture & Design',
            description: 'Our team designs scalable, secure system architectures with clear data flows, integration points, and user experiences that align with your operational needs.',
        },
        {
            number: '03',
            title: 'Development & Training',
            description: 'We build and train AI models, develop data pipelines, and implement custom software using agile methodologies with regular feedback loops and iterative improvements.',
        },
        {
            number: '04',
            title: 'Deployment & Integration',
            description: 'Seamless integration with your existing systems, thorough testing, and careful deployment strategies to ensure minimal disruption to operations.',
        },
        {
            number: '05',
            title: 'Monitoring & Optimization',
            description: 'Continuous performance monitoring, model retraining, and system optimization to ensure your solutions remain effective as your business evolves.',
        },
    ];

    return (
        <>

            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/devServices.png')",
                        }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white dark:from-slate-950/80 dark:via-slate-950/70 dark:to-slate-950" />
                </div>

                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <h1 className="text-7xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 dark:text-white">
                            Development Services
                        </h1>

                        <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
                            Transform your business with intelligent systems that learn,
                            adapt, and scale. From enterprise software to cutting-edge AI
                            solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <Link href="/contact">
                                <Button size="lg" className="text-lg px-8">
                                    Start Your Project
                                </Button>
                            </Link>

                            <Link href="#ai-solutions">
                                <Button size="lg" variant="outline" className="text-lg px-8">
                                    Explore AI Solutions
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>


            {/* Stats Section */}
            <section className="relative py-16 px-6 border-y border-gray-200 dark:border-gray-800">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <div className="text-center">
                            <div className="text-4xl md:text-7xl font-light text-black dark:text-red-400 mb-2">500+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-7xl font-light text-black dark:text-red-400 mb-2">98%</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-7xl font-light text-black dark:text-red-400 mb-2">15+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-7xl font-light text-black dark:text-red-400 mb-2">24/7</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* AI Solutions - Detailed */}
            <section id="ai-solutions" className="relative py-28 px-6 bg-white">
                <Container>
                    <div className="max-w-5xl mb-20">
                        <h2 className="text-4xl md:text-7xl font-light mb-6 text-[#1B3139]">
                            AI Solutions
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Harness the power of artificial intelligence to automate processes,
                            gain deeper insights, and create experiences that feel magical to your
                            users. Our AI solutions are built on proven frameworks, trained on your
                            data, and designed to deliver measurable business impact.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {aiSolutions.map((solution, index) => (
                            <div
                                key={index}
                                className="grid md:grid-cols-2 gap-16 items-center"
                            >
                                {/* Image */}
                                <div className="relative h-[420px] w-full overflow-hidden">
                                    <Image
                                        src={solution.image}
                                        alt={solution.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute top-6 left-6 text-xs font-sans text-white/80 bg-black/40 backdrop-blur px-3 py-1 rounded-full">
                                        AI-{String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-7xl font-light text-[#1B3139]">
                                            {solution.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {solution.description}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wide">
                                            Key Capabilities
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {solution.features.map((feature, fIndex) => (
                                                <div
                                                    key={fIndex}
                                                    className="flex items-start gap-3 text-gray-600"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            {/* Data Solutions - Detailed */}
            <section className="relative py-28 px-6 bg-white">
                <Container>
                    <div className="max-w-5xl mb-20">
                        <h2 className="text-4xl md:text-7xl font-light mb-6 text-[#1B3139]">
                            Data Solutions
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Your data is your competitive advantage. We build the infrastructure
                            and analytics platforms that turn scattered information into strategic
                            assets, enabling faster decisions and deeper customer understanding.
                        </p>
                    </div>

                    <div className="space-y-20">
                        {dataSolutions.map((solution, index) => (
                            <div
                                key={index}
                                className="grid md:grid-cols-2 gap-16 items-center"
                            >
                                {/* Content */}
                                <div className="space-y-8 order-2 md:order-1">
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={solution.image}
                                            alt={solution.title}
                                            width={36}
                                            height={36}
                                        />
                                        <span className="text-xs font-sans text-gray-400">
                                            DATA-{String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-7xl font-light text-[#1B3139]">
                                            {solution.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {solution.description}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wide">
                                            Core Features
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {solution.features.map((feature, fIndex) => (
                                                <div
                                                    key={fIndex}
                                                    className="flex items-start gap-3 text-gray-600"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative h-[420px] w-full overflow-hidden order-1 md:order-2">
                                    <Image
                                        src={solution.image}
                                        alt={solution.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>


            {/* Custom Software Solutions */}
            <section className="relative py-24 px-6 bg-white">
                <Container>
                    <div className="max-w-5xl mb-16">
                        <h2 className="text-4xl md:text-7xl font-light mb-6">Custom Software Development</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            Every business is unique. We build tailored software solutions that fit your specific workflows, integrate seamlessly with your existing systems, and scale as your organization grows.
                        </p>
                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {softwareSolutions.map((solution, index) => {
                            const Icon = solution.icon;
                            return (
                                <div
                                    key={index}
                                    className="group p-6"
                                >
                                    <div className="flex items-center space-x-4">

                                        <span className="text-gray-900 font-medium">
                                            {solution.label}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    <div className="mt-16 p-8 bg-red-50">
                        <div className="max-w-5xl">
                            <h3 className="text-3xl font-light mb-4">Enterprise-Grade Quality</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                Our custom software development follows industry best practices including microservices architecture, API-first design, comprehensive testing, security audits, and full documentation. We deliver production-ready code that your team can maintain and extend.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-white dark:bg-gray-900 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-800">
                                    Agile Methodology
                                </span>
                                <span className="px-4 py-2 bg-white dark:bg-gray-900 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-800">
                                    CI/CD Pipeline
                                </span>
                                <span className="px-4 py-2 bg-white dark:bg-gray-900 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-800">
                                    Cloud-Native
                                </span>
                                <span className="px-4 py-2 bg-white dark:bg-gray-900 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-800">
                                    Security First
                                </span>
                                <span className="px-4 py-2 bg-white dark:bg-gray-900 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-800">
                                    Scalable Architecture
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Industries We Serve */}
            <section className="relative py-24 px-6 bg-white dark:bg-gray-900/50">
                <Container>
                    <div className="max-w-5xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-7xl font-light mb-6">Industries We Serve</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Deep expertise across multiple sectors, with solutions tailored to industry-specific challenges and compliance requirements.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((industry, index) => (
                            <Card
                                key={index}
                                className="group"
                            >
                                <div className="p-6 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl text-white font-light">{industry.name}</h3>
                                        <svg
                                            className="w-5 h-5 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-white dark:text-gray-400 text-sm leading-relaxed">
                                        {industry.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>


            <ProcessFlow processSteps={processSteps} />





            <section className="relative py-24 px-6 bg-white">
                <Container>
                    <div className="max-w-5xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-7xl font-light mb-6">
                            Technology Stack
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            We leverage cutting-edge technologies and frameworks to build robust,
                            scalable solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* AI & ML */}
                        <div>
                            <h3 className="font-light text-lg mb-4">AI & ML</h3>
                            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <Tech icon={SiTensorflow} label="TensorFlow" name="tensorflow" />
                                <Tech icon={SiPytorch} label="PyTorch" name="pytorch" />
                                <Tech icon={SiScikitlearn} label="Scikit-learn" name="scikitlearn" />
                                <Tech icon={SiHuggingface} label="Hugging Face" name="huggingface" />
                                <Tech icon={SiOpenai} label="OpenAI API" name="openai" />
                                <Tech icon={SiLangchain} label="LangChain" name="langchain" />

                            </ul>
                        </div>

                        {/* Data Engineering */}
                        <div>
                            <h3 className="font-light text-lg mb-4">Data Engineering</h3>
                            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <Tech icon={SiApachespark} label="Apache Spark" name="apachespark" />
                                <Tech icon={SiApachekafka} label="Apache Kafka" name="apachekafka" />
                                <Tech icon={SiApacheairflow} label="Airflow" name="apacheairflow" />
                                <Tech icon={SiDbt} label="dbt" name="dbt" />
                                <Tech icon={SiSnowflake} label="Snowflake" name="snowflake" />
                                <Tech icon={SiGooglebigquery} label="BigQuery" name="googlebigquery" />

                            </ul>
                        </div>

                        {/* Backend */}
                        <div>
                            <h3 className="font-light text-lg mb-4">Backend</h3>
                            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <Tech icon={SiPython} label="Python" name="python" />
                                <Tech icon={SiDjango} label="Django" name="django" />
                                <Tech icon={SiNodedotjs} label="Node.js" name="nodedotjs" />
                                <Tech icon={SiGo} label="Go" name="go" />
                                <Tech icon={SiSpring} label="Spring" name="spring" />
                                <Tech icon={SiPostgresql} label="PostgreSQL" name="postgresql" />
                                <Tech icon={SiMongodb} label="MongoDB" name="mongodb" />

                            </ul>
                        </div>

                        {/* Frontend */}
                        <div>
                            <h3 className="font-light text-lg mb-4">Frontend</h3>
                            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <Tech icon={SiReact} label="React" name="react" />
                                <Tech icon={SiNextdotjs} label="Next.js" name="nextdotjs" />
                                <Tech icon={SiTypescript} label="TypeScript" name="typescript" />
                                <Tech icon={SiTailwindcss} label="Tailwind CSS" name="tailwindcss" />
                                <Tech icon={SiVuedotjs} label="Vue.js" name="vuedotjs" />
                                <Tech icon={SiReact} label="React Native" name="reactnative" />

                            </ul>
                        </div>
                    </div>
                </Container>
            </section>



            <section className="relative py-24 px-6 bg-white">
                <Container>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">

                            {/* Content */}
                            <div>
                                <h2 className="text-7xl md:text-4xl font-light mb-6">
                                    Application Migration Services
                                </h2>

                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                                    Modernize your legacy systems with zero downtime. We specialize in
                                    migrating applications to cloud platforms, upgrading outdated
                                    technology stacks, and transforming monolithic architectures into
                                    scalable microservices.
                                </p>

                                <h3 className="text-3xl font-light mb-6">
                                    Migration Expertise
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Left column */}
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>On-premise to AWS / Azure / GCP</span>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Legacy database migrations</span>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Monolith to microservices</span>
                                        </div>
                                    </div>

                                    {/* Right column */}
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Platform modernization</span>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Zero-downtime migrations</span>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Data integrity assurance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative">
                                <img
                                    src="/cloud.png"
                                    alt="Application Migration Services"
                                    className="w-full max-w-md mx-auto"
                                />
                            </div>

                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section
                className="
    relative
    py-24
    px-2
    bg-[url('/r.png')]
    bg-cover
    bg-center
    bg-no-repeat
    text-white
  "
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-4xl md:text-7xl font-light">
                            Ready to Transform Your Business with AI?
                        </h2>

                        <p className="text-xl md:text-3xl text-red-100 leading-relaxed">
                            Let&apos;s discuss how our AI, data, and software solutions can drive
                            measurable results for your organization.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="
              text-lg
              px-8
              bg-white
              text-red-600
              hover:bg-red-50
              border-white
            "
                                >
                                    Schedule a Consultation
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>


        </>
    );
}