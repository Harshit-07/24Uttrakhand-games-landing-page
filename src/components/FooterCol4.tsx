import FooterColumn from "../hoc/FooterItemRender";

const FooterCol4 = () => {
  return (
    <div>
      <p className="text-3xl text-white font-semibold font-paris2024 uppercase tracking-wide">
        UKGOC Info
      </p>
      <img
        className="absolute top-20 right-36 h-98 w-98"
        src="assets/Footerpatern3.png"
        alt="pattern1"
      />
      <div className="text-gray-400 font-noto">
        <FooterColumn
          items={[
            "Director Sports,",
            "Sports Directorate, Uttarakhand",
            "Maharana Pratap Sports College Campus,Raipur, Dehradun",
            "Pin- 248008",
            "Ph- 0135-2781414",
            "Email Id : directorsprts@gmail.com",
          ]}
        />
        <p className="text-3xl text-white mt-10 mb-4 font-paris2024 font-medium uppercase tracking-wide">
          Download the App
        </p>
        <img className="mb-3" src="assets/Appstore.png" alt="apple" />
        <img src="assets/Playstore.png" alt="android" />
        <div className="flex justify-end">
          <img className="w-28 mt-14" src="icons/Robo.png" alt="robo" />
        </div>
      </div>
    </div>
  );
};

export default FooterCol4;
