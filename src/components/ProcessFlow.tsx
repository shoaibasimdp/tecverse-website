"use client";

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

interface ProcessFlowProps {
    processSteps: ProcessStep[];
}

export function ProcessFlow({ processSteps }: ProcessFlowProps) {
    return (
        <>
            <section className="relative py-24 px-6 overflow-hidden bg-white">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-7xl font-light mb-6">Our Development Process</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        A proven methodology that delivers results, from initial concept to production deployment and beyond.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative">
                            {index < processSteps.length - 1 && (
                                <div className={`absolute top-full left-1/2 w-0.5 h-20 -translate-x-1/2 ${index % 2 === 0 ? 'origin-top' : 'origin-bottom'}`}>
                                    <svg
                                        className="absolute top-0 left-1/2 -translate-x-1/2"
                                        width="400"
                                        height="120"
                                        viewBox="0 0 400 120"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d={index % 2 === 0 ? "M200,0 Q200,60 350,120" : "M200,0 Q200,60 50,120"}
                                            stroke="url(#gradient)"
                                            strokeWidth="3"
                                            strokeDasharray="8 8"
                                            className="animate-[dash_20s_linear_infinite]"
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            )}

                            <div
                                className={`group relative flex gap-6 p-8 mb-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-lg hover:shadow-3xl transition-all duration-500 border border-gray-200 dark:border-gray-700 ${index % 2 === 0 ? 'mr-auto ml-0 max-w-xl' : 'ml-auto mr-0 max-w-xl'
                                    }`}
                            >
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500 via-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                                <div className="flex-shrink-0">
                                    <div className="relative w-16 h-16 rounded-full bg-black flex items-center justify-center text-3xl font-light text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                        {step.number}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-red-500 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500" />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-3">
                                    <h3 className="text-3xl font-light bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-red-500/10 rounded-bl-full rounded-tr-3xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                @keyframes dash {
                    to {
                        stroke-dashoffset: -100;
                    }
                }
            `}</style>
        </>
    );
}