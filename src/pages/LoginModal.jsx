/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";

function LoginModal({ modal, toggleModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here

  };

  return (
    <>
      {modal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-white right-0 w-auto rounded-lg shadow-lg p-5">
              <button
                className="absolute top-0 right-0 m-3"
                onClick={toggleModal}
              >
                <IoClose className="text-gray-500 hover:text-gray-800 w-6 h-6" />
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
        </div>
      )}
    </>
  );
}

export default LoginModal;
