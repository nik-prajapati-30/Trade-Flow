import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 text-center mt-5 border-bottom">
        <h1>Pricing</h1>

        <h3 className="text-muted mt-3 fs-5">
          Simple and transparent pricing for trading and investments
        </h3>
      </div>

      <div className="row p-1 mt-5 text-center">
        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Equity investments"
          />

          <h1 className="fs-3">Equity Delivery</h1>

          <p className="text-muted">
            Trade-Flow keeps equity delivery pricing simple and transparent
            with no unnecessary brokerage charges.
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday trading"
          />

          <h1 className="fs-3">Intraday & F&O</h1>

          <p className="text-muted">
            Trade intraday and F&O with straightforward brokerage pricing.
            Applicable charges and taxes are shown clearly before execution.
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Mutual funds"
          />

          <h1 className="fs-3">Mutual Funds</h1>

          <p className="text-muted">
            Explore and manage mutual fund investments through a simple and
            transparent platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;