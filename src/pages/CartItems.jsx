/* eslint-disable react/prop-types */


function CartItems({ showCart, toggleCart }) {
  return (
    <div>
      {showCart && (
        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-start justify-end  min-h-screen">
            <div className="relative bg-white right-0  w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-lg shadow-lg">
              <button
                className="absolute top-0 right-0 m-3"
                onClick={toggleCart}
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="p-4">
                <h1> *Add cart here* </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItems;
