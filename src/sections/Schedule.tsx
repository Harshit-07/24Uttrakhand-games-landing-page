const Schedule = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-white px-32 pt-16 rounded-tr-[270px] flex justify-between">
        <h1 className="text-8xl font-paris2024 font-extrabold bg-gradient-to-r from-[#AC88A7] to-[#4D607C] text-transparent bg-clip-text uppercase">
          Schedule
        </h1>
        <div>
          <img src="assets/ScheduleSelections.png" alt="selector" />
        </div>
      </div>
      <div className="px-32 bg-white pt-8 pb-20">
        <table className="min-w-full rounded-lg overflow-hidden">
          <thead className="text-white bg-[#81378F] border-[#81378F] font-paris2024 text-center">
            <tr>
              <th className="w-[70px]"></th>
              <th className="px-6 py-3 font-medium tracking-wider">Time</th>
              <th className="px-6 py-3 font-medium tracking-wider">Sports</th>
              <th className="px-6 py-3 font-medium tracking-wider">Events</th>
              <th className="px-6 py-3 font-medium tracking-wider">
                Round/Pool
              </th>
              <th className="px-6 py-3 font-medium tracking-wider">Venue</th>
            </tr>
          </thead>
          <tbody className="bg-white font-paris2024 font-medium text-center">
            <tr>
              <img
                src="assets/ScheduleTableLogo.png"
                alt="logo"
                className="my-2"
              />
              <td>08:30:00</td>
              <td>Golf</td>
              <td>Men’s Individual</td>
              <td>Round 3</td>
              <td>Indira Gandhi International Sports Stadium</td>
            </tr>
            <tr>
              <img
                src="assets/ScheduleTableLogo.png"
                alt="logo"
                className="my-2"
              />
              <td>08:30:00</td>
              <td>Football</td>
              <td>Men’s Team</td>
              <td>League</td>
              <td>Haldwani Sports Stadium</td>
            </tr>
            <tr>
              <img
                src="assets/ScheduleTableLogo.png"
                alt="logo"
                className="my-2"
              />
              <td>08:30:00</td>
              <td>Judo</td>
              <td>Women’s 48kg</td>
              <td>Elimination</td>
              <td>Indira Gandhi International Sports Stadium</td>
            </tr>
            <tr>
              <img
                src="assets/ScheduleTableLogo.png"
                alt="logo"
                className="my-2"
              />
              <td>08:30:00</td>
              <td>Golf</td>
              <td>Women’s 48kg</td>
              <td>Elimination</td>
              <td>Haldwani Sports Stadium</td>
            </tr>
            <tr>
              <img
                src="assets/ScheduleTableLogo.png"
                alt="logo"
                className="my-2"
              />
              <td>08:30:00</td>
              <td>Judo</td>
              <td>Women’s 48kg</td>
              <td>Elimination</td>
              <td>Indira Gandhi International Sports Stadium</td>
            </tr>
            <tr>
              <img
                src="assets/ScheduleTableLogo.png"
                alt="logo"
                className="my-2"
              />
              <td>08:30:00</td>
              <td>Judo</td>
              <td>Women’s 48kg</td>
              <td>Elimination</td>
              <td>Indira Gandhi International Sports Stadium</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
