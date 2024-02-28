// component
import CustomButton from "../custom_button/custom_button.component";
// react icons
import { IoMdMenu } from "react-icons/io";
// hooks
import { useState } from "react";
// react router
import { Link } from "react-router-dom";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => {
        // toggle showMenu vale
        setShowMenu(!showMenu);
    }

    return(
        <header className="w-full bg-[#f9f4f1] border-b border-[rgb(209 223 234)] py-[1.2rem]">
            {/* adjuster */}
            <div className="max-w-[1280px] w-[90%] md:w-[80%] mx-auto">
                <div className="w-full flex justify-between items-center">
                    {/* logo */}
                    <div>
                        <p className="text-[2rem] font-bold text-textBold">Logo</p>
                    </div>
                    {/* desktop nav */}
                    <nav className={`md:w-max md:h-max hidden md:block`}>
                        <div className="flex items-center">
                            {/* nav links */}
                            <ul className="flex items-center gap-12 flex-row">
                                <li className="font-medium text-textNormal"><Link to='/'>Home</Link></li>
                                <li className="font-medium text-textNormal"><Link to='/features'>Features</Link></li>
                                <li className="font-medium text-textNormal"><Link to='/pricing'>Pricing</Link></li>
                                <li className="font-medium text-textNormal"><Link to='/contact'>Contact</Link></li>
                                {/* nav auth links */}
                                <li>
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <Link to='/sign_in'>
                                            <CustomButton buttonType='bordered'>Login</CustomButton>
                                        </Link>
                                        <Link to='/sign_up'>
                                            <CustomButton>Get Started</CustomButton>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* menu icon */}
                    <IoMdMenu
                     onClick={toggleShowMenu}
                     className="cursor-pointer block md:hidden text-[2.5rem]" 
                    />
                </div>

                {/* Mobile nav */}
                {/* nav */}
                <nav className={`transition-all h-0 bg-[#ffeadd] ${showMenu? 'h-fit px-6 py-8 mt-6' : '' } overflow-hidden`}>
                    <div className="flex items-center">
                        {/* nav links */}
                        <ul className="flex items-start md:items-center gap-4 md:gap-12 flex-col md:flex-row">
                        <li className="font-medium text-textNormal"><Link to='/'>Home</Link></li>
                                <li className="font-medium text-textNormal"><Link to='/features'>Features</Link></li>
                                <li className="font-medium text-textNormal"><Link to='/pricing'>Pricing</Link></li>
                                <li className="font-medium text-textNormal"><Link to='/contact'>Contact</Link></li>
                            {/* nav auth links */}
                            <li>
                                <div className="flex items-center gap-4 flex-wrap">
                                    <Link to='/sign_in'>
                                            <CustomButton buttonType='bordered'>Login</CustomButton>
                                    </Link>
                                    <Link to='/sign_up'>
                                        <CustomButton>Get Started</CustomButton>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;