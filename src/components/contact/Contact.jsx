import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.scss'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const emailInput = form.current.email;
    const emailValue = emailInput.value.trim();

    if (!emailValue || !isValidEmail(emailValue)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Continue with sending the email
    emailjs.sendForm('service_h8t6gro', 'template_2t5597a', form.current, 'QtJp5ZIyWBC9sWFaD')
      .then((result) => {
          alert("Email is sent To Arafath")
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
};

const isValidEmail = (email) => {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


  return <>

<section id="contact" className="get-started">
  <div className="container">
    <div className="row text-center">
      <div className="col-lg-12 h1 display-4">GetStarted</div>
    </div>
    <div className="row">
      <div className=" col-12 col-lg-12  p-3">
        <div className="form w-100 pb-2">
        <form ref={form}  className='row'>
            <div className="col-lg-6 col-md mb-3">
              <input type="text" placeholder="First Name" name='name' className="shadow form-control form-control-lg"/>
            </div>
            <div className="col-lg-6 col-md mb-3">
              <input type="text" placeholder="Last Name" name='lastName' className="shadow form-control form-control-lg"/>
            </div>
            <div className="col-lg-12 mb-3">
            <input type="email" placeholder="email address" name='email' className="shadow form-control form-control-lg" required />
            </div>
            <div className="col-lg-12 mb-3">
              <textarea name="message" placeholder="message"  rows="8" className="shadow form-control form-control-lg"></textarea>
            </div>
            <div className="text-center d-grid mt-1">
            <div className="buttons">
                <div className="btn btn-outline-primary" onClick={sendEmail}>
                  Submit <i className="fas fa-paper-plane px-2"></i>
                </div>
            </div>              
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  </>
}

export default Contact