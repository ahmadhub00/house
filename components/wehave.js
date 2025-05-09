"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { Code, Globe, Database, Layout, Shield, HeartHandshake } from "lucide-react"
import { Circle, FileCode2, CreditCard, CheckSquare } from "lucide-react"

export default function WeHave() { 
    const [hoveredCard, setHoveredCard] = useState(null)
  
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business challenges and requirements."
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Development",
      description: "Responsive, user-friendly websites and web applications that enhance your digital presence."
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Database Solutions",
      description: "Robust database architecture and management to ensure your data is secure, accessible, and optimized."
    },
    {
      icon: <Layout className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Intuitive and engaging interfaces that prioritize user experience and drive customer satisfaction."
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and maintain customer trust."
    },
    {
      icon: <HeartHandshake className="h-10 w-10" />,
      title: "IT Consulting",
      description: "Strategic guidance to help your business leverage technology for growth and competitive advantage."
    }
  ]

  const steps = [
    {
      icon: <img src="/Discover.png" alt="Discover" className="w-12 h-12 text-indigo-500" />,
      title: "Discover",
      description:
        "We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.",
    },
    {
      icon: <img src="/Design.png" alt="Discover" className="w-12 h-12  text-amber-500" />,
      title: "Design",
      description:
        "Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.",
    },
    {
      icon: <img src="/build.png" alt="Discover" className="w-12 h-12 text-emerald-500" />,
      title: "Build",
      description:
        "Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.",
    },
    {
      icon: <img src="/deliverable.png" alt="Discover" className="w-12 h-12  text-blue-500" />,
      title: "Deliver",
      description:
        "We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.",
    },
  ]
    return (
        <div>
          <div className="bg-gray-100 w-full flex flex-col items-center justify-center mt-12 mb-5 px-6 pt-5 pb-5">
  <h2 className="text-3xl  font-bold text-center mb-3">
    We Have Worked With
  </h2>

  <div className="relative overflow-hidden w-full bg-gray-100 py-5">
  <div className="flex animate-scroll-left gap-6 md:gap-12 w-max">
    {[
      { src: "/deskbook.webp", alt: "Deskbook", w: 120, h: 60 },
      { src: "/pitb.webp", alt: "PITB", w: 110, h: 60 },
      { src: "/ieee.webp", alt: "IEEE", w: 110, h: 60 },
      { src: "/sdaia.webp", alt: "SDAIA", w: 130, h: 70 },
      { src: "/govt.png", alt: "Government", w: 130, h: 70 },
      { src: "/micro.webp", alt: "Microsoft", w: 130, h: 70 },
      { src: "/next.png", alt: "Next", w: 110, h: 60 },
      { src: "/ring neck.webp", alt: "Next", w: 100, h: 50 },
      { src: "/Many-Face.webp", alt: "Next", w: 100, h: 50 },
      { src: "/Agile loop.webp", alt: "Next", w: 110, h: 60 },
      { src: "/next grid.webp", alt: "Next", w: 110, h: 60 },
      // Duplicates for seamless scroll
      { src: "/deskbook.webp", alt: "Deskbook", w: 120, h: 60 },
      { src: "/pitb.webp", alt: "PITB", w: 110, h: 60 },
      { src: "/ieee.webp", alt: "IEEE", w: 110, h: 60 },
      { src: "/sdaia.webp", alt: "SDAIA", w: 130, h: 70 },
      { src: "/govt.png", alt: "Government", w: 130, h: 70 },
      { src: "/micro.webp", alt: "Microsoft", w: 130, h: 70 },
      { src: "/next.png", alt: "Next", w: 110, h: 60 },
      { src: "/ring neck.webp", alt: "Next", w: 100, h: 50 },
      { src: "/Many-Face.webp", alt: "Next", w: 100, h: 50 },
      { src: "/Agile loop.webp", alt: "Next", w: 110, h: 60 },
      { src: "/next grid.webp", alt: "Next", w: 110, h: 60 },
      ].map((logo, idx) => (
      <div
        key={idx}
        className="w-[90px] md:w-[130px] h-[60px] md:h-[80px] flex items-center justify-center"
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.w}
          height={logo.h}
          className="object-contain"
        />
      </div>
    ))}
  </div>
</div>

