import React from "react";

function Stats() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center py-5">
        
        <div className="col-6 pe-5">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-4 mt-4">Customer-first always</h2>
          <p className="text-muted">
            Trade-Flow focuses on providing a simple and reliable experience
            for traders and investors.
          </p>

          <h2 className="fs-4 mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No unnecessary distractions or annoying notifications. Use the
            platform at your own pace, the way you prefer.
          </p>

          <h2 className="fs-4 mt-4">The Trade-Flow universe</h2>
          <p className="text-muted">
            More than just a trading platform, Trade-Flow brings together
            trading, investing, portfolio management, and market insights.
          </p>

          <h2 className="fs-4 mt-4">Do better with money</h2>
          <p className="text-muted">
            Trade-Flow is designed to help users understand their investments
            and make more informed financial decisions.
          </p>
        </div>

        <div className="col-6 ps-4">
          <img
            src="media/images/flow.png"
            style={{ width: "95%" }}
            alt="Trade-Flow platform"
          />

          <div className="text-center mt-4">
            <a
              href="#"
              className="mx-3"
              style={{ textDecoration: "none" }}
            >
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href="#"
              className="mx-3"
              style={{ textDecoration: "none" }}
            >
              Explore Trade-Flow{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;