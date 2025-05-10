
import Header from "/components/header";
import Footer from "/components/footer";
import WeHave from "/components/wehave";
import Section1 from "/components/section1";
import Section2 from "/components/section2";
import Section3 from "/components/section3";

import { client } from "../sanity/lib/sanity";
import { getAllServicesQuery } from "../sanity/lib/queries";

export default async function Home() {
  const services = await client.fetch(getAllServicesQuery);
  
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Section1 */}
     <Section1 />

     {/* Section2 */}
     <Section2 />

     {/* Section3 */}
     <Section3 />

      <WeHave />

      {/* Footer */}
      <Footer />
    </main>
  );
}
