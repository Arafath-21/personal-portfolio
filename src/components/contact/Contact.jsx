import React from 'react'
import './contact.scss'
const Contact = () => {
  return <>
{/* <section id="contact" className="get-started">
  <div className="container">
    <form className="row g-3">
    <div className="col-md-6">
      <label for="inputEmail4" className="form-label">Email</label>
      <input type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="col-md-6">
      <label for="inputPassword4" className="form-label">Password</label>
      <input type="password" className="form-control" id="inputPassword4" />
    </div>
    <div className="col-12">
      <label for="inputAddress" className="form-label">Address</label>
      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
    </div>
    <div className="col-12">
      <label for="inputAddress2" className="form-label">Address 2</label>
      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
    </div>
    <div className="col-md-6">
      <label for="inputCity" className="form-label">City</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="col-md-4">
      <label for="inputState" className="form-label">State</label>
      <select id="inputState" className="form-select">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="col-md-2">
      <label for="inputZip" className="form-label">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
    <div className="col-12">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" for="gridCheck">
          Check me out
        </label>
      </div>
    </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary">Sign in</button>
    </div>
    </form> 
  </div>
</section>   */}

<section id="contact" className="get-started">
  <div className="container">
    <div className="row text-center">
      <div className="col-lg-12 h1 display-4">GetStarted</div>
    </div>
    <div className="row">
      <div className=" col-12 col-lg-12  p-3">
        <div className="form w-100 pb-2">
          <form action="#" className="row">
            <div className="col-lg-6 col-md mb-3">
              <input type="text" placeholder="First Name" id="inputFirstName" className="shadow form-control form-control-lg"/>
            </div>
            <div className="col-lg-6 col-md mb-3">
              <input type="text" placeholder="Last Name" id="inputLastName" className="shadow form-control form-control-lg"/>
            </div>
            <div className="col-lg-12 mb-3">
              <input type="email" placeholder="email address" id="inputEmail" className="shadow form-control form-control-lg"/>
            </div>
            <div className="col-lg-12 mb-3">
              <textarea name="message" placeholder="message" id="message" rows="8" className="shadow form-control form-control-lg"></textarea>
            </div>
            <div className="text-center d-grid mt-1">
            <div className="buttons">
                <div className="btn btn-outline-primary">
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