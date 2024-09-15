// react router dom
import { Link } from "react-router-dom";
// styles
import '../../styles/lod_styles.css';

const FeaturesSectionOne = () => {
    return(
        <section className="bg-[#f3bbbb] py-[10rem]">
            {/* adjuster */}
            <div className="max-w-[1280px] w-[90%] md:w-[80%] mx-auto">
                {/* title */}
                <p className="text-[3.5rem] text-textBold text-center">FEATURES</p>
                {/* sub title */}
                <p className="text-textBold pt-[2.5rem] font-medium text-center"><Link to='/'>Home</Link> / <span className="text-[#f37d7d]">Features</span></p>
            </div>
        </section>
    )
}

export default FeaturesSectionOne;