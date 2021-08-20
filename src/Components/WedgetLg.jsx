import { Button } from "@material-ui/core";
import React from "react";

const WedgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"tableButton " + type}>{type}</button>;
  };

  return (
    <div className="wedgetlg p-3">
      <h1>Latest Transaction</h1>
      <table className="tableItem p-3">
        <tr className="tableHead">
          <th className=" thItem">Customer</th>
          <th className=" thItem">Date</th>
          <th className=" thItem">Amount</th>
          <th className=" thItem">Status</th>
        </tr>
        {/* Table item */}
        <tr className="tableData">
          <td className="Userdata">
            <img src="images/pic4.jpg" alt="profile pic" />
            <span className="namaItem">Emmanuel Foeh</span>
          </td>
          <td className="dateItem">2 jun 21</td>
          <td className="amountItem">$32,213</td>
          <td className="status">
            <Button type={"Declined"} />
          </td>
        </tr>

        {/* Table item */}
        <tr className="tableData ">
          <td className="Userdata">
            <img src="images/pic4.jpg" alt="profile pic" />
            <span className="namaItem">Emmanuel Foeh</span>
          </td>
          <td className="dateItem">2 jun 21</td>
          <td className="amountItem">$32,213</td>
          <td className="status">
            <Button className="tableButton" type={"Approved"} />
          </td>
        </tr>
        {/* Table item */}
        <tr className="tableData">
          <td className="Userdata">
            <img src="images/pic4.jpg" alt="profile pic" />
            <span className="namaItem">Emmanuel Foeh</span>
          </td>
          <td className="dateItem">2 jun 21</td>
          <td className="amountItem">$32,213</td>
          <td className="status">
            <Button type={"Pending"} />
          </td>
        </tr>
        {/* Table item */}
        <tr className="tableData ">
          <td className="Userdata">
            <img src="images/pic4.jpg" alt="profile pic" />
            <span className="namaItem">Emmanuel Foeh</span>
          </td>
          <td className="dateItem">2 jun 21</td>
          <td className="amountItem">$32,213</td>
          <td className="status">
            <Button type={"Approved"} />
          </td>
        </tr>
        {/* Table item */}
        <tr className="tableData ">
          <td className="Userdata">
            <img src="images/pic4.jpg" alt="profile pic" />
            <span className="namaItem">Emmanuel Foeh</span>
          </td>
          <td className="dateItem">2 jun 21</td>
          <td className="amountItem">$32,213</td>
          <td className="status">
            <Button type={"Pending"} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WedgetLg;
