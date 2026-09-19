import React from "react";

function Hero() {
  return (
    <section className="container-fluid mt-5" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Trade-Flow Support</h4>
        <a href="#">Track Tickets</a>
      </div>

      <div
        className="row p-5"
        style={{ marginLeft: "5%" }}
      >
        <div className="col-6">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            placeholder="Eg. how do I place an order?"
          />

          <br />

          <a href="#">Account setup</a>&nbsp;&nbsp;
          <a href="#">Trading & orders</a>&nbsp;&nbsp;
          <a href="#">Funds & payments</a>&nbsp;&nbsp;
          <a href="#">Trade-Flow user guide</a>&nbsp;&nbsp;
        </div>

        <div className="col-1"></div>

        <div className="col-4">
          <h1 className="fs-3">Featured</h1>

          <ol>
            <li>
              <a href="#">
                Getting started with Trade-Flow
              </a>
            </li>

            <li>
              <a href="#">
                Understanding trading and portfolio features
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;