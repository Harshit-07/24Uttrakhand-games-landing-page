const Follow = () => {
  return (
    <div className="bg-gray-100 pt-8">
      <div className="bg-white grid grid-cols-2 pl-32 rounded-tr-[270px] font-paris2024">
        <div className="mt-36">
          <p className="text-[#81378F] text-8xl font-extrabold uppercase">
            Follow us
          </p>
          <img className="mt-56 mb-12" src="assets/Social.png" alt="social" />
          <p className="text-3xl font-semibold uppercase tracking-wider">
            #uttrakhandgames2024
          </p>
        </div>
        <div className="flex justify-end">
          <img src="assets/Football.png" alt="football" />
        </div>
      </div>
    </div>
  );
};

export default Follow;
