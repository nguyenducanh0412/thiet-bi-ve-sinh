"use client"

import ProductCard from "@/components/product-card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Dot, Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Cart = () => {

  const handleUpdateQuantity = (type: 'increase' | 'decrease') => {
    console.log("Update Quantity: ", type)
  }

  const handleDeleteCartItem = () => {
    console.log("Delete Cart Item")
  }

  const handleCheckout = () => {
        
  }
  return (
    <div className="container mx-auto py-[2rem] px-4">
      <Breadcrumb className="pb-[.8rem] border-b-[0.1rem] border-b-[#EDEDED]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <div className="text-[1.4rem] leading-[2.1rem] text-[#7C7C7C] font-[400]">
              /
            </div>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Giỏ hàng</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="page-content pt-[2rem]">
        <div className="title font-bold text-[2rem] md:text-[2.4rem] text-[#1E1E1E] leading-[3.6rem] mb-[3.2rem]">
          Thôn tin giỏ hàng
        </div>
        {/* empty cart */}
        <div className="empty hidden">
          <div className="sub-title text-[1.4rem] text-[#7C7C7C] leading-[2.1rem] font-[400] pt-[1rem]">
            Không có sản phẩm nào trong giỏ hàng của bạn.
          </div>
          <div className="sub-title text-[1.4rem] text-[#7C7C7C] leading-[2.1rem] font-[400] pt-[1rem] mb-[15rem]">
            Nhấn vào{" "}
            <Link href={"#"} className="text-[#DC2626]">
              đây
            </Link>{" "}
            để tiếp tục mua sắm.
          </div>
        </div>

        {/* has products */}
        <div className="wrapper grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-[6rem] mb-[8rem]">
          <div className="left-content order-2 lg:order-1">
            <h3 className="text-[1.8rem] font-semibold leading-[2.7rem] text-[#7C7C7C]">
              Thông tin giỏ hàng
            </h3>
            <form className="form payment-info-form pt-[2rem] grid grid-flow-row grid-cols-1 gap-y-[2rem]">
              {/* form-control */}
              <div className="form-control flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="name"
                  className="text-[1.4rem] font-[400] leading-[2.1rem] text-[#7C7C7C]"
                >
                  Họ và tên
                </label>
                <input
                  className="w-full h-[4.2rem] rounded-[0.5rem] border border-[#959595] text-[1.4rem]  leading-[2.1rem] text-[#1E1E1E] outline-none px-[1rem] py-[1.5rem] placeholder:text-[#959595]"
                  id="name"
                  placeholder="Nhập họ và tên"
                  type="text"
                />
              </div>

              {/* form-control */}
              <div className="form-control flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="address"
                  className="text-[1.4rem] font-[400] leading-[2.1rem] text-[#7C7C7C]"
                >
                  Địa chỉ
                </label>
                <input
                  className="w-full h-[4.2rem] rounded-[0.5rem] border border-[#959595] text-[1.4rem]  leading-[2.1rem] text-[#1E1E1E] outline-none px-[1rem] py-[1.5rem] placeholder:text-[#959595]"
                  id="name"
                  placeholder="Nhập địa chỉ"
                  type="text"
                />
              </div>

              {/* form-control */}
              <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                {/* form-control */}
                <div className="form-control flex flex-col gap-[0.5rem]">
                  <label
                    htmlFor="address"
                    className="text-[1.4rem] font-[400] leading-[2.1rem] text-[#7C7C7C]"
                  >
                    Tỉnh/ Thành phố
                  </label>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Chọn Tỉnh/Thành phố" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectItem value="hn">Hà Nội</SelectItem>
                      <SelectItem value="hy">Hưng Yên</SelectItem>
                      <SelectItem value="qn">Quảng Ninh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* form-control */}
                <div className="form-control flex flex-col gap-[0.5rem]">
                  <label
                    htmlFor="address"
                    className="text-[1.4rem] font-[400] leading-[2.1rem] text-[#7C7C7C]"
                  >
                    Quận/Huyện
                  </label>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Chọn Quận/Huyện" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectItem value="hn">Cầu Giấy</SelectItem>
                      <SelectItem value="hy">Hoàng Mai</SelectItem>
                      <SelectItem value="qn">Ba Đình</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* form-control */}
              <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                {/* form-control */}
                <div className="form-control flex flex-col gap-[0.5rem]">
                  <label
                    htmlFor="address"
                    className="text-[1.4rem] font-[400] leading-[2.1rem] text-[#7C7C7C]"
                  >
                    Phường/ Xã
                  </label>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Chọn Phường/ Xã" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectItem value="hn">Hà Nội</SelectItem>
                      <SelectItem value="hy">Hưng Yên</SelectItem>
                      <SelectItem value="qn">Quảng Ninh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* form-control */}
              <div className="form-control flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="address"
                  className="text-[1.4rem] font-[400] leading-[2.1rem] text-[#7C7C7C]"
                >
                  Ghi chú
                </label>
                <Textarea placeholder="Nhập ghi chú giao hàng." rows={6} />
              </div>

              {/* rules */}
              <div className="rules">
                <div className="title text-[1.4rem] leading-[2.1rem] text-[#1E1E1E] mb-[0.5rem] ">
                  Phương thức thanh toán
                </div>
                <div className="rules-box  border border-[#959595] rounded-[0.4rem] overflow-hidden">
                  <div className="title text-[1.4rem] leading-[2.1rem] text-[#959595] p-[1rem] flex items-center gap-[0.5rem]">
                    <div className="icon">
                      <Image
                        src="/imgs/icons/red-dot.svg"
                        alt="icon"
                        width={18}
                        height={18}
                      />
                    </div>
                    Thanh toán khi nhận hàng (COD)
                  </div>
                  <ul className="p-[1rem] bg-[#F6F6F6]">
                    <li className="text-[1.4rem] leading-[2.1rem] text-[#959595] flex gap-[0.4rem] items-center">
                      <div className="icon">
                        <Dot className="w-[1.6rem] h-[1.6rem] scale-150" />
                      </div>
                      <div className="text">
                        Giao hàng miễn phí trong vòng 24h
                      </div>
                    </li>
                    <li className="text-[1.4rem] leading-[2.1rem] text-[#959595] flex gap-[0.4rem] items-center">
                      <div className="icon">
                        <Dot className="w-[1.6rem] h-[1.6rem] scale-150" />
                      </div>
                      <div className="text">Miễn phí vận chuyển tại Hà Nội</div>
                    </li>
                    <li className="text-[1.4rem] leading-[2.1rem] text-[#959595] flex gap-[0.4rem] items-center">
                      <div className="icon">
                        <Dot className="w-[1.6rem] h-[1.6rem] scale-150" />
                      </div>
                      <div className="text">
                        Đổi trả hàng không giới hạn, Xem chi tiết tại mục Bảo
                        hành
                      </div>
                    </li>
                    <li className="text-[1.4rem] leading-[2.1rem] text-[#959595] flex gap-[0.4rem] items-center">
                      <div className="icon">
                        <Dot className="w-[1.6rem] h-[1.6rem] scale-150" />
                      </div>
                      <div className="text">
                        Hỗ trợ thanh toán quẹt thẻ ATM,Visa,...,tại nhà
                      </div>
                    </li>
                    <li className="text-[1.4rem] leading-[2.1rem] text-[#959595] flex gap-[0.4rem] items-center">
                      <div className="icon">
                        <Dot className="w-[1.6rem] h-[1.6rem] scale-150" />
                      </div>
                      <div className="text">
                        Có các đối tác nhà xe tin cậy giao hàng toàn quốc
                      </div>
                    </li>
                    <li className="text-[1.4rem] leading-[2.1rem] text-[#959595] flex gap-[0.4rem] items-center">
                      <div className="icon">
                        <Dot className="w-[1.6rem] h-[1.6rem] scale-150" />
                      </div>
                      <div className="text"> Chỉ bán sản phẩm chính hãng</div>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div className="right-content bg-[#F6F6F6] py-[2rem] oder-1 lg:order-2">
            {/* cart list */}
            <div className="cart-list [&_.cart-item_+_.cart-item]:border-t [&_.cart-item_+_.cart-item]:border-t-[#EDEDED] max-h-[80rem] overflow-y-auto flex flex-col gap-[2rem]">
              {/* cart item */}
              {new Array(8).fill(0).map((_, index) => {
                return (
                  <div
                    key={index}
                    className="cart-item py-[2.4rem] flex gap-[1rem] px-[4rem] "
                  >
                    <div className="cart-img">
                      <Image
                        src={"/imgs/may-giat.png"}
                        alt="product"
                        width={90}
                        height={90}
                      />
                    </div>
                    <div className="cart-info flex flex-col justify-between items-start w-[35rem] max-w-[35rem] gap-[1rem]">
                      <div className="cart-name text-[1.6rem] leading-[2.4rem] text-[#1E1E1E] break-words line-clamp-2">
                        Máy giặt Electrolux Inverter 11 kg EWF1141SESA Máy giặt
                        Electrolux Inverter 11 kg EWF1141SESA
                      </div>
                      <div className="cart-action flex gap-4 items-center">
                        <Minus onClick={() => handleUpdateQuantity('decrease')} className="cursor-pointer" />
                        <input
                          className="text-[1.6rem] leading-[2.4rem] text-[#1E1E1E] w-[6rem] h-[3.8rem] outline-none p-[1rem]"
                          type="text"
                        />
                        <Plus onClick={() => handleUpdateQuantity('increase')} className="cursor-pointer" />
                      </div>
                    </div>
                    <div className="cart-price flex flex-col flex-1 items-end gap-[1rem]">
                      <div className="cart-price w-[max-content] text-[1.6rem] font-bold leading-[2.4rem] text-[#1E1E1E]">
                        19,840,000 đ
                      </div>
                      <div
                        className="btn-delete cursor-pointer"
                        onClick={handleDeleteCartItem}
                      >
                        <Trash2 className="text-primary" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* total amount */}
            <div className="wrapper px-[4rem]">
              <div className="total-amount border-t-[0.2rem] py-[2rem] rounded-[0.2rem] border-t-[#7C7C7C] h-[7.5rem] flex justify-between items-center  text-[2.2rem] font-semibold leading-[3.3rem]">
                <div className="title  text-[#7C7C7C]">Tổng cộng </div>
                <div className="amount text-[#1E1E1E]">26,490,000 VNĐ</div>
              </div>
              <div className="btn-checkout flex justify-end mt-[3rem] pb-[2rem]">
                <Button onClick={handleCheckout} className="w-[25rem] uppercase h-[5.6rem] rounded-[0.5rem] text-[1.6rem] leading-[2.4rem] flex items-center justify-center bg-[#C51100]">Tiến hành thanh toán</Button>
              </div>
            </div>
          </div>
        </div>

        {/* interested-in */}
        <div className="interested-in">
          <div className="sub-title text-[1.8rem] text-[#1E1E1E] leading-[2.7rem] font-bold">
            Có thể bạn quan tâm
          </div>
          <div className="products grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-[1rem] md:gap-[2.1rem] mt-[1.5rem]">
            {new Array(4).fill(0).map((_, index) => (
              <ProductCard
                key={index}
                productInfo={{
                  image: "/imgs/may-giat.png",
                  name: "Máy giặt lồng ngang Malloca MWM-C1903E",
                  price: "19,840,000 đ",
                }}
                showActionsAtButtom
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
