// styles
import '../../styles/lod_styles.css';

import Email from '../../assets/mail.png';
import Address from '../../assets/home.png';
const contact_section_two  = () => {
    return(
        <section className="pt-[10rem]">
            {/* adjuster */}
            <div className="max-w-[1280px] w-[90%] md:w-[60%] mx-auto">
            {/* Heading */}
            <div className="w-[100%] h-[90px] flex justify-between items-center bg-black text-white p-4">
                
                <div className="flex items-center space-x-5">
                <img 
                    src={Address} 
                    alt="Address Icon" 
                    className="w-6 h-6" // Adjust size as needed
                />
                <div>
                    <p>Address</p>
                    <p>Nigeria | Canada</p>
                </div>
                </div>

                <div className="flex items-center space-x-5">
                <img 
                    src={Email} 
                    alt="Email Icon" 
                    className="w-6 h-6" // Adjust size as needed
                />
                <div>
                    <p>Email</p>
                    <p>support@taskibily.com</p>
                </div>
                </div>

            </div>


                <div className="w-full  mx-auto p-4 ">
                <div className="mb-4 ">
                    <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black " 
                    />
                </div>

                <div className="mb-4">
                    <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" 
                    />
                </div>

                <div className="mb-4">
                    <textarea 
                    placeholder="Message" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" 
                    rows="5"
                    ></textarea>
                </div>
                <div>
                <button 
                        type="submit" 
                        className="w-[30%] p-5 bg-[#f37d7d] text-white rounded-[0.4rem] hover:bg-[#b93131] focus:outline-none focus:ring-2 focus:ring-[#f37d7d]"
                    >
                        Submit Enquiry
                    </button>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default contact_section_two ;