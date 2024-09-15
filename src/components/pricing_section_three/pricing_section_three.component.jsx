// components
import Faq from "../faq/faq.component";
// styles
import '../../styles/lod_styles.css';

const PricingSectionThree = () => {
    return(
        <section className="py-[10rem]">
            {/* adjuster */}
            <div className="max-w-[1280px] w-[90%] md:w-[60%] mx-auto">
                {/* Heading */}
                <p className="text-[3rem] text-center text-textBold mb-[4rem]">FAQs</p>
                {/* FAQs */}
                <Faq />
            </div>
        </section>
    )
}

export default PricingSectionThree;