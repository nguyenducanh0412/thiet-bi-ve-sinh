import { Mail, Phone } from "lucide-react";
import Nav from "./components/nav";
import HotDeal from "./components/hot-deal";


const NavMenu = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <div className="container flex flex-col md:flex-row justify-between md:items-center mx-auto py-[1.5rem] gap-y-[0.8rem] px-2 ">
          <div className="text-[1.4rem] lg:text-[1.6rem] leading-[2.4rem]">
            Showroom phục vụ từ 8h - 18h các ngày trong tuần, có chỗ để xe ô tô.
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
            <div className="flex gap-2 items-center"> 
              <Mail className="h-[1.4rem] w-[1.4rem]" />
              <h5 className="text-[1.4rem] lg:text-[1.6rem] leading-[2.4rem]">hoangmai.eco@gmail.com</h5>
            </div>
            <div className="flex gap-2 items-center"> 
              <Phone className="h-[1.4rem] w-[1.4rem]" />
              <h5 className="text-[1.4rem] lg:text-[1.6rem] leading-[2.4rem]">Hotline 024 3634 1004</h5>
            </div>
          </div>
        </div>
        <Nav  />
        <HotDeal />
      </div>
    </>
  );
};

export default NavMenu;
