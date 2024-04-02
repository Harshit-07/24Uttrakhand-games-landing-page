import FooterColumn from "../hoc/FooterItemRender";

const FooterCol3 = () => {
  return (
    <div>
      <p className="text-3xl text-white font-semibold font-paris2024 uppercase tracking-wide">
        Sports
      </p>
      <div className="grid grid-cols-3 gap-2">
        <div className="text-gray-400 font-noto">
          <FooterColumn
            items={[
              "Aquatics",
              "Swimming",
              "Diving",
              "Water Polo",
              "Archery",
              "Athletics",
              "Badminton",
              "Basketball",
              "Boxing",
              "Canoeing",
              "Canoe - Sprint",
              "Canoe - Slalom",
              "Kayaking",
              "Rowing",
              "Cycling",
              "BMX",
              "Road Racing",
            ]}
          />
        </div>
        <div className="text-gray-400 font-noto">
          <FooterColumn
            items={[
              "Track Racing",
              "Equestrian",
              "Fencing",
              "Football",
              "Gymnastics",
              "Golf",
              "Handball",
              "Beach Handball",
              "Hockey",
              "Judo",
              "Kabaddi",
              "Karate-Do",
              "Kho- Kho",
              "Test Sport",
              "Netball",
              "Rugby Sevens",
              "Saling",
            ]}
          />
        </div>
        <div className="text-gray-400 font-noto">
          <FooterColumn
            items={[
              "Sepaktakraw",
              "Shooting",
              "Shooting Rifle",
              "Shooting Piston",
              "Shooting Shotgun",
              "Squash",
              "Taekwondo",
              "Table Tennis",
              "Triathlon",
              "Volleyball",
              "Beach Volleyball",
              "Weightlifting",
              "Wrestling",
              "Wushu",
              "Synchronized Swimming",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterCol3;
