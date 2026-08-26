import React from "react";

function Pricing() {
  return (
    <div className="container mb-5 mt-5 pt-4">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Simple, transparent pricing</h1>

          <p>
            Trade-Flow keeps pricing simple and transparent with
            straightforward charges and no hidden fees.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i>
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Equity delivery and
                <br />
                mutual funds
              </p>
            </div>

            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;