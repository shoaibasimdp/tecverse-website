import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
    title: 'Our Vision | tecverse',
    description: 'tecverse Vision Statement',
};

export default function VisionPage() {
    return (
        <>
            <section className="relative bg-[url('/ourvision.png')] bg-cover bg-center bg-no-repeat bg-fixed py-32 text-white">
                {/* Dim light overlay */}
                <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

                <Container>
                    {/* Content must be relative to stay above overlay */}
                    <div className="relative max-w-5xl mx-auto text-center">
                        <h1 className="text-4xl md:text-7xl font-light mb-6">
                            Our Vision
                        </h1>
                        <p className="text-xl text-red-200 leading-relaxed">
                            Shaping the future through technology and innovation.
                        </p>
                    </div>
                </Container>
            </section>


            <section className="py-24 bg-white dark:bg-slate-950">
                <Container>
                    <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                        <p className="text-3xl text-slate-600 dark:text-slate-300 font-light leading-relaxed text-center">
                            "To be the global catalyst for digital transformation, empowering businesses to achieve limit-less potential through intelligent technology, human-centric design, and sustainable innovation."
                        </p>
                        <div className="mt-16 grid gap-12 md:grid-cols-2">
                            <div>
                                <h3 className="text-3xl font-sans text-gray-900 dark:text-white mb-4">Innovation for Good</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We envision a world where technology solves the most complex challenges, improves quality of life, and creates opportunities for everyone.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-sans text-gray-900 dark:text-white mb-4">Global Connectivity</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Bridging gaps between cultures and economies through seamless digital solutions that bring the world closer together.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
