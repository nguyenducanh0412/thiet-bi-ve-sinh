"use client"

/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

import { Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export interface IProductCardProps {
  type?: "default" | "link"
  hover?: boolean
  border?: boolean
  productInfo: {
    image: string
    name: string
    price: number | string
    showTag?: boolean
    tagName?: string
  }
  showActionsAtButtom?: boolean
}

const ProductCard = ({ type = "link", ...props }: IProductCardProps) => {
  const Component = type === "link" ? Link : "div"

  const [renderActions, setRenderActions] = useState(false)

  const handleAddToCart = () => {
    console.log("add to cart")
  }

  return (
    <div
      className={`${props.hover ? "hover:shadow-[rgba(149,157,165,0.2)_0px_8px_24px] hover:border  hover:border-[#E5E5E5] hover:translate-y-[-0.5rem]" : ""}
      ${props.showActionsAtButtom ? "hover:shadow-[rgba(255,255,255,0.1)_0px_0px_0px_1px_inset,rgba(0,0,0,0.5)_0px_0px_0px_1px] [&:hover>.action-at-buttom]:!flex min-h-[42rem]" : ""}
      relative 
      [&>.actions]:hover:!flex rounded-[2px] overflow-hidden transition-all ease-linear delay-50 product-item block max-w-[30rem] bg-white`}
      onMouseLeave={() => {
        if (!props.showActionsAtButtom) {
          setRenderActions(false)
        }
      }}
      onMouseEnter={() => {
        if (!props.showActionsAtButtom) {
          setRenderActions(true)
        }
      }}
    >
      <Component
        href={"#"}
        className="relative product-img p-[1.5rem] flex justify-center"
      >
        <img
          className="cursor-pointer"
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
      </Component>
      <div className="product-info">
        <div className="py-[1.2rem] px-[1.5rem]">
          <Component
            href={"#"}
            className="hover:text-red-500 cursor-pointer transition-colors ease-linear delay-0 hover:font-semibold font-[400] text-[#7C7C7C] product-name text-[1.6rem] leading-[2.4rem] mb-[1rem] line-clamp-2"
          >
            {props.productInfo.name}
          </Component>
          <div className="product-price truncate break-all text-primary font-bold text-[1.6rem] lg:text-[1.8rem] leading-[2.8rem]">
            {props.productInfo.price}
          </div>
        </div>
      </div>

       {/* button actions */}
       <div className="action-at-buttom justify-start items-center px-[1.5rem] pb-[1.2rem] hidden">
        <Button onClick={handleAddToCart} className="w-[13.2rem] h-[3.8rem] bg-[#1E1E1E] flex items-center justify-center text-white rounded-[2.8rem] text-[1.4rem] leading-[2.1rem]">Thêm vào giỏ</Button>
      </div>

      {/* actions */}
      {!props.showActionsAtButtom && renderActions && (
        <div
          data-aos="zoom-in"
          className="actions hidden absolute top-[1rem] right-[1rem] actions flex-col gap-4 justify-end transition-all ease-linear delay-100"
        >
          <div className="cart cursor-pointer flex justify-end">
            <div className="hover:opacity-70 bg-primary text-white cart-icon w-[max-content] p-2 rounded-[0.4rem] transition-all ease-linear delay-75">
              <Heart />
            </div>
          </div>
          <div className="cart cursor-pointer flex justify-end">
            <div
              onClick={handleAddToCart}
              className="hover:opacity-70 bg-primary text-white cart-icon w-[max-content] p-2 rounded-[0.4rem] transition-all ease-linear delay-75"
            >
              <ShoppingCart />
            </div>
          </div>
        </div>
      )}

     
    </div>
  )
}

export default ProductCard
