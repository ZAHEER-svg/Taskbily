import "../../../styles/Contact.css";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <section className="contact">
      <div className="contact-body">
        <div>
          <div style={{display:'flex', gap:'3px'}}>
            <div><FaLocationDot size={20}/></div>
           <div> Address</div>
          </div>
          <div>
            Nigeria <span>Canada</span>
          </div>
        </div>
        <div>
          <div style={{display:'flex', gap:'3px'}}>
            <div>
              <FaEnvelope size={20} />
            </div>
            <div>Email</div>
          </div>
          <div>support@taskbily.com</div>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-form-top">
          <div>
            <input
              type="text"
              name=""
              placeholder="Your Name"
              className="form-control"
              id=""
            />
          </div>
          <div>
            <input
              type="email"
              name=""
              placeholder="Your Email"
              className="form-control"
              id=""
            />
          </div>
        </div>
        <div>
          <textarea
            name=""
            id=""
            className="form-control"
            placeholder="Message"
            rows="5"
          ></textarea>
        </div>
        <div>
          <button className="contact-btn">Submit Enquiry</button>
        </div>
      </div>
      <div className="contact-card">
        <div>
          <div style={{fontSize:'24px', marginBottom:'10px'}}>Easier Business Management</div>
          <div>
            Our experts will show you how our app can streamline your team's
            work
          </div>
        </div>
        <div>
          <button className="contact-card-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
