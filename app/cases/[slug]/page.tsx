import { worksBySlugData, worksData } from "@/data/work";
import { Suspense } from "react";
import Loading from "./loading";
import Cases from "@/components/Cases";

export default async function CasesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cases = worksBySlugData.find((work) => work?.slug === slug);
  const currentIndex = worksData?.map(work => work.slug).indexOf(slug);

  const previousProjectSlug = worksData?.[currentIndex! - 1];
  const nextProjectSlug = worksData?.[currentIndex! + 1];

  return (
    <main>     
      <Suspense fallback={<Loading />}>
        <Cases 
          cases={cases ?? null} 
          previousProjectSlug={previousProjectSlug} 
          nextProjectSlug={nextProjectSlug} 
        />
      </Suspense>
    </main>
  );
}
