import React from 'react'

function Customerinfo({user, projects}) {
  
  const projectsNumber = projects.filter((project) => project.customer_id === user.id).map((project) => (
    <h4 className='p-1 title text-center'>{project.project_name}</h4>)
  )
  
  console.log(projectsNumber)
  return (
    <div className='container'>
        <h1 className='p-5 title text-center'>Customer Info</h1>
        <h3 className='p-3 title text-center'>Name: {user.full_name}</h3>
        <h3 className='p-3 title text-center'>Email: {user.email}</h3>
        <h3 className='p-3 title text-center'>Phone Number: {user.phone_number}</h3>
        <h3 className='p-3 title text-center'>You have {projectsNumber.length} projects your working on!</h3>
        {projectsNumber}

    </div>
  )
}

export default Customerinfo