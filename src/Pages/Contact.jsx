import React from 'react'
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <>

            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8 mb-5'>
                    <div class="text-center" style={{ color: ' rgb(110, 16, 16)' }}>
                        <h1 class="md:text-6xl md:mt-12">Contact Us</h1>

                        <h2 className='mt-4'>REASON FOR CONTACT</h2>

                        <div className='mt-4'>
                            <Form.Select aria-label="Default select example">
                                <option>Select An Item</option>
                                <option value="1">Advertising / Promotios</option>
                                <option value="2">Where To Buy</option>
                                <option value="3">Ideas & Suggestions</option>
                                <option value="3">Product Price</option>
                                <option value="3">Product Quality Concern</option>


                            </Form.Select> <br />
                            
                          <div className='flex'>
                                <Form.Control type="text" placeholder="First Name" /> 
    
                                <Form.Control type="text" placeholder="Last Name" className='ms-3' /> 
                          </div> <br />
                            <Form.Control type="text" placeholder="Email address" />






                        </div>
                        <h2 class="mt-5 text-4xl">ABOUT YOUR CONTACT</h2>
                        <div>
                        <Form.Control className='mt-5' type="text" placeholder="Subject" />  <br />
                        <Form.Control className='mt-5' as="textarea" rows={3} type="text" placeholder="Description" /> 




                        

                        </div>

                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>





        </>
    )
}

export default Contact