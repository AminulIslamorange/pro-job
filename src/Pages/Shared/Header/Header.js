
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const { user, logOut } = useContext(AuthContext);


console.log(user);
  const handleLogOut = () => {
    logOut()
    .then(console.log('Log Out Successfully'))
    .catch(error => console.log(error))
    console.log(user);
   
  }


  return (



    <nav className="bg-transparent  text-white absolute  w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to={'/'}>
              <img
                className="h-10 w-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAynXb34qsqaHi1YIyET-6vo2PXKlcO2u68yaff1Fqt6MuUatve6y9jnM8USMtrIpUw&usqp=CAU"
                alt="Logo"
              /></Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <div

              className="border-transparent  hover:text-gray-100 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              <Link to={'/'}>Home</Link>
            </div>
            <div

              className="border-transparent hover:text-gray-100 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              <Link to={'/about'}>About</Link>
            </div>
            <div

              className="border-transparent  hover:text-gray-100 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              <Link to={'/contact-us'}>Contact Us</Link>
            </div>
            <div

              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >

            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${isOpen ? "block" : "hidden"
              } sm:hidden pt-2 pb-3 space-y-1 `}
          >
            <div

              className="bg-gray-500 text-gray-50 border-transparent  hover:text-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >

              <Link to={'/home'}>Home</Link>

            </div>
            <div

              className="border-transparent bg-gray-500 text-gray-50 hover:text-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >


              <Link to={'/about'}>About</Link>


            </div>
            <div

              className="border-transparent bg-gray-500 text-gray-50 hover:text-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >

              <Link to={'/contact-us'}>Contact Us</Link>

            </div>
            <div className=" sm:ml-6 sm:flex sm:items-center">
            {/* start */} <>
              {
                user?.email  ?
                  <>
                    <span className="text-white">{user?.displayName}</span>
                    <button onClick={handleLogOut} className="ml-4 bg-red-600 text-white rounded-md px-4 py-2 text-sm font-medium">Log out</button>
                  </>
                  :
                  <>
                    <button className="bg-blue-800 text-white rounded-md px-4 py-2 text-sm font-medium">
                      <Link to='/login'>Login</Link>
                    </button>
                    <button className="ml-4 bg-red-600 text-white rounded-md px-4 py-2 text-sm font-medium">
                      <Link to='/register'>Register</Link>
                    </button>
                  </>
              }


            </>
          </div>

          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {/* start */} <>
              {
                user?.email  ?
                  <>
                    <span className="text-white">{user?.displayName}</span>
                    <button onClick={handleLogOut} className="ml-4 bg-red-600 text-white rounded-md px-4 py-2 text-sm font-medium">Log out</button>
                  </>
                  :
                  <>
                    <button className="bg-blue-800 text-white rounded-md px-4 py-2 text-sm font-medium">
                      <Link to='/login'>Login</Link>
                    </button>
                    <button className="ml-4 bg-red-600 text-white rounded-md px-4 py-2 text-sm font-medium">
                      <Link to='/register'>Register</Link>
                    </button>
                  </>
              }


            </>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;