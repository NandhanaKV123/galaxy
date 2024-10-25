import React from 'react'

function Wheretobuy() {
  return (
    <>

    <div className='row'>
        <div className='col-md-2'></div>
       <div className='col-md-8'>
            <div class="text-center" style={{color:' rgb(110, 16, 16)'}}>
                <h3 class="md:mt-5 mt-3">SHOP CHOCOLATE GALAXY</h3>
                <h1 class="md:text-6xl md:mt-12">WHERE TO BUY</h1>
                <p class="md:text-2xl md:mt-10">Discover the shops that stock your favourite Galaxy chocolate.</p>
            </div>
       </div>
       <div className='col-md-2'></div>
    </div>

    <div className='w-full' style={{backgroundColor:' rgb(212, 173, 107)'}}>
      <h1 class="text-center text-6xl  pt-3" style={{color:'rgb(110, 16, 16)',fontFamily:'"Dancing Script", cursive'}}>Click To Buy</h1>

      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-4'>
            <div class="bg-white w-full rounded cursor-pointer ">
                <img src="https://www.galaxychocolate.co.in/cdn-cgi/image/width=433,height=244,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf1911/files/2023-02/Amazon_Logo.png" alt="" />
        
            </div>
            <h1 class="text-3xl text-center mt-3" style={{color:' rgb(110, 16, 16)'}}>Amazon</h1>

        </div>
        <div className='col-md-2'></div>
        <div className='col-md-4'>
           <div class="bg-white w-full rounded cursor-pointer "> 
            <img src="https://www.galaxychocolate.co.in/cdn-cgi/image/width=433,height=244,fit=cover,g=auto,f=auto,quality=90/sites/g/files/fnmzdf1911/files/2023-02/Bigbasket_Logo.png" alt="" />
            </div>
            <h1 class="text-3xl text-center mt-3" style={{color:' rgb(110, 16, 16)'}}>Big Basket</h1>

        </div>
        <div className='col-md-1'></div>
      </div>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'><p class="text-xl text-center md:mt-5" style={{color:' rgb(110, 16, 16)'}} >A selection of online retailer websites are shown above, however, note that GALAXY chocolate products are also available in other stores and wholesalers. By clicking on the links you will be taken to third party sites and Mars Inc. is not responsible for those sites.</p></div>
        <div className='col-md-3'></div>

        </div>

    </div>
    
    
    
    </>
  )
}

export default Wheretobuy