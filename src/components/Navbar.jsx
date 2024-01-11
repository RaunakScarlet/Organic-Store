import { Link } from 'react-router-dom';
import logo from "../assets/Logo0.svg";
const Navbar = () => {
  return (
      <nav className="flex justify-between items-center w-[95%] mx-auto py-4">
          <div className="left flex lg:gap-8 gap-3 md:text-md">
              <img
                  src={logo}
                  alt="organic-store-logo"
                  className="lg:w-40 lg:h-20 md:w-32 md:h-12 w-20 h-10"
              />
              <ul className="flex items-center justify-between lg:gap-10 md:gap-8 sm:gap-6 gap-3 text-sm md:text-md ">
                  <Link to="/">
                      <li>Everything</li>
                  </Link>
                  <Link to="/">
                      <li>Groceries</li>
                  </Link>
                  <Link to="/">
                      <li>Juice</li>
                  </Link>
              </ul>
          </div>
          <i className="fa-solid fa-bars  right-0 pr-2 text-2xl text-[#8bc24a] lg:hidden md:hidden"></i>
          <div className="right md:flex lg:flex hidden  ">
              <ul className="flex items-center justify-between lg:gap-10 md:gap-5 md:text-sm ">
                  <Link to="/">
                      <li>About</li>
                  </Link>
                  <Link to="/">
                      <li>Contact</li>
                  </Link>{" "}
                  <li>Contact</li>
                  <Link to="/">
                      <li>$0.00</li>
                  </Link>
                  <Link to="/">
                      <li>
                          <i className="fa-solid fa-basket-shopping text-xl text-[#8bc24a]"></i>
                      </li>
                  </Link>{" "}
                  <Link to="/">
                      <li>
                          <i className="fa-solid fa-user text-xl text-[#8bc24a]"></i>
                      </li>
                  </Link>
              </ul>
          </div>
      </nav>
  );
}

export default Navbar
