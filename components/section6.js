import { getsection6} from "../sanity/lib/queries";
import { client } from "../sanity/lib/sanity";
import { urlFor } from "../sanity/lib/image";

export default async function Section6() {
  const section6 = await client.fetch(getsection6);
 
  /*  const steps = [
    {
      icon: <img src="/Discover.png" alt="Discover" className="w-12 h-12 text-indigo-500" />,
      title: "Discover",
      description:
        "We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.",
    },
    {
      icon: <img src="/Design.png" alt="Discover" className="w-12 h-12  text-amber-500" />,
      title: "Design",
      description:
        "Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.",
    },
    {
      icon: <img src="/build.png" alt="Discover" className="w-12 h-12 text-emerald-500" />,
      title: "Build",
      description:
        "Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.",
    },
    {
      icon: <img src="/deliverable.png" alt="Discover" className="w-12 h-12  text-blue-500" />,
      title: "Deliver",
      description:
        "We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.",
    },
  ] */
return (
<section className=" mx-auto flex items-center justify-center  " >
  <div className="w-full max-w-7xl px-4 ">
  <div className="w-full max-w-5xl mx-auto py-12 px-4 md:px-6 bg-white rounded-lg shadow-xl">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      {/* We Simplify Software Development Process */}
      {section6?.title}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {section6?.item?.map((data, index)  => (
        <div key={index} className="group flex flex-col items-center">
          <div className="mb-4 transition-transform duration-300 transform group-hover:scale-110">
            {data.icon}</div>

          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute translate-x-[140px] mt-6">
              <div className="w-24 border-t-2 border-dashed border-gray-300"></div>
            </div>
          )}

          <h3 className="text-xl font-semibold mb-3 text-gray-800">{data.title}</h3>
          <p className="text-center text-gray-600 text-sm md:text-base">{data.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  </section>
)}