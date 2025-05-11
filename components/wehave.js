"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { Circle, FileCode2, CreditCard, CheckSquare } from "lucide-react"

export default function WeHave() { 
    const [hoveredCard, setHoveredCard] = useState(null)
  
    return (
        <div>
    

<section className=" group py-16 px-4 max-w-7xl mx-auto">
    <div className="relative mb-12 text-center">
    <h2 className="text-3xl md:text-4xl  font-bold text-center">
      Our Work</h2>
    </div>

    <div className="flex flex-col items-center justify-center mb-6">
          <Image
            src="/1 pro.png"
            alt="Project 1"
            width={800}
            height={200}
            className="object-contain mb-15 rounded-lg shadow-4xl transition-transform duration-100 transform group-hover:scale-105 "
          />
          <Image
            src="/2 pro.png"
            alt="Project 2"
            width={800}
            height={200}
            className="object-contain mb-15 rounded-lg transition-transform shadow-4xl duration-100 transform group-hover:scale-105 "
          />
          <Image
            src="/3 pro.png"
            alt="Project 3"
            width={800}
            height={200}
            className="object-contain mb-15 rounded-lg transition-transform duration-100 transform group-hover:scale-105 "
          />
        </div>
</section>

      </div>
    )
} 

