import Partner from "./components/partner";
import MoreInfo from "./components/more-info";
import AboutUs from "./components/about-us";

const Footer = () => {
  return (
    <>
      <MoreInfo data={[]} />
      <Partner />
      <AboutUs />
    </>
  );
};

export default Footer;
