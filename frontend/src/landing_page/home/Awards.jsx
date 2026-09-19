import React from "react";

function Awards() {
  return (
    <div className="container mt-5 pb-3">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Trade-Flow platform"
          />
        </div>

        <div className="col-6 p-5">
          <h1>Everything you need to trade and invest</h1>

          <p className="mb-5">
            Trade-Flow brings essential trading and investment tools together
            in one simple and intuitive platform.
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Government Securities</p>
                </li>
              </ul>
            </div>

            <img
              src="media/images/pressLogos.png"
              style={{ width: "90%" }}
              alt="Trade-Flow features"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;