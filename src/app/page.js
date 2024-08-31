import { fetchAllProducts } from "@/actions";
import { auth } from "@/auth";
import ProductCard from "@/components/ProductCard";
import { redirect } from "next/navigation";


export default async function Home() {

  const getSession = await auth()
  console.log(getSession);
  if (!getSession?.user) redirect("/unauth-page")


  const getAllProducts = await fetchAllProducts()

  return (
    <div>
      <div className="flex justify-center items-center max-w-6xl min-h-[50vh] mx-auto">
        <h1 className="text-6xl font-bold text-center">The World Best Cosmetic Store</h1>
      </div>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {
          getAllProducts && getAllProducts.data && getAllProducts.data.length > 0 ?
            getAllProducts.data.map((productItem) => (
              <ProductCard item={productItem} key={productItem.id} />
            ))
            : null
        }
      </div>
    </div>
  );
}
