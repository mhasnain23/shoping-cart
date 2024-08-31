'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";


const ProductCard = ({ item }) => {


  const router = useRouter()

  return (
    <Card>
      <CardContent>
        <div className="w-full aspect-w-16 aspect-h-8 lg-h-80">
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-lg font-bold text-gray-900">{item?.title}</CardTitle>
        </div>
        <div className="mt-4 items-center justify-between flex flex-wrap gap-2">
          <p className='text-lg font-bold text-gray-800'>{item?.price}</p>
          <div>
            <Button onClick={() => router.push(`/${item?.id}`)}>Details</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
