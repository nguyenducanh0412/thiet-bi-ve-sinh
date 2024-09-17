"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const HotDeal = () => {
  const handleBuyHotDeal = () => {
    console.log("buy now");
  };

  return (
    <div
      // data-aos="fade-down"
      className="h-[10rem] md:h-[9rem] bg-black flex flex-col lg:flex-row justify-center items-center gap-2 z-[100]"
    >
      <div className="flex items-center justify-center">
        <div className="hot-deal-icon">
          <Image
            src="/imgs/fire-icon.svg"
            alt="Fire Icon"
            width={40}
            height={40}
          />
        </div>
        <div className="hot-deal-content text-[1.6rem] leading-[2rem] lg:text-[2rem] font-bold lg:leading-[3rem] text-white">
          Combo 4 thiết bị bếp: bếp từ, hút mùi, chậu inox, vòi
        </div>
      </div>
      <div className="buy-btn pl-8">
        <Button
          className="h-[3.6rem] px-[2rem] lg:h-[5rem] rounded-[2.8rem] py-[1rem] lg:px-[2.8rem] text-[1.4rem]"
          onClick={handleBuyHotDeal}
        >
          Mua ngay
        </Button>
      </div>
    </div>
  );
};

export default HotDeal;
