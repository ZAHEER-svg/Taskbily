// components
import ClientSlider from "../clients_slider/clients_slider.component";
// styles
import '../../styles/lod_styles.css';

const FeaturesSectionThree = () => {
    return(
        <section className="bg-[#f3bbbb] py-[10rem]">
            {/* adjuster */}
            <div className="max-w-[1280px] w-[90%] md:w-[80%] mx-auto">
                {/* title label */}
                <p className="text-[#000] text-center">Trusted by the World’s Best Teams</p>
                {/* title */}
                <p className="text-[2.5rem] mt-[1rem] text-center text-[#000]  mb-[3rem]">Over 700 people use our product.</p>
                {/* clients */}
                <ClientSlider />
            </div>
        </section>
    )
}

export default FeaturesSectionThree;