import React from "react";
import Projectcard from "./Projectcard";

function Customerprojects({
  user,
  noUsers,
  projects,
  handleDelete,
  editProject,
  setEditProject,
}) {
  
  console.log(user.id)
  console.log(projects);
 
  const customerproj = projects.map((project) => (
    project.customer_id > 0 && user != null ? (
    <Projectcard
      key={project.id}
      project={project}
      handleDelete={handleDelete}
      user={user}
      editProject={editProject}
      setEditProject={setEditProject}
    />
    ) : null
  ));

  return (
    <div>
    {noUsers ? <h2>no users</h2> : <h2>{user.full_name}'s Projects</h2>}
    <div className="container">
      
      {/* {user.projects.length === 0 ? (
        <h3>No Projects. Go to Create Projects to get started!</h3>) 
        : ( */}
        
        <div className="row">
          {customerproj}
        </div>
        {/* )} */}
    </div>
    </div>
  );
}

export default Customerprojects;
