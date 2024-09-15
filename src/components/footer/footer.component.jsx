// react router
import { Link } from "react-router-dom";
// react icons
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
// styles
import '../../styles/lod_styles.css';

const Footer = () => {
    return(
        <footer className="bg-white">
            {/* adjuster */}
            <div className="max-w-[1280px] w-[90%] md:w-[80%] mx-auto">
                {/* super footer */}
                <div className="flex justify-between py-10 flex-col gap-8 md:gap-0 md:flex-row">
                    {/* logo */}
                    <div>
                        <p className="text-[2rem] font-bold text-textBold">Taskbily</p>
                    </div>
                    {/* Main */}
                    <div className="flex flex-col gap-4">
                        {/* heading */}
                        <p className="font-medium text-textBold">MAIN</p>
                        {/* links */}
                        <ul className="flex flex-col">
                            <li className="text-textNormal"><Link className="text-[1.2rem]" to='/register'>Get Started</Link></li>
                            <li className="text-textNormal"><Link className="text-[1.2rem]" to='/features'>Features</Link></li>
                            <li className="text-textNormal"><Link className="text-[1.2rem]" to='/pricing'>Pricing</Link></li>
                            <li className="text-textNormal"><Link className="text-[1.2rem]" to='/login'>Login</Link></li>
                        </ul>
                    </div>
                    {/* Others */}
                    <div className="flex flex-col gap-4">
                        {/* heading */}
                        <p className="font-medium text-textBold">OTHERS</p>
                        {/* links */}
                        <ul className="flex flex-col">
                            <li className="text-textNormal"><Link className="text-[1.2rem]" to='/terms_of_use'>Terms of use</Link></li>
                            <li className="text-textNormal"><Link className="text-[1.2rem]" to='/privacy_policy'>Privacy Policy</Link></li>
                            <li className="text-textNormal"><Link className="text-[1.2rem]" to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        {/* heading */}
                        <p className="font-medium text-textBold">CONTACT</p>
                        {/* links */}
                        <ul className="flex flex-col gap-4">
                            <li className="text-textNormal text-[1.2rem] flex gap-4 items-center"><FaEnvelopeOpenText className="text-[1.5rem] text-[#f3bbbb]" /><span>support@Taskbily.com</span></li>
                            <li className="text-textNormal text-[1.2rem] flex gap-4 items-center"><FiPhoneCall className="text-[1.5rem] text-[#f3bbbb]" /><span>08077595650 -SMS only</span></li>
                            <li className="text-textNormal text-[1.2rem] flex gap-4 items-center"><IoLocationOutline className="text-[1.5rem] text-[#f3bbbb]" /><span>Wuse Zone 5. Abuja. Nigeria</span></li>
                        </ul>
                    </div>
                </div>
                {/* sub footer */}
                <div className="border-t border-[rgb(209 223 234)] py-6">
                    <p className="text-textNormal text-center">Taskbily Technologies Inc. Copyright &copy; 2024. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;