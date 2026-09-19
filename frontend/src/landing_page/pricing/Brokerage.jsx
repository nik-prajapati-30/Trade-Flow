import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        
        <div className="col-8 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-4">Trading & Brokerage</h3>
          </a>

          <ul
            style={{
              textAlign: "left",
              lineHeight: 2.5,
              fontSize: "13px",
            }}
            className="text-muted mt-3"
          >
            <li>
              Transparent pricing with no hidden charges.
            </li>

            <li>
              Equity delivery and investment orders follow the applicable
              pricing shown on the Trade-Flow platform.
            </li>

            <li>
              Intraday and F&O orders are charged according to the applicable
              brokerage plan.
            </li>

            <li>
              Applicable taxes and statutory charges may be added to the
              transaction value.
            </li>

            <li>
              Detailed order and transaction information is available through
              your Trade-Flow account.
            </li>

            <li>
              Visit the pricing section for the latest applicable charges and
              fees.
            </li>
          </ul>
        </div>

        <div className="col-4 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-4">List of Charges</h3>
          </a>

          <p className="text-muted mt-3">
            View a simple breakdown of applicable trading and investment
            charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Brokerage;