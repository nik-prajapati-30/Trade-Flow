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
            <img
              src="./media/images/nithinKamath.jpg"
              style={{ borderRadius: "100%", width: "55%" }}
            ></img>
            <h4 className="mt-4">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-6 ">
            <p className="">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p></p>
            <p>Connect on <a  className='' style={{textDecoration:"none"}} href="#">Homepage</a> /<a  className='' style={{textDecoration:"none"}} href="#">TradingQnA </a> / <a  className='' style={{textDecoration:"none"}} href="#">Twitter</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
