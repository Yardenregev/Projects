import React from "react";

function CashBalance(props) {
  return (
    <div className="protfolio-header-item sub-balance-item">
      <h2>Cash Balance:</h2>
      <h2>{props.value}</h2>
    </div>
  );
}

export default CashBalance;