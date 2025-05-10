import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getsection1 } from "../sanity/lib/queries";
import { urlFor } from "../sanity/lib/image";
import { client } from "../sanity/lib/sanity";

export default async function Section1() {

    const section1 = await client.fetch(getsection1);

    return (
    <div className="flex flex-col md:flex-row items-center  justify-center w-full px-8 max-w-[1400px] mx-auto gap-2 ">
{/* Left Content */}
<div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center mt-15 md:mt-20 px-6 lg:px-20 py-10">
  <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center  mb-8">
    {section1[0]?.title.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ))}
  </h1>
  <p className="text-gray-700 mb-8 text-base md:text-sm">
    {section1[0]?.description}
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
    src={urlFor(section1[0]?.image).url()}
    alt={section1[0]?.title || "Hero image"}
    width={800}
    height={600}
    className="w-full max-w-[600px] rounded-lg h-auto object-cover transition-transform duration-400 transform ease-in-out hover:scale-110"
  />
</div>
</div>
    )}