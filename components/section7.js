import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Section7() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="relative mb-12 text-center">
        <h2 className="text-3xl md:text-4xl  font-bold text-center">
          Our Core Services
        </h2>
      </div>

      {/* Wrapper with horizontal scroll on mobile */}
      <div
        className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-x-visible scroll-smooth cursor-grab"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {[
          {
            title: "AI/ML Solution",
            img: "/microchip.png",
            desc: "Starting from concept, information architecture, visual identity and UI/UX design, our team delivers dazzling experiences for maximum user engagement.",
          },
          {
            title: "Mobile Applications",
            img: "/Mobile app.png",
            desc: "We build intuitive and engaging Android, iOS and cross-platform apps for businesses, consumers and enterprises that end users love and adapt to them very quickly.",
          },
          {
            title: "Software Development",
            img: "/sofware dev.png",
            desc: "We are a full-cycle custom software product development company that helps your organization with end-to-end custom software application development services.",
          },
          {
            title: "Web Development",
            img: "/Web development.png",
            desc: "Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="group min-w-[280px] md:min-w-0 bg-white hover:bg-teal-50 p-6 rounded-xl shadow-xl hover:shadow-md transition-all duration-300 flex-shrink-0"
          >
            <div className="flex justify-center mb-6">
              <Image
                src={service.img}
                alt={service.title + " Icon"}
                width={80}
                height={80}
                className="object-contain transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-6">
              {service.desc}
            </p>
            <Link
              href="#"
              className="inline-flex items-center font-medium hover:text-gray-900"
            >
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
