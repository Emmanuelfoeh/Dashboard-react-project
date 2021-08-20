import React from "react";
import Chart from "./Chart";
import FeaturedInfo from "./FeaturedInfo";
import WedgetLg from "./WedgetLg";
import WedgetSm from "./WedgetSm";

const MainPage = () => {
  return (
    <div className={`mainpage`}>
      <FeaturedInfo />
      <Chart />
      <div className="wedgets d-flex mt-3">
        <div className="wedgetSm y">
          <WedgetSm />
        </div>
        <div className="wedgetLg ">
          <WedgetLg />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
