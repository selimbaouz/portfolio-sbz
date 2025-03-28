import { Suspense } from "react";
import { JsonLd } from 'react-schemaorg';
import { worksData } from "@/data/work";
import { articlesData } from "@/data/articles";
import Header from "@/components/Header";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import News from "@/components/News";

export default function Home() {

  <>
    <JsonLd
      item={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "selimbaouz",
        url: "https://selimbaouz.com",
        logo: "https://selimbaouz.com/images/sejiux.webp",
        description: "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance.",
        sameAs: [
          "https://twitter.com/selimbaouz",
          "https://github.com/selimbaouz",
          "https://linkedin.com/selimbaouz",
          "https://medium.com/@selimbaouz",
          "https://pinterest.com/selimbaouz",
          "https://facebook.com/selimbaouz",
        ]
      }}
    /></>;
  
  return (
    <Suspense>
      <div className="space-y-20 md:space-y-44">
        <Header />
        <Works works={worksData} />
        <News articles={articlesData} />
        <Footer />
      </div>
    </Suspense>
  );
}
