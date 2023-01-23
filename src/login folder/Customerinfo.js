import React from "react";

function Customerinfo({ user, projects }) {
  const projectsNumber = projects
    .filter((project) => project.customer_id === user.id)
    .map((project) => (
      <h4 key={project.id} className="p-1 title text-center">
        {project.project_name}
      </h4>
    ))
    
    

  console.log(projectsNumber);
  return (
<div className="card">
  <div className="card-header">
    <h1 className="title text-center">Customer Info</h1>
  </div>
  <div className="card-body">
    <h3 className="title text-center">Name: {user.full_name}</h3>
    <h3 className="title text-center">Email: {user.email}</h3>
    <h3 className="title text-center text-muted">
      Phone Number: {user.phone_number}
    </h3>
    <h3 className="title text-center text-muted">
      You have {projectsNumber.length} projects your working on!
    </h3>
    <div className="list-group">
      {projectsNumber}
    </div>
  </div>
</div>
  );
}

export default Customerinfo;
