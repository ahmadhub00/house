import { getsection4 } from "../sanity/lib/queries";
import { client } from "../sanity/lib/sanity";
import { urlFor } from "../sanity/lib/image";

export default async function Section3() {
  const section4 = await client.fetch(getsection4);

return (
    <div>
<div className="w-full text-2xl md:text-3xl font-bold text-center mb-8  ">
<h3>{/* Hire the Best Web and Mobile App Developers */}
{section4?.title}
</h3>
</div>
<div className="flex flex-col md:flex-row items-center  justify-center w-full  px-4 max-w-[1200px] mx-auto gap-6">
{/* Left Text */}
<div className="w-full md:w-1/2 px-4 text-center md:px-6 ">
{/* <p className="text-gray-700  font-normal text-sm md:text-base mb-0">
Welcome to Optimum Tech, a premier IT solutions provider excelling in web design and software development. 
Our team, featuring a diverse pool of skilled developers, is ready for dedicated and fixed-time/cost projects. 
Opt for Optimum Tech, where excellence is a commitment. Specializing in PHP, Laravel, Magento, ReactJS, AngularJS, Node.js, 
and more, our web developers deliver custom, responsive websites, web apps, and eCommerce solutions tailored to your business needs.
<br/> <br/>
In the realm of mobile app development, our Android, iOS, and cross-platform experts leverage cutting-edge tools 
like Android Studio, Xcode, Kotlin, Xamarin, PhoneGap, and React Native to craft next-gen applications. 
Choose Optimum Tech for innovation and proficiency in the latest technologies, propelling your business to new heights. 
Contact us today to embark on a digital transformation journey together.
</p> */}
{section4?.description?.split('\n').map((line, index) => (
  <p key={index} className="text-gray-700 font-normal text-sm md:text-base mb-0 mt-7">
    {line}
    <br />
  </p>
))}
</div>

{/* Right Image */}
<div className="w-full md:w-1/2 flex justify-center px-4">
<img src={urlFor(section4?.image).url()}
className=" w-full max-w-[400px] rounded-lg object-cover shadow-md h-auto transition-transform duration-200 transform ease-in-out hover:scale-110" />
</div>
</div>
</div>
)}