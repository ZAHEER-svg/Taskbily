// components
import FeaturesSectionFive from "../components/features_section_five/features_section_five.component";
import FeaturesSectionFour from "../components/features_section_four/features_section_four.component";
import FeaturesSectionOne from "../components/features_section_one/features_section_one.component";
import FeaturesSectionThree from "../components/features_section_three/features_section_three.component";
import FeaturesSectionTwo from "../components/features_section_two/features_section_two.component";
// style
import '../styles/lod_styles.css';


const FeaturesPage = () => {
    return(
        <>
            <FeaturesSectionOne />
            <FeaturesSectionTwo />
            <FeaturesSectionThree />
            <FeaturesSectionFour />
            <FeaturesSectionFive />
        </>
    )
}

export default FeaturesPage;