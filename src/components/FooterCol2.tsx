import FooterColumn from "../hoc/FooterItemRender";

const FooterCol2 = () => {
  return (
    <div>
      <p className="text-3xl text-white font-semibold font-paris2024 uppercase tracking-wide">
        National Games 2024
      </p>
      <div className="text-gray-400 font-noto">
        <FooterColumn
          items={[
            "Home",
            "Schedule and Results",
            "Medal Tally",
            "Media",
            "Visit",
            "Teams",
            "Milestones",
            "Games Culture",
          ]}
        />
      </div>
      <img
        className="absolute bottom-0 left-50 h-98  w-98"
        src="assets/Footerpatern2.png"
        alt="pattern1"
      />
    </div>
  );
};

export default FooterCol2;
