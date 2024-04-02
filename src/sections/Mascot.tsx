const Mascot = () => {
  return (
    <div className="bg-gray-100 w-full h-[800px] flex justify-center items-center">
      <div className="bg-white h-[75%] rounded-3xl flex flex-row">
        <div className="flex flex-col justify-center align-middle m-52">
          <h2 className="text-[#81378F] text-5xl font-paris2024">HI!, I AM</h2>
          <h1 className="text-[#81378F] text-8xl font-extrabold font-paris2024">
            THE
          </h1>
          <h1 className="text-[#81378F] text-8xl font-extrabold font-paris2024">
            MASCOT
          </h1>
          <p>
            Meet Himalayan Monal, The Mascot for the 38th National Games
            Uttarakhand 2024.
          </p>
          <p>
            Known as the Impeyan Monal. This bird is also the state bird of
            Uttarakhand.
          </p>
          <button className="text-white w-56 rounded-full px-4 py-3 mt-10 font-medium flex items-center justify-center bg-gradient-to-r from-[#BB0490] to-[#0C2E5E]">
            <span> MEET MASCOT</span>
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
        <div className="flex justify-self-end relative">
          <img className="relative" src="assets/Mascott.png" alt="mascott" />
          <img
            className="absolute inset-0 h-[450px] mx-auto my-auto"
            src="assets/MascottSub.png"
            alt="mascottsub"
          />
        </div>
      </div>
    </div>
  );
};

export default Mascot;
