import React from "react";

function Projectcard({ project, handleDelete }) {
  
  function deleteProject() {
    fetch(`http://127.0.0.1:9292/projects/${project.id}`, {
      method: "DELETE",
    });
    handleDelete(project.id);
  }
  
  console.log(project.id);
  return <div>
    <h4>{project.project_name}</h4>
    <button onClick={deleteProject}>Delete</button>
    </div>;
}

export default Projectcard;
