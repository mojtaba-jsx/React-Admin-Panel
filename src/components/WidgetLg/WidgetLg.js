import React from "react";
import "./WidgetLg.css";
import { transActions } from "../../datas";
function WidgetSm() {
  const Button = ({ type }) => {
    return <button className={"WidgetLg-button " + type}>{type}</button>;
  };
  return (
    <div className="WidgetLg">
      <h3 className="WidgetLg-title">Latest TransActions</h3>
      <table className="WidgetLg-table">
        <tr className="WidgetLg-tr">
          <th className="WidgetLg-th">Customer</th>
          <th className="WidgetLg-th">Date</th>
          <th className="WidgetLg-th">Amount</th>
          <th className="WidgetLg-th">Status</th>
        </tr>
        {transActions.map((transAction) => (
          <tr className="WidgetLg-tr">
            <td className="WidgetLg-user">
              <img
                src={transAction.img}
                alt="user"
                className="WidgetLg-img"
              />
              <span className="WidgetLg-name">{transAction.customer}</span>
            </td>
            <td className="WidgetLg-date">{transAction.date}</td>
            <td className="WidgetLg-amount">${transAction.amount}</td>
            <td className="WidgetLg-status">
              <Button type={transAction.status}/>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default WidgetSm;
