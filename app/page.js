import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header";

import WeHave from "@/components/wehave"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
       {/* Footer */}
       <Header />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center  justify-center w-full px-8 max-w-[1400px] mx-auto gap-2 ">
        {/* Left Content */}
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center mt-15 md:mt-20 px-6 lg:px-20 py-10">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center  mb-8">
            Bringing
            <br />
            Imagination Into
            <br />
            Reality
          </h1>
          <p className="text-gray-700 mb-8 text-base md:text-sm">
            Welcome to Best Software House & IT Solutions Company Optimum Tech, a premier provider of world-class
            Software & IT Solutions. Our global presence is marked by a distinguished clientele, renowned for their
            expertise and achievements. At the core of our success is a team of highly skilled professionals, whose
            technical prowess and unwavering commitment to excellence set us apart. We specialize in transforming your
            business visions, startups, or innovative ideas into tangible successes. Partner with us to elevate your
            aspirations to new heights and experience unparalleled growth and achievement.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex  gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
            >
              Contact Us  
              <ArrowRight className=" mt-1 h-4 w-4" />
            </Link>
            
          </div>
        </div>

        {/* Right Images */}
        <div className="w-full md:w-1/2 lg:w-1/2 lg:mt-22 flex items-center justify-center mr-2">
  <Image
    src="/picture.jpg"
    alt="Office workspace with people working on computers"
    width={800}
    height={600}
    className="w-full max-w-[600px] rounded-lg h-auto object-cover transition-transform duration-400 transform ease-in-out hover:scale-110"
  />
</div>

      </div>

     <WeHave />
     
    </main>
  )
}
