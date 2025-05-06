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
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-15 px-6 lg:px-20 py-12">
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
        <div className="w-full md:w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="w-full h-full max-h-[800px] overflow-hidden rounded-lg">   
            <Image
              src="/picture.jpg"
              alt="Office workspace with people working on computers"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
         {/*  <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Team working in office"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Team collaborating"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>

     <WeHave />
     
    </main>
  )
}
