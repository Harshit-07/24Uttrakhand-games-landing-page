const MedalTally = () => {
  return (
    <div className="bg-gray-100 w-full mt-20 pl-32 pt-20 pb-10 flex justify-between items-start ">
      <div className="pt-24">
        <div className="flex items-center justify-start">
          <img src="/icons/medalGold.png" alt="medal" className="mr-2 h-16" />
          <h1 className="text-8xl font-paris2024 font-extrabold bg-gradient-to-r from-yellow-600 to-yellow-900 text-transparent bg-clip-text">
            Medal Tally
          </h1>
        </div>
        <div className="flex w-[900px] mt-8 h-[600px] mr-5">
          <table className="min-w-full rounded-lg overflow-hidden">
            <thead className="text-white bg-[#81378F] border-[#81378F] font-paris2024 text-center ">
              <tr>
                <th className="px-6 py-3 font-medium uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 font-medium uppercase tracking-wider">
                  City
                </th>
                <th className="px-6 py-3 font-medium uppercase tracking-wider">
                  Gold
                </th>
                <th className="px-6 py-3 font-medium uppercase tracking-wider">
                  Silver
                </th>
                <th className="px-6 py-3 font-medium uppercase tracking-wider">
                  Bronze
                </th>
                <th className="px-6 py-3 font-medium uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white font-lato font-medium text-center ">
              <tr className="bg-gray-100 h-14">
                <td>1</td>
                <td>Maharashtra</td>
                <td>80</td>
                <td>69</td>
                <td>79</td>
                <td>228</td>
              </tr>
              <tr className="h-14">
                <td>2</td>
                <td>Services Sports Control Board</td>
                <td>66</td>
                <td>27</td>
                <td>33</td>
                <td>126</td>
              </tr>
              <tr className="bg-gray-100 h-14">
                <td>3</td>
                <td>Haryana</td>
                <td>66</td>
                <td>55</td>
                <td>75</td>
                <td>192</td>
              </tr>
              <tr className="h-14">
                <td>4</td>
                <td>Madhya Pradesh</td>
                <td>37</td>
                <td>36</td>
                <td>39</td>
                <td>112</td>
              </tr>
              <tr className="bg-gray-100 h-14">
                <td>5</td>
                <td>Kerala</td>
                <td>36</td>
                <td>24</td>
                <td>27</td>
                <td>87</td>
              </tr>
              <tr className="font-semibold h-16">
                <td>GRAND TOTAL</td>
                <td></td>
                <td>555</td>
                <td>546</td>
                <td>779</td>
                <td>1880</td>
              </tr>
              <tr className="bg-gray-100">
                <td>
                  <button className="text-white bg-[#81378F] px-8 py-3 rounded-full uppercase font-semibold">
                    Refresh
                  </button>
                </td>
                <td>
                  <button className="text-[#81378F] border-2 border-[#81378F] px-9 py-3 mr-16 rounded-full uppercase font-semibold">
                    View more
                  </button>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <img
        className="w-[840px] h-[951px] justify-end"
        src="assets/Skate.png"
        alt="skate"
      />
    </div>
  );
};

export default MedalTally;
