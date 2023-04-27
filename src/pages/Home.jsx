import CategoryNavbar from "./CategoryNavbar";

const Home = () => {
  return (
    <div>
      <CategoryNavbar />
      <div className="px-24">
        <div className="flex ">
          <h1 className=" text-zinc-900  p-4 text-3xl font-bold ml-20 mt-11 mb-8 ">
            Shop our popular categories
          </h1>
        </div>
        <div className="flex items-center justify-start ml-20 gap-11 flex-wrap">
          <div className="relative rounded-full overflow-hidden w-48 h-48">
            <img
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              src="path/to/your/image.jpg"
              alt="Electronics"
            />
          </div>

          <div className="relative rounded-full overflow-hidden w-48 h-48">
            <img
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              src="path/to/your/image.jpg"
              alt="Jewelry"
            />
          </div>

          <div className="relative rounded-full overflow-hidden w-48 h-48">
            <img
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              src="path/to/your/image.jpg"
              alt="Men's Clothing"
            />
          </div>

          <div className="relative rounded-full overflow-hidden w-48 h-48">
            <img
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              src="path/to/your/image.jpg"
              alt="Women's Clothing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
