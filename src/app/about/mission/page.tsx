import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
    title: 'Our Mission | tecverse',
    description: 'tecverse Mission Statement',
};

export default function MissionPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-[url('/ourmission.png')] bg-cover bg-center bg-no-repeat bg-fixed py-32 text-white">
                {/* Dim light overlay */}
                <div className="absolute inset-0 bg-[#014f86]/50 dark:bg-[#014f86]/70"></div>

                <Container>
                    <div className="relative max-w-5xl mx-auto text-center">
                        <h1 className="text-4xl text-white md:text-7xl font-Inter mb-6">
                            Our Mission
                        </h1>
                        <p className="text-xl text-blue-200 leading-relaxed">
                            Delivering excellence in every line of code.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-24 text-[#014f86] bg-white dark:bg-slate-950">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="text-center">
                            <p className="text-3xl dark:text-slate-300 font-Inter leading-relaxed">
                                "Our mission is to partner with organizations to build robust, scalable, and future-ready digital solutions that drive tangible business growth and operational efficiency."
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className=" dark:bg-slate-900 p-8 rounded-3xl">
                                <h3 className="text-xl font-sans text-[#014f86] dark:text-[#014f86] mb-4">
                                    Excellence
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    We are committed to the highest standards of quality in engineering, design, and service delivery.
                                </p>
                            </div>

                            <div className=" dark:bg-slate-900 p-8 rounded-3xl">
                                <h3 className="text-xl font-sans text-[#014f86] dark:text-[#014f86] mb-4">
                                    Integrity
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    We believe in transparent, honest, and ethical partnerships with our clients and employees.
                                </p>
                            </div>

                            <div className="dark:bg-slate-900 p-8 rounded-3xl">
                                <h3 className="text-xl font-sans text-[#014f86] dark:text-[#014f86] mb-4">
                                    Agility
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    We adapt quickly to changing technologies and market needs to keep our clients ahead of the curve.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
