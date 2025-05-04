import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full  py-4 px-6 flex items-center justify-between bg-white border-t">
      <div className="flex items-center">
        <Image
          src="/logo.webp"
          alt="Optimum Tech Logo"
          width={210}
          height={50}
          className="mr-2"/>
          </div>

      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/about" className="font-bold text-gray-700 hover:text-[#0D7A8A] transition-colors">
          About
        </Link>
        <Link href="/focus" className="font-bold text-gray-700 hover:text-[#0D7A8A] transition-colors">
          Focus
        </Link>
        <Link href="/industries" className="font-bold text-gray-700 hover:text-[#0D7A8A] transition-colors">
          Industries
        </Link>
        <Link href="/services" className="font-bold text-gray-700 hover:text-[#0D7A8A] transition-colors">
          Services
        </Link>
        <Link href="/methodology" className="font-bold text-gray-700 hover:text-[#0D7A8A] transition-colors">
          Methodology
        </Link>
        <Link href="/work" className="font-bold text-gray-700 hover:text-[#0D7A8A] transition-colors">
          Work
        </Link>
        <Link href="/blogs" className="font-bold text-gray-700 hover:text-[#0D7A8A] transition-colors">
          Blogs
        </Link>
      </nav>

      <Link
        href="/contact"
        className="bg-[#0D7A8A] text-white px-6 py-3 rounded-full flex items-center transition-all hover:bg-[#0A6A78]"
      >
        Contact Us
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </footer>
  )
}
