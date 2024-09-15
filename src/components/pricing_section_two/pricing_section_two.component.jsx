// styles
import '../../styles/lod_styles.css';
// components
import PricingPlan from "../pricing_plan/pricing_plan.component";

const PricingSectionTwo = () => {
    return(
        <section className="pt-[10rem]">
            {/* adjuster */}
            <div className="max-w-[1280px] w-[90%] md:w-[80%] mx-auto">
                {/* Heading */}
                <p className="text-[3rem] text-center text-textBold">Affordable Pricing</p>
                {/* sub heading */}
                <p className="text-textNormal text-center pt-[2.5rem] mb-[4.5rem]">Taskbily for Teams is a single workspace for your small- to medium-sized company or team.</p>
                {/* Pricing Plan */}
                <PricingPlan />
            </div>
        </section>
    )
}

export default PricingSectionTwo;