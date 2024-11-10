import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4  bg-slate-200 shadow-md">
      {/* Logo Section */}
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
        <p className="blue-gradient_text">Rami</p>
      </NavLink>

      {/* Navigation Links */}
      <nav className="flex space-x-7 text-lg font-medium">
        <NavLink 
          to="/About" 
          className={({ isActive }) => 
            isActive ? 'text-green-500' : 'text-black'
          }
        >
          About
        </NavLink>
        <NavLink 
          to="/Project" 
          className={({ isActive }) => 
            isActive ? 'text-green-500' : 'text-black'
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
