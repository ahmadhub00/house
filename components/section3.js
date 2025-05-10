import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { client } from "../sanity/lib/sanity";
import { getsection3 } from "../sanity/lib/queries";

export default async function Section3() {
  const section2 = await client.fetch(getsection3);

return (

<div className="w-full mb-10 md:mt-10 px-4 bg-white flex flex-col items-center text-center">
<div className="w-full max-w-6xl   text-center  mx-auto">
  <span className="text-[#0D7A8A]  font-bold text-lg md:text-xl">
    {/* We Develop */}{section3.title}</span>

  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-6 mb-4">
    {/* AI Solutions For Your Business  */}{data.line1}</h2>

  <p className="text-gray-700 font-normal text-sm md:text-base mb-10 ">
   {/*  We Also Help AI Startups To Create MVP, Prototype & Fundraising Custom Solutions*/} 
   {section3.line2}</p>

  <div className="w-full max-w-3xl bg-[#e6866e] rounded-md p-6 mb-10 mx-auto ">
    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
      {/* Manyface */} {section3.line3}</h3>
    <p className="text-white text-sm md:text-base">
      {/* Our Own Internationally Launched AI Product */} {section3.line4}</p>
  </div>
  <Link
    href={section3.exploreLink}
    className="text-sm md:text-base inline-flex items-center bg-[#0D7A8A] text-white px-6 py-3 rounded-full hover:bg-[#0A6A78] transition-colors">
    Explore More
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</div>
</div>
)}