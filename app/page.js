import Header from "/components/header";
import Footer from "/components/footer";
import WeHave from "/components/wehave";
import Section1 from "/components/section1";
import Section2 from "/components/section2";
import Section3 from "/components/section3";
import Section4 from "/components/section4";
import Section5 from "/components/section5";
import Section6 from "/components/section6";
import Section7 from "/components/section7";

import { client } from "../sanity/lib/sanity";
import { getAllServicesQuery } from "../sanity/lib/queries";

export default function Home() {
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

      {/* Section4 */}
      <Section4 />

      {/* Section5 */}
      <Section5 />

      {/* Section6 */}
      <Section6 />

      {/* Section7 */}
      <Section7 />

      
      <WeHave />

      {/* Footer */}
      <Footer />

    </main>
  );
}
