

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import TrustedByPage from '@/components/TrustedBy';

export default function Home() {
  const services = [
    {
      id: '1',
      title: 'Development Services',
      description:
        'Custom-built software solutions including web apps, mobile apps, and enterprise systems designed to scale with your business.',
      image: "/dev.png",

    },
    {
      id: '2',
      title: 'Offshoring and Staffing Solutions',
      description:
        'Build and scale distributed teams with vetted global talent. We handle hiring, onboarding, compliance, and operations so you can focus on growth.',
      image: '/offshoring.png',
    },

    {
      id: '3',
      title: 'Shared & Managed IT Services',
      description:
        'Reliable IT operations and infrastructure management, including monitoring, maintenance, security, and support—delivered through flexible shared or fully managed models.',
      image: '/IT-sol.png',
    }


  ];


  return (
    <>


      <section className="relative w-full overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/AI-Home.mp4" type="video/mp4" />
        </video>

      </section>



      <section className="relative overflow-hidden py-28 bg-[#f7f7f7] dark:bg-slate-900">

        <img
          src="https://cdn.prod.website-files.com/64f6f2c0e3f4c5a91c1e823a/68f033b0915dbc2bf6cc6eb9_hp-tabs_bg.svg"
          alt=""
          className="
    pointer-events-none
    absolute
    top-[-6rem]
    left-1/2
    -translate-x-1/2
    w-[110%]
    max-w-none
    opacity-20
    dark:opacity-30
  "
        />


        <Container className="relative z-10">
          {/* Heading Content */}
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2
              className="
          font-sans
          font-bold
          tracking-tight
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          text-slate-900
          dark:text-white
          mb-6
        "
            >
              Expansive in Reach, <br className="hidden sm:block" />
              Personalized in Service
            </h2>

            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              We work with businesses of all sizes — from early-stage startups
              to global enterprises. With a strong international presence,
              Tecverse delivers reliable solutions, seamless collaboration,
              and access to world-class talent.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card
              title="Execution Excellence"
              description="A skilled team of engineers, consultants, and strategists focused on delivering measurable results."
            />
            <Card
              title="Global Presence"
              description="Strategically positioned teams across regions to provide continuous support and faster delivery."
            />
            <Card
              title="Innovation Driven"
              description="We embrace modern technologies and best practices to build future-ready digital solutions."
            />
          </div>
        </Container>
      </section>



      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#141414] to-[#2a2a2a] dark:from-slate-900 dark:to-slate-800">
        <Container>
          {/* Heading */}
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 px-4">
            <h2 className="font-sans font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Reliable solutions for mission-critical growth.
            </h2>
            <p className="text-base sm:text-lg text-white/90 dark:text-slate-300">
              End-to-end technology and talent solutions designed to help
              businesses scale with confidence.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 px-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90" />

                {/* Content */}
                <div className="relative flex flex-col justify-end p-6 sm:p-8 text-white min-h-[420px]">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/90 mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <span className="text-xs sm:text-sm text-white/60 font-sans">
                    {String(service.id).padStart(2, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <Link href="/services">
              <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
                View All Services →
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <TrustedByPage />


      <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-8">
              {/* <div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                  Why Choose Tecverse
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                  We combine technology, talent, and execution excellence to help
                  businesses scale with confidence.
                </p>
              </div> */}

              {/* Image */}
              <div className="relative">
                <img
                  src="/whychooseourcomp.png"
                  alt="Why choose Tecverse"
                  className="w-full h-[720px] object-cover bg-black"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">
              {[
                {
                  title: 'Software Excellence',
                  desc: 'From ideation to deployment, we build reliable, scalable, and future-ready software solutions.',
                },
                {
                  title: 'Seamless Migration',
                  desc: 'Modernize legacy systems with minimal downtime and zero disruption to business operations.',
                },
                {
                  title: 'Global Talent Access',
                  desc: 'Scale faster with access to skilled professionals from global talent markets.',
                },
                {
                  title: 'Recruitment Expertise',
                  desc: 'Industry-focused hiring strategies that help you build high-performing teams faster.',
                },
                {
                  title: 'Operational Simplicity',
                  desc: 'We handle compliance, payroll, and operations so you can focus on growth.',
                },
                {
                  title: 'Career Enablement',
                  desc: 'Empowering professionals with guidance, growth opportunities, and long-term success.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex gap-2 "
                >

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-sans italic text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>


      <div className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-8 lg:pr-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Ready to Build
                  <span className="block mt-2">Something Great?</span>
                </h1>
                <p className="text-xl lg:text-2xl text-red-100 max-w-xl">
                  Transform your ideas into reality with our expert team. Let's create something extraordinary together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-white text-red-600 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Contact Us Today</span>
                  <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>


              </div>


            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px]  rounded-full blur-3xl"></div>
              </div>

              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 transform hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-red-500 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-red-500 rounded-br-3xl"></div>

                <div className="relative">
                  <img
                    src="/TB.png"
                    alt="Professional team member"
                    className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
                  />

                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-xl font-bold text-lg animate-bounce">
                    Let's Go!
                  </div>
                </div>
              </div>

              <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-400 rounded-lg rotate-12 animate-pulse opacity-80"></div>
              <div className="absolute bottom-20 left-0 w-12 h-12 bg-blue-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.1" />
          </svg>
        </div>
      </div>



    </>
  );
}
