

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









      <section className="py-20 lg:py-32 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/data-pattern.svg')] bg-repeat"></div>
        </div>

        <div className="mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text */}
          <div>

            <h2 className="text-7xl text-black font-light mb-12">
              Why 87% of AI Projects Fail to Deliver Business Value
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              Organizations are drowning in data but starving for intelligence. Despite investing billions
              in AI initiatives, most companies struggle to translate raw data into actionable insights
              that drive measurable business outcomes.
            </p>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-12 border border-white/10">
              <h3 className="text-xl font-light mb-4 text-red-600">The Hidden Costs of Ineffective AI</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <p className="text-gray-600">Wasted resources on models that fail in production environments</p>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <p className="text-gray-600">Missed opportunities as competitors leverage data-driven decisions</p>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <p className="text-gray-600">Data silos preventing a unified view of business operations</p>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <p className="text-gray-600">Compliance risks from poorly managed data and AI systems</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-7xl font-light text-red-400">73%</div>
              <p className="text-gray-600">of enterprise data goes unused for decision-making</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/ai-intelligence-dashboard.png"
              alt="AI Analytics Dashboard showing real-time data insights, predictive models, and business impact metrics"
              className="relative"
            />
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
              <p className="text-xs text-gray-300">Real-time AI Intelligence Dashboard</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className=" mx-auto px-6">
          <div className="text-center mb-16">

            <h1 className="text-7xl font-light mb-12">From Data Chaos to Competitive Advantage</h1>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              We transform disconnected data into intelligent systems that drive growth, efficiency,
              and innovation across your entire organization.
            </p>
          </div>

          <div className="space-y-24">
            {/* Block 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="/DataChaos.png"
                  className="relative"
                  alt="Transformation from scattered data systems to unified intelligence platform"
                />

              </div>

              <div>
                <div className="inline-flex items-center px-3 py-5 mb-4 text-sm font-sans text-red-500 rounded-full">
                  <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                  STEP 1
                </div>
                <h3 className="text-7xl font-light mb-4">
                  From Data Chaos to Structured Intelligence
                </h3>
                <p className="text-gray-600 mb-12">
                  We design scalable data pipelines that clean, organize, and prepare your data for
                  advanced analytics and AI modeling. Our approach eliminates silos and creates a
                  single source of truth for your entire organization.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">

                    <div>
                      <h4 className="font-sans text-lg  text-gray-900">Unified Data Architecture</h4>
                      <p className="text-gray-600 text-sm">Connect disparate systems into a cohesive data ecosystem</p>
                    </div>
                  </div>
                  <div className="flex items-start">

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">Automated Data Quality</h4>
                      <p className="text-gray-600 text-sm">Real-time validation and cleansing of incoming data streams</p>
                    </div>
                  </div>
                  <div className="flex items-start">

                    <div>
                      <h4 className="font-sans text-lg text-gray-900">Scalable Processing</h4>
                      <p className="text-gray-600 text-sm">Handle growing data volumes without performance degradation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 (Reverse) */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-sans  text-red-500 rounded-full">
                  <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                  Step 2
                </div>
                <h3 className="text-7xl font-light mb-4">
                  From Manual Work to Intelligent Automation
                </h3>
                <p className="text-gray-600 mb-12">
                  Our AI systems automate decision-making using predictive models, NLP, and real-time
                  intelligence. We transform time-consuming manual processes into automated workflows
                  that adapt and improve over time.
                </p>

                <div className="bg-green-50 rounded-xl p-6 mb-12">
                  <h4 className="font-sans text-black mb-3">Real-World Impact</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-sans text-green-600">67%</div>
                      <p className="text-sm text-gray-600">Reduction in manual processing time</p>
                    </div>
                    <div>
                      <div className="text-3xl font-sans text-green-600">3.5x</div>
                      <p className="text-sm text-gray-600">Faster decision-making cycles</p>
                    </div>
                  </div>
                </div>


              </div>

              <div className="relative order-1 lg:order-2">
                <img
                  src="/automationflow.png"
                  className="relative"
                  alt="AI automation workflow showing data input, processing, decision points, and automated actions"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className=" mx-auto px-6">
          <div className="text-center mb-16">

            <h2 className="text-7xl font-light tracking-tight mb-12">A Proven Framework for AI Success</h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              Our systematic approach ensures your AI initiatives deliver measurable business value
              from day one and continue to improve over time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Process */}
            <div className="space-y-6">
              {[
                {
                  title: "Business Discovery & Goal Alignment",
                  description: "We work with your stakeholders to identify high-impact opportunities and define clear success metrics.",
                  icon: "/BusinessDiscovery.png"
                },
                {
                  title: "Data Assessment & Architecture Design",
                  description: "Our engineers evaluate your data landscape and design a scalable foundation for AI initiatives.",
                  icon: "/dataarch.png"
                },
                {
                  title: "Model Development & Validation",
                  description: "We build and rigorously test AI models using your data to ensure accuracy and reliability.",
                  icon: "/br.png"
                },
                {
                  title: "Production Deployment & Integration",
                  description: "Our MLOps specialists deploy models to production with monitoring, versioning, and failover systems.",
                  icon: "/productiondep.png"
                },
                {
                  title: "Continuous Improvement & Optimization",
                  description: "We monitor performance, gather feedback, and continuously enhance your AI systems for maximum impact.",
                  icon: "/f.png"
                }
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white p-6"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0  rounded-lg flex items-center justify-center mr-4">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h1 className="font-sans text-3xl text-gray-900">{step.title}</h1>
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
                src="/aidev.png"
                alt="AI implementation lifecycle showing iterative process from discovery to optimization"
                className="relative
                
                
                "
              />

            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-32 overflow-hidden
  bg-[url('/dd.png')] bg-cover bg-center bg-no-repeat">

        {/* <div className="absolute inset-0 bg-white/80"></div> */}

        <div className="relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-7xl text-center md:text-6xl font-light text-white tracking-tight mb-12">
              Built for Enterprise-Grade Reliability at Scale
            </h2>

            <p className="text-white font-light mb-8 text-lg">
              Unlike generic AI solutions that fail in production, our systems are engineered
              for the demanding requirements of enterprise environments.
            </p>

            <div className="space-y-6 mb-8">

              <div className=" backdrop-blur-sm p-6">
                <h3 className="text-3xl font-light mb-2 text-white">
                  Production-Ready AI Systems
                </h3>
                <p className="text-white font-light">
                  Our models are built with robust testing, monitoring, and failover mechanisms to ensure
                  99.9% uptime in critical business applications.
                </p>
              </div>

              <div className=" backdrop-blur-sm p-6">
                <h3 className="text-3xl font-light mb-2 text-white">
                  Continuous Monitoring & Retraining
                </h3>
                <p className="text-white font-light">
                  Our automated MLOps pipeline detects model drift and triggers retraining to maintain
                  accuracy as your business environment evolves.
                </p>
              </div>

              <div className=" backdrop-blur-sm p-6">
                <h3 className="text-3xl font-light mb-2 text-white">
                  Secure & Scalable Cloud Architecture
                </h3>
                <p className="text-white font-light">
                  Built on enterprise-grade cloud infrastructure with end-to-end encryption,
                  role-based access control, and compliance with SOC 2, GDPR, and HIPAA.
                </p>
              </div>

              <div className=" backdrop-blur-sm p-6">
                <h3 className="text-3xl font-light mb-2 text-white">
                  Explainable and Transparent Models
                </h3>
                <p className="text-white font-light">
                  Our AI systems provide clear explanations for decisions, ensuring regulatory
                  compliance and building trust with stakeholders.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>


      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-24">
            <h2 className="text-7xl md:text-6xl font-light text-gray-900 tracking-tight mb-12">
              Enterprise AI & Data Platform
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Production-grade infrastructure designed for Fortune 500 companies.
              Our technology stack delivers security, scalability, and performance at enterprise scale —
              supporting billions of API calls and processing petabytes of data daily.
            </p>
          </div>

          {/* Platform Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {[
              {
                title: "Machine Learning Infrastructure",
                description:
                  "Deploy production-ready ML systems with automated training pipelines, real-time inference, and continuous model optimization. Our platform supports enterprise-scale workloads with sub-100ms latency and 99.99% uptime.",
                stack:
                  "Python • TensorFlow • PyTorch • Scikit-learn • Apache Spark • MLflow • Kubeflow • Ray",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
              },
              {
                title: "Generative AI & Language Models",
                description:
                  "Integrate state-of-the-art LLMs into your workflows with custom fine-tuning, retrieval-augmented generation, and enterprise guardrails. Build intelligent assistants that understand context and deliver accurate, compliant responses.",
                stack:
                  "GPT-4 • Claude • LangChain • LlamaIndex • Pinecone • Weaviate • Chroma • OpenAI API",
                image:
                  "https://cdn.analyticsvidhya.com/wp-content/uploads/2024/10/Popular_Tools_for_RAG_Applications.jpg",
              },
              {
                title: "Data Platform Engineering",
                description:
                  "Build resilient data ecosystems with automated ETL/ELT pipelines, real-time streaming, and unified analytics layers. Process petabytes of data with enterprise-grade security, governance, and compliance built in.",
                stack:
                  "Apache Airflow • Kafka • dbt • Snowflake • Databricks • BigQuery • Redshift • Delta Lake",
                image:
                  "https://www.spec-india.com/wp-content/uploads/2025/03/ETL-Guide.jpg",
              },
              {
                title: "MLOps & Model Lifecycle Management",
                description:
                  "Accelerate AI deployment with automated versioning, A/B testing, and continuous monitoring. Ensure model performance, fairness, and compliance through comprehensive observability and drift detection.",
                stack:
                  "MLflow • Weights & Biases • Kubeflow • GitHub Actions • Argo Workflows • Prometheus • Evidently AI",
                image:
                  "https://media.licdn.com/dms/image/v2/D4D12AQHA41VWX-JCzA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732112269172?e=2147483647&v=beta&t=2DhCoPvV7Ei5GadAHOyZRniUj83Qkq1UaLmzvkJjaMk"
              },
              {
                title: "Cloud Infrastructure & DevOps",
                description:
                  "Provision secure, scalable infrastructure across AWS, Azure, and GCP with infrastructure-as-code. Implement zero-trust architecture, automated scaling, and disaster recovery for mission-critical AI workloads.",
                stack:
                  "AWS • Azure • GCP • Kubernetes • Terraform • ArgoCD • Istio • Vault • Datadog",
                image:
                  "https://www.softwebsolutions.com/wp-content/uploads/2024/07/Multi-cloud-strategy.webp",
              },
              {
                title: "Intelligent Process Automation",
                description:
                  "Transform business operations with AI-powered workflow orchestration, intelligent document processing, and predictive analytics. Reduce manual effort by 80% while maintaining full audit trails and compliance.",
                stack:
                  "UiPath • Temporal • Apache Camel • RabbitMQ • Redis • PostgreSQL • Event-Driven Architecture",
                image:
                  "https://marradata.ai/wp-content/uploads/2025/04/64be86eaa29fa71f24b00fb6_609d17bfefdd687436b8221e_Intelligent20Automation20Image.jpeg",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col h-full">

                {/* Image */}
                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-5xl font-light text-gray-900 tracking-tight mb-8">
                    {item.title}
                  </h3>

                  <p className="text-[15px] text-gray-600 leading-relaxed mb-12">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium tracking-widest uppercase mb-3">
                      Technologies
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.stack}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>








      <section className="relative overflow-hidden py-20 lg:py-32 dark:bg-slate-900">



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
              Expansive in Reach, <br className="hidden sm:block" />
              Personalized in Service
            </h2>

            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              We work with businesses of all sizes — from early-stage startups
              to global enterprises. With a strong international presence,
              tecverse delivers reliable solutions, seamless collaboration,
              and access to world-class talent.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-12">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <h3 className="text-3xl font-light text-red-500">
                Execution Excellence
              </h3>
              <p className="md:col-span-2 text-gray-600 leading-relaxed">
                A skilled team of engineers, consultants, and strategists focused on delivering measurable results.
              </p>
            </div>

            <div className="border-t border-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <h3 className="text-3xl font-light text-red-500">
                Global Presence
              </h3>
              <p className="md:col-span-2 text-gray-600 leading-relaxed">
                Strategically positioned teams across regions to provide continuous support and faster delivery.
              </p>
            </div>

            <div className="border-t border-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <h3 className="text-3xl font-light text-red-500">
                Innovation Driven
              </h3>
              <p className="md:col-span-2 text-gray-600 leading-relaxed">
                We embrace modern technologies and best practices to build future-ready digital solutions.
              </p>
            </div>

          </div>

        </Container>
      </section>



      <section className="py-24 sm:py-32 bg-gradient-to-b from-[#141414] to-[#2a2a2a] dark:from-slate-900 dark:to-slate-800">
        <Container>
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-4">
            <h2 className="font-sans font-light tracking-tight text-7xl sm:text-4xl md:text-7xl lg:text-6xl text-white mb-12">
              Reliable solutions for mission-critical growth.
            </h2>
            <p className="text-base sm:text-lg text-white/90 dark:text-slate-300">
              End-to-end technology and talent solutions designed to help
              businesses scale with confidence.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 px-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-300"
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
                  <h3 className="text-xl sm:text-3xl font-light mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/90 mb-12 line-clamp-3">
                    {service.description}
                  </p>

                  <span className="text-xs sm:text-sm text-white/60 font-light">
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


      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">

              <div className="relative">
                <img
                  src="/whychooseourcomp.png"
                  alt="Why choose tecverse"
                  className="w-full h-[720px] object-cover bg-black"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

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
                    <h3 className="text-lg font-sans italic text-slate-900 dark:text-white mb-2 group-hover:text-red-600 transition-colors">
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
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-5xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-5xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative  mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-8 lg:pr-8">
              <div className="space-y-4">
                <h1 className="text-7xl lg:text-7xl font-light leading-tight">
                  Ready to Build
                  <span className="block mt-2">Something Great?</span>
                </h1>
                <p className="text-xl lg:text-3xl text-red-100 max-w-xl">
                  Transform your ideas into reality with our expert team. Let's create something extraordinary together.
                </p>
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
                    src="/TB.png"
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
