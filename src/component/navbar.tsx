// components/Navbar.js

import Link from "next/link";
import "../app/globals.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="content-navbar">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">
          <Link href="/">YAE</Link>
        </h1>

        {/* Links */}
        <ul className="flex space-x-4">
          <li>
          <Link href="/recette" className="text-white hover:text-gray-300 transition duration-300">
            Recette
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
