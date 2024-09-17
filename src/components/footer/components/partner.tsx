/* eslint-disable @next/next/no-img-element */
const Partner = () => {
  const partners = [
    "/imgs/partners/moen.png",
    "/imgs/partners/kronotex.png",
    "/imgs/partners/nofer.png",
    "/imgs/partners/govern.png",
    "/imgs/partners/canzy.png",
    "/imgs/partners/grasso.png",
    "/imgs/partners/american-standard.png",
    "/imgs/partners/ariston.png",
    "/imgs/partners/picenza.png",
  ];

  return (
    <>
      <div className="bg-[#1E1E1E] py-[2.4rem]">
        <div className="container mx-auto flex flex-wrap justify-around">
          {partners.map((e) => (
            <div className="partner" key={e}>
              <img className="opacity-70" src={e} alt="partner" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partner;
