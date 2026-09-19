import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/images/landingoverview.png"
          alt="Trade-Flow trading platform"
          className="mb-5"
        />

        <h1 className="mt-5">Invest in everything</h1>

        <p>
          A simple platform to invest in stocks, derivatives, mutual funds,
          bonds, and more.
        </p>

        <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "17%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Hero;