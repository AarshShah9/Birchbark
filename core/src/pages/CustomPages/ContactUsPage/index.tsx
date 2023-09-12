import React from 'react';
import Navbar from '~/customComponents/Navbar';
import Footer from '~/customComponents/Footer';
import FAQS   from '~/customComponents/FAQS';

const ContactUsPage: React.FC = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full h-[1000px] flex'>
          {/* Left */}
          <div className='flex-1 w-96'>
            <div>
              <h1 className='text-5xl font-bold'>Contact Us</h1>
              <p className='text-xl'>Reach out to us with any questions you have using the form below. Enter your name, email and mesage and we will get back to you as soon as possible.</p>
            </div>
            <div>
              <form>
                <div className='flex flex-col'>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />

                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />

                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" cols={30} rows={10}></textarea>

                  <button type="submit">Submit</button>

                  </div>
              </form>
            </div>
          </div>
          
          {/* Right */}
          <div className='flex-1'>
            <FAQS/>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default ContactUsPage;