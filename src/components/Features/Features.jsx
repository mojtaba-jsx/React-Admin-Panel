import React from "react";
import "./Features.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function Features() {
  return (
    <div className="features">
      <div className="features-item">
        <span className="feature-title">Revanue</span>
        <div className="feature-container">
          <span className="feature-money">$2,415</span>
          <span className="feature-rate">
            -11.4
            <ArrowDownwardIcon className="feature-icon negative" />
          </span>
        </div>

        <span className="feature-sub">Compared To Last Month</span>
      </div>
      <div className="features-item">
        <span className="feature-title">Sales</span>
        <div className="feature-container">
          <span className="feature-money">$2,415</span>
          <span className="feature-rate">
            -1.4
            <ArrowDownwardIcon className="feature-icon negative" />
          </span>
        </div>

        <span className="feature-sub">Compared To Last Month</span>
      </div>
      <div className="features-item">
        <span className="feature-title">Cost</span>
        <div className="feature-container">
          <span className="feature-money">$2,415</span>
          <span className="feature-rate">
            +2.4
            <ArrowUpwardIcon className="feature-icon " />
          </span>
        </div>

        <span className="feature-sub">Compared To Last Month</span>
      </div>
    </div>
  );
}

export default Features;
