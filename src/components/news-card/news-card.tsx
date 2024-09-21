/* eslint-disable @next/next/no-img-element */
import { Calendar } from "lucide-react";

const NewsCard = ({
  direction = "vertical",
  ...props
}: {
  direction?: "vertical" | "horizontal";
  title: string;
  time: string;
  content: string;
  image: string;
}) => {
  return (
      <div
        className={`${direction === "vertical" ? "flex-col" : "flex-row gap-x-[2rem]"} flex bg-white`}
      >
        <div className={`${direction === "vertical" ? 'w-full' : ''} mx-auto flex justify-center `}>
          <img
            className={`${direction === "horizontal" ? "min-w-[32rem] md:max-w-[32rem] w-[32rem]" : "w-full"}`}
            src={props.image}
            alt="news-img"
          />
        </div>
        <div className="news-content">
          <div className="title text-[1.8rem] line-clamp-2 leading-[2.6rem] text-black mt-[1.2rem] mb-[0.5rem]">
            {props.title}
          </div>
          <div className="time text-[1.4rem] font-[400] leading-[2.1rem] mb-[1.5rem] text-[#7C7C7C] flex items-center gap-2">
            <div className="time-icon">
              <Calendar className="w-[1.6rem] h-[1.6rem]" />
            </div>
            <div className="time-content">{props.time}</div>
          </div>
          <div className="description text-[1.4rem] font-[400] leading-[2.1rem] text-[#7C7C7C] line-clamp-3">
            {props.content}
          </div>
        </div>
      </div>
  );
};

export default NewsCard;
