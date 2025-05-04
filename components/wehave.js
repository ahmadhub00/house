import Image from "next/image"

export default function WeHave() { 
    return (
        <div className="w-full flex flex-col items-center justify-center py-12 px-6 lg:px-20 ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 ">We Have Worket With</h2>
            <div className="flex justify-between items-center  w-full mx-0 px-0">
  {[
    "/deskbook.webp",
    "/pitb.webp",
    "/ieee.webp",
    "/sdaia.webp",
    "/govt.png",
    "/micro.webp",
    "/next.png"
  ].map((src, idx) => (
    <div key={idx} className="w-[130px] h-[100px] flex items-center justify-center">
      <Image
        src={src}
        alt="We have worked with"
        width={120}
        height={80}
        className="object-contain w-full h-full"
      />
    </div>
  ))}
</div>
        </div>
    )
}