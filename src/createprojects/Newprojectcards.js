import React from "react";
import Additems from "./Additems";

function Newprojectcards({ newProject, user, addNewProject }) {
  function submitNewProject(e) {
    const newProjectData = {
      project_name: newProject.project_name,
      project_description: newProject.project_description,
      labor_cost: newProject.labor_cost,
      customer_id: user.id,
    };
    e.preventDefault();
    fetch(`http://127.0.0.1:9292/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProjectData),
    })
      .then((r) => r.json())
      .then((data) => {
        addNewProject(data);
      });
    console.log(newProjectData);
  }
  return (
    <div>
      <form onSubmit={submitNewProject}>
        <h3>{newProject.project_name}</h3>
        <h5>{newProject.project_description}</h5>
        <button type="submit">Add</button>
      </form>
      <Additems newProject={newProject}/>
    </div>
  );
}

export default Newprojectcards;
