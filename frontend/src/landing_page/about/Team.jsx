import React from "react";
function Team() {
  return (
    <div className="container  ">
      <div className="row  ">
        <h1 className=" fs-3  text-center mb-5">People</h1>
        <div
          className=" row p-3 fs-6 text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 text-center ">
              <div
    style={{
      width: "180px",
      height: "180px",
      margin: "0 auto",
      borderRadius: "50%",
      background: "#f1f3f5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "55px",
      fontWeight: "600"
    }}
  >
    NP
  </div>
            <h4 className="mt-4">Built by Nikul Prajapati</h4>
            <h6>Full-Stack Developer</h6>
          </div>
          <div className="col-6 ">
            <p className="">
              Trade-Flow is a full-stack trading platform project built to explore modern financial applications and create a clean, intuitive trading experience.

            </p>
            <p>
              The platform brings together essential features such as market data,
    order management, holdings, positions, funds, and portfolio tracking
    in one place.
            </p>
            <p>Built with a focus on simplicity and usability, Trade-Flow demonstrates
    how modern web technologies can be used to build a practical financial
    platform.</p>
            <p></p>
            <p>Connect on <a href="#">GitHub</a> / <a href="#">LinkedIn</a>
</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
