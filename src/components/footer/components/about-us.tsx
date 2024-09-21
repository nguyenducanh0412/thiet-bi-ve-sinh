"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const [email, setEmail] = useState("");
  const handleSubcribe = () => {
    console.log(email);
  };
  return (
    <>
      <div className="bg-[#1E1E1E] border-y-[0.1rem] border-y-[#EDEDED]">
        <div className="container mx-auto">
          {/* about us */}
          <div className="about-us-info grid grid-flow-row grid-cols-3 gap-y-[3.2rem] lg:grid-cols-6 py-[4rem] px-4">
            {/* about us */}
            <div className="about-us-info-item flex flex-col gap-y-[1rem] items-start text-[1.4rem] leading-[2.1rem] font-[400]">
              <div className="title uppercase text-white">Giới thiệu</div>
              <div className="list flex flex-col gap-y-[0.8rem]">
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Về chúng tôi
                </Link>
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Quy định sử dụng
                </Link>
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Dịch vụ cung cấp
                </Link>
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Thông tin liên hệ
                </Link>
              </div>
            </div>
            {/* support customer */}
            <div className="about-us-info-item flex flex-col gap-y-[1rem] items-start text-[1.4rem] leading-[2.1rem] font-[400]">
              <div className="title uppercase text-white">
                Hỗ trợ khách hàng
              </div>
              <div className="list flex flex-col gap-y-[0.8rem]">
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Hướng dẫn mua hàng
                </Link>
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Chính sách giao hàng
                </Link>
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Bảo hành sản phẩm
                </Link>
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Bảo mật thông tin
                </Link>
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Chính sách đổi trả
                </Link>
              </div>
            </div>
            {/* social */}
            <div className="about-us-info-item flex flex-col gap-y-[1rem] items-start text-[1.4rem] leading-[2.1rem] font-[400]">
              <div className="title uppercase text-white">Mạng xã hội</div>
              <div className="list flex flex-col gap-y-[0.8rem]">
                <Link
                  href={"#"}
                  className="flex items-center gap-2 text-[#AEAEAE]"
                >
                  <Image
                    src="/imgs/icons/fb-icon.svg"
                    alt="fb"
                    width={16}
                    height={16}
                  />
                  Facebook
                </Link>
                <Link
                  href={"#"}
                  className="flex items-center gap-2 text-[#AEAEAE]"
                >
                  <Image
                    src="/imgs/icons/gg-icon.svg"
                    alt="fb"
                    width={16}
                    height={16}
                  />
                  Google
                </Link>
                <Link
                  href={"#"}
                  className="flex items-center gap-2 text-[#AEAEAE]"
                >
                  <Image
                    src="/imgs/icons/linkedin-icon.svg"
                    alt="fb"
                    width={16}
                    height={16}
                  />
                  Linkedin
                </Link>
                <Link
                  href={"#"}
                  className="flex items-center gap-2 text-[#AEAEAE]"
                >
                  <Image
                    src="/imgs/icons/blog-icon.svg"
                    alt="fb"
                    width={16}
                    height={16}
                  />
                  Blog
                </Link>
              </div>
            </div>
            {/* payment */}
            <div className="about-us-info-item flex flex-col gap-y-[1rem] items-start text-[1.4rem] leading-[2.1rem] font-[400]">
              <div className="title uppercase text-white">Thanh toán</div>
              <div className="list flex flex-col gap-y-[0.8rem]">
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Trực tuyến
                </Link>
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Qua ngân hàng
                </Link>
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Thanh toán trả góp
                </Link>
              </div>
            </div>
            {/* news */}
            <div className="about-us-info-item flex flex-col gap-y-[1rem] items-start text-[1.4rem] leading-[2.1rem] font-[400]">
              <div className="title uppercase text-white">Tin tức</div>
              <div className="list flex flex-col gap-y-[0.8rem]">
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Tin tức khuyến mãi
                </Link>
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Kinh nghiệm
                </Link>
                <Link href={"#"} className="block text-[#AEAEAE]">
                  Ảnh thực tế
                </Link>
              </div>
            </div>
            {/* subcribe */}
            <div className="about-us-info-item flex flex-col gap-y-[1rem] items-start text-[1.4rem] leading-[2.1rem] font-[400]">
              <div className="title uppercase text-white">Đăng ký nhận tin</div>
              <div className="list flex flex-col items-end gap-y-[0.8rem]">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[3.8rem] bg-white px-[1rem] text-[1.4rem] leading-[2.1rem] text-[#1E1E1E] rounded-[1rem] outline-none"
                  placeholder="Nhập địa chỉ email..."
                />
                <Button
                  onClick={handleSubcribe}
                  className="w-[12rem] h-[3.8rem] flex items-center justify-center text-[1.4rem] leading-[2.1rem] text-white rounded-[2.8rem]"
                >
                  Đăng ký
                </Button>
              </div>
            </div>
          </div>
          {/* map */}
          <div className="bg-white p-[2rem] flex flex-col flex-wrap lg:flex-row lg:px-[8rem] justify-center gap-[3.2rem]">
            <div className="flex flex-col md:flex-row gap-[1.8rem] items-center justify-center">
              <div className="info text-[1.4rem] leading-[2.1rem] font-semibold w-[29rem] gap-[1rem]">
                <div className="title py-[1rem]">
                  Thiết bị vệ sinh - Thiết bị bếp
                </div>
                <div className="address text-[1.4rem] leading-[2.1rem] font-[400] text-[#7C7C7C]">
                  Showroom: 549 Kim Ngưu, Hà Nội
                </div>
                <div className="hotline text-[1.4rem] leading-[2.1rem] font-[400] text-[#7C7C7C]">
                  Hotline:{" "}
                  <span className="text-[#1E1E1E]">
                    024 3634 1004 - 024 3634 0325
                  </span>
                </div>
                <div className="contact text-[1.4rem] leading-[2.1rem] font-[400] text-[#7C7C7C] mt-[1.4rem] flex flex-col gap-y-[0.8rem]">
                  <p>Tư vấn 1 ĐT/Zalo: 0981 067 466</p>
                  <p>Tư vấn 2 ĐT/Zalo: 0983 055 605</p>
                  <p>Tư vấn 3 ĐT/Zalo: 0904 624 766</p>
                  <p>Tư vấn 4 ĐT/Zalo: 0987 730 976</p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.80351526427023!2d105.86246051436306!3d20.9983988643764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac17949fb8db%3A0xe3f7efe2405a2b32!2zVGhp4bq_dCBi4buLIHbhu4cgc2luaCBIb8OgbmcgTWFp!5e0!3m2!1sen!2s!4v1726591862575!5m2!1sen!2s"
                width="308"
                height="205"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col md:flex-row gap-[1.8rem] items-center md:items-start justify-center">
              <div className="info text-[1.4rem] leading-[2.1rem] font-semibold w-[29rem] gap-[1rem]">
                <div className="title py-[1rem]">
                  Gạch ốp lát - Sàn gỗ - Ngói lợp
                </div>
                <div className="address text-[1.4rem] leading-[2.1rem] font-[400] text-[#7C7C7C]">
                  Showroom: 66 Lạc Trung, Hà Nội
                </div>
                <div className="hotline text-[1.4rem] leading-[2.1rem] font-[400] text-[#7C7C7C]">
                  Điện thoại:{" "}
                  <span className="text-[#1E1E1E]">024 3632 0280</span>
                </div>
                <div className="contact text-[1.4rem] leading-[2.1rem] font-[400] text-[#7C7C7C] mt-[1.4rem] flex flex-col gap-y-[0.8rem]">
                  <p>Tư vấn 1 ĐT/Zalo: 0911 441 066</p>
                  <p>Tư vấn 2 ĐT/Zalo: 0981 306 450</p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.736502120766!2d105.86098477596919!3d21.003196988654732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad5ff16fe52b%3A0x5764f4fdd973635b!2zR-G6oWNoIOG7kXAgbMOhdCBIb8OgbmcgTWFp!5e0!3m2!1sen!2s!4v1726592073332!5m2!1sen!2s"
                width="308"
                height="205"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* info bussiness */}
          <div className="px-4">
            <div className="title py-[1.5rem] text-[1.4rem] leading-[2.1rem] font-[400] border-b-[0.1rem] border-b-[#EDEDED] text-white">
              Thông tin doanh nghiệp:
            </div>
            <div className="info grid grid-flow-row grid-cols-2 lg:grid-cols-4 py-[1.5rem] gap-[3.2rem]">
              <div className="item flex flex-col gap-[0.8rem]">
                <p className="text-[1.4rem] leading-[2.1rem] font-[400] word-break text-[#AEAEAE]">
                  Địa chỉ: 549 phố Kim Ngưu, Quận Hai Bà Trưng, TP Hà Nội
                </p>
                <p className="text-[1.4rem] leading-[2.1rem] font-[400] word-break text-[#AEAEAE]">
                  Website: thietbivesinhvn.com.vn
                </p>
              </div>

              <div className="item flex flex-col gap-[0.8rem]">
                <p className="text-[1.4rem] leading-[2.1rem] font-[400] word-break text-[#AEAEAE]">
                  Mã số doanh nghiệp: 0105942167
                </p>
                <p className="text-[1.4rem] leading-[2.1rem] font-[400] word-break text-[#AEAEAE]">
                  Đăng ký: Ngày 16 tháng 07 năm 2012
                </p>
              </div>

              <div className="item flex flex-col gap-[0.8rem]">
                <p className="text-[1.4rem] leading-[2.1rem] font-[400] word-break text-[#AEAEAE]">
                  Điện thoại: <span className="text-white">024 3634 1004</span>
                </p>
                <p className="text-[1.4rem] leading-[2.1rem] font-[400] word-break text-[#AEAEAE]">
                  Fax: 024 3634 1004
                </p>
                <p className="text-[1.4rem] leading-[2.1rem] font-[400] word-break text-[#AEAEAE]">
                  Email: hoangmai.eco@gmail.com
                </p>
              </div>
              <div className="item flex flex-col gap-[0.8rem]">
                <Image
                  src={"/imgs/stamp-logo.png"}
                  alt="stamp-logo"
                  width={160}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tags */}
      <div className="bg-[#1E1E1E]">
        <div className="container mx-auto">
          <div className="flex gap-2 title text-[1.4rem] leading-[2.1rem] [&>*]:font-[400] py-[3rem] bo">
            <div className=" text-[#AEAEAE]">Tags:</div>
            <div className="flex gap-2 flex-wrap">
              <Link className="text-white opacity-90 " href={"#"}>
                Bồn cầu 2 khối,
              </Link>
              <Link className="text-white opacity-90 " href={"#"}>
                Bồn cầu 1 khối
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
