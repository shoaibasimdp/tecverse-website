

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import TrustedByPage from '@/components/TrustedBy';
import Image from "next/image";
import AIMonitoringDashboard from '@/components/AIMonitoringDashboard';


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


      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hh.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex items-center h-full px-6 sm:px-12 lg:px-20">

          <div className="max-w-5xl">

            <h1 className="text-4xl  sm:text-6xl md:text-4xl lg:text-8xl font-light text-gray-100 leading-tight">
              Transforming Ideas <br />
              into Intelligent Systems
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-slate-200 max-w-2xl">
              We help organizations automate operations, unlock insights from data,
              and deploy scalable AI solutions that deliver measurable ROI.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link href={"/contact"}> Talk to an AI Expert</Link>
              </button>

              <button className="px-8 py-4 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300">
                <Link href={"/services"}>Explore Our AI Services</Link>
              </button>

            </div>

          </div>
        </div>
      </section>



      <section className="py-20 lg:py-12 bg-white relative overflow-hidden">

        <div className=" mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div className="max-w-5xl">

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-slate-900 mb-6 leading-tight">
              The Business Challenge
            </h2>

            <p className="text-xl text-slate-600 mb-10">
              AI is no longer optional. Execution is everything.
            </p>

            {/* Challenge Card */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-10 border border-slate-200 shadow-sm">

              <h3 className="text-xl font-semibold mb-6 text-red-600">
                Today’s organizations face:
              </h3>

              <div className="space-y-4">
                {[
                  "Rising operational costs",
                  "Manual and repetitive workflows",
                  "Underutilized data assets",
                  "Slow decision-making cycles",
                  "Increasing customer expectations"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

            </div>

            <p className="text-slate-600 mb-6">
              Most companies recognize the importance of AI — but struggle with
              where to begin, how to implement effectively, and how to scale.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <h3 className=" font-semibold text-red-600">
                That’s where Tecverse comes in.
              </h3>

              <p className="text-slate-600">
                We turn AI ambition into measurable business outcomes.
              </p>
            </div>
          </div>




          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="bg-white p-12">
              <img
                src="/challenges.png"
                alt="AI Analytics Dashboard showing real-time data insights"
                className="w-full h-full"
              />
            </div>

          </div>

        </div>
      </section>


      <section className="py-20 lg:py-12 bg-white">
        <div className=" mx-auto px-6">
          <div className="text-center mb-16">

            <h1 className="text-7xl font-light mb-12">Our AI & Automation Services</h1>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              End-to-End AI Solutions — From Strategy to Scale
            </p>
          </div>

          <div className="space-y-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="/strategy.png"
                  className="relative"
                  alt="Transformation from scattered data systems to unified intelligence platform"
                />
              </div>
              <div>
                <h3 className="text-5xl font-light mb-4">
                  AI Strategy & Roadmap Development
                </h3>
                <p className="text-gray-600 mb-12">
                  We help you identify high-impact AI opportunities and create a clear, ROI-driven implementation roadmap.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg  text-gray-900">AI Readiness Assessment</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">Use Case Identification & Prioritization</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">Business Case & ROI Forecasting</h4>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <span className="text-red-400 mr-1">• </span>
                    <div>
                      <h4 className='font-sans text-lg text-gray-900'>Responsible AI Framework Design</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-5xl font-light mb-4">
                  Intelligent Process Automation
                </h3>
                <p className="text-gray-600 mb-12">
                  Eliminate repetitive tasks and increase operational efficiency with AI-powered automation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg  text-gray-900">AI + RPA Integrationt</h4>

                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">Document & Invoice Processing</h4>

                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">HR & Finance Automation</h4>

                    </div>
                  </div>
                  <div className='flex items-start'>
                    <span className="text-red-400 mr-1">• </span>
                    <div>
                      <h4 className='font-sans text-lg text-gray-900'>Workflow Optimization</h4>
                    </div>
                  </div>
                  <p className='text-gray-600 text-lg'><span className='font-bold text-red-500'>Result : </span>Reduced manual effort, lower costs, faster execution.</p>
                </div>

              </div>
              <div className="relative order-1 lg:order-2">
                <img
                  src="/rpa.png"
                  className="relative"
                  alt="AI automation workflow showing data input, processing, decision points, and automated actions"
                />

              </div>
            </div>

            {/* Block 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="/ml.png"
                  className="relative h-full w-full"
                />

              </div>

              <div>

                <h3 className="text-5xl font-light mb-4">
                  Custom Machine Learning Solutions           </h3>
                <p className="text-gray-600 mb-12">
                  We build intelligent models tailored to your business goals.                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg  text-gray-900">Predictive Analytics</h4>

                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">Demand Forecasting</h4>

                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">Fraud Detection Systems</h4>

                    </div>
                  </div>
                  <div className='flex items-start'>
                    <span className="text-red-400 mr-1">• </span>
                    <div>
                      <h4 className='font-sans text-lg text-gray-900'>Customer Behavior Modeling</h4>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <span className="text-red-400 mr-1">• </span>
                    <div>
                      <h4 className='font-sans text-lg text-gray-900'>Recommendation Engines</h4>
                    </div>
                  </div>
                  <p className='text-gray-600 text-lg'><span className='font-bold text-red-500'>Result : </span>Data-driven decisions with measurable impact.</p>

                </div>
              </div>
            </div>


            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">

                <h3 className="text-5xl font-light mb-4">
                  Generative AI & Conversational Systems
                </h3>
                <p className="text-gray-600 mb-12">
                  Harness the power of LLMs to enhance productivity and customer engagement.                </p>
                <div className="space-y-4">
                  <div className="flex px-5 items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg  text-gray-900">AI Chatbots & Virtual Assistants</h4>

                    </div>
                  </div>
                  <div className="flex px-5 items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">Enterprise Knowledge Assistants</h4>

                    </div>
                  </div>
                  <div className="flex px-5 items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">AI Copilots for Internal Teams</h4>

                    </div>
                  </div>
                  <div className='flex px-5 items-start'>
                    <span className="text-red-400 mr-1">• </span>
                    <div>
                      <h4 className='font-sans text-lg text-gray-900'>GPT Integrations for Business Applications</h4>
                    </div>
                  </div>
                  <p className='text-gray-600 text-lg'><span className='font-bold text-red-500'>Result : </span>Faster support, improved user experience, increased efficiency.</p>

                </div>

              </div>

              <div className="relative order-1 lg:order-2">
                <img
                  src="/x.png"
                  className="relative"
                />

              </div>
            </div>


            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="/clouddep.png"
                  className="relative"
                />

              </div>

              <div>

                <h3 className="text-5xl font-light mb-4">
                  AI Deployment, Integration & MLOps         </h3>
                <p className="text-gray-600 mb-12">
                  We ensure your AI systems run securely and reliably at scale.              </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg  text-gray-900">Cloud AI Infrastructure (AWS, Azure, GCP)</h4>

                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">CI/CD for ML Models</h4>

                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-1">• </span>

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">Monitoring & Performance Optimization</h4>

                    </div>
                  </div>
                  <div className='flex items-start'>
                    <span className="text-red-400 mr-1">• </span>
                    <div>
                      <h4 className='font-sans text-lg text-gray-900'>Scalable Production Deployment</h4>
                    </div>
                  </div>
                  <p className='text-gray-600 text-lg'><span className='font-bold text-red-500'>Result : </span>AI that works in the real world — not just in prototypes.</p>


                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className="relative py-20 lg:py-32 overflow-hidden
  bg-[url('/dd.png')] bg-cover bg-center bg-no-repeat">


        <div className="relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-7xl text-center md:text-6xl font-light text-white tracking-tight mb-12">
              Real Business Impact
            </h2>

            <p className="text-white font-light mb-8 text-lg">
              We turn intelligent AI strategies into measurable business outcomes by delivering scalable, data-driven solutions that enhance efficiency, accelerate growth, and create long-term value.
            </p>

            <div className="space-y-6 mb-8">

              <div className=" backdrop-blur-sm p-6">
                <h3 className="text-3xl font-sans mb-2 text-green-500">
                  Retail Enterprise
                </h3>
                <p className="text-white font-light">
                  Improved demand forecasting accuracy by 32% and reduced stock-outs by 20%.
                </p>
              </div>

              <div className=" backdrop-blur-sm p-6">
                <h3 className="text-3xl font-sans mb-2 text-green-500">
                  Financial Services Firm
                </h3>
                <p className="text-white font-light">
                  Automated invoice processing, reducing manual effort by 65%.
                </p>
              </div>

              <div className=" backdrop-blur-sm p-6">
                <h3 className="text-3xl font-sans mb-2 text-green-500">
                  Customer Support Platform
                </h3>
                <p className="text-white font-light">
                  Implemented AI chatbot reducing response time to under 3 seconds.
                  We focus on outcomes — not experiments.
                </p>
              </div>

              <div className=" backdrop-blur-sm p-6">
                <h3 className="text-3xl font-sans mb-2 text-green-500">
                  Enterprise Sales Organization
                </h3>
                <p className="text-white font-light">
                  Built an AI-driven application to automate workflows, reducing manual effort by 50% and significantly accelerating turnaround time while improving overall bid participation.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>








      <section className="py-20 lg:py-12">
        <div className=" mx-auto px-6">
          <div className="text-center mb-16">

            <h2 className="text-7xl font-light tracking-tight mb-12">Our AI Implementation Framework</h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              A disciplined, end-to-end framework designed to transform AI initiatives into scalable, secure, and measurable business outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Process */}
            <div className="space-y-6">
              {[
                {
                  title: "Discovery & Business Understanding",
                  description: "We analyze your goals and processes to identify high-impact AI opportunities with measurable outcomes.",
                  icon: "/BusinessDiscovery.png"
                },
                {
                  title: "Data Assessment & Architecture Design",
                  description: "We assess data readiness and design a secure, scalable architecture for sustainable AI growth.",
                  icon: "/dataarch.png"
                },
                {
                  title: "Model Development & Validation",
                  description: "We build and validate accurate, explainable models optimized for real-world performance.",
                  icon: "/br.png"
                },
                {
                  title: "Deployment & Integration",
                  description: "We seamlessly integrate AI into your systems to ensure smooth adoption and operational efficiency.",
                  icon: "/productiondep.png"
                },
                {
                  title: "Continuous Monitoring & Optimization",
                  description: "We monitor, refine, and optimize models to deliver sustained performance and long-term value.",
                  icon: "/f.png"
                }
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white p-2"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0  rounded-lg flex items-center justify-center mr-4">
                      {/* <Image
                        src={step.icon}
                        alt={step.title}
                        width={100}
                        height={100}
                        className="object-contain"
                      /> */}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h1 className="font-sans text-2xl text-red-500">{step.title}</h1>
                      </div>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/ourai.png"
                alt="AI implementation lifecycle showing iterative process from discovery to optimization"
                className="relative
                
                
                "
              />

            </div>
          </div>
        </div>
      </section>




      <section className="relative overflow-hidden py-20 lg:py-12 dark:bg-slate-900">



        <Container className="relative z-10">
          {/* Heading Content */}
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2
              className="
          font-sans
          font-light
          tracking-tight
          text-4xl
          sm:text-7xl
          md:text-6xl
          lg:text-7xl
          text-slate-900
          dark:text-white
          mb-12
        "
            >
              Industries We Serve <br className="hidden sm:block" />
            </h2>

            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Our AI solutions are tailored to your industry’s unique challenges, ensuring practical, scalable outcomes that align with your operational and strategic goals
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <h3 className="text-xl font-sans text-red-500">
                Retail & E-Commerce
              </h3>
              <p className="md:col-span-2 text-gray-600 leading-relaxed">
                Enhancing forecasting, personalization, and inventory to increase revenue and improve customer experience.              </p>
            </div>

            <div className="border-t border-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <h3 className="text-xl font-sans text-red-500">
                Healthcare
              </h3>
              <p className="md:col-span-2 text-gray-600 leading-relaxed">
                Improving patient outcomes and operational efficiency through predictive analytics and automation.
              </p>
            </div>

            <div className="border-t border-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <h3 className="text-xl font-sans text-red-500">
                SaaS & Technology
              </h3>
              <p className="md:col-span-2 text-gray-600 leading-relaxed">
                Embedding AI into products and workflows to enhance performance and user engagement.
              </p>
            </div>
            <div className="border-t border-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <h3 className="text-xl font-sans text-red-500">
                Logistics & Supply Chain
              </h3>
              <p className="md:col-span-2 text-gray-600 leading-relaxed">
                Optimizing planning and operations to reduce costs and improve delivery efficiency.
              </p>
            </div>

            <div className="border-t border-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <h3 className="text-xl font-sans text-red-500">
                Enterprise Operations
              </h3>
              <p className="md:col-span-2 text-gray-600 leading-relaxed">
                Automating internal processes to increase productivity and scale business operations.
              </p>
            </div>

          </div>

        </Container>
      </section>


      <TrustedByPage />




      <div className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-5xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-5xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative  mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-8 lg:pr-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-light leading-tight">
                  Ready to transform your business<span className="block mt-2">with intelligent AI solutions?</span>
                </h1>
                <p className="text-xl lg:text-lg text-red-100 max-w-xl">
                  Let’s design and
                  deploy AI solutions tailored to your business goals.         </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-white text-red-600 rounded-full font-light text-lg shadow-3xl hover:shadow-white/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Contact Us Today</span>
                  <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>


              </div>


            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px]  rounded-full blur-5xl"></div>
              </div>

              <div className="relative bg-white/95 backdrop-blur-sm rounded-5xl shadow-3xl p-8 lg:p-12 transform hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-red-500 rounded-tl-5xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-red-500 rounded-br-5xl"></div>

                <div className="relative">
                  <img
                    src="/TB1.png"
                    alt="Professional team member"
                    className="w-full h-auto max-w-md mx-auto drop-shadow-3xl"
                  />

                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-xl font-light text-lg animate-bounce">
                    Let's Go!
                  </div>
                </div>
              </div>

              <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-400 rounded-lg rotate-12 animate-pulse opacity-80"></div>
              <div className="absolute bottom-20 left-0 w-12 h-12 bg-red-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
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
