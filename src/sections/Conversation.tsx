const Conversation = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-white grid grid-cols-2 pl-32 rounded-tr-[270px] font-paris2024">
        <div className="mt-36">
          <p className="text-2xl">Join the</p>
          <p className="text-[#81378F] text-8xl font-extrabold uppercase ">
            Conversation
          </p>
          <p className="text-3xl uppercase">#uttrakhandgames2024</p>
          <div className="grid grid-cols-3 uppercase mt-28">
            <div className="border-r border-b p-4 pb-16">
              <p className="text-xl">All Together</p>
              <p className="text-5xl font-extrabold mt-20">28</p>
              <p className="text-xl text-gray-400">States</p>
            </div>
            <div className="border-r border-b p-4 ">
              <p className="text-xl">Collectively</p>
              <p className="text-5xl font-extrabold mt-20">8 + 1</p>
              <p className="text-xl text-gray-400">
                Union Territories & Control Boards
              </p>
            </div>
            <div className="border-b p-4">
              <p className="text-xl">We are unified</p>
              <p className="text-5xl font-extrabold mt-20">8000+</p>
              <p className="text-xl text-gray-400">Athletes</p>
            </div>
          </div>
          <div className="grid grid-cols-2 uppercase mt-10">
            <div className="border-r p-4">
              <p className="text-xl">Competition</p>
              <p className="text-5xl font-extrabold mt-20">22</p>
              <p className="text-xl text-gray-400">Days</p>
            </div>
            <div className="p-4">
              <p className="text-xl">Services</p>
              <p className="text-5xl font-extrabold mt-20">4000</p>
              <p className="text-xl text-gray-400">Volunteers</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img src="assets/Cricket.png" alt="cricket" />
        </div>
      </div>
    </div>
  );
};

export default Conversation;
