import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="Trade-Flow Trading"
        productDescription="Our fast and intuitive trading platform with streaming market data, advanced charts, a clean UI, and more. Track markets, place orders, and manage your trading experience seamlessly."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="Portfolio"
        productDescription="The central dashboard for your Trade-Flow account. Get a clear overview of your trades, holdings, positions, and investments with detailed insights and visualisations."
        learnMore=""
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Investments"
        productDescription="Explore and manage your investments through a simple and intuitive interface. Track your portfolio and monitor your investment performance in one place."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Trade-Flow API"
        productDescription="Build powerful trading experiences with simple HTTP/JSON APIs. Connect applications with trading workflows, market data, orders, and portfolio information."
        learnMore=""
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Learning Center"
        productDescription="Learn the fundamentals of the stock market through simple and easy-to-understand educational content. Explore concepts, strategies, and investing basics at your own pace."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center mt-5 fs-5">
        Want to know more about our technology stack? Check out the Trade-Flow
        tech blog.
      </p>

      <Universe />
    </>
  );
}

export default ProductPage;