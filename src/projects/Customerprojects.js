import React from "react";
import Projectcard from "./Projectcard";

function Customerprojects({
  user,
  noUsers,
  projects,
  handleDelete,
  editProject,
  setEditProject,
  projectPics
}) {
  
const userProj = projects.filter((project) => project.customer_id === user.id)


  const customerproj = userProj.map((project) =>
    user != null ? (
      <Projectcard
        key={project.id}
        project={project}
        handleDelete={handleDelete}
        user={user}
        editProject={editProject}
        setEditProject={setEditProject}
        projectPics={projectPics}
      />
    ) : null
  );
console.log(userProj)
  return (
    <div>
      {noUsers ? (
        <h2 className="p-5 title text-center">no users</h2>
      ) : (
        <h2 className="p-5 title text-center">{user.full_name}'s Projects</h2>
      )}
      <div className="container">
        {userProj.length === 0 ? (
          <h3 className="p-5 title text-center">
            No Projects. Go to Create Projects to get started!
          </h3>
        ) : (
          <div className="row">{customerproj}</div>
        )}
      </div>
    </div>
  );
}

export default Customerprojects;
