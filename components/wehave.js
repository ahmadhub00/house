"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { Code, Globe, Database, Layout, Shield, HeartHandshake } from "lucide-react"

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
    return (
        <div>
        <div className="w-full flex flex-col items-center justify-center py-12 px-6  ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 ">We Have Worket With</h2>
            <div className="flex justify-between items-center  w-full mx-0 px-0">
  {[
    "/deskbook.webp",
    "/pitb.webp",
    "/ieee.webp",
    "/sdaia.webp",
    "/govt.png",
    "/micro.webp",
    "/next.png"
  ].map((src, idx) => (
    <div key={idx} className="w-[130px] h-[100px] flex items-center justify-center">
      <Image
        src={src}
        alt="We have worked with"
        width={120}
        height={80}
        className="object-contain w-full h-full"
      />
         </div>
  ))}
        </div>
        </div>

        <div className="w-full py-16 px-4 bg-white flex flex-col items-center text-center">
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
    <img src="/info.webp"  className=" w-full max-w-[400px] rounded-lg shadow-md h-auto" />
  </div>
</div>

<section className="py-20 px-6 sm:px-6 bg-gray-50 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl text-sm md:text-base mx-auto">
            Comprehensive tech solutions to power your business growth and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100  cursor-default"
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
    
      </div>
    )
} 

