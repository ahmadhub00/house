"use client"

import Link from "next/link"
import { Users, Eye, Phone, GraduationCap, Handshake } from "lucide-react"
import Image from "next/image"

export default function ServicesDropdown() {
  return (
    <div className="w-full">
      {/* <h1 className="text-1xl font-bold mb-4 text-[#0D7A8A] border-b pb-2">About Us</h1> */}
      <div className="grid grid-cols-2  gap-0">

        {/* AI/ML */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
        <div className=" p-0 rounded-full group-hover:text-white transition-all">
        <Image   src="/Ai.png"
         alt="AI/ML"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
         </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                 AI/ML</h3>  
          </div>
        </div>
        
        {/* Digital marketing & SEO */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full ] group-hover:text-white transition-all">
          <Image   src="/Digital marketing.png"
           alt="Digital marketing & SEO"
              width={25}
              height={15} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Digital marketing & SEO</h3>
          </div>
        </div>
        
        {/* Mobile Applications*/}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/Mobile application.png"
           alt="Mobile Applications"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
        </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Mobile Applications</h3>
            </div>
        </div>
        
        {/* Techinical Resources */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/Resource.png"
           alt="Techinical Resources"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Techinical Resources</h3>  </div>
        </div>

         {/* Software Development */}
         <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/window.png"
           alt="Software Development"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
         </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Software Development</h3>  </div>
        </div>

         {/* Technical Tranings */}
         <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/Tranings.png"
           alt="Technical Tranings"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
         </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Technical Tranings </h3>  </div>
        </div>

         {/* Web Development */}
         <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/Web development.png"
           alt="Web Development"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
           </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Web Development</h3>  </div>
        </div>

         {/* UX/UI Designing */}
         <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/Ui & Ux.png"
           alt="UX/UI Designing"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
           </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                UX/UI Designing</h3>  </div>
        </div>

        {/* E-commerce Stores */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full group-hover:text-white transition-all">
          <Image   src="/ecommerce.png"
           alt="E-commerce Stores"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
            </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                E-commerce Stores Setup</h3>  </div>
        </div>

        {/*Social Media Market*/}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/socialmedia marketing.png"
           alt="Social Media Market"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
           </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Social Media Market</h3>  </div>
        </div>

        {/* BlockChain Systems */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/blockchain.png"
           alt="BlockChain Systems"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
           </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                BlockChain Systems</h3>  </div>
        </div>

        {/* DevOPs */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/DevOps.png"
           alt="DevOPs"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
            </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                DevOPs</h3>  </div>
        </div>

      </div>
    </div>
  )
}