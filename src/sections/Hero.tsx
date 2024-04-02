const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex absolute top-0 left-0 w-full items-center justify-center mt-6 px-32 gap-4">
        <img src="/icons/Hamburger.png" alt="ticket" />
        <p className="text-white">Menu</p>
        <img
          className="mx-auto w-30 invisible"
          src="assets/Logo.png"
          alt="logo"
        />
        <img src="/icons/Ticketing.png" alt="ticket" />
        <p className="text-white">Ticketing </p>
        <img src="/icons/Shop.png" alt="ticket" />
        <p className="text-white">Shop</p>
        <img src="/icons/UserRound.png" alt="Shop" />
        <p className="text-white">Login</p>
        <img src="/assets/Search.png" alt="Login" />
      </div>
      <div className="flex flex-col items-center absolute top-0 left-0 w-full mt-8 px-32">
        <img className="w-30" src="assets/Logo.png" alt="logo" />
      </div>
      <div className="flex flex-col items-center absolute top-0 left-0 w-full mt-48 px-32">
        <img src="assets/Timeframe.png" alt="Next" className="mx-auto" />
      </div>
      <div className="flex flex-col md:flex-row items-start absolute top-0 left-0 mt-[500px] px-32">
        <div className="md:w-1/2 ">
          <h1 className="text-7xl text-gray-100 font-semibold font-lato tracking-wider">
            The 38th National Games, Uttarakhand 2024
          </h1>
          <p className="text-gray-100 mt-5">
            Where fervour converges with brilliance! Immerse yourself in the
            exhilarating spectacle as athletes hailing from every corner of
            Uttarakhand vie for victory in a dazzling display of skill and
            camaraderie. Come together to commemorate our abundant sporting
            legacy and kindle the flame of togetherness. Brace yourself for an
            indelible odyssey towards sporting eminence. Prepare to dive into
            the excitement and witness the enchantment of the National Games
            hosted in Uttarakhand!
          </p>
          <button className="bg-orange-50 rounded-full px-4 py-3 mt-10 font-medium flex items-center">
            <span>UTTARAKHAND UNLEASHED</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="ml-[400px] mt-32">
          <div>
            <button className="bg-[#D7C378] rounded-lg px-4 py-2 ">
              Live Registration
            </button>
            <h3 className="text-white font-paris2024 text-extrabold text-3xl">
              The Game Live Registration
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="mt-20">
            <button className="bg-[#D7C378] rounded-lg px-4 py-2 ">
              Live Accredation
            </button>
            <h3 className="text-white font-paris2024 text-extrabold text-3xl">
              The Game Live Accredation
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
