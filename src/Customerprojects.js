import React, { useState } from "react";
import Projectcard from "./Projectcard";
import Createnewproject from "./Createnewproject";

function Customerprojects({ user, setUser}) {
  const [projects, setProjects] = useState(user.projects);

  
  function handleDelete(id) {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  }
  
  function addNewProject(addedProject) {
    const updatedProjects = [...projects, addedProject];
    setProjects(updatedProjects);
  }

  return (
    <div className="user_page">
      <h2>{user.full_name}'s Projects</h2>
      <h3>
        {user.email} | {user.phone_number}{" "}
      </h3>
      <h3>Projects</h3>
      {user === undefined || user.length === 0 ? (
        <h3>
          No matching email and passcode. Please verify email and passcode are
          correct or create new Account.
        </h3>
      ) : (
        <ul>
          {projects.map((project) => (
            <Projectcard
              key={project.id}
              project={project}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
      {/* <button>create project</button>  */}
      {/* btn directs to createnewprojectpage */}
      <Createnewproject user={user} addNewProject={addNewProject} />
    </div>
  );
}

export default Customerprojects;
