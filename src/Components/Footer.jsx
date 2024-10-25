import { faFacebook, faInstagram, faPinterest, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'




function Footer() {
  return (
    <>

<div className='container-fluid ' style={{backgroundColor:' rgb(110, 16, 16)'}}>
    <div className='row'>
      <div className='col-md-3 text-light'>
        <div>
          <h3 className='ms-5 mt-4'>FOLLOW US ON</h3>
          <div className='d-flex mt-4  justify-content-evenly text-light cursor-pointer'>
            <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
            <FontAwesomeIcon icon={faXTwitter} className='fa-2x' />
            <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
            <FontAwesomeIcon icon={faPinterest} className='fa-2x' />
            </div>

        </div>
      </div>

      <div className='col-md-6'>
      <p className='text-light mt-4'>© Mars 2024 Mars or Affiliate</p>
      <p className='text-light'>Disclaimer Notice: Impersonation and fraudulent acts <br />

It has come to our notice that some unscrupulous persons are passing themselves off as representing or being affiliated with Mars. They have been appropriating parts of our brand identity, and photographs of our employees with the intent to defraud unsuspecting members of the public. One of the platforms being used by these impostors is https://mar.masrrkea.pro or https://mrr.masrke.info/mars/login which we understand poses as a sort of investment scheme. <br /> <br />


For the avoidance of doubt, Mars does not operate any such investment schemes, whether online or onsite. We do not solicit for nor accept money from anyone for investments in schemes. Mars shall not be responsible for, and expressly disclaims all liabilities for, damages of any kind arising out of the use of, reference to, or reliance on any information disseminated by the aforesaid unscrupulous persons. <br /> <br />

The general public should take note as anyone who engages with the said platform, or any other platform and material promoted by the imposters does so at their own risk. Our official website has been and remains www.mars.com. You can also reach us on contact@in.mars.com</p>


      </div>

      <div className='col-md-3 text-light cursor-pointer underline hover:underline-offset-4'>
        <p className='mt-4'>Supply Chain Transparency</p>
        <p>Cookie settings</p>
        <p>Ad Choice</p>
        <p>Modern Slavery Act</p>
        <p>Privacy Policy</p>
        <p>Accessibility</p>
        <p>Cookie Notice</p>
        <p>Legal</p>
      </div>

        


    </div>

  
</div>
    
    
    
    </>
  )
}

export default Footer