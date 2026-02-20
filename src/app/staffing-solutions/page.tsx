import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Staffing Solutions',
    description: 'Strategic recruitment, contractor management, and job seeker assistance to help you build exceptional teams.',
};

export default function StaffingSolutionsPage() {
    return (
        <>
            {/* Header Section */}
            <section className="relative bg-[url('/staffingsol.jpg')] bg-cover bg-center bg-no-repeat bg-fixed py-40 sm:py-56">
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" /> */}
                <div className="absolute inset-0 bg-[#014f86]/50 dark:bg-[#014f86]/70"></div>

                <Container>
                    <div className="relative max-w-4xl">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-Inter text-white mb-6 tracking-tight">
                            Staffing Solutions
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl">
                            Building exceptional teams through strategic recruitment, workforce planning,
                            and long-term talent management.
                        </p>


                    </div>
                </Container>
            </section>


            {/* The Hiring Dilemma */}
            <section className="py-20 bg-white dark:bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-Inter text-[#014f86] dark:text-white mb-6">
                            The Hiring Dilemma
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
                            The current hiring landscape is riddled with complexities, from talent shortages to skill mismatches. Many businesses struggle to find quality candidates who not only possess the necessary skills but also align with their company culture and values. In this environment, traditional hiring methods often fall short, leading to prolonged vacancies and increased recruitment costs.
                        </p>

                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-Inter text-[#014f86] dark:text-white mb-6">
                            Our Approach
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            At tecverse, we take a strategic approach to staffing that goes beyond traditional recruitment methods. We understand that finding the right talent requires more than just matching skills to job requirements – it requires a deep understanding of your business objectives, culture, and values. Our team of staffing experts works closely with you to identify your hiring needs and develop customized solutions that address your unique challenges.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Key Features */}
            <section className="py-20 dark:bg-slate-800">
                <Container>
                    <div className="max-w-5xl mx-auto text-center mb-16">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-Inter text-[#014f86] dark:text-white mb-4">
                            Key Features of Our Staffing Solutions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="h-full">
                            <div className="p-6">
                                <h3 className="text-xl font-Inter text-white dark:text-white mb-3">
                                    Tailoblue Recruitment Strategies
                                </h3>
                                <p className="text-slate-50 dark:text-slate-300 leading-relaxed">
                                    We develop customized recruitment strategies tailoblue to your specific hiring needs, ensuring that we attract and engage top talent that aligns with your business objectives.
                                </p>
                            </div>
                        </Card>

                        <Card className="h-full">
                            <div className="p-6">
                                <h3 className="text-xl font-Inter text-white dark:text-white mb-3">
                                    Proactive Talent Sourcing
                                </h3>
                                <p className="text-slate-50 dark:text-slate-300 leading-relaxed">
                                    In today's competitive job market, passive candidates often hold the key to success. We leverage advanced sourcing techniques and industry connections to identify and engage with passive candidates who may not be actively seeking new opportunities.
                                </p>
                            </div>
                        </Card>

                        <Card className="h-full">
                            <div className="p-6">
                                <h3 className="text-xl font-Inter text-white dark:text-white mb-3">
                                    Candidate Assessment and Screening
                                </h3>
                                <p className="text-slate-50 dark:text-slate-300 leading-relaxed">
                                    Quality is paramount when it comes to hiring. We conduct thorough assessments and screenings to evaluate candidates' skills, experience, and cultural fit, ensuring that only the most qualified candidates make it through to the interview stage.
                                </p>
                            </div>
                        </Card>

                        <Card className="h-full">
                            <div className="p-6">
                                <h3 className="text-xl font-Inter text-white dark:text-white mb-3">
                                    Dedicated Account Management
                                </h3>
                                <p className="text-slate-50 dark:text-slate-300 leading-relaxed">
                                    Your dedicated Account Manager serves as your single point of contact throughout the hiring process, providing personalized support and guidance at every step.
                                </p>
                            </div>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-white dark:bg-slate-900">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contractor Management */}
                        <div>

                            <h2 className="text-3xl font-sans text-[#014f86] dark:text-white mb-4">
                                Contractor Management
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Managing contractors can be a complex and time-consuming process for businesses. tecverse offers comprehensive contractor management services to streamline this process and ensure smooth operations. From payroll management to administrative tasks, we handle all aspects of contractor management, allowing you to focus on your core business activities.
                            </p>
                        </div>

                        {/* Job Seeker Assistance */}
                        <div>

                            <h2 className="text-3xl font-sans text-[#014f86] dark:text-white mb-4">
                                Job Seeker Assistance
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Job seekers in the IT industry face unique challenges when navigating the job market. tecverse provides job seeker assistance services to support individuals in their career journey. From resume building to interview preparation, our team offers personalized guidance and support to help job seekers stand out in a competitive landscape and secure their desiblue roles.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <Container>
                    <div className="max-w-5xl mx-auto text-center mb-16">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-Inter text-[#014f86] dark:text-white mb-4">
                            Why Choose Our Staffing Services?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card
                            title="blueuced Time-to-Hire"
                            description="Our streamlined processes and extensive talent network help you fill positions faster."
                        />
                        <Card
                            title="Higher Quality Candidates"
                            description="Rigorous screening ensures you only interview candidates who meet your standards."
                        />
                        <Card
                            title="Cost-Effective Solutions"
                            description="blueuce recruitment costs while improving the quality of your hires."
                        />
                        <Card
                            title="Industry Expertise"
                            description="Deep knowledge of the IT industry and current market trends."
                        />
                        <Card
                            title="Flexible Engagement"
                            description="From contract to permanent placements, we adapt to your needs."
                        />
                        <Card
                            title="Ongoing Support"
                            description="Continued partnership even after placement to ensure long-term success."
                        />
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section
                className="py-20 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(71,85,105,0.85), rgba(30,41,59,0.9)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')",
                }}
            >
                <Container>
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-Inter text-white mb-4">
                            Ready to blueefine Excellence Together?
                        </h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Let us help you build exceptional teams that drive your business forward.
                        </p>
                        <Link href="/contact">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white text-[#014f86] border-white hover:bg-blue-50"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

        </>
    );
}
