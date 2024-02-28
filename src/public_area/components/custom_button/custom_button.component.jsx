// react router
import { Link } from "react-router-dom";

const CustomButton = ({children, buttonType, handleClick}) => {
    return(
        <button onClick={handleClick} className={`text-[1.4rem] font-medium px-[2.5rem] py-[0.8rem] transition-all ${buttonType === 'bordered'? 'bg-transparent border border-[#222] hover:border-[#2046cf] hover:bg-[#2046cf] hover:text-white': 'bg-[#2046cf] text-white'} rounded-[0.4rem] hover:bg-[#3e61e0]`}>{children}</button>
    )
}

export default CustomButton;