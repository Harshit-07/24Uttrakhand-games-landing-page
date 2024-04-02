import FooterCol1 from "./FooterCol1";
import FooterCol2 from "./FooterCol2";
import FooterCol3 from "./FooterCol3";
import FooterCol4 from "./FooterCol4";

const Footer = () => {
  return (
    <>
      <div className="bg-[#0C2E5E] relative h-full px-32 pt-24 pb-10">
        <div className="grid grid-cols-4 gap-8">
          <FooterCol1 />
          <FooterCol2 />
          <FooterCol3 />
          <FooterCol4 />
        </div>
      </div>
      <div className="bg-[#011D46] h-20 text-white">
        <div className="text-xl flex items-center justify-between px-32 w-full h-full font-noto uppercase">
          <p>Copyright © Uttarakhand National Games organizing committee</p>
          <div className="flex gap-x-10">
            <p>Visitors : 5553232</p>
            <p>PRIVACY</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
