

import Products from "./Products";

const Home = () => {

  
  return (
    <div>
  
      <div className="px-24">
        <div className="flex ">
          <h1 className=" text-zinc-900  p-4 text-3xl font-bold ml-20 mt-11 mb-8 ">
            Shop our popular categories
          </h1>
        </div>
        <Products />

      </div>
    </div>
  );
};

export default Home;
