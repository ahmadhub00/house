"use client";
import { useEffect, useState } from "react";

import { getsection5 } from "../sanity/lib/queries";
import { client } from "../sanity/lib/sanity";
import { urlFor } from "../sanity/lib/image";

export default function Section5() {
  const [section5, setSection5] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(getsection5);
      setSection5(data);
    };
    fetchData();
  }, []);

  /* const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business challenges and requirements."
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Development",
      description: "Responsive, user-friendly websites and web applications that enhance your digital presence."
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Database Solutions",
      description: "Robust database architecture and management to ensure your data is secure, accessible, and optimized."
    },
    {
      icon: <Layout className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Intuitive and engaging interfaces that prioritize user experience and drive customer satisfaction."
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and maintain customer trust."
    },
    {
      icon: <HeartHandshake className="h-10 w-10" />,
      title: "IT Consulting",
      description: "Strategic guidance to help your business leverage technology for growth and competitive advantage."
    }
  ] */
  return (
    <section className="py-20 px-6 sm:px-6  ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {/* What We Offer */}
            {section5?.title}
          </h2>
          <p className="text-gray-600 max-w-2xl text-sm md:text-base mx-auto">
            {/* Comprehensive tech solutions to power your business growth and digital transformation */}
            {section5?.line}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section5?.item?.map((data, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-md border border-gray-100  cursor-default"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`mb-6  transition-transform duration-300 ${hoveredCard === index ? "scale-110" : ""}`}
              >
                <img
                  className="h-10 w-10 "
                  src={urlFor(data.icon).url()}
                  alt={data.title}
                />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-teal-800 ">{data.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
