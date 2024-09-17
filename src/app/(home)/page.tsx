/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

import BannerSale from "./components/banner-sale";
import PreviewProducts from "./components/preview-products";
import StantOutProducts from "./components/stand-out-products";
import News from "./components/news";

export default function Home() {
  return (
    <>
      <Link href="#" className="">
        <img
          className="w-full h-[55rem]"
          src="/imgs/banner-home-page.png"
          alt="Banner"
        />
      </Link>
      <StantOutProducts />
      <PreviewProducts
        banner="/imgs/product-preview-banner.png"
        bannerPosition="left"
        title="Thiết bị vệ sinh"
        products={[]}
      />
      <PreviewProducts
        banner="/imgs/product-preview-banner.png"
        bannerPosition="right"
        title="Thiết bị nhà bếp"
        products={[]}
      />
      <BannerSale
        title="Combo 4 thiết bị bếp"
        content="Bếp từ, hút mùi, chậu inox, vòi,..."
        bgImg="/imgs/banner-sale.png"
      />
      <PreviewProducts
        banner="/imgs/product-preview-banner.png"
        bannerPosition="left"
        title="Bồn cầu toilet"
        products={[]}
      />
      <PreviewProducts
        banner="/imgs/product-preview-banner.png"
        bannerPosition="right"
        title="Chậu rửa bát"
        products={[]}
      />
      <News title="Tin tức mới nhất" data={[]}/>
    </>
  );
}
