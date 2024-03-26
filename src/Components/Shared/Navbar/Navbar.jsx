import { NavLink } from "react-router-dom";
import logo from '../../../assets/banner/logo.jpg'
import '../../Home/Banner/banner.css'
const Navbar = () => {
  const navLinks = <>
  <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-violet-600" : ""
  }
>
  HOME
</NavLink>
  <NavLink
  to="/allCategoris"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-violet-600" : ""
  }
>
  ALL CATEGORIS
</NavLink>
  <NavLink
  to="/book"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-violet-600" : ""
  }
>
  BOOK
</NavLink>
  <NavLink
  to="/watch"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-violet-600" : ""
  }
>
 WATCH
</NavLink>
  <NavLink
  to="/food"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-violet-600" : ""
  }
>
  FOOD
</NavLink>
  <NavLink
  to="/cloth"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-violet-600" : ""
  }
>
  CLOTH
</NavLink>
  <NavLink
  to="/mobile"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-violet-600" : ""
  }
>
  MOBILE
</NavLink>
  
  </>
    return (
        <div>
          <div className="navbar text-black md:px-5  lg:px-28 ">
  <div className="navbar-start">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4  text-black font-bold  shadow bg-white rounded-box min-h-screen w-64" >
       {navLinks}
      </ul>
    </div>
    <button className="btn btn-ghost btn-circle  ">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl"><img src={logo} className="  w-16  rounded-full mb-6" alt="" /></a>
  </div>
  <div className="navbar-end">
  
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-6 drop-shadow-2xl  bg-white   rounded-xl w-64 text-black font-bold">
      <div className="w-32 mx-auto  rounded-xl">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="rounded-full" />
          <p>Name: </p>
        </div>
        <li>

          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

{/* 2nd banner */}
            <div className="navbar md:w-80 lg:w-full  md:px-5  lg:px-28 ">
  <div className="navbar-start">
 

  </div>
  <div className="navbar-center hidden lg:flex   nav">
    <ul className="menu menu-horizontal px-1 gap-10 text-[15px] text-black  font-bold">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
        </div>
    );
};

export default Navbar;