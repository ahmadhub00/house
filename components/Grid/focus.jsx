"use client"

import Link from "next/link"
import { Star } from "lucide-react"

export default function FocusDropdown() {
  return (
    <div className="w-full">
      {/* <h1 className="text-1xl font-bold mb-4 text-[#0D7A8A] border-b pb-2">About Us</h1> */}
      <div className="grid grid-cols-2  gap-0">

        {/* Enterprise Applications */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-all">
          <div className=" p-0 rounded-full group-hover:bg-[#0D7A8A] group-hover:text-white transition-all">
            <Star className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]"> Enterprise Applications</h3>
            <p className="text-gray-600 text-[10px]">
            Empowering organizations with robust and scalable enterprise applications tailored to the needs </p>
          </div>
        </div>
        
        {/* Artificial Intelligence */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-all">
          <div className=" p-0 rounded-full group-hover:bg-[#0D7A8A] group-hover:text-white transition-all">
            <Star className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]">Artificial Intelligence</h3>
            <p className="text-gray-600 text-[10px]">
          Harnessing the power of artificial intelligence to drive innovation and boost efficiency</p>
          </div>
        </div>
        
        {/* Digital Commerce */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-all">
          <div className=" p-0 rounded-full group-hover:bg-[#0D7A8A] group-hover:text-white transition-all">
            <Star className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]"> Digital Commerce</h3>
            <p className="text-gray-600 text-[10px]">
            Creating high performance and engaging digital commerce solutions to maximize the business</p>
          </div>
        </div>
        
        {/*Technology Integration */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-all">
          <div className=" p-0 rounded-full group-hover:bg-[#0D7A8A] group-hover:text-white transition-all">
            <Star className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]">Technology Integration</h3>
            <p className="text-gray-600 text-[10px]">
            Seamlessly integrating technologies to build cohesive and efficient IT infrastructures </p>
          </div>
        </div>

          {/* Business Automation */}
          <div className="group flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-all">
          <div className=" p-0 rounded-full group-hover:bg-[#0D7A8A] group-hover:text-white transition-all">
            <Star className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]">Business Automation</h3>
            <p className="text-gray-600 text-[10px]">
            Streamlining operations and boosting productivity with custom business automation solutions </p>
          </div>
        </div>

          {/*BI & Analytics  */}
          <div className="group flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-all">
          <div className=" p-0 rounded-full group-hover:bg-[#0D7A8A] group-hover:text-white transition-all">
            <Star className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]">BI & Analytics</h3>
            <p className="text-gray-600 text-[10px]">
            Turning data into actionable insights with our advanced BI and analytics development service </p>
          </div>
        </div>

          
        
      </div>
    </div>
  )
}