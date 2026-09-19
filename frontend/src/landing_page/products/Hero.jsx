import React from 'react';
function Hero() {
    return ( 
        <div className='container  border-bottom mb-5'>
            <div className='row mt-5 text-center p-3 '>
            <h1 className=''>Technology</h1>
            <h3 className='fs-3 mt-3 text-muted'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='mt-3 mb-5'>Check out our <a  href="" style={{textDecoration:'none'}}>investment offerings</a> <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </p>
            </div>
        </div>
     );
}

export default Hero;