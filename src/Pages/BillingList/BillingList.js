import React, { useState } from "react";
import AddBill from "./AddBill";
import BillingHeader from "./BillingHeader";

const BillingList = () => {

  const [modal, setModal] = useState(true)

  const handleModalOpen = () =>{

  }


  return (
    <div className="overflow-x-auto">

      <BillingHeader></BillingHeader>

      <AddBill></AddBill>

      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Billing ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillingList;
