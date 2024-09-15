


// react hooks
import { useState } from 'react';
// react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// styles
import '../../styles/lod_styles.css';

const faqData = [
  {
    question: "Can I see a demo?",
    answer: "Yes, definitely. We would be happy to demonstrate you Taskbily through a web conference at your convenience. Please submit a query on our contact us page or drop a mail to our mail id support@VoltaCRM.com."
  },
  {
    question: "How can I update app?",
    answer: "No, definitely. We would be happy to demonstrate you Taskbily through a web conference at your convenience. Please submit a query on our contact us page or drop a mail to our mail id support@VoltaCRM.com."
  }
];


const Faq = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage question visibility

  const toggleFaq = (index) => {
    setIsOpen(index === isOpen ? false : index); // Open/close based on clicked index
  };

  return (
    <div className='flex flex-col gap-[2rem]'>
      {faqData.map((faq, index) => (
        <div key={index}>
          <button
            className="w-full rounded-[0.5rem] overflow-hidden border border-[#d7d7d7]"
            onClick={() => toggleFaq(index)}
          >
            {/* question */}
            <p className={`${isOpen === index? 'bg-[#2046CF] text-white' : 'bg-white text-textBold'} pl-[2rem] py-[1rem] flex items-center gap-[2rem]`}>
              {isOpen === index ? (
                <IoIosArrowUp className='text-[1.4rem]' />
              ) : (
                <IoIosArrowDown className='text-[1.4rem]' />
              )}
              <span className="text-[1.6rem] font-medium">{faq.question}</span>
            </p>
            {/* answer */}
            <p className={`${isOpen === index? 'max-h-[500px] px-[2rem] pt-[2.5rem] pb-[1.5rem]' : 'max-h-0'} transition-all text-textNormal`}>{isOpen === index && faq.answer}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Faq;
