import React from "react";
import Customercard from "./Customercard";

function Admin({ customers, setCustomers, adminDelete }) {
  const displayCustomers = customers.map((customer) => (
    <Customercard key={customer.id} customer={customer} adminDelete={adminDelete} />
  ));

  return (
    <div>
      <h2>Admin Page</h2>
        <h3>Customers</h3>
        {displayCustomers}
    </div>
  );
}

export default Admin;
