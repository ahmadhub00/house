import Image from "next/image";

import { getsection2 } from "../sanity/lib/queries";
import { urlFor } from "../sanity/lib/image";
import { client } from "../sanity/lib/sanity";

export default async function Section2() {
  const section2 = await client.fetch(getsection2);

  return (
    <div className="bg-gray-100 w-full flex flex-col items-center justify-center mt-12 mb-5 px-6 pt-5 pb-5">
      <h2 className="text-3xl  font-bold text-center mb-3">
        {/* We Have Worked With */}
        {section2?.title}
      </h2>

      <div className="relative overflow-hidden w-full bg-gray-100 py-5">
        <div className="flex animate-scroll-left gap-6 md:gap-12 w-max">
          {/*  {[
            { src: "/deskbook.webp", alt: "Deskbook", w: 120, h: 60 },
            { src: "/pitb.webp", alt: "PITB", w: 110, h: 60 },
            { src: "/ieee.webp", alt: "IEEE", w: 110, h: 60 },
            { src: "/sdaia.webp", alt: "SDAIA", w: 130, h: 70 },
            { src: "/govt.png", alt: "Government", w: 130, h: 70 },
            { src: "/micro.webp", alt: "Microsoft", w: 130, h: 70 },
            { src: "/next.png", alt: "Next", w: 110, h: 60 },
            { src: "/ring neck.webp", alt: "Next", w: 100, h: 50 },
            { src: "/Many-Face.webp", alt: "Next", w: 100, h: 50 },
            { src: "/Agile loop.webp", alt: "Next", w: 110, h: 60 },
            { src: "/next grid.webp", alt: "Next", w: 110, h: 60 },
            // Duplicates for seamless scroll
            { src: "/deskbook.webp", alt: "Deskbook", w: 120, h: 60 },
            { src: "/pitb.webp", alt: "PITB", w: 110, h: 60 },
            { src: "/ieee.webp", alt: "IEEE", w: 110, h: 60 },
            { src: "/sdaia.webp", alt: "SDAIA", w: 130, h: 70 },
            { src: "/govt.png", alt: "Government", w: 130, h: 70 },
            { src: "/micro.webp", alt: "Microsoft", w: 130, h: 70 },
            { src: "/next.png", alt: "Next", w: 110, h: 60 },
            { src: "/ring neck.webp", alt: "Next", w: 100, h: 50 },
            { src: "/Many-Face.webp", alt: "Next", w: 100, h: 50 },
            { src: "/Agile loop.webp", alt: "Next", w: 110, h: 60 },
            { src: "/next grid.webp", alt: "Next", w: 110, h: 60 },
          ]}  */}
            {section2?.logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-[90px] md:w-[130px] h-[60px] md:h-[80px] flex items-center justify-center"
            >
              <img
                src={logo.asset.url}
                alt={`section2 ${idx + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
