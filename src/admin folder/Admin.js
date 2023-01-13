import React from "react";
import Customercard from "./Customercard";

function Admin({ customers, user, adminDelete }) {
  const displayCustomers = customers.map((customer) => (
    <Customercard key={customer.id} customer={customer} adminDelete={adminDelete} />
  ));

  return (
    <div className="admin_page">
      {user.email === "admin" && user.customer_id === 1111 ? (
    <div>
      <h2>Admin Page</h2>
        <h3>Customers</h3>
        {displayCustomers}
        </div>
        ) : null
      }
    </div>
  );
}

export default Admin;
