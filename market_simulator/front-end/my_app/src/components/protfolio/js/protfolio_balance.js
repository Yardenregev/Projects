import React from "react";

function ProtfolioBalance(props) {
  return (
    <div className="protfolio-header-item sub-balance-item">
      <h2>Protfolio Balance:</h2>
      <h2>{props.value}</h2>
    </div>
  );
}

export default ProtfolioBalance;