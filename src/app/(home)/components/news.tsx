import NewsCard from "@/components/news-card/news-card";
import Link from "next/link";

const News = (props: {
  title: string;
  data: {
    id: number;
    title: string;
    time: string;
    content: string;
    image: string;
  }[];
}) => {
  return (
    <div className="preview-products bg-white px-4">
      <div className="container mx-auto my-[4rem]">
        <div className="preview-products-header w-full h-[5rem] flex justify-between border-b-[0.2rem] border-b-[#EDEDED] uppercase ">
          <div className="text-[#C51100] border-b-[#C51100] border-b-[0.4rem] text-[1.6rem] md:text-[1.8rem] font-semibold md:leading-[2rem] leading-[2.7rem] flex items-center justify-center p-[1.1rem]">
            <h3 className="">{props.title}</h3>
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
        <div className="flex justify-center gap-x-4 gap-y-12 mt-[2rem] flex-wrap md:justify-between">
          {/* {props.data.map((item) => (
            <NewsCard
              key={item.id}
              image={item.image}
              title={item.title}
              time={item.time}
              content={item.content}
            />
          ))} */}
          {new Array(4).fill(0).map((item, index) => (
            <NewsCard
              key={index}
              image="/imgs/news-img.png"
              title="Xử lý bồn cầu bị thiếu hơi nhanh chóng bằng 4 cách sau đây"
              time="Thứ tư, 1/5/2025"
              content="Bồn cầu bị thiếu hơi là tình trạng thường thấy ở các công trình phụ hiện nay. Có rất nhiều nguyên nhân gây ra tình trạng này và biện pháp khắc phục cũng rất đơn giản. Chúng tôi có tổng hợp một số phương pháp dưới đây giúp bạn giải quyết triệt để và nhanh chóng"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
