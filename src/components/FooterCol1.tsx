const FooterCol1 = () => {
  return (
    <div className="flex flex-col w-96 text-white">
      <img src="assets/Footer2024.png" alt="footer1" />
      <p className="text-3xl mt-10 font-paris2024 font-medium uppercase tracking-wide">
        Download the App
      </p>
      <img
        className="w-64 my-20"
        src="assets/SocialTextWhite.png"
        alt="social"
      />
      <img
        className="absolute bottom-40 left-80 h-64 w-28"
        src="assets/Footerpatern1.png"
        alt="pattern1"
      />
      <div className="flex mb-20 mt-52">
        <img className="w-16" src="icons/Access.png" alt="social" />
        <button className="bg-white text-xl z-0 text-black px-10 ml-8 uppercase font-semibold font-noto rounded-2xl">
          Helpline
        </button>
      </div>
    </div>
  );
};

export default FooterCol1;
