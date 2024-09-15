// styles
import '../../styles/lod_styles.css';

const CustomButton = ({children, buttonType, handleClick, moreClassName}) => {
    return(
        <button onClick={handleClick} className={`${moreClassName? moreClassName: ''} text-[1.4rem] font-medium px-[2.5rem] py-[0.8rem] transition-all ${buttonType === 'bordered'? 'bg-transparent border border-[#222] hover:border-[#b93131] hover:bg-[#b93131] hover:text-white': 'bg-[#f37d7d] text-white'} rounded-[0.4rem] hover:bg-[#b93131]`}>{children}</button>
    )
}

export default CustomButton;