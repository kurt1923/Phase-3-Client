import React from 'react'

function Customerinfo({user, projects}) {
  return (
    <div className='container'>
        <h1 className='p-5 title text-center'>Customer Info</h1>
        <h3 className='p-3 title text-center'>Name: {user.full_name}</h3>
        <h3 className='p-3 title text-center'>Email: {user.email}</h3>
        <h3 className='p-3 title text-center'>Phone Number: {user.phone_number}</h3>
        <h3 className='p-3 title text-center'>You have {projects.length} projects your working on!</h3>

    </div>
  )
}

export default Customerinfo