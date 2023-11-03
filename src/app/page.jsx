import { Suspense } from "react";

import ProductsList from "@/components/ProductsList";

function FallbackLoading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h2>Carregando...</h2>
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-primary flex w-full min-h-full flex-col items-center gap-10">
      <Suspense fallback={<FallbackLoading />}>
        <ProductsList   />
      </Suspense>
    </main>
  );
}
