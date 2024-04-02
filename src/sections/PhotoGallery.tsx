const PhotoGallery = () => {
  return (
    <div className="bg-gray-100 pt-8">
      <div className="bg-white pl-32 pt-1 rounded-tr-[270px] rounded-bl-[270px] font-paris2024">
        <div className="mt-28">
          <div className="flex justify-start">
            <p className="text-[#81378F] text-transparent bg-clip-text bg-gradient-to-r from-[#5C6DBD] to-[#2A3280] text-8xl font-extrabold uppercase">
              Photo Gallery
            </p>
          </div>
          <div className="flex pb-10">
            <button className="text-white rounded-full px-4 py-4 mt-10 font-medium flex items-center justify-center bg-gradient-to-r from-[#BB0490] to-[#0C2E5E]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button className="text-white w-28 rounded-full px-4 py-3 ml-2 mt-10 font-medium flex items-center justify-center bg-gradient-to-r from-[#BB0490] to-[#0C2E5E]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-4 pb-28 items-center">
            <img src="assets/Gallery1.png" alt="gallery1" />
            <img src="assets/Gallery2.png" alt="gallery2" />
            <img src="assets/Gallery3.png" alt="gallery3" />
            <img src="assets/Gallery4.png" alt="gallery4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
