import React from "react";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
    number
  } = props;
  return (
    <div>
      <input
        type="number"
        className="input"
        onChange={(onChangeAmount, number)}
        value={amount.toFixed(2)}
      />
      <select value={selectCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option} className="opt">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
