// Components
import PricingSectionFour from "../components/pricing_section_four/pricing_section_four.component";
import PricingSectionOne from "../components/pricing_section_one/pricing_section_one.component";
import PricingSectionThree from "../components/pricing_section_three/pricing_section_three.component";
import PricingSectionTwo from "../components/pricing_section_two/pricing_section_two.component";

const PricingPage = () => {
    return(
        <>
            <PricingSectionOne />
            <PricingSectionTwo />
            <PricingSectionThree />
            <PricingSectionFour />
        </>
    )
}

export default PricingPage;