// components
import CustomButton from "../custom_button/custom_button.component";
// react router dom
import { Link } from "react-router-dom";
// styles
import '../../styles/lod_styles.css';


const contact_section_three = () => {
    return(
        <section className="bg-[#f3bbbb] py-[10rem]">
        {/* adjuster */}
        <div className="max-w-[1280px] gap-[3rem] md:gap-0 md:items-center md:justify-between flex flex-col md:flex-row w-[90%] md:w-[80%] mx-auto">
            {/* info */}
            <div className="md:max-w-[60%]">
                {/* title */}
                <p className="text-[3rem] text-textBold">Easier Business Management</p>
                {/* sub title */}
                <p className="text-textNormal mt-[2rem]">Our experts will show you how our app can streamline your team’s work.</p>
            </div>
            {/* CTA */}
            <Link to='/register'>
                <CustomButton moreClassName='text-[1.8rem] shadow-[0_10px_20px_rgba(0,0,0,0.15)] py-[1.2rem] px-[4rem]'>Get Started</CustomButton>
            </Link>
        </div>
    </section>
    )
}

export default contact_section_three;