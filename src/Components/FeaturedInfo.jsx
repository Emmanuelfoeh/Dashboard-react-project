import { ArrowDownward } from "@material-ui/icons";
import React from "react";

const FeaturedInfo = () => {
  return (
    <div className="featured p-3">
      {/* Featured item */}
      <div className="featuredItem">
        <span className="title">Revenue</span>
        <div className="moneyContainer d-flex align-items-center">
          <span className="money">$12,032</span>
          <span className="mRate ms-3">
            {" "}
            -21.3 <ArrowDownward className="arrow text-danger " />{" "}
          </span>
        </div>
        <span className="featuredSup">Compared to last month</span>
      </div>
      {/* Featured item */}
      <div className="featuredItem">
        <span className="title">Sales</span>
        <div className="moneyContainer d-flex align-items-center">
          <span className="money">$4,032</span>
          <span className="mRate ms-3">
            {" "}
            -5.3 <ArrowDownward className="arrow text-danger " />{" "}
          </span>
        </div>
        <span className="featuredSup">Compared to last month</span>
      </div>
      {/* Featured item */}
      <div className="featuredItem">
        <span className="title">Cost</span>
        <div className="moneyContainer d-flex align-items-center">
          <span className="money">$22,032</span>
          <span className="mRate ms-3">
            {" "}
            +11.3 <ArrowDownward className="arrow text-success " />{" "}
          </span>
        </div>
        <span className="featuredSup">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
