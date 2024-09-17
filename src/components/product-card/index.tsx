/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export interface IProductCardProps {
  type?: "default" | "link";
  hover?: boolean;
  productInfo: {
    image: string;
    name: string;
    price: number | string;
    showTag?: boolean;
    tagName?: string;
  };
}

const ProductCard = (props: IProductCardProps) => {
  const Component = props.type === "link" ? Link : "div";

  return (
    <Component
      href={"#"}
      className={`${props.hover ? "hover:shadow-[rgba(149,157,165,0.2)_0px_8px_24px] hover:border  hover:border-[#E5E5E5] hover:translate-y-[-0.5rem]" : ""} border border-[#EDEDED] rounded-[2px] overflow-hidden transition-all ease-linear delay-50 product-item block max-w-[30rem] bg-white`}
    >
      <div className="relative product-img p-[1.5rem] flex justify-center">
        <img
          className=""
          src={props.productInfo.image || "/imgs/may-giat.png"}
          alt="product"
        />
        {props.productInfo?.showTag && (
          <div className="absolute bottom-[1.5rem] left-[5rem] w-[5rem] h-[5rem] tag uppercase text-[1.4rem] font-semibold flex items-center justify-center text-white px-4 py-8 rounded-[50%] bg-red-600">
            {props.productInfo?.tagName || "new"}
            <div
              style={{
                clipPath: "ellipse(50% 40% at 0% 0%)",
                transform: "translate(16px, 32px)",
                boxShadow: "2px 8px 4px 3px rgba(0, 0, 0, 0.3)",
              }}
              className="absolute bottom-[0] right-0 w-[4rem] h-[5rem] bg-red-600"
            ></div>
          </div>
        )}
      </div>
      <div className="product-info">
        <div className="py-[2rem] px-[1.5rem]">
          <div className=" font-[400] text-[#7C7C7C] product-name text-[1.6rem] leading-[2.4rem] mb-[1rem] line-clamp-2">
            {props.productInfo.name}
          </div>
          <div className="product-price text-primary font-bold text-[1.8rem] leading-[2.8rem]">
            {props.productInfo.price}
          </div>
        </div>
      </div>
    </Component>
  );
};

export default ProductCard;