</div>


        <div className="w-full mb-10 md:mt-10 px-4 bg-white flex flex-col items-center text-center">
        <div className="w-full max-w-6xl   text-center  mx-auto">
          <span className="text-[#0D7A8A]  font-bold text-lg md:text-xl">
            We Develop</span>
  
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-6 mb-4">
            AI Solutions For Your Business</h2>
  
          <p className="text-gray-700 font-normal text-sm md:text-base mb-10 ">
            We Also Help AI Startups To Create MVP, Prototype & Fundraising Custom Solutions
          </p>
  
          <div className="w-full max-w-3xl bg-[#e6866e] rounded-md p-6 mb-10 mx-auto ">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Manyface</h3>
            <p className="text-white text-sm md:text-base">
              Our Own Internationally Launched AI Product</p>
          </div>
          <Link
            href="/explore"
            className="text-sm md:text-base inline-flex items-center bg-[#0D7A8A] text-white px-6 py-3 rounded-full hover:bg-[#0A6A78] transition-colors">
            Explore More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="w-full text-2xl md:text-3xl font-bold text-center mb-8  ">
        <h3>Hire the Best Web and Mobile App Developers</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center  justify-center w-full  px-4 max-w-[1200px] mx-auto gap-6">
  {/* Left Text */}
  <div className="w-full md:w-1/2 px-4 text-center md:px-6 ">
    <p className="text-gray-700  font-normal text-sm md:text-base mb-0">
      Welcome to Optimum Tech, a premier IT solutions provider excelling in web design and software development. 
      Our team, featuring a diverse pool of skilled developers, is ready for dedicated and fixed-time/cost projects. 
      Opt for Optimum Tech, where excellence is a commitment. Specializing in PHP, Laravel, Magento, ReactJS, AngularJS, Node.js, 
      and more, our web developers deliver custom, responsive websites, web apps, and eCommerce solutions tailored to your business needs.
      <br/> <br/>
      In the realm of mobile app development, our Android, iOS, and cross-platform experts leverage cutting-edge tools 
      like Android Studio, Xcode, Kotlin, Xamarin, PhoneGap, and React Native to craft next-gen applications. 
      Choose Optimum Tech for innovation and proficiency in the latest technologies, propelling your business to new heights. 
      Contact us today to embark on a digital transformation journey together.
    </p>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/2 flex justify-center px-4">
    <img src="/info.webp" 
     className=" w-full max-w-[400px] rounded-lg object-cover shadow-md h-auto transition-transform duration-200 transform ease-in-out hover:scale-110" />
  </div>
</div>

<section className="py-20 px-6 sm:px-6  ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Offer</h2>
          <p className="text-gray-600 max-w-2xl text-sm md:text-base mx-auto">
            Comprehensive tech solutions to power your business growth and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-md border border-gray-100  cursor-default"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`text-teal-600 mb-6 transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <section className=" mx-auto flex items-center justify-center  " >
  <div className="w-full max-w-7xl px-4 ">
  <div className="w-full max-w-5xl mx-auto py-12 px-4 md:px-6 bg-white rounded-lg shadow-xl">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      We Simplify Software Development Process
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="group flex flex-col items-center">
          <div className="mb-4 transition-transform duration-300 transform group-hover:scale-110">{step.icon}</div>

          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute translate-x-[140px] mt-6">
              <div className="w-24 border-t-2 border-dashed border-gray-300"></div>
            </div>
          )}

          <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
          <p className="text-center text-gray-600 text-sm md:text-base">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  </section>
  
    <section className="py-16 px-4 max-w-7xl mx-auto">
  <div className="relative mb-12 text-center">
    <h2 className="text-3xl md:text-4xl  font-bold text-center">
      Our Core Services</h2>
  </div>

  {/* Wrapper with horizontal scroll on mobile */}
  <div
    className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-x-visible scroll-smooth cursor-grab"
    style={{ WebkitOverflowScrolling: 'touch' }}
  >
    {[
      {
        title: 'AI/ML Solution',
        img: '/microchip.png',
        desc:
          'Starting from concept, information architecture, visual identity and UI/UX design, our team delivers dazzling experiences for maximum user engagement.',
      },
      {
        title: 'Mobile Applications',
        img: '/Mobile app.png',
        desc:
          'We build intuitive and engaging Android, iOS and cross-platform apps for businesses, consumers and enterprises that end users love and adapt to them very quickly.',
      },
      {
        title: 'Software Development',
        img: '/sofware dev.png',
        desc:
          'We are a full-cycle custom software product development company that helps your organization with end-to-end custom software application development services.',
      },
      {
        title: 'Web Development',
        img: '/Web development.png',
        desc:
          'Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.',
      },
    ].map((service, idx) => (
      <div
        key={idx}
        className="group min-w-[280px] md:min-w-0 bg-white hover:bg-teal-50 p-6 rounded-xl shadow-xl hover:shadow-md transition-all duration-300 flex-shrink-0"
      >
        <div className="flex justify-center mb-6">
          <Image
            src={service.img}
            alt={service.title + ' Icon'}
            width={80}
            height={80}
            className="object-contain transition-transform duration-300 transform group-hover:scale-110"
          />
        </div>
        <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
        <p className="text-gray-600 text-sm md:text-base mb-6">{service.desc}</p>
        <Link
          href="#"
          className="inline-flex items-center font-medium hover:text-gray-900"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    ))}
  </div>
</section>


      </div>
    )
} 

