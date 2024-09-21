/* eslint-disable @next/next/no-img-element */
import ProductCard from "@/components/product-card"
import Link from "next/link"

interface IPrevieewProducts {
  bannerPosition: "left" | "right"
  title: string
  banner: string
  products: Record<string, unknown>[]
}

const PreviewProducts = (props: IPrevieewProducts) => {
  return (
    <div className="preview-products bg-white px-4">
      <div className="container mx-auto my-[4rem]">
        <div className="preview-products-header w-full h-[5rem] flex justify-between border-b-[0.2rem] border-b-[#C51100] uppercase ">
          <div
            className="bg-[#C51100] text-[1.6rem] md:text-[1.8rem] font-semibold md:leading-[2rem] leading-[2.7rem] text-white flex items-center justify-center p-[1.1rem]"
            style={{
              clipPath:
                "polygon(81% 1%, 100% 100%, 100% 100%, 0 100%, 0% 50%, 0 0)",
            }}
          >
            <h3 className="pr-24">{props.title}</h3>
          </div>
          <div>
            <Link
              className="text-[#7C7C7C] flex items-center text-[1.6rem] md:text-[1.8rem] md:leading-[2rem] leading-[2.7rem] font-[400] h-full"
              href={"#"}
            >
              Xem tất cả
            </Link>
          </div>
        </div>
        <div
          className={`${props.bannerPosition === "right" ? "flex-row-reverse" : "flex-row"} preview-products-content flex justify-center gap-[3rem] mt-[2rem]`}
        >
          <div className="preview-products-banner h-full hidden md:block">
            <img
              className="w-[30rem] min-h-[68.8rem] object-cover"
              src={props.banner}
              alt="product-preview-banner"
            />
          </div>
          <div className="preview-products grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem]">
            {new Array(8).fill(0).map((_, index) => (
              <ProductCard
                key={index}
                type="link"
                hover
                productInfo={{
                  image: "/imgs/may-giat.png",
                  name: "Máy giặt lồng ngang Malloca MWM-C1903E",
                  price: "19,840,000 đ",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default PreviewProducts
