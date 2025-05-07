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
        <div className="bg-[#e6f7f9] p-0 rounded-full group-hover:text-white transition-all">
        <Image   src="/healthcare.png"
         alt="healthcare"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
         </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                 AI/ML</h3>  
          </div>
        </div>
        
        {/* Legal Feature */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className="bg-[#e6f7f9] p-0 rounded-full ] group-hover:text-white transition-all">
          <Image   src="/legal.png"
           alt="legal"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
        
          </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Digital marketing & SEO</h3>
          </div>
        </div>
        
        {/* Logistics Feature */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className="bg-[#e6f7f9] p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/logistics.png"
           alt="logistics"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
        </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Mobile Applications</h3>
            </div>
        </div>
        
        {/* Finance Feature */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className="bg-[#e6f7f9] p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/finance.png"
           alt="finance"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Techinical Resources</h3>  </div>
        </div>

         {/* Education Feature */}
         <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className="bg-[#e6f7f9] p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/education.png"
           alt="education"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
         </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Software Development</h3>  </div>
        </div>

         {/* Social Media Feature */}
         <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className="bg-[#e6f7f9] p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/social media.png"
           alt="social media"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
         </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Technical Resource </h3>  </div>
        </div>

         {/* Media & OTT Feature */}
         <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className="bg-[#e6f7f9] p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/media.png"
           alt="media & ott"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
           </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Web Development</h3>  </div>
        </div>

         {/* Insurance Feature */}
         <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className="bg-[#e6f7f9] p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/insurance.png"
           alt="insurance"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
           </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                UX/UI Designing</h3>  </div>
        </div>

        {/* Travel Feature */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className="bg-[#e6f7f9] p-0 rounded-full group-hover:text-white transition-all">
          <Image   src="/travel.png"
           alt="travel"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
            </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                E-commerce Stores Setup</h3>  </div>
        </div>

        {/* Manufacturing Feature */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className="bg-[#e6f7f9] p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/industry.png"
           alt="manufacturing"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
           </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Social Media Market</h3>  </div>
        </div>

        {/* Retail Feature */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className="bg-[#e6f7f9] p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/retail.png"
           alt="retail"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
           </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                BlockChain Systems</h3>  </div>
        </div>

        {/* IT & Telecom Feature */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className="bg-[#e6f7f9] p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/telecon.png"
           alt="it & telecom"
             
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