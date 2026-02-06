import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';


export const metadata: Metadata = {
    title: 'Leadership Team | Tecverse',
    description: 'Meet the leadership team driving Tecverse forward.',
};

export default function LeadershipPage() {
    const leaders = [
        {
            name: 'Nawaz S.',
            title: 'Founder & Chief Technical Officer',
            bio: `Nawaz S. is a visionary entrepreneur and the driving force behind Tecverse's commitment to client success. With a decade of expertise in recruitment, staffing, and talent cultivation, he leads Tecverse in delivering innovative technology solutions tailored to organizational needs.

Drawing from global insights and personal engagement, Nawaz's expertise extends beyond traditional recruitment. He forges strong partnerships that enable collaborative achievements across borders, aligning teams with organizational values and long-term goals.

As Tecverse's CTO, Nawaz transforms ideas into scalable, future-ready solutions. His leadership ensures Tecverse continuously evolves, positioning the company as a strategic partner committed to staying ahead in the dynamic IT landscape.`,
        },
        {
            name: 'Ali M.',
            title: 'Co-founder & Chief Operations Officer',
            bio: `Ali is a seasoned IT leader with over 10 years of management and operational experience. His career has been shaped by a relentless focus on connecting talent with opportunity, playing a pivotal role in shaping Tecverse's core values.

With a strong grasp of hiring dynamics, talent retention, and contractor management, Ali ensures Tecverse delivers top-tier recruitment and IT outsourcing services. His leadership goes beyond transactions—building long-term partnerships tailored to client objectives.

Ali is also a trusted guide for job seekers, empowering candidates with strategic guidance and confidence to succeed in competitive markets.`,
        },
        {
            name: 'Naaz S.',
            title: 'Chief Executive Officer',
            bio: `Naaz is the visionary CEO of Tecverse, bringing extensive experience in driving organizational growth and innovation. Her strategic leadership has been instrumental in positioning Tecverse as a trusted provider of technology solutions.

With a deep understanding of market dynamics, Naaz oversees all aspects of Tecverse's operations—from strategic planning to execution—while maintaining a strong focus on customer satisfaction and service quality.

Dedicated to fostering a culture of excellence and innovation, Naaz empowers teams to think creatively and embrace change.`,
        },
    ];

    const getInitials = (name: string) =>
        name
            .split(' ')
            .map((n) => n[0])
            .join('');

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-[url('/leadership.png')] bg-cover bg-center bg-no-repeat bg-fixed py-32 text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Leadership Team
                    </h1>
                    <p className="text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
                        The leaders shaping Tecverse&apos;s vision, culture, and growth.
                    </p>
                </div>
            </section>

            {/* Leadership Cards */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {leaders.map((leader, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                {/* Initials Avatar */}
                                <div className="w-16 h-16 rounded-full bg-[#222831] text-white flex items-center justify-center text-xl font-bold mb-6">
                                    {getInitials(leader.name)}
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                                    {leader.name}
                                </h2>
                                <p className="text-red-600 dark:text-red-400 font-medium mb-4">
                                    {leader.title}
                                </p>

                                <div className="h-px bg-gradient-to-r from-transparent via-red-300  to-transparent mb-4" />

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    {leader.bio.substring(0, 160)}...
                                </p>

                                <button className="mt-4 text-red-600 dark:text-blue-400 font-medium text-sm hover:underline">
                                    Read More →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-24 bg-[#f7f7f7]">
                <div className="max-w-4xl mx-auto px-6 space-y-24">
                    {leaders.map((leader, index) => (
                        <div key={index} className="space-y-4">
                            {/* Name + Icons Row */}
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900">
                                        {leader.name}
                                    </h2>
                                    <p className="text-red-600 font-medium text-lg">
                                        {leader.title}
                                    </p>
                                </div>

                                {/* Social Icons */}
                                <div className="flex items-center gap-3">
                                    <a
                                        href="#"
                                        aria-label="LinkedIn"
                                        className="p-2"
                                    >
                                        <SiLinkedin className="w-5 h-5 text-blue-600" />
                                    </a>

                                    <a
                                        href="#"
                                        aria-label="Email"
                                        className="p-2"
                                    >
                                        <Mail className="w-5 h-5 text-slate-700" />
                                    </a>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-24" />

                            {/* Bio */}
                            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                                {leader.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Call to Action */}
            <section className="relative py-24 text-white">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                        alt="Join Our Team"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/70" />
                </div>

                {/* Content */}
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Join Our Team
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                        Discover opportunities to grow your career with Tecverse&apos;s
                        innovative and collaborative team.
                    </p>
                    <button className="px-8 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-slate-100 transition-colors">
                        View Open Positions
                    </button>
                </div>
            </section>

        </>
    );
}
