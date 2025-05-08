"use client"

import Link from "next/link"
import { Users, Eye, Phone, GraduationCap, Handshake } from "lucide-react"
import Image from "next/image"

export default function WorkDropdown() {
  return (
    <div className="w-full">
      {/* <h1 className="text-1xl font-bold mb-4 text-[#0D7A8A] border-b pb-2">About Us</h1> */}
      <div className="grid grid-cols-4  gap-0">

        {/* Popular Brands */}
        <div className="group flex flex-col text-left items-start  hover:bg-gray-100 p-1 rounded-lg transition-all">
           
        <img   src="/popular brands.webp"
         alt="Popular Brands "
             
             
              className="h-25 w-30 rounded-lg" />
         
            <h3 className="my-1 text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
            Popular Brands </h3> 
            <p className="text-gray-600 text-[9px]">
           A gallery of astonishing solutions delivered most recognized brands. </p>
             
          </div>
        
        
        {/* Case Studies*/}
        <div className="group flex flex-col text-left items-start  hover:bg-gray-100 p-1 rounded-lg transition-all">
        <img   src="/case study.webp"
           alt="Case Studies"
             
               className="h-25 w-30 rounded-lg" />
          
            <h3 className="my-1 text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Case Studies</h3>
                <p className="text-gray-600 text-[9px]">
          Explore how turkeyNIC delivered IT Solutions to Startups & Enterprises. </p>
            
          </div>
        
        
        {/* Our Work*/}
        <div className="group flex flex-col text-left items-start  hover:bg-gray-100 p-1 rounded-lg transition-all">
         <img   src="/our work.webp"
           alt="Our Work"
             
             
               className="h-25 w-30 rounded-lg " />
        
            <h3 className="my-1 text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Our Work</h3>
                <p className="text-gray-600 text-[9px]">
           A glimpse to our expertise in design, development & industry experience. </p>
            
            </div>
        
        
        {/* Products */}
        <div className="group flex flex-col text-left items-start  hover:bg-gray-100 p-1 rounded-lg transition-all">
         <img   src="/6.jpeg"
           alt="Products"
              className="h-25 w-30 rounded-lg" />
          
            <h3 className="my-1 text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Products</h3> 
                <p className="text-gray-600 text-[9px]">
         Digital tools developed by us for businesses to be more productive.</p>
            
             </div>
        

         
      </div>
    </div>
  )
}