import React from 'react'

function Customercard({customer, adminDelete}) {
  
  function deleteCustomer() {
    fetch(`http://127.0.0.1:9292/customers/${customer.id}`, {
      method: "DELETE",
    });
    adminDelete(customer.id);
  }
    
    return (
    <div>
        <h4>{customer.full_name}</h4>
        <h4>{customer.email}</h4>
        <h4>{customer.phone_number}</h4>
        <button onClick={deleteCustomer}>Delete</button>
    </div>
  )
}

export default Customercard