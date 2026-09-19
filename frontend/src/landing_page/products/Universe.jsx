import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h3>The Trade-Flow Universe</h3>

        <p className="text-muted">
          Extend your trading and investment experience with our integrated
          platforms and tools
        </p>

        <div className="col-4  mt-5">
          <img
            className="w-30 h-50"
            src="media/images/tradeflowInsightsLogo.png"
            alt="Trade-Flow Insights"
          />
          <p className="text-small text-muted">
            Market insights and analytics
          </p>
        </div>

        <div className="col-4  mt-5">
          <img
            className="w-30 h-50"
            src="media/images/flowAlgoLogo.png"
            alt="FlowAlgo"
          />
          <p className="text-small text-muted">
            Algo & strategy platform
          </p>
        </div>

        <div className="col-4  mt-5">
          <img
            className="w-30 h-50"
            src="media/images/flowOptionsLogo.png"
            alt="FlowOptions"
          />
          <p className="text-small text-muted">
            Options trading platform
          </p>
        </div>

        <div className="col-4 ">
          <img
            className="w-30 h-50"
            src="media/images/flowProtectLogo.png"
            alt="FlowProtect"
          />
          <p className="text-small text-muted">
            Insurance solutions
          </p>
        </div>

        <div className="col-4 ">
          <img
            className="w-30 h-50"
            src="media/images/flowInvestLogo.png"
            alt="FlowInvest"
          />
          <p className="text-small text-muted">
            Bonds and fixed-income investments
          </p>
        </div>

        <div className="col-4 ">
          <img
            className="w-30 h-50"
            src="media/images/flowStackLogo.png"
            alt="FlowStack" 
          />
          <p className="text-small text-muted">
            Developer tools and APIs
          </p>
        </div>

        <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;