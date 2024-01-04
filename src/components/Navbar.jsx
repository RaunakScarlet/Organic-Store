import { Link } from 'react-router-dom';
import logo from '../assets/Organic Store main.svg'
const Navbar = () => {
  return (
      <nav className="flex justify-between items-center w-[95%] mx-auto py-4">
          <div className="left flex gap-8">
              <img src={logo} alt="organic-store-logo" className="w-40 h-20" />
              <ul className="flex items-center justify-between gap-10 ">
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
          <div className="right flex  ">
              <ul className="flex items-center justify-between gap-10">
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
