"use client"

import Link from "next/link"
import { Users, Eye, Phone, GraduationCap, Handshake } from "lucide-react"
import Image from "next/image"

export default function MethodologyDropdown() {
  return (
    <div className="w-full">
      {/* <h1 className="text-1xl font-bold mb-4 text-[#0D7A8A] border-b pb-2">About Us</h1> */}
      <div className="grid grid-cols-2  gap-0">

        {/* Discovery */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
        <div className=" p-0 rounded-full group-hover:text-white transition-all">
        <Image   src="/discovery.png"
         alt="Discovery "
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
         </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
            Discovery </h3> 
            <p className="text-gray-600 text-[10px]">
            Transforming ideas into a measurable scope with functional UI/UX Design. </p>
             
          </div>
        </div>
        
        {/* Project Execution*/}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full ] group-hover:text-white transition-all">
          <Image   src="/execution.png"
           alt="Project Execution"
              width={25}
              height={15} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Project Execution</h3>
          </div>
        </div>
        
        {/* Dedicated Developers*/}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/developer.png"
           alt="Dedicated Developers"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
        </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Dedicated Developers</h3>
            </div>
        </div>
        
        {/* Continuous Improvement */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-1 rounded-lg transition-all">
          <div className=" p-0 rounded-full  group-hover:text-white transition-all">
          <Image   src="/improvement.png"
           alt="Continuous Improvement"
             
              width={30}
              height={20} className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[11px] font-semibold mb-0 group-hover:text-[#0D7A8A]">
                Continuous Improvement</h3>  </div>
        </div>

         
      </div>
    </div>
  )
}