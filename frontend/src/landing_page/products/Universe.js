import React from 'react';
function Universe() {
    return ( 
         <div className='container mt-5'>
            <div className='row text-center'>
            <h3>The Zerodha Universe</h3>
            <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
         <div className='col-4 p-3 mt-5'>
            <img className='' src="media/images/smallcaseLogo.png "></img>
            <p className='text-small text-muted'>Thematic investment plateform </p>
         </div>
         <div className='col-4 p-3 mt-5'>
              <img className='w-50' src="media/images/streakLogo.png "></img>
            <p className='text-small text-muted'>Algo & Strategy platform </p>

         </div>
         <div className='col-4 p-3 mt-5'>
              <img className='w-75' src="media/images/sensibullLogo.svg "></img>
            <p className='text-small text-muted'>Optaions trading platform </p>

         </div>
         <div className='col-4 p-3 mt-5'>
              <img className='w-50' src="media/images/ZerodhaFundhouse.png "></img>
            <p className='text-small text-muted'>Asset management </p>

         </div>
         <div className='col-4 p-3 mt-5'>
              <img className='w-50' src="media/images/goldenpiLogo.png "></img>
            <p className='text-small text-muted'>Bonds trading platform </p>

         </div>
         <div className='col-4 p-3 mt-5'>
              <img className='w-50' src="media/images/dittoLogo.png "></img>
            <p className='text-small text-muted'>Insurance </p>

         </div>
         
                    <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign Up for free </button>

            </div>
        </div>
     );
}

export default Universe;