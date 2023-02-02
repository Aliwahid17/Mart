import Carousel from "@/lib/components/carousel/Carousel";
import MidCarousal from "@/lib/components/carousel/MidCarousal";
import ProductCarousel from "@/lib/components/carousel/ProductCarousel";
import Categories from "@/lib/components/Categories";
import TopImage from "@/lib/components/TopImage";






export default function Home() {
  return (
    <>
      <div className=" w-full h-full m-0 mb-14  ">
        <div className="container  mx-auto px-3 md:px-20 lg:px-44 xl:px-56 ">
          <main className="flex flex-col items-center justify-center py-4">
            <TopImage />
            <Carousel  >
              <MidCarousal />
            </Carousel>
            <Categories />
            <ProductCarousel />
          </main>
        </div>
      </div>
    </>
  )
}
