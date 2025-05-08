"use client"

import Link from "next/link"
import { Users, Eye, Phone, GraduationCap, Handshake } from "lucide-react"

export default function AboutDropdown() {
  return (
    <div className="w-full">
      {/* <h1 className="text-1xl font-bold mb-4 text-[#0D7A8A] border-b pb-2">About Us</h1> */}
      <div className="grid grid-cols-2  gap-0">
        {/* Team Feature */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-all">
          <div className=" p-0 rounded-full group-hover:bg-[#0D7A8A] group-hover:text-white transition-all">
            <Users className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]"> Team</h3>
            <p className="text-gray-600 text-[10px]">
            Empowering organizations with robust and scalable enterprise applications tailored to the needs </p>
            
          </div>
        </div>
        
        {/* How we Work Feature */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-all">
          <div className=" p-0 rounded-full group-hover:bg-[#0D7A8A] group-hover:text-white transition-all">
            <Handshake className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]">How we work</h3>
            <p className="text-gray-600 text-[10px]">
            Harnessing the power of artificial intelligence to drive innovation and boost efficiency</p>
            <div className="mt-0">
             
            </div>
          </div>
        </div>
        
        {/* Contact Feature */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-all">
          <div className=" p-0 rounded-full group-hover:bg-[#0D7A8A] group-hover:text-white transition-all">
            <Phone className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]">Contact</h3>
            <p className="text-gray-600 text-[10px]">
            Creating high performance and engaging digital commerce solutions to maximize the business</p>
            <div className="mt-0">
              
            </div>
          </div>
        </div>
        
        {/* Careers Feature */}
        <div className="group flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-all">
          <div className=" p-0 rounded-full group-hover:bg-[#0D7A8A] group-hover:text-white transition-all">
            <GraduationCap className="h-6 w-6 text-[#0D7A8A] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[12px] font-semibold mb-0 group-hover:text-[#0D7A8A]">Carrers</h3>
            <p className="text-gray-600 text-[10px]">
            Seamlessly integrating technologies to build cohesive and efficient IT infrastructures </p>
            <div className="mt-0">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}