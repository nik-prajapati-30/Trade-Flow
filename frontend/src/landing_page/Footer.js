import React from 'react';
function Footer() {
    return (
         <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
        <div className='container border-top mt-5 '>
            <div className='row mt-5'>
            <div className='col'>
                 <img src="media/images/logo.svg" alt="logo" style={{width:"50%"}}></img>
                 <p className='mt-3'>&copy;2010-2026,Not Zerodha Broking Ltd:<br></br> All rights reserved.</p>
                
           <i class="fa fa-twitter " aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp; </i>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-instagram" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-telegram" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            
            </div>
            <div className='col d-flex flex-column gap-0.1'>
                <p>Company</p>
                <a  className="text-muted "style={{textDecoration:"none"}} href="">About</a><br></br>
                <a className="text-muted " style={{textDecoration:"none"}}href="">Products</a><br></br>
                <a className="text-muted " style={{textDecoration:"none"}}href="">Pricing</a><br></br>
                <a className="text-muted" style={{textDecoration:"none"}}href="">Referral programme</a><br></br>
                <a className="text-muted" style={{textDecoration:"none"}}href="">Careers</a><br></br>
                <a className="text-muted" style={{textDecoration:"none"}}href="">Zerodha.tech</a><br></br>
                <a className="text-muted" style={{textDecoration:"none"}}href="">press & media</a><br></br>
                <a className="text-muted" style={{textDecoration:"none"}}href="">Zerodha cares (CSR)</a><br></br>
            </div>
            <div className='col d-flex flex-column gap-0.1'>
                <p>support</p>
                <a className="text-muted " style={{textDecoration:"none"}}href="">Contact</a><br></br>
                <a className="text-muted" style={{textDecoration:"none"}}href="">Support portal </a><br></br>
                <a className="text-muted" style={{textDecoration:"none"}}href="">Z-connect bolg</a><br></br>
                <a className="text-muted" style={{textDecoration:"none"}}href="">List of charges</a><br></br>
                <a className="text-muted" style={{textDecoration:"none"}}href="">Downloads & resources</a><br></br>
            </div>
            <div className='col d-flex flex-column gap-0.1'>
                <p>Account</p>
                <a className="text-muted" style={{textDecoration:"none"}}href="">Open account</a><br></br>
                <a className="text-muted" style={{textDecoration:"none"}}href="">Fund transfer</a><br></br>
                <a className="text-muted" style={{textDecoration:"none"}}href="">60 day challenge</a><br></br>
                 </div>
            </div>
             <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className='row'>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
             <a  className="text-muted me-3"style={{textDecoration:"none"}} href="">NSB</a>
             <a  className="text-muted me-3"style={{textDecoration:"none"}} href="">BSE</a>
             <a  className="text-muted me-3"style={{textDecoration:"none"}} href="">MCX</a>
             <a  className="text-muted me-3"style={{textDecoration:"none"}} href="">Terms & conditions</a>
             <a  className="text-muted me-3"style={{textDecoration:"none"}} href="">Policies & Procedures</a>
             <a  className="text-muted me-3"style={{textDecoration:"none"}} href="">Privacy  Policy</a>
             <a  className="text-muted me-3"style={{textDecoration:"none"}} href="">Disclosure</a>
        </div>
        </div>
        </div>
        
        </footer> 
     );
}

export default Footer;