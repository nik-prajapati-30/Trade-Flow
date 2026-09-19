import React from 'react';
function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return ( 
        <div className='container mt-5'>
            <div className='row '>
            <div className='col-6  '>
                <img src={imageURL} style={{}} />
            </div>
            <div className='col-6 p-5 mt-5 '>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div >
                     <a  href="" style={{textDecoration:"none"}} src={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a  href=""  src={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
               
               <div className='mt-4'>
                 <a href="" src={googlePlay}> <img src="media/images/googlePlayBadge.svg" /></a>
                <a  href="" src={appStore} style={{marginLeft:"40px"}}> <img src="media/images/appstoreBadge.svg" /></a>
               </div>
               
            </div>
            </div>
        </div>
     );
}

export default LeftSection;