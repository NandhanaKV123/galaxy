import React from 'react'

function Landing() {
  return (
    <>
   <div class="w-full md:h-screen h-96 bg-[url('https://www.galaxychocolate.co.in/cdn-cgi/image/width=560,height=580,f=auto,quality=90/sites/g/files/fnmzdf1911/files/2021-10/396000232_Galaxy_HP_Hero_3000x1286px.jpg')] bg-no-repeat bg-cover opacity-100">
   <div class="flex justify-center items-center w-full flex-col md:pt-64 pt-40">
      <h1 class=" text-white md:text-9xl text-4xl" style={{fontFamily:'"Dancing Script", cursive'}}>Making Chocolate better,one <br /> piece at a time...</h1>
  
     </div> 
    
    
</div>

<div className='row' style={{backgroundColor:' rgb(110, 16, 16)'}}>
  <div className='col-md-6'>
    <img class="hover:scale-125 pt-6" src="https://www.galaxychocolate.co.in/cdn-cgi/image/width=580,height=580,f=auto,quality=90/sites/g/files/fnmzdf1911/files/2022-12/6672861-2_Galaxy-Smooth-Milk-Large-mono-carton_FOP.png" alt="no image" />
  </div>
  <div className='col-md-6 text-white'>
    <h4 class="md:mt-24 ps-6">Smooth, creamy, deliciously silky</h4>
    <h1 class="md:mt-14 mt-8 md:text-7xl text-4xl text-center hover:scale-125" style={{fontFamily:'"Dancing Script", cursive'}}>Galaxy Smooth Milk <br /> Chocolate Bar</h1>
    <button class="btn btn-outline-danger md:mt-5 md:ms-5 ms-36 mb-3">DISCOVER</button>
  </div>

</div>

<div className='w-full bg-white'>
  <h1 class="text-center md:text-6xl text-4xl mt-5" style={{color:' rgb(110, 16, 16)',fontFamily:'"Dancing Script", cursive'}}>Our Collections</h1>

    {/* <div class="md:grid md:grid-cols-3 mt-5">
      <div class="md:ms-28 ms-16">
        <img src="https://www.galaxychocolate.co.in/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf1911/files/2023-02/Galaxy_IN_Tablet_FlexFrame-1x1.jpg" alt="" />
        <h3 class="text-center">GALAXY TABLETS</h3>
      </div>
      <div Class="md:ms-28 ms-16">
        <h3 class="text-center"></h3>
      </div>
      <div class="md:ms-28 ms-16">
        <img src="https://www.galaxychocolate.co.in/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf1911/files/2023-02/Galaxy-gift-Header-1x1.jpg" alt="" />
        <h3 class="text-center">GALAXY GIFTING</h3>
      </div>
    </div> */}

    <div className='row container-fluid mt-4 mb-5'>
      <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
      <img src="https://www.galaxychocolate.co.in/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf1911/files/2023-02/Galaxy_IN_Tablet_FlexFrame-1x1.jpg" alt="" />
      <h3 class="md:mt-3">GALAXY TABLETS</h3>
      <button class="text-white bg-danger rounded px-3 py-2">VIEW RANGE</button>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center flex-column mt-3">
      <img src="https://www.galaxychocolate.co.in/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf1911/files/2023-02/Galaxy-Minis-Header-1x1.jpg" alt="" />
      <h3 class="md:mt-3">GALAXY MINIS</h3>
      <button class="text-white bg-danger rounded px-3 py-2">VIEW RANGE</button>

      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center flex-column mt-3">
      <img src="https://www.galaxychocolate.co.in/cdn-cgi/image/width=293,height=293,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf1911/files/2023-02/Galaxy-gift-Header-1x1.jpg" alt="" />
      <h3 class="md:mt-3">GALAXY GIFTING</h3>
            <button class="text-white bg-danger rounded px-3 py-2">VIEW RANGE</button>

      </div>

    </div>

</div>
    </>
  )
}

export default Landing