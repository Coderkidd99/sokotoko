/* eslint-disable react/prop-types */
function LoginModal({ modal, toggleModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };


  return (
    <>
      {modal && (
        <>
          <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75">
            <div className="relative top-1/2 transform -translate-y-1/2 mx-auto w-full sm:w-96 bg-white rounded-lg shadow-lg p-6">
              <button
                onClick={toggleModal}
                className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800"
              >
                <span className="sr-only">Close</span>
                <span className="block rounded-full text-4xl">X</span>
              </button>
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold">Sign in to your account</h2>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="username" className="font-medium">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="rounded-md border-gray-300 shadow-sm px-2 py-1"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="password" className="font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="rounded-md border-gray-300 shadow-sm px-2 py-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
                >
                  Sign In
                </button>
                <div className="mt-4 text-center">
                  <p className="text-gray-500">
                    Don't have an account?
                    <a href="#" className="text-indigo-500 hover:underline">
                      Register here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LoginModal;
