import logo from "../../../public/assets/logo.png";
import coin from "../../../public/assets/coin.png"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ totalcoins }) => {

    return (
        <div className=" sticky top-0 bg-white bg-opacity-50 backdrop-blur">
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a href="">Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-end">
                    <div className="hidden lg:block">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a href="">Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <button>{totalcoins} coin <img className="inline" src={coin} alt="" /></button>


                </div>
            </div>
        </div>
    );
};

export default Header;