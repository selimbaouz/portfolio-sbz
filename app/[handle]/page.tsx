import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";
import { Suspense } from "react";

 type Props = {
  params: Promise<{ handle: string }>
}

export default async function Legals (props: Props) {
  const params = await props.params;
  console.log(props)
  return (
    <Suspense>
      <div className="space-y-24 pt-24 lg:space-y-44 whitespace-pre-line">
        <LegalPage handle={params.handle} />
        <Footer />
      </div>
    </Suspense>
  );
}
