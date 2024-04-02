const NewsItem = () => {
  return (
    <div className="flex items-center">
      <div className="divider h-28 w-1 bg-gray-400 mr-2"></div>
      <img
        src="assets/News.png"
        alt="Image0"
        className="w-32 h-24 object-cover rounded mr-4"
      />
      <div className="h-28">
        <h2 className="font-semibold text-lg text-gray-800">
          Swasti Singh’s gold powers Odisha past 50 medals
        </h2>
        <p className="text-sm text-gray-600">
          Odisha won another medal on Wednesday at the 37th Nati onal Games in
          Goa thanks to the skill of Swasti Singh.
        </p>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div className="px-4 lg:px-32 w-full">
      <h1 className="font-semibold text-[#81378F] uppercase text-4xl font-paris2024 mt-16">
        Latest News
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
};

export default News;
