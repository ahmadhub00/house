import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import WeHave from "@/components/wehave"

export default function Home() {
  return (
    <main className="min-h-screen">
       {/* Footer */}
       <Header />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center  justify-center w-full px-8 max-w-[1200px] mx-auto gap-2 ">
        {/* Left Content */}
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center mt-15 md:mt-20 px-6 lg:px-20 py-10">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center  mb-8">
            Bringing
            <br />
            Imagination Into
            <br />
            Reality
          </h1>
          <p className="text-gray-700 mb-8 text-base md:text-base">
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
              className="inline-flex  gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              Contact Us  
            </Link>
          </div>
        </div>

        {/* Right Images */}
        <div className="w-full md:w-1/2 lg:w-1/2 lg:mt-25 flex items-center justify-center mr-2">
         <Image
              src="/picture.jpg"
              alt="Office workspace with people working on computers"
              width={600}
              height={400}
              className="w-full max-w-[400px] rounded-lg h-auto object-cover"
               
            />
          
        
        </div>
      </div>

     <WeHave />
     
    </main>
  )
}
