import { Button } from "@/components/ui/button";

const BannerSale = (props: {
  title: string;
  content: string;
  bgImg: string;
}) => {
  const handleBuy = () => {
    console.log("buy now");
  };

  return (
    <div
      style={{
        backgroundImage: `url('${props.bgImg}')`,
      }}
      className="bg-no-repeat bg-cover"
    >
      <div className="container h-[23rem] flex flex-col gap-8 md:flex-row justify-center md:justify-between items-center mx-auto px-4">
        <div className="left-content text-white">
          <div className="title font-semibold text-[3.2rem] md:text-[4rem] leading-[4rem] md:leading-[6rem]">
            {props.title}
          </div>
          <div className="content font-semibold text-[1.4rem] md:text-[1.6rem] leading-[2.4rem]">
            {props.content}
          </div>
        </div>
        <div className="right-content">
          <Button
            onClick={handleBuy}
            className="h-[5rem] md:h-[6rem] bg-[#1E1E1E] px-[2.8rem] nd:px-[4rem] py-[1.6rem] md:py-[2rem] rounded-[2.8rem] text-white uppercase text-[1.2rem] md:text-[1.4rem] font-semibold leading-[2.1rem] hover:!bg-[#1E1E1E]"
          >
            Mua ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerSale;
