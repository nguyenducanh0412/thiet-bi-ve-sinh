import { Button } from "@/components/ui/button";
import Link from "next/link";

const MoreInfo = (props: {
  data: {
    image: string;
    title: string;
    link: string;
  }[];
}) => {
  return (
    <div className="bg-[#C51100] flex items-center justify-evenly flex-wrap gap-[3.2rem] py-[6rem]">
      {/* {props.data.map((e) => (
        <div>
          <div className="box max-w-[42rem] flex flex-col items-center gap-y-[2.4rem]">
            <img src={e.image} alt="icon" />
            <div className="text font-semibold text-[2.2rem] leading-[3.3rem] text-white">
              {e.title}
            </div>

            <Link href={e.link} className="w-[14.7rem] h-[5rem] text-[1.4rem] hover:!bg-white hover:opacity-95 font-semibold bg-white uppercase text-[#C51100] flex justify-center items-center rounded-[2.8rem]">
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      ))} */}
      {new Array(3).fill(0).map((e, i) => (
        <div key={i}>
          <div className="box max-w-[42rem] flex flex-col items-center gap-y-[2.4rem]">
            <img src="/imgs/transport-icon.svg" alt="icon" />
            <div className="text font-semibold text-[2.2rem] leading-[3.3rem] text-white">
              Miễn phí vận chuyển toàn quốc
            </div>

            <Link
              href={"#"}
              className="w-[14.7rem] h-[5rem] text-[1.4rem] hover:!bg-white hover:opacity-95 font-semibold bg-white uppercase text-[#C51100] flex justify-center items-center rounded-[2.8rem]"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreInfo;
