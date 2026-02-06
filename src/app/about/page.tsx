import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Tecverse, our mission, vision, and leadership team dedicated to empowering businesses through innovative technology solutions.',
};

export default function AboutPage() {
    return (
        <>

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-[url('/aboutus.png')] bg-cover bg-center bg-no-repeat bg-fixed scale-105"
                    aria-hidden="true"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-xl">
                            About Tecverse
                        </h1>

                        <p className="text-xl sm:text-2xl text-white/90 leading-relaxed drop-shadow-lg">
                            A dynamic and forward-thinking technology solutions company dedicated to
                            empowering businesses through innovation and excellence.
                        </p>
                    </div>
                </Container>
            </section>



            <section className="relative py-24 bg-[#f7f7f7] dark:bg-slate-900 overflow-hidden">

                <Container className="relative z-10">
                    <div className="max-w-6xl mx-auto">

                        {/* Section Header */}
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                                Company Overview
                            </h2>
                            <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                Tecverse is a dynamic and forward-thinking technology solutions company dedicated to empowering businesses through innovation and excellence. Our relentless focus on delivering tailored solutions that address the unique needs of each client sets us apart in the competitive landscape of the IT industry. With a team of highly skilled professionals and a passion for problem-solving, Tecverse is committed to helping organizations harness the power of technology to achieve their goals and drive sustainable growth.
                            </p>
                        </div>

                        {/* Timeline Wrapper */}
                        <div className="relative space-y-10">

                            {/* Vertical Center Line */}
                            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-red-500 -translate-x-1/2"></div>

                            {/* === ITEM 1 === */}
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-12 items-center">

                                {/* Card - Left */}
                                <div className="md:text-right">
                                    <div className="inline-block bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            Safety
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300">
                                            Safety is foundational to everything we do. At Tecverse, we
                                            implement robust security standards, protect sensitive data, and
                                            ensure operational resilience across all projects. Our proactive
                                            approach minimizes risk while enabling teams and clients to
                                            operate with confidence.                                        </p>
                                    </div>
                                </div>

                                {/* Line + Dot */}
                                <div className="relative flex justify-center">
                                    <span className="absolute w-4 h-4 bg-green-500 rounded-full"></span>
                                </div>

                                {/* Image - Right */}
                                <div className="flex justify-center">
                                    <img
                                        src="/safety.png"
                                        alt="Safety"
                                        className="w-64"
                                    />
                                </div>
                            </div>

                            {/* === ITEM 2 === */}
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-12 items-center">

                                {/* Image - Left */}
                                <div className="flex justify-center md:justify-end">
                                    <img
                                        src="/communication.png"
                                        alt="Communication"
                                        className="w-64"
                                    />
                                </div>

                                {/* Line + Dot */}
                                <div className="relative flex justify-center">
                                    <span className="absolute w-4 h-4 bg-green-500 rounded-full"></span>
                                </div>

                                {/* Card - Right */}
                                <div>
                                    <div className="inline-block bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            Communication
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300">
                                            We believe clear communication drives successful outcomes.
                                            Tecverse maintains open, transparent, and timely dialogue with
                                            clients and stakeholders, ensuring alignment at every stage of
                                            the journey — from strategy and development to deployment and
                                            ongoing support                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* === ITEM 3 === */}
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-12 items-center">

                                {/* Card - Left */}
                                <div className="md:text-right">
                                    <div className="inline-block bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            Transparency
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300">
                                            Transparency defines our partnerships. We provide clear
                                            visibility into processes, timelines, and decisions, empowering
                                            our clients with accurate insights and honest reporting. This
                                            openness fosters trust and strengthens long-term collaboration.                                        </p>
                                    </div>
                                </div>

                                {/* Line + Dot */}
                                <div className="relative flex justify-center">
                                    <span className="absolute w-4 h-4 bg-green-500 rounded-full"></span>
                                </div>

                                {/* Image - Right */}
                                <div className="flex justify-center">
                                    <img
                                        src="/transparency.png"
                                        alt="Transparency"
                                        className="w-64"
                                    />
                                </div>
                            </div>

                            {/* === ITEM 4 === */}
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-12 items-center">

                                {/* Image - Left */}
                                <div className="flex justify-center md:justify-end">
                                    <img
                                        src="/accountability.png"
                                        alt="Accountability"
                                        className="w-64"
                                    />
                                </div>

                                {/* Line + Dot */}
                                <div className="relative flex justify-center">
                                    <span className="absolute w-4 h-4 bg-green-500 rounded-full"></span>
                                </div>

                                {/* Card - Right */}
                                <div>
                                    <div className="inline-block bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            Accountability
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300">
                                            Accountability is at the heart of our culture. Tecverse takes
                                            full ownership of commitments, timelines, and outcomes. We hold
                                            ourselves responsible for delivering measurable value while
                                            continuously improving through feedback and performance review.                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>



            <section className="relative py-28 overflow-hidden bg-[#f7f6f4] dark:bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f7f6f4] via-[#f7f6f4]/80 to-transparent dark:from-slate-900 dark:via-slate-900/80"></div>

                <Container className="relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900 dark:text-white mb-16 tracking-tight">
                            Our Mission & Vision
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                                    Our Vision
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    To be a global leader in providing innovative technology solutions
                                    that empower businesses to thrive in the digital age. We envision a
                                    future where every organization has access to the tools and
                                    expertise needed to unlock their full potential and achieve
                                    sustainable growth.
                                </p>
                            </div>

                            {/* Mission */}
                            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                                    Our Mission
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    To deliver exceptional value to our clients by leveraging
                                    cutting-edge technology, fostering a culture of innovation, and
                                    providing unparalleled customer service. We are committed to
                                    building long-term partnerships based on trust, integrity, and
                                    mutual success.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>


            {/* Leadership Team */}
            <section className="relative py-28  overflow-hidden bg-[#f7f7f7]">


                <Container className="relative z-10">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                            Leadership Team
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Vision-driven leaders shaping technology, talent, and transformation
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">

                        {/* Nawaz */}
                        <div className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative flex flex-col gap-6">
                                <div className="flex items-center gap-5">
                                    <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                        NS
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-sans text-slate-900 dark:text-white">
                                            Nawaz S.
                                        </h3>
                                        <p className="text-red-600 font-medium">
                                            Founder & CTO
                                        </p>
                                    </div>
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    A visionary entrepreneur driving Tecverse’s mission to deliver
                                    technology-first talent solutions. With 10+ years of experience in
                                    recruitment and staffing, Nawaz bridges innovation with execution.
                                </p>

                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    His global outlook and hands-on leadership enable Tecverse to build
                                    long-term partnerships, transform ideas into scalable systems, and
                                    stay ahead in a fast-moving IT ecosystem.
                                </p>
                            </div>
                        </div>

                        {/* Ali */}
                        <div className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative flex flex-col gap-6">
                                <div className="flex items-center gap-5">
                                    <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                        A
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-sans text-slate-900 dark:text-white">
                                            Ali
                                        </h3>
                                        <p className="text-red-600 font-medium">
                                            Co-Founder & COO
                                        </p>
                                    </div>
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    A seasoned operations leader with over a decade of experience in
                                    talent management and IT operations. Ali ensures Tecverse runs with
                                    precision, efficiency, and scale.
                                </p>

                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    From building high-performance outsourcing teams to shaping inclusive
                                    company culture, Ali’s leadership is the backbone of Tecverse’s
                                    operational excellence.
                                </p>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>



            <section className="py-24 bg-[#f7f7f7] dark:bg-slate-800">
                <Container>
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Why Choose Tecverse?
                        </h2>
                        <p className="text-lg text-slate-800">
                            Trusted by businesses of all scales, from startups to enterprises
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">

                        {[
                            {
                                title: "Global Expertise",
                                desc: "Strategically located offices worldwide with access to top-tier talent across North America and Asia-Pacific regions.",
                                img: "/global expertise.jpg",
                            },
                            {
                                title: "Proven Track Record",
                                desc: "Decades of combined leadership experience in technology solutions, staffing, and talent management.",
                                img: "/ProvenTrackRecord.png",
                            },
                            {
                                title: "End-to-End Solutions",
                                desc: "From recruitment and offshoring to custom development and AI integration, we cover all your technology needs.",
                                img: "/aioffshoring.png",
                            },
                            {
                                title: "Client-Centric Approach",
                                desc: "Tailored solutions designed to align with your unique business objectives, culture, and values.",
                                img: "/clientcentric.png",
                            },
                            {
                                title: "Innovation Focus",
                                desc: "Continuously evolving to leverage cutting-edge technologies and deliver solutions that drive real business value.",
                                img: "/innovationfocus.png",
                            },
                            {
                                title: "Long-Term Partnerships",
                                desc: "Building relationships based on trust, integrity, and mutual success that stand the test of time.",
                                img: "/longlasting.png",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative px-8 py-12 flex flex-col items-center text-center"
                            >
                                {/* Vertical divider */}
                                {index % 3 !== 0 && (
                                    <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-32 w-px bg-slate-700" />
                                )}
                                {index % 2 !== 0 && (
                                    <span className="hidden md:block lg:hidden absolute left-0 top-1/2 -translate-y-1/2 h-32 w-px bg-slate-700" />
                                )}

                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-72 mb-6 opacity-90"
                                />

                                {/* Text */}
                                <h3 className="text-xl font-semibold text-black mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-slate-800 leading-relaxed max-w-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>


            {/* CTA Section */}
            <section className="relative py-20 bg-[url('/letsbuild.png')] bg-cover bg-center">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl text-left sm:text-4xl font-bold text-white mb-4">
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Ready to explore how Tecverse can transform your business? Get in touch with our team today.
                        </p>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-red-500 text-purple-700 hover:bg-gray-100 border-0 px-8 py-4 text-lg font-semibold shadow-xl transform transition-all duration-300 hover:scale-105"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

        </>
    );
}
