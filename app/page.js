import Image from "next/image"
import Link from "next/link"
import Header from "/components/header";
import Footer from "/components/footer";
import WeHave from "/components/wehave"
import { ArrowRight } from "lucide-react"

import { client } from '/sanity/lib/sanity'
import { getAllServicesQuery } from '/sanity/lib/queries'
import  { getherosection } from '/sanity/lib/queries'
import { urlFor } from "/sanity/lib/image"

export default async function Home() {

  const services = await client.fetch(getAllServicesQuery)
const herosectiondata = await client.fetch(getherosection)
  return (
    <main className="min-h-screen">
       {/* Header */}
       <Header />

       <section className="max-w-7xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service._id} className="p-6 bg-white shadow rounded">
            <img
              src={service.image?.asset?.url}
              alt={service.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center  justify-center w-full px-8 max-w-[1400px] mx-auto gap-2 ">
        {/* Left Content */}
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center mt-15 md:mt-20 px-6 lg:px-20 py-10">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center  mb-8">
          {herosectiondata[0]?.title.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
          </h1>
          <p className="text-gray-700 mb-8 text-base md:text-sm">
            {herosectiondata[0]?.description}
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
  
  <img
   src={urlFor(herosectiondata[0]?.image).url()}
   alt={herosectiondata[0]?.title || "Hero image"}
   width={800}
   height={600}
    className="w-full max-w-[600px] rounded-lg h-auto object-cover transition-transform duration-400 transform ease-in-out hover:scale-110"
  />
</div>

      </div>

     <WeHave />

     {/* Footer */}
     <Footer/>

    </main>
  )
}
