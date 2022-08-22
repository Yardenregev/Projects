import React from 'react';
import CashBalance from './cash_balance';
import ProtfolioBalance from './protfolio_balance';
import TotalBalance from './total_balance';

import '../css/protfolio.css'

function ProtfolioHeader(props) {
  let total_balance = props.cashBalance + props.protfolioBalance
  return (
    <div className="protfolio-header">
      <h1 className='protfolio-header-item' id='sub-balance-plus-sign'>+</h1>
      <div className="sub-balance">
        <CashBalance value={props.cashBalance} />
        <ProtfolioBalance value={props.protfolioBalance} />
      </div>
      <h1 className='protfolio-header-item' id='header-equal-sign'>=</h1>
      <TotalBalance value={total_balance} />
    </div>
  );
}

export default ProtfolioHeader;