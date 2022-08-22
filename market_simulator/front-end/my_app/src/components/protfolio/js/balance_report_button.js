import React from "react";
import "../css/protfolio.css";

function BalanceReportButton(props) {
  return (
    <button className="protfolio-header-item" id="balance-report-button" onClick={props.onClick}>
        Balance Report
    </button>
  );
}

export default BalanceReportButton;