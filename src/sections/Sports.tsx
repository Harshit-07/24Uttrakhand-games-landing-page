const Sports = () => {
  return (
    <div className="bg-gray-100 pt-8">
      <div className="bg-white flex px-32 pt-28 pb-10 rounded rounded-tr-[270px] justify-between items-center">
        <p className="text-[#81378F] text-7xl uppercase font-paris2024 font-extrabold">
          Sports
        </p>
        <button className="text-white w-40 h-12 rounded-full px-4 py-2 font-medium flex items-center justify-center bg-gradient-to-r from-[#BB0490] to-[#0C2E5E]">
          <span>VIEW MORE</span>
        </button>
      </div>
      <div
        className="bg-white px-32 grid grid-cols-6 gap-10
       pb-32"
      >
        <img src="assets/ArcheryCard.png" alt="archer" />
        <img src="assets/ArcheryCard.png" alt="archer" />
        <img src="assets/ArcheryCard.png" alt="archer" />
        <img src="assets/ArcheryCard.png" alt="archer" />
        <img src="assets/ArcheryCard.png" alt="archer" />
        <img src="assets/ArcheryCard.png" alt="archer" />
        <img src="assets/ArcheryCard.png" alt="archer" />
        <img src="assets/ArcheryCard.png" alt="archer" />
        <img src="assets/ArcheryCard.png" alt="archer" />
        <img src="assets/ArcheryCard.png" alt="archer" />
        <img src="assets/ArcheryCard.png" alt="archer" />
        <img src="assets/ArcheryCard.png" alt="archer" />
      </div>
    </div>
  );
};

export default Sports;
