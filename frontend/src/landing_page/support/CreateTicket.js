import React from "react";

function CreateTicket() {
  const linkStyle = {
    textDecoration: "none",
    lineHeight: "2.5",
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {/* Account Opening */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
            Account Opening
          </h4>

          <a href="#" style={linkStyle}>Online Account Opening</a>
          <br />
          <a href="#" style={linkStyle}>Account Verification</a>
          <br />
          <a href="#" style={linkStyle}>Account Types</a>
          <br />
          <a href="#" style={linkStyle}>Account Opening Process</a>
          <br />
          <a href="#" style={linkStyle}>NRI Account Information</a>
          <br />
          <a href="#" style={linkStyle}>Trade-Flow Charges</a>
          <br />
          <a href="#" style={linkStyle}>Getting Started</a>
          <br />
        </div>

        {/* Your Account */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-user" aria-hidden="true"></i>{" "}
            Your Trade-Flow Account
          </h4>

          <a href="#" style={linkStyle}>Login Credentials</a>
          <br />
          <a href="#" style={linkStyle}>Account Modification</a>
          <br />
          <a href="#" style={linkStyle}>Bank Details</a>
          <br />
          <a href="#" style={linkStyle}>Your Profile</a>
          <br />
          <a href="#" style={linkStyle}>Transfer of Shares</a>
          <br />
        </div>

        {/* Trading */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-user" aria-hidden="true"></i>{" "}
            Trading
          </h4>

          <a href="#" style={linkStyle}>Margin & Leverage</a>
          <br />
          <a href="#" style={linkStyle}>Trade-Flow Web & Mobile</a>
          <br />
          <a href="#" style={linkStyle}>Trading FAQs</a>
          <br />
          <a href="#" style={linkStyle}>Corporate Actions</a>
          <br />
          <a href="#" style={linkStyle}>Market Data</a>
          <br />
          <a href="#" style={linkStyle}>Trade-Flow API</a>
          <br />
          <a href="#" style={linkStyle}>Trading Platforms</a>
          <br />
          <a href="#" style={linkStyle}>Market Reports</a>
          <br />
        </div>

        {/* Funds */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-credit-card" aria-hidden="true"></i>{" "}
            Funds
          </h4>

          <a href="#" style={linkStyle}>Adding Funds</a>
          <br />
          <a href="#" style={linkStyle}>Fund Withdrawal</a>
          <br />
          <a href="#" style={linkStyle}>Payment Methods</a>
          <br />
          <a href="#" style={linkStyle}>Adding Bank Account</a>
          <br />
          <a href="#" style={linkStyle}>Transaction History</a>
          <br />
        </div>

        {/* Portfolio */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-circle-o-notch" aria-hidden="true"></i>{" "}
            Portfolio
          </h4>

          <a href="#" style={linkStyle}>Reports</a>
          <br />
          <a href="#" style={linkStyle}>Ledger</a>
          <br />
          <a href="#" style={linkStyle}>Holdings</a>
          <br />
          <a href="#" style={linkStyle}>Positions</a>
          <br />
          <a href="#" style={linkStyle}>IPO</a>
          <br />
          <a href="#" style={linkStyle}>Portfolio Analytics</a>
          <br />
        </div>

        {/* Investments */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-circle-thin" aria-hidden="true"></i>{" "}
            Investments
          </h4>

          <a href="#" style={linkStyle}>Understanding Mutual Funds</a>
          <br />
          <a href="#" style={linkStyle}>Investment Basics</a>
          <br />
          <a href="#" style={linkStyle}>Buying & Selling Investments</a>
          <br />
          <a href="#" style={linkStyle}>Starting an SIP</a>
          <br />
          <a href="#" style={linkStyle}>Managing Your Portfolio</a>
          <br />
          <a href="#" style={linkStyle}>Investment Tools</a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;