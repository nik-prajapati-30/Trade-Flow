import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row p-5 mt-5">
        <h1 className="mt-5 mb-5 fs-3 text-center">
          Building a simple and intuitive trading experience.
          <br />
          Powered by modern technology.
        </h1>

        <div
          className="row p-5 mt-5 row border-top fs-6 text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 p-5">
            <p>
              Trade-Flow is a full-stack trading platform project built with
              the goal of creating a simple, intuitive, and modern experience
              for traders and investors.
            </p>

            <p>
              The platform brings together essential trading features such as
              market data, order management, holdings, positions, funds, and
              portfolio tracking in one place.
            </p>

            <p>
              With a clean interface and practical trading workflows,
              Trade-Flow focuses on making the experience easy to understand
              while exploring how modern financial platforms are built.
            </p>
          </div>

          <div className="col-6 p-5">
            <p>
              Trade-Flow is continuously evolving with new features and
              improvements focused on usability, performance, and a better
              trading experience.
            </p>

            <p>
              The project also focuses on understanding the technologies and
              architecture behind modern financial applications, from
              interactive dashboards to real-time market experiences.
            </p>

            <p>
              Explore the platform, check out the latest updates on our{" "}
              <a
                style={{ textDecoration: "none" }}
                href="#"
              >
                blog
              </a>{" "}
              or learn more about our{" "}
              <a
                style={{ textDecoration: "none" }}
                href="#"
              >
                technology and philosophy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;