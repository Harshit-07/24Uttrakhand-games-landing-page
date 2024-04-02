import Hero from "../sections/Hero";

const Navbar = () => {
  return (
    <div className="relative w-full">
      <img
        className="w-full h-[1300px] rounded-bl-[270px]"
        src="assets/Bg1.png"
        alt="Hero"
      />
      <img
        className="absolute top-0 left-0 w-full opacity-100 h-[1300px] rounded-bl-[270px]"
        src="/assets/Bg1blue.png"
        alt="bgblue"
      />
      <Hero />
    </div>
  );
};

export default Navbar;
