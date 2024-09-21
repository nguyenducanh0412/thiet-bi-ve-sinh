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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

/**
 * Search page
 *
 * @returns {JSX.Element} The search page
 */

const Search = () => {
  const keyword = "Toilet"
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
            <BreadcrumbPage>Tìm kiếm</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="page-content pt-[2rem]">
        <div className="title font-bold text-[2rem] md:text-[2.4rem] text-[#1E1E1E] leading-[3.6rem]">
          Kết quả tìm kiếm cho từ khóa “{keyword}”
        </div>
        <div className="sub-title text-[1.4rem] text-[#7C7C7C] leading-[2.1rem] font-[400] pt-[1rem]">
          Tìm thấy 100 kết quả
        </div>

        {/* <div className="sub-title text-[1.4rem] text-red-500 leading-[2.1rem] font-[400] pt-[1rem]">
          Không tìm thấy kết quả tìm kiếm.
        </div> */}
      </div>

      <div className="products grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1rem] md:gap-[2.1rem] mt-[3rem]">
        {new Array(15).fill(0).map((_, index) => (
          <ProductCard
            key={index}
            productInfo={{
              image: "/imgs/may-giat.png",
              name: "Máy giặt lồng ngang Malloca MWM-C1903E",
              price: "19,840,000 đ",
            }}
          />
        ))}
      </div>

      <div className="pagination mt-[3rem]">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default Search
