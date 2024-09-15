// SVG import
import OneSignal from '../../assets/onesignal.svg';
import Paypal from '../../assets/paypal.svg';
import Pusher from '../../assets/pusher.svg';
import Slack from '../../assets/slack-new-logo.svg';
// styles
import '../../styles/lod_styles.css';

const FeaturesSectionFour = () => {
    return(
        <section className="py-[10rem]">
            {/* adjuster */}
            <div className="max-w-[1280px] w-[90%] md:w-[80%] mx-auto">
                {/* Heading */}
                <p className="text-center text-[3rem] text-textBold">Integrate with Favorite Apps</p>
                {/* Sub heading */}
                <p className="text-center mt-[2.7rem] text-textNormal">Our app integrates with other third-party apps for added advantage.</p>
                {/* apps */}
                <div className="flex flex-wrap mt-[6rem] gap-[3rem] lg:justify-between items-center justify-center">
                    {/* app */}
                    <div className="flex flex-1 min-w-[180px] max-w-[180px] flex-col items-center rounded-[5px] shadow-[0px_1px_30px_1px_rgba(0,0,0,0.05)] border pt-[3rem] px-[3.5rem] pb-[2rem] gap-[2.6rem] bg-white">
                        {/* img */}
                        <img className='max-h-[55px]' src={OneSignal} alt="One signal" />
                        {/* label */}
                        <p className='text-[2.1rem] text-textBold'>One Signal</p>
                    </div>
                    {/* app */}
                    <div className="flex flex-1 min-w-[180px] max-w-[180px] flex-col items-center rounded-[5px] shadow-[0px_1px_30px_1px_rgba(0,0,0,0.05)] border pt-[3rem] px-[3.5rem] pb-[2rem] gap-[2.6rem] bg-white">
                        {/* img */}
                        <img className='max-h-[55px]' src={Slack} alt="One signal" />
                        {/* label */}
                        <p className='text-[2.1rem] text-textBold'>Slack</p>
                    </div>
                    {/* app */}
                    <div className="flex flex-1 min-w-[180px] max-w-[180px] flex-col items-center rounded-[5px] shadow-[0px_1px_30px_1px_rgba(0,0,0,0.05)] border pt-[3rem] px-[3.5rem] pb-[2rem] gap-[2.6rem] bg-white">
                        {/* img */}
                        <img className='max-h-[55px]' src={Paypal} alt="One signal" />
                        {/* label */}
                        <p className='text-[2.1rem] text-textBold'>Paypal</p>
                    </div>
                    {/* app */}
                    <div className="flex flex-1 min-w-[180px] max-w-[180px] flex-col items-center rounded-[5px] shadow-[0px_1px_30px_1px_rgba(0,0,0,0.05)] border pt-[3rem] px-[3.5rem] pb-[2rem] gap-[2.6rem] bg-white">
                        {/* img */}
                        <img className='max-h-[55px]' src={Pusher} alt="One signal" />
                        {/* label */}
                        <p className='text-[2.1rem] text-textBold'>Pusher</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSectionFour;