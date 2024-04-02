const CompZone = () => {
  return (
    <div className="bg-gray-100 pt-8">
      <div className="bg-white grid grid-cols-2 pl-32 rounded-tr-[270px] font-paris2024">
        <div className="mt-28">
          <div className="flex justify-start">
            <p className="text-[#81378F] text-transparent bg-clip-text bg-gradient-to-r from-[#CEB5C3] to-[#8D5182] text-8xl font-extrabold uppercase">
              Competition zone
            </p>
          </div>
          <div className="flex justify-start mt-16">
            <div className="flex justify-center items-center pr-10">
              <img src="assets/Slider.png" alt="slider" />
            </div>
            <div>
              <img src="assets/DelhiCard.png" alt="social" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img src="assets/Map.png" alt="map" />
        </div>
      </div>
    </div>
  );
};

export default CompZone;
