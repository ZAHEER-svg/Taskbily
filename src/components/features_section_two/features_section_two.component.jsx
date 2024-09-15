// styles
import '../../styles/lod_styles.css';

const FeaturesSectionTwo = () => {
    return(
        <section className="pt-[10rem]">
            <div className="flex flex-col">
                {/* task management */}
                <div className="w-full border-b border-[#d7d7d7] pb-[7rem]">
                    {/* title */}
                    <p className="text-[3rem] text-textBold text-center">Task Management</p>
                    {/* sub title */}
                    <p className="max-w-[550px] mx-auto text-textNormal text-center mt-[3rem]">Manage your projects and talent in one system for empowered teams, satisfied clients, and increased profitability.</p>
                </div>
                {/* task management */}
                <div className="w-full border-b border-[#d7d7d7] pb-[7rem] pt-[10rem]">
                    {/* title */}
                    <p className="text-[3rem] text-textBold text-center">Manage All Bills</p>
                    {/* sub title */}
                    <p className="max-w-[550px] mx-auto text-textNormal text-center mt-[3rem]">Automate billing and revenue recognition to streamline the contract-to-cash cycle.</p>
                </div>
            </div>
            
        </section>
    )
}

export default FeaturesSectionTwo;