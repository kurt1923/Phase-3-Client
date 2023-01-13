import React from "react";

function Projectcard({ project, handleDelete }) {
  function deleteProject() {
    fetch(`http://127.0.0.1:9292/projects/${project.id}`, {
      method: "DELETE",
    });
    handleDelete(project.id);
  }

  console.log(project.id);
  return (
    <>
      <li>{project.project_name}</li>
      <button onClick={deleteProject}>Delete</button>
    </>
  );
}

export default Projectcard;
