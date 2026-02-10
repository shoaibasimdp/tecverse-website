import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from "next/image";
import OpenPositions from '@/components/openpositions';

export const metadata: Metadata = {
    title: 'Careers at tecverse',
    description: 'Join tecverse and build the future of technology. Explore career opportunities in AI, software development, and more.',
};

interface JobListing {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
}

export default function CareersPage() {
    const jobListings: JobListing[] = [
        {
            id: '1',
            title: 'Senior AI Engineer',
            department: 'Engineering',
            location: 'San Francisco, CA / Remote',
            type: 'Full-time',
            experience: '5+ years',
            description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.'
        },
        {
            id: '2',
            title: 'Full-Stack Developer',
            department: 'Engineering',
            location: 'New York, NY / Hybrid',
            type: 'Full-time',
            experience: '3-5 years',
            description: 'Build scalable web applications and APIs using modern technologies and best practices.'
        },
        {
            id: '3',
            title: 'Product Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            experience: '3+ years',
            description: 'Create intuitive user experiences and beautiful interfaces for our AI-powered products.'
        },
        {
            id: '4',
            title: 'Data Scientist',
            department: 'Analytics',
            location: 'Boston, MA / Hybrid',
            type: 'Full-time',
            experience: '4+ years',
            description: 'Analyze complex datasets and build predictive models to drive business insights.'
        },
        {
            id: '5',
            title: 'DevOps Engineer',
            department: 'Infrastructure',
            location: 'Seattle, WA / Remote',
            type: 'Full-time',
            experience: '4+ years',
            description: 'Design and maintain scalable cloud infrastructure and CI/CD pipelines.'
        }
    ];

    const benefits = [
        {
            icon: '💰',
            title: 'Competitive Salary',
            description: 'Industry-leading compensation with performance bonuses'
        },
        {
            icon: '🏥',
            title: 'Health & Wellness',
            description: 'Comprehensive medical, dental, and vision insurance'
        },
        {
            icon: '⏰',
            title: 'Flexible Work',
            description: 'Remote-first culture with flexible hours'
        },
        {
            icon: '📚',
            title: 'Learning & Development',
            description: 'Annual budget for courses, conferences, and certifications'
        },
        {
            icon: '🏖️',
            title: 'Generous PTO',
            description: 'Unlimited vacation days and paid parental leave'
        },
        {
            icon: '🎯',
            title: 'Equity',
            description: 'Stock options for all full-time employees'
        }
    ];

    return (
        <>

            <section className="relative w-full h-[80vh] overflow-hidden bg-[#F9F7F4]"
                style={{
                    backgroundImage: "url('/careershero.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed' // Optional: for parallax effect
                }}>
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-red-500 rounded-full filter blur-5xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500 rounded-full filter blur-5xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <Container className="relative z-10 h-full flex items-center">
                    <div className="max-w-4xl">
                        <h1 className="text-7xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
                            Build the Future
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-400">
                                With Us
                            </span>
                        </h1>
                        <p className="text-xl md:text-3xl text-gray-200 mb-8 max-w-5xl">
                            Join a team of innovators, creators, and problem-solvers transforming industries through cutting-edge technology.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#open-positions">
                                <Button
                                    size="lg"
                                    className="bg-red-500 hover:from-red-700 hover:to-red-700 text-white border-0 px-8 py-3 text-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                                >
                                    View Open Positions
                                </Button>
                            </Link>
                            <Link href="#culture">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                                >
                                    Learn About Our Culture
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            <section className="py-16 bg-[#222831]">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-light text-white mb-2">200+</div>
                            <div className="text-gray-300">Team Members</div>
                        </div>
                        <div>
                            <div className="text-4xl font-light text-white mb-2">15+</div>
                            <div className="text-gray-300">Countries</div>
                        </div>
                        <div>
                            <div className="text-4xl font-light text-white mb-2">4.8★</div>
                            <div className="text-gray-300">Employee Rating</div>
                        </div>
                        <div>
                            <div className="text-4xl font-light text-white mb-2">90%</div>
                            <div className="text-gray-300">Retention Rate</div>
                        </div>
                    </div>
                </Container>
            </section>

            <section id="culture" className="py-20 bg-white dark:bg-slate-900">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-7xl font-light text-slate-900 dark:text-white mb-4">
                            Our Culture & Values
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto">
                            We're building a workplace where everyone can do their best work and grow together
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="group p-8 text-center  bg-white dark:bg-slate-900  dark:border-slate-800 hover:duration-300">
                            <div className="mb-6 flex justify-center">
                                <Image
                                    src="/innovation.png"
                                    alt="Innovation"
                                    width={64}
                                    height={64}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-light text-slate-900 dark:text-white mb-3">
                                Innovation First
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                We encourage creative thinking and light ideas that push boundaries
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group p-8 text-center  bg-white dark:bg-slate-900 dark:border-slate-800 hover:duration-300">
                            <div className="mb-6 flex justify-center">
                                <Image
                                    src="/collaboration.png"
                                    alt="Collaboration"
                                    width={64}
                                    height={64}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-light text-slate-900 dark:text-white mb-3">
                                Collaboration
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                We believe diverse perspectives lead to better solutions
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group p-8 text-center bg-white dark:bg-slate-900 dark:border-slate-800 hover:duration-300">
                            <div className="mb-6 flex justify-center">
                                <Image
                                    src="/growth.png"
                                    alt="Growth"
                                    width={64}
                                    height={64}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-light text-slate-900 dark:text-white mb-3">
                                Growth Mindset
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                We invest in continuous learning and development
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="group p-8 text-center bg-white dark:bg-slate-900 dark:border-slate-800   hover:duration-300">
                            <div className="mb-6 flex justify-center">
                                <Image
                                    src="/balance.png"
                                    alt="Work Life Balance"
                                    width={64}
                                    height={64}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-light text-slate-900 dark:text-white mb-3">
                                Work-Life Balance
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                We support flexible schedules and personal wellbeing
                            </p>
                        </div>
                    </div>

                </Container>
            </section>




            <OpenPositions jobListings={jobListings} />




            <section className="py-24 bg-gray-50">
                <Container>
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-7xl font-light text-gray-900 mb-4">
                            Our Application Process
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                            We’ve designed a transparent and efficient process to find the best talent
                        </p>
                    </div>

                    {/* Process */}
                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-14 left-0 right-0 h-1 bg-green-500 rounded-full"></div>

                        {/* Step 1 */}
                        <div className="relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition">
                            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                                <span className="text-xl font-light text-white">1</span>
                            </div>
                            <h3 className="text-xl font-sans text-gray-900 mb-3">
                                Application
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Submit your resume and portfolio through our careers page
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition">
                            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                                <span className="text-xl font-light text-white">2</span>
                            </div>
                            <h3 className="text-xl font-sans text-gray-900 mb-3">
                                Review
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Our team reviews your application within 5 business days
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition">
                            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                                <span className="text-xl font-light text-white">3</span>
                            </div>
                            <h3 className="text-xl font-sans text-gray-900 mb-3">
                                Interviews
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Meet the team for technical and cultural fit discussions
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition">
                            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                                <span className="text-xl font-light text-white">4</span>
                            </div>
                            <h3 className="text-xl font-sans text-gray-900 mb-3">
                                Decision
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Receive an offer and officially join our team
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden">
                <section className="relative py-24 bg-[url('/joinourteam.png')] bg-cover bg-center bg-no-repeat">

                    {/* Dim overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    <Container className="relative z-10">
                        {/* LEFT aligned content */}
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-7xl font-light text-white mb-6">
                                Ready to Join Our Team?
                            </h2>

                            <p className="text-xl text-white mb-10">
                                Take the next step in your career and help us build the future of technology.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link href="#open-positions">
                                    <Button
                                        size="lg"
                                        className="bg-red-500 text-red-700 hover:bg-gray-100 border-0 px-8 py-4 text-lg font-light shadow-xl transition-transform duration-300 hover:scale-105"
                                    >
                                        Browse All Positions
                                    </Button>
                                </Link>

                                <Link href="/contact">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-4 text-lg font-light shadow-xl transition-transform duration-300 hover:scale-105"
                                    >
                                        Contact Recruiting
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>
            </section>


        </>
    );
}