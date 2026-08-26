import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5 pb-3">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.png"
            style={{ width: "70%" }}
            alt="Trade-Flow Learning Center"
          />
        </div>

        <div className="col-6">
          <h1 className="fs-2 mb-3">
            Free and open market education
          </h1>

          <p>
            Learn about the stock market with simple and easy-to-understand
            content covering everything from the basics to advanced trading
            concepts.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            Learning Center{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-5">
            Explore market concepts, trading strategies, and investment
            topics designed to help you make better-informed decisions.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            Explore Resources{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;