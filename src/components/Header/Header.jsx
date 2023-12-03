import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        {
            !user &&
            <li className="md:hidden"><NavLink to="/login">Login</NavLink></li>
            
        }
        {
            user &&
            <li><NavLink to="/contact">Contact Us</NavLink></li>
        }
    </>;

    console.log(user);
    return (
        <div className=" ">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link className="text-xl font-serif" to='/'>Entertainment Cracker</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>

                <div className="flex-none navbar-end md:hidden">
                  {
                    user && 
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className=" text-xl ml-3 mb-4">
                            {user.displayName}
                        </li>
                        <button className="btn bg-red-600 text-white" onClick={()=> logOut()}>Logout</button>
                    </ul>
                </div>
                  }
                </div>

                <div className="navbar-end hidden md:flex">
                    {

                        user &&
                        <div className="flex justify-center items-center gap-2">
                            <span>{user.displayName !== null ? user.displayName : user.email}</span>
                            <img src={user.photoURL !== null ? user.photoURL : "/src/assets/user.png"} className="rounded-3xl w-10 border" alt="" />
                            <button onClick={() => logOut()} className="btn bg-black hover:bg-gray-500 text-white outline-none border-none">Logout</button>
                        </div>
                    }{
                        !user &&
                        <div className="flex justify-center items-center">
                            <button onClick={() => navigate('/login')} className="btn bg-black hover:bg-gray-500 text-white outline-none border-none">Login</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;