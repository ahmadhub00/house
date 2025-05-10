
import Header from "/components/header";
import Footer from "/components/footer";
import WeHave from "/components/wehave";
import Section1 from "/components/section1";

import { client } from "../sanity/lib/sanity";
import { getAllServicesQuery } from "../sanity/lib/queries";

export default async function Home() {
  const services = await client.fetch(getAllServicesQuery);
  
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
     <Section1 />

      <WeHave />

      {/* Footer */}
      <Footer />
    </main>
  );
}
